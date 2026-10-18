'use client'

import * as React from "react"
import { motion } from "framer-motion"
import { useLang } from "./language-provider"
import { langMeta } from "@/lib/i18n"

export function LanguageToggle() {
  const { lang, toggle } = useLang()
  const next = lang === "en" ? "fa" : "en"

  return (
    <button
      onClick={toggle}
      className="relative inline-flex h-9 items-center justify-center gap-1 rounded-full border border-border/60 px-2.5 text-foreground transition-colors hover:border-accent hover:text-accent"
      aria-label={`Switch to ${next.toUpperCase()}`}
      title={next === "fa" ? "فارسی" : "English"}
    >
      <motion.span
        key={lang}
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 8 }}
        transition={{ duration: 0.2 }}
        className="font-mono text-xs font-bold"
      >
        {langMeta[lang].label}
      </motion.span>
      <span className="text-foreground/40">/</span>
      <span className="font-mono text-[10px] font-bold text-foreground/40">
        {langMeta[next].label}
      </span>
    </button>
  )
}
