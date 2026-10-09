'use client'

import {
  useEffect,
  useRef,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from 'react'

interface RevealProps {
  as?: ElementType
  delay?: number
  className?: string
  children: ReactNode
}

/**
 * Wraps server-rendered children in a scroll-reveal container.
 *
 * Only this wrapper hydrates; the children stay server output. The hidden
 * state lives in `.js .section-fade` (globals.css), so it applies only once
 * the `js` class is on <html> — which the inline script in layout.tsx sets.
 * With JavaScript disabled the class is never added and the content stays
 * visible. `prefers-reduced-motion` disables the transform/transition there.
 */
export default function Reveal({
  as: Tag = 'div',
  delay = 0,
  className = '',
  children,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          observer.disconnect()
        }
      },
      { threshold: 0.15 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const style: CSSProperties | undefined = delay
    ? { transitionDelay: `${delay}ms` }
    : undefined

  return (
    <Tag ref={ref} className={`section-fade ${className}`.trim()} style={style}>
      {children}
    </Tag>
  )
}
