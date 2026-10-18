'use client'

import { motion } from "framer-motion"
import { Code2 } from "lucide-react"
import { useLang } from "./language-provider"
import type { TranslationKey } from "@/lib/i18n"

const snippets: Array<{ titleKey: TranslationKey; lang: string; code: string }> = [
  {
    titleKey: "code.t1.title",
    lang: "tsx",
    code: `type ButtonProps = {
  variant?: "primary" | "ghost"
  size?: "sm" | "md" | "lg"
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  children: React.ReactNode
}

export function Button({
  variant = "primary",
  size = "md",
  onClick,
  children,
}: ButtonProps) {
  return (
    <button
      className={\`btn \${variant} \${size}\`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}`,
  },
  {
    titleKey: "code.t2.title",
    lang: "ts",
    code: `export function useLocalStorage<T>(
  key: string,
  initial: T
) {
  const [value, setValue] = useState<T>(() => {
    try {
      const raw = localStorage.getItem(key)
      return raw ? (JSON.parse(raw) as T) : initial
    } catch {
      return initial
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch {}
  }, [key, value])

  return [value, setValue] as const
}`,
  },
  {
    titleKey: "code.t3.title",
    lang: "ts",
    code: `type State =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "done"; data: User }
  | { status: "error"; message: string }

function render(s: State) {
  switch (s.status) {
    case "idle":    return <Placeholder />
    case "loading": return <Spinner />
    case "done":    return <Profile user={s.data} />
    case "error":   return <Error msg={s.message} />
  }
  // TS guarantees every case is handled.
}`,
  },
]

function colorize(code: string) {
  const tokens: Array<{ re: RegExp; cls: string }> = [
    { re: /(\/\/[^\n]*)/g, cls: "text-foreground/40 italic" },
    { re: /\b(import|export|from|return|const|let|function|type|as|try|catch|switch|case)\b/g, cls: "text-violet" },
    { re: /\b(useState|useEffect|useReducer|useRef|useCallback|useMemo)\b/g, cls: "text-accent" },
    { re: /\b(string|number|boolean|void|never|unknown|any|User)\b/g, cls: "text-yellow-300" },
    { re: /("[^"]*"|'[^']*'|`[^`]*`)/g, cls: "text-green-400" },
    { re: /\b(\d+)\b/g, cls: "text-orange-300" },
  ]
  const placeholders: string[] = []
  let result = code
  for (const { re, cls } of tokens) {
    result = result.replace(re, (m) => {
      const id = `__PH${placeholders.length}__`
      placeholders.push(`<span class="${cls}">${escapeHtml(m)}</span>`)
      return id
    })
  }
  result = escapeHtml(result)
  for (let i = placeholders.length - 1; i >= 0; i--) {
    result = result.replace(`__PH${i}__`, placeholders[i])
  }
  return result
}

function escapeHtml(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
}

export function CodeShowcase() {
  const { t } = useLang()

  return (
    <section id="code" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <span className="font-mono text-xs uppercase tracking-widest text-accent">
            {t("code.section")}
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl"
          >
            {t("code.title")}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          {snippets.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="overflow-hidden rounded-2xl border border-border/40 bg-card/60 backdrop-blur"
            >
              <div className="flex items-center justify-between border-b border-border/40 bg-card/40 px-4 py-2.5">
                <div className="flex items-center gap-2 text-xs">
                  <Code2 className="h-3.5 w-3.5 text-accent" />
                  <span className="font-mono text-foreground/70">{t(s.titleKey)}</span>
                </div>
                <span className="rounded bg-muted px-1.5 py-0.5 font-mono text-[10px] uppercase text-foreground/50">
                  {s.lang}
                </span>
              </div>
              <pre className="overflow-x-auto p-4 text-xs leading-relaxed" dir="ltr">
                <code
                  className="font-mono"
                  dangerouslySetInnerHTML={{ __html: colorize(s.code) }}
                />
              </pre>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
