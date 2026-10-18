'use client'

import { useLang } from "./language-provider"

export function Marquee() {
  const { t } = useLang()
  const items = [
    t("marquee.interactive"),
    t("marquee.typeSafe"),
    t("marquee.handsOn"),
    t("marquee.progress"),
    t("marquee.freeForever"),
    t("marquee.openSource"),
    t("marquee.realCode"),
    t("marquee.noLogin"),
  ]
  const loop = [...items, ...items]
  return (
    <section className="relative border-y border-border/40 bg-card/30 py-4">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-background to-transparent" />
        <div className="marquee gap-12">
          {loop.map((text, i) => (
            <div key={i} className="flex items-center gap-12 whitespace-nowrap font-mono text-sm uppercase tracking-widest text-foreground/60">
              <span>{text}</span>
              <span className="text-accent">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
