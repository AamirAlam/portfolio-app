'use client'

import { useState } from 'react'

interface ContributionDay {
  contributionCount: number
  date: string
}

interface ContributionCalendar {
  totalContributions: number
  weeks: { contributionDays: ContributionDay[] }[]
}

function getLevel(count: number): number {
  if (count === 0) return 0
  if (count <= 3) return 1
  if (count <= 8) return 2
  if (count <= 15) return 3
  return 4
}

const levelColors = [
  'bg-[#161b22]',
  'bg-violet-950',
  'bg-violet-800',
  'bg-violet-600',
  'bg-violet-400',
]

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const DAYS = ['', 'Mon', '', 'Wed', '', 'Fri', '']

export default function ContributionGraph({ calendar }: { calendar: ContributionCalendar | null }) {
  const [tooltip, setTooltip] = useState<{ text: string; x: number; y: number } | null>(null)

  if (!calendar) {
    return (
      <div className="card p-6 text-center">
        <p className="text-slate-600 text-sm font-mono">
          Add <code className="text-indigo-400">GITHUB_TOKEN</code> to .env.local to enable contribution graph
        </p>
      </div>
    )
  }

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
    <div className="card p-6 relative">
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-slate-200 font-medium text-sm">
          <span className="text-violet-400 font-semibold">
            {calendar.totalContributions.toLocaleString()}
          </span>{' '}
          contributions in the last year
        </h3>
        <a
          href="https://github.com/AamirAlam"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-slate-600 hover:text-slate-400 transition-colors font-mono"
        >
          github.com/AamirAlam →
        </a>
      </div>

      <div className="overflow-x-auto pb-2">
        <div style={{ minWidth: 680 }}>
          {/* Month labels */}
          <div className="relative h-5 mb-1 ml-8">
            {monthLabels.map(({ label, index }) => (
              <span
                key={label + index}
                className="absolute text-[10px] text-slate-600 font-mono"
                style={{ left: index * 13 }}
              >
                {label}
              </span>
            ))}
          </div>

          <div className="flex gap-0">
            {/* Day-of-week labels */}
            <div className="flex flex-col gap-[3px] mr-2">
              {DAYS.map((d, i) => (
                <div key={i} className="text-[10px] text-slate-700 font-mono h-[10px] flex items-center">
                  {d}
                </div>
              ))}
            </div>

            {/* Contribution squares */}
            {calendar.weeks.map((week, wi) => (
              <div key={wi} className="flex flex-col gap-[3px] mr-[3px]">
                {Array.from({ length: 7 }).map((_, di) => {
                  const day = week.contributionDays[di]
                  if (!day) return <div key={di} style={{ width: 10, height: 10 }} />
                  return (
                    <div
                      key={di}
                      className={`rounded-sm cursor-default transition-opacity hover:opacity-70 ${levelColors[getLevel(day.contributionCount)]}`}
                      style={{ width: 10, height: 10 }}
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
          <div className="flex items-center justify-end gap-1.5 mt-3 text-[10px] text-slate-600 font-mono">
            <span>Less</span>
            {[0, 1, 2, 3, 4].map((l) => (
              <div key={l} className={`rounded-sm ${levelColors[l]}`} style={{ width: 10, height: 10 }} />
            ))}
            <span>More</span>
          </div>
        </div>
      </div>

      {/* Floating tooltip */}
      {tooltip && (
        <div
          className="fixed z-50 px-2.5 py-1.5 bg-[#1a1a2e] border border-indigo-500/20 rounded-md text-xs text-slate-300 font-mono pointer-events-none"
          style={{ left: tooltip.x, top: tooltip.y, transform: 'translate(-50%, -100%)' }}
        >
          {tooltip.text}
        </div>
      )}
    </div>
  )
}
