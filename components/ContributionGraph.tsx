'use client'

import { useState } from 'react'
import type { ContributionCalendar } from '@/lib/github'

function getLevel(count: number): number {
  if (count === 0) return 0
  if (count <= 3) return 1
  if (count <= 8) return 2
  if (count <= 15) return 3
  return 4
}

const levelColors = [
  'bg-neutral-100',
  'bg-neutral-300',
  'bg-neutral-500',
  'bg-neutral-700',
  'bg-neutral-900',
]

// Square size and gap, sized so a full year fits the max-w-2xl column.
const CELL = 9
const GAP = 2

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const DAYS = ['', 'Mon', '', 'Wed', '', 'Fri', '']

export default function ContributionGraph({ calendar }: { calendar: ContributionCalendar }) {
  const [tooltip, setTooltip] = useState<{ text: string; x: number; y: number } | null>(null)

  const monthLabels: { label: string; index: number }[] = []
  let lastMonth = -1
  calendar.weeks.forEach((week, i) => {
    const d = week.contributionDays[0]
    if (d) {
      const m = new Date(d.date).getMonth()
      if (m !== lastMonth) {
        monthLabels.push({ label: MONTHS[m], index: i })
        lastMonth = m
      }
    }
  })

  return (
    <div className="relative">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm">
          <span className="font-semibold">
            {calendar.totalContributions.toLocaleString()}
          </span>{' '}
          contributions in the last year
        </h3>
        <a
          href="https://github.com/AamirAlam"
          target="_blank"
          rel="noopener noreferrer"
          className="link text-xs text-muted hover:text-foreground"
        >
          GitHub ↗
        </a>
      </div>

      <div className="overflow-x-auto pb-2">
        <div style={{ minWidth: 53 * (CELL + GAP) + 32 }}>
          {/* Month labels */}
          <div className="relative h-5 mb-1 ml-8">
            {monthLabels.map(({ label, index }) => (
              <span
                key={label + index}
                className="absolute text-[10px] text-muted"
                style={{ left: index * (CELL + GAP) }}
              >
                {label}
              </span>
            ))}
          </div>

          <div className="flex gap-0">
            {/* Day-of-week labels */}
            <div className="flex flex-col mr-2" style={{ gap: GAP }}>
              {DAYS.map((d, i) => (
                <div key={i} className="text-[10px] text-muted flex items-center" style={{ height: CELL }}>
                  {d}
                </div>
              ))}
            </div>

            {/* Contribution squares */}
            {calendar.weeks.map((week, wi) => (
              <div key={wi} className="flex flex-col" style={{ gap: GAP, marginRight: GAP }}>
                {Array.from({ length: 7 }).map((_, di) => {
                  const day = week.contributionDays[di]
                  if (!day) return <div key={di} style={{ width: CELL, height: CELL }} />
                  return (
                    <div
                      key={di}
                      className={`rounded-sm cursor-default transition-opacity hover:opacity-70 ${levelColors[getLevel(day.contributionCount)]}`}
                      style={{ width: CELL, height: CELL }}
                      onMouseEnter={(e) => {
                        const rect = (e.target as HTMLElement).getBoundingClientRect()
                        setTooltip({
                          text: `${day.contributionCount} contributions on ${day.date}`,
                          x: rect.left + rect.width / 2,
                          y: rect.top - 8,
                        })
                      }}
                      onMouseLeave={() => setTooltip(null)}
                    />
                  )
                })}
              </div>
            ))}
          </div>

          {/* Legend */}
          <div className="flex items-center justify-end gap-1.5 mt-3 text-[10px] text-muted">
            <span>Less</span>
            {[0, 1, 2, 3, 4].map((l) => (
              <div key={l} className={`rounded-sm ${levelColors[l]}`} style={{ width: CELL, height: CELL }} />
            ))}
            <span>More</span>
          </div>
        </div>
      </div>

      {/* Floating tooltip */}
      {tooltip && (
        <div
          className="fixed z-50 px-2.5 py-1.5 bg-foreground rounded-md text-xs text-white pointer-events-none"
          style={{ left: tooltip.x, top: tooltip.y, transform: 'translate(-50%, -100%)' }}
        >
          {tooltip.text}
        </div>
      )}
    </div>
  )
}
