'use client'

import * as React from "react"
import { motion } from "framer-motion"
import { resources } from "@/lib/curriculum"
import { ExternalLink } from "lucide-react"
import { useLang } from "./language-provider"

const categoryColor: Record<string, string> = {
  Docs: "text-cyan border-cyan/30 bg-cyan/10",
  Tools: "text-violet border-violet/30 bg-violet/10",
  Community: "text-green-400 border-green-400/30 bg-green-400/10",
}

export function Resources() {
  const { t, lang } = useLang()
  const [filter, setFilter] = React.useState<"all" | "docs" | "tools" | "community" | "All" | "Docs" | "Tools" | "Community">("All")
  const cats: Array<typeof filter> = ["All", "Docs", "Tools", "Community"]
  const filtered = filter === "All" ? resources : resources.filter((r) => r.category === filter)

  const catLabel: Record<string, string> = {
    Docs: t("resources.docs"),
    Tools: t("resources.tools"),
    Community: t("resources.community"),
  }

  return (
    <section id="resources" className="relative border-t border-border/40 bg-card/30 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-accent">
              {t("resources.section")}
            </span>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              {t("resources.title")}
            </h2>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`rounded-full px-3 py-1.5 text-xs transition-colors ${
                  filter === c ? "bg-accent text-accent-foreground" : "text-foreground/60 hover:text-foreground"
                }`}
              >
                {c === "All" ? t("resources.all") : catLabel[c as string]}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((r, i) => (
            <motion.a
              key={r.title}
              href={r.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group flex flex-col gap-2 rounded-2xl border border-border/40 bg-card/40 p-5 backdrop-blur transition-colors hover:border-accent/40 hover:bg-card/60"
            >
              <div className="flex items-center justify-between">
                <span className={`rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${categoryColor[r.category]}`}>
                  {catLabel[r.category]}
                </span>
                <ExternalLink className="h-3.5 w-3.5 text-foreground/40 transition-transform group-hover:-translate-y-0.5 group-hover:text-accent rtl:group-hover:translate-x-0.5" />
              </div>
              <h3 className="font-display text-base font-bold">{lang === "fa" ? r.faTitle : r.title}</h3>
              <p className="text-sm text-foreground/60">{lang === "fa" ? r.faDesc : r.desc}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
