'use client'

import * as React from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { chapters, type Difficulty } from "@/lib/curriculum"
import { ChevronDown, Clock, BookOpen, Check, ArrowRight } from "lucide-react"
import { useLang } from "./language-provider"
import { ChapterModal } from "./chapter-modal"

const diffColor: Record<Difficulty, string> = {
  Beginner: "text-green-400 border-green-400/30 bg-green-400/10",
  Intermediate: "text-yellow-300 border-yellow-300/30 bg-yellow-300/10",
  Advanced: "text-accent border-accent/30 bg-accent/10",
}

const diffFa: Record<Difficulty, string> = {
  Beginner: "مبتدی",
  Intermediate: "متوسط",
  Advanced: "پیشرفته",
}

function useProgress() {
  const [done, setDone] = React.useState<Set<string>>(new Set())
  React.useEffect(() => {
    try {
      const raw = localStorage.getItem("rt-progress")
      if (raw) setDone(new Set(JSON.parse(raw)))
    } catch {}
  }, [])
  const toggle = (id: string) => {
    setDone((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      try { localStorage.setItem("rt-progress", JSON.stringify([...next])) } catch {}
      return next
    })
  }
  return { done, toggle }
}

function ChapterCard({
  ch,
  i,
  onOpen,
}: {
  ch: typeof chapters[number]
  i: number
  onOpen: (id: string) => void
}) {
  const { lang, t } = useLang()
  const ref = React.useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })
  const [open, setOpen] = React.useState(false)
  const { done, toggle } = useProgress()
  const isDone = done.has(ch.id)
  const title = lang === "fa" ? ch.faTitle : ch.title
  const blurb = lang === "fa" ? ch.faBlurb : ch.blurb
  const diffLabel = lang === "fa" ? diffFa[ch.difficulty] : ch.difficulty

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative overflow-hidden rounded-3xl border bg-card/40 backdrop-blur transition-colors ${
        isDone ? "border-accent/40" : "border-border/40 hover:border-accent/40"
      }`}
    >
      <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100 rtl:-right-auto rtl:-left-10" />

      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center gap-4 p-5 text-left sm:p-6 rtl:text-right"
      >
        <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl font-mono text-lg font-bold transition-colors ${
          isDone ? "bg-accent text-accent-foreground" : "bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground"
        }`}>
          {isDone ? <Check className="h-5 w-5" /> : ch.num}
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-display text-lg font-bold sm:text-xl">{title}</h3>
            <span className={`rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${diffColor[ch.difficulty]}`}>
              {diffLabel}
            </span>
          </div>
          <p className="mt-1 line-clamp-1 text-sm text-foreground/60 sm:line-clamp-2">{blurb}</p>

          <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-foreground/50">
            <span className="inline-flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {ch.duration}
            </span>
            <span className="inline-flex items-center gap-1">
              <BookOpen className="h-3 w-3" />
              {ch.lessons} {t("path.lessons")}
            </span>
          </div>
        </div>

        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.25 }} className="text-foreground/50">
          <ChevronDown className="h-5 w-5" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-border/40"
          >
            <div className="p-5 sm:p-6">
              <div className="mb-3 font-mono text-[10px] uppercase tracking-widest text-foreground/50">
                {t("path.whatYouLearn")}
              </div>
              <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {ch.topics.map((topic, ti) => (
                  <motion.li
                    key={ti}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * ti }}
                    className="flex items-center gap-2 text-sm text-foreground/80"
                  >
                    <span className="text-accent">▸</span>
                    {topic}
                  </motion.li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap items-center gap-2">
                {/* Start chapter — opens the modal */}
                <button
                  onClick={() => onOpen(ch.id)}
                  className="group inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-xs font-semibold text-accent-foreground hover:gap-3"
                >
                  {lang === "fa" ? "شروع فصل" : "Start chapter"}
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
                </button>

                <button
                  onClick={() => toggle(ch.id)}
                  className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold transition-colors ${
                    isDone
                      ? "border-accent bg-accent text-accent-foreground"
                      : "border-border/60 hover:border-accent hover:text-accent"
                  }`}
                >
                  {isDone ? (
                    <>
                      <Check className="h-3.5 w-3.5" /> {t("path.completedBtn")}
                    </>
                  ) : (
                    <>
                      <span className="h-3 w-3 rounded-full border border-current" /> {t("path.markDone")}
                    </>
                  )}
                </button>

                <a href="#demos" className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium text-foreground/70 hover:text-accent">
                  {t("path.seeDemo")}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  )
}

export function LearningPath() {
  const { t } = useLang()
  const { done } = useProgress()
  const [modalChapterId, setModalChapterId] = React.useState<string | null>(null)
  const pct = Math.round((done.size / chapters.length) * 100)

  return (
    <section id="path" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-mono text-xs uppercase tracking-widest text-accent"
            >
              {t("path.section")}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl"
            >
              {t("path.title1")}
              <br />
              <span className="text-foreground/40">{t("path.title2")}</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-3 rounded-2xl border border-border/40 bg-card/40 px-4 py-3 backdrop-blur"
          >
            <div className="relative h-10 w-10">
              <svg viewBox="0 0 36 36" className="h-full w-full -rotate-90">
                <circle cx="18" cy="18" r="15" fill="none" stroke="currentColor" strokeWidth="3" className="text-muted-foreground/20" />
                <circle
                  cx="18" cy="18" r="15" fill="none" stroke="currentColor" strokeWidth="3"
                  strokeDasharray={`${(pct / 100) * 94.2} 94.2`}
                  className="text-accent transition-all duration-500"
                  strokeLinecap="round"
                />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold">
                {pct}%
              </span>
            </div>
            <div className="text-xs">
              <div className="font-bold text-foreground">{done.size}/{chapters.length}</div>
              <div className="text-foreground/50">{t("path.completed")}</div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-3">
          {chapters.map((ch, i) => (
            <ChapterCard key={ch.id} ch={ch} i={i} onOpen={setModalChapterId} />
          ))}
        </div>
      </div>

      <ChapterModal chapterId={modalChapterId} onClose={() => setModalChapterId(null)} />
    </section>
  )
}
