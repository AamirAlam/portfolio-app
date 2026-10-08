import { describe, it, expect } from 'vitest'
import { selectRepos } from './github'

// Minimal raw-repo factory with sensible defaults; override per case.
function raw(over: Partial<Record<string, unknown>> = {}) {
  return {
    name: 'repo',
    description: 'a real project',
    html_url: 'https://github.com/AamirAlam/repo',
    homepage: null,
    language: 'TypeScript',
    stargazers_count: 0,
    pushed_at: '2026-01-01T00:00:00Z',
    topics: [],
    fork: false,
    archived: false,
    ...over,
  }
}

const opts = { exclude: ['AamirAlam', 'portfolio-app'], featured: [], limit: 6 }

describe('selectRepos', () => {
  it('returns [] for non-array input', () => {
    expect(selectRepos(null, opts)).toEqual([])
    expect(selectRepos(undefined, opts)).toEqual([])
    expect(selectRepos({}, opts)).toEqual([])
    expect(selectRepos('nope', opts)).toEqual([])
  })

  it('drops forks, archived, description-less and excluded repos', () => {
    const input = [
      raw({ name: 'keep' }),
      raw({ name: 'a-fork', fork: true }),
      raw({ name: 'old', archived: true }),
      raw({ name: 'no-desc', description: null }),
      raw({ name: 'no-desc-empty', description: '' }),
      raw({ name: 'portfolio-app' }),
      raw({ name: 'AamirAlam' }),
    ]
    const result = selectRepos(input, opts)
    expect(result.map((r) => r.name)).toEqual(['keep'])
  })

  it('pins featured names first in allowlist order', () => {
    const input = [
      raw({ name: 'alpha', pushed_at: '2026-05-01T00:00:00Z' }),
      raw({ name: 'beta', pushed_at: '2026-04-01T00:00:00Z' }),
      raw({ name: 'gamma', pushed_at: '2026-03-01T00:00:00Z' }),
    ]
    const result = selectRepos(input, { ...opts, featured: ['gamma', 'beta'] })
    expect(result.map((r) => r.name)).toEqual(['gamma', 'beta', 'alpha'])
  })

  it('orders non-featured repos by pushed_at descending', () => {
    const input = [
      raw({ name: 'older', pushed_at: '2025-01-01T00:00:00Z' }),
      raw({ name: 'newest', pushed_at: '2026-06-01T00:00:00Z' }),
      raw({ name: 'middle', pushed_at: '2026-02-01T00:00:00Z' }),
    ]
    const result = selectRepos(input, opts)
    expect(result.map((r) => r.name)).toEqual(['newest', 'middle', 'older'])
  })

  it('respects the limit', () => {
    const input = Array.from({ length: 10 }, (_, i) =>
      raw({ name: `repo-${i}`, pushed_at: `2026-01-${String(i + 1).padStart(2, '0')}T00:00:00Z` })
    )
    const result = selectRepos(input, { ...opts, limit: 3 })
    expect(result).toHaveLength(3)
  })

  it('maps raw repos onto the Repo shape', () => {
    const input = [
      raw({
        name: 'context-sanitizer',
        description: 'SLM data pipeline',
        html_url: 'https://github.com/AamirAlam/context-sanitizer',
        homepage: 'https://example.com',
        language: 'Python',
        stargazers_count: 12,
        pushed_at: '2026-06-01T00:00:00Z',
        topics: ['llm', 'pipeline'],
      }),
    ]
    expect(selectRepos(input, opts)[0]).toEqual({
      name: 'context-sanitizer',
      description: 'SLM data pipeline',
      url: 'https://github.com/AamirAlam/context-sanitizer',
      homepage: 'https://example.com',
      language: 'Python',
      stars: 12,
      pushedAt: '2026-06-01T00:00:00Z',
      topics: ['llm', 'pipeline'],
    })
  })
})
