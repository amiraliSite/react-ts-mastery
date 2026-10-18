'use client'

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ArrowRight, BookOpen, Lightbulb, Sparkles } from "lucide-react"
import { useLang } from "./language-provider"
import { chapters } from "@/lib/curriculum"
import { chapterContents, type Section, type CodeBlock } from "@/lib/chapter-content"

// Tiny syntax highlighter (same as code-showcase)
const TOKENS: Array<{ re: RegExp; cls: string }> = [
  { re: /(\/\/[^\n]*)/g, cls: "text-foreground/40 italic" },
  { re: /\b(import|export|from|return|const|let|function|type|as|try|catch|switch|case|if|else|await|async|new|class|extends|interface|enum)\b/g, cls: "text-violet" },
  { re: /\b(useState|useEffect|useReducer|useRef|useCallback|useMemo|useContext|createContext|forwardRef|lazy|Suspense|memo)\b/g, cls: "text-accent" },
  { re: /\b(string|number|boolean|void|never|unknown|any|User|Promise|ReactNode|ReactElement|ElementType|Dispatch)\b/g, cls: "text-yellow-300" },
  { re: /("[^"]*"|'[^']*'|`[^`]*`)/g, cls: "text-green-400" },
  { re: /\b(\d+)\b/g, cls: "text-orange-300" },
]

function escapeHtml(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
}

function highlight(code: string) {
  const ph: string[] = []
  let out = code
  for (const { re, cls } of TOKENS) {
    out = out.replace(re, (m) => {
      const id = `__PH${ph.length}__`
      ph.push(`<span class="${cls}">${escapeHtml(m)}</span>`)
      return id
    })
  }
  out = escapeHtml(out)
  for (let i = ph.length - 1; i >= 0; i--) {
    out = out.replace(`__PH${i}__`, ph[i])
  }
  return out
}

function CodeBlockView({ block }: { block: CodeBlock }) {
  return (
    <div className="my-4 overflow-hidden rounded-xl border border-border/40 bg-card/60 backdrop-blur">
      <div className="flex items-center justify-between border-b border-border/40 bg-card/40 px-3 py-1.5">
        <span className="font-mono text-[10px] uppercase tracking-widest text-foreground/50">
          {block.lang}
        </span>
        <span className="font-mono text-[10px] text-foreground/30">code</span>
      </div>
      <pre className="overflow-x-auto p-3 text-xs leading-relaxed sm:text-sm" dir="ltr">
        <code
          className="font-mono"
          dangerouslySetInnerHTML={{ __html: highlight(block.code) }}
        />
      </pre>
    </div>
  )
}

function SectionView({ section, idx }: { section: Section; idx: number }) {
  const { lang } = useLang()
  const s = section[lang]
  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: idx * 0.05, duration: 0.3 }}
      className="mb-7"
    >
      <h3 className="mb-2 font-display text-lg font-bold sm:text-xl">{s.heading}</h3>
      {s.body?.map((p, i) => (
        <p key={i} className="mb-2 text-sm leading-relaxed text-foreground/80 sm:text-base">
          {p}
        </p>
      ))}
      {s.code && <CodeBlockView block={s.code} />}
      {s.bullets && (
        <ul className="mt-3 space-y-1.5">
          {s.bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
              <span className="mt-1 text-accent">▸</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      )}
    </motion.section>
  )
}

export function ChapterModal({ chapterId, onClose }: { chapterId: string | null; onClose: () => void }) {
  const { lang, t } = useLang()

  const ch = chapterId ? chapters.find((c) => c.id === chapterId) : null
  const content = chapterId ? chapterContents[chapterId] : null

  // Esc to close
  React.useEffect(() => {
    if (!chapterId) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handler)
    // Lock body scroll
    document.body.style.overflow = "hidden"
    return () => {
      window.removeEventListener("keydown", handler)
      document.body.style.overflow = ""
    }
  }, [chapterId, onClose])

  return (
    <AnimatePresence>
      {ch && content && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[70] flex items-end justify-center sm:items-center"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-background/80 backdrop-blur-md" />
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-t-3xl border border-border/40 bg-card/95 backdrop-blur-xl shadow-2xl sm:rounded-3xl"
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-3 border-b border-border/40 bg-card/60 p-5 sm:p-6">
              <div className="flex items-start gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
                  <span className="font-mono text-base font-bold">{ch.num}</span>
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-foreground/50">
                    {t("path.section")} · Chapter {ch.num}
                  </div>
                  <h2 className="font-display text-xl font-bold sm:text-2xl">
                    {lang === "fa" ? ch.faTitle : ch.title}
                  </h2>
                  <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-foreground/50">
                    <span className="inline-flex items-center gap-1">
                      <BookOpen className="h-3 w-3" />
                      {ch.lessons} {t("path.lessons")}
                    </span>
                    <span>·</span>
                    <span>{ch.duration}</span>
                  </div>
                </div>
              </div>
              <button
                onClick={onClose}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border/60 text-foreground/70 hover:border-accent hover:text-accent"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Body */}
            <div className="flex-1 overflow-y-auto p-5 sm:p-8">
              {/* Intro */}
              <div className="mb-6 inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-accent">
                <Sparkles className="h-3 w-3" />
                Intro
              </div>
              <SectionView section={content.intro} idx={0} />

              {/* Lessons */}
              <div className="mb-4 mt-8 inline-flex items-center gap-1.5 rounded-full bg-violet/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-violet">
                <BookOpen className="h-3 w-3" />
                {lang === "fa" ? "درس‌ها" : "Lessons"}
              </div>
              {content.lessons.map((s, i) => (
                <SectionView key={i} section={s} idx={i + 1} />
              ))}

              {/* Takeaway */}
              <div className="mt-8 inline-flex items-center gap-1.5 rounded-full bg-yellow-400/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-yellow-300">
                <Lightbulb className="h-3 w-3" />
                {lang === "fa" ? "نکات کلیدی" : "Takeaways"}
              </div>
              <SectionView section={content.takeaway} idx={content.lessons.length + 1} />

              {/* Footer CTA */}
              <div className="mt-8 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-border/40 bg-card/60 p-4">
                <span className="text-sm text-foreground/60">
                  {lang === "fa" ? "آماده‌ای برای فصل بعد؟" : "Ready for the next chapter?"}
                </span>
                <a
                  href="#path"
                  onClick={onClose}
                  className="group inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-xs font-semibold text-accent-foreground hover:gap-3"
                >
                  {lang === "fa" ? "بازگشت به فهرست" : "Back to chapters"}
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
