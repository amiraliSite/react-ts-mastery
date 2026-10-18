'use client'

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { CounterDemo } from "./demos/counter-demo"
import { TodoDemo } from "./demos/todo-demo"
import { FetchDemo } from "./demos/fetch-demo"
import { ContextDemo } from "./demos/context-demo"
import { useLang } from "./language-provider"
import type { TranslationKey } from "@/lib/i18n"

type DemoKey = "counter" | "todo" | "fetch" | "context"

export function Demos() {
  const { t } = useLang()
  const [active, setActive] = React.useState<DemoKey>("counter")

  const DEMOS: Array<{
    key: DemoKey
    titleKey: TranslationKey
    descKey: TranslationKey
    hooks: string[]
    Component: React.ComponentType
  }> = [
    { key: "counter", titleKey: "demos.counter.title", descKey: "demos.counter.desc", hooks: ["useState", "useCallback"], Component: CounterDemo },
    { key: "todo", titleKey: "demos.todo.title", descKey: "demos.todo.desc", hooks: ["useState", "useRef", "AnimatePresence"], Component: TodoDemo },
    { key: "fetch", titleKey: "demos.fetch.title", descKey: "demos.fetch.desc", hooks: ["useEffect", "useCallback", "discriminated union"], Component: FetchDemo },
    { key: "context", titleKey: "demos.context.title", descKey: "demos.context.desc", hooks: ["useReducer", "discriminated union"], Component: ContextDemo },
  ]

  const current = DEMOS.find((d) => d.key === active)!
  const Demo = current.Component

  return (
    <section id="demos" className="relative border-y border-border/40 bg-card/30 py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/3 top-1/4 h-72 w-72 rounded-full bg-accent/10 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <span className="font-mono text-xs uppercase tracking-widest text-accent">
            {t("demos.section")}
          </span>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            {t("demos.title")}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-foreground/60">
            {t("demos.desc")}
          </p>
        </div>

        <div className="mb-6 flex flex-wrap justify-center gap-2">
          {DEMOS.map((d) => (
            <button
              key={d.key}
              onClick={() => setActive(d.key)}
              className={`relative rounded-full px-4 py-2 text-sm transition-colors ${
                active === d.key ? "text-accent-foreground" : "text-foreground/70 hover:text-foreground"
              }`}
            >
              {active === d.key && (
                <motion.span
                  layoutId="active-demo"
                  className="absolute inset-0 rounded-full bg-accent"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">{t(d.titleKey)}</span>
            </button>
          ))}
        </div>

        <div className="overflow-hidden rounded-3xl border border-border/40 bg-card/60 backdrop-blur">
          <div className="flex flex-col md:flex-row">
            <div className="flex-1 border-b border-border/40 p-6 sm:p-8 md:border-b-0 md:border-s-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                >
                  <Demo />
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="md:w-80 md:border-s md:border-border/40 p-6 sm:p-8 rtl:md:border-s-0 rtl:md:border-e">
              <h3 className="font-display text-lg font-bold">{t(current.titleKey)}</h3>
              <p className="mt-1 text-sm text-foreground/60">{t(current.descKey)}</p>

              <div className="mt-4 border-t border-border/40 pt-4">
                <div className="mb-2 font-mono text-[10px] uppercase tracking-widest text-foreground/50">
                  {t("demos.hooksUsed")}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {current.hooks.map((h) => (
                    <span key={h} className="rounded-full bg-accent/10 px-2 py-0.5 font-mono text-[10px] text-accent">
                      {h}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href="https://github.com/amiraliSite/react-ts-mastery/tree/main/src/components/site/demos"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-block text-xs text-foreground/60 underline-offset-4 hover:text-accent hover:underline"
              >
                {t("demos.viewSource")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
