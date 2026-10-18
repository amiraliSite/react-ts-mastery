'use client'

import * as React from "react"
import { translations, type Lang, type TranslationKey, isLang } from "@/lib/i18n"

type Ctx = {
  lang: Lang
  setLang: (l: Lang) => void
  toggle: () => void
  t: (key: TranslationKey) => string
  dir: "ltr" | "rtl"
}

const LanguageContext = React.createContext<Ctx | null>(null)

const STORAGE_KEY = "rt-lang"

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = React.useState<Lang>("en")

  // Hydrate from localStorage on mount
  React.useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored && isLang(stored)) setLangState(stored)
    } catch {}
  }, [])

  // Sync <html lang dir> whenever lang changes
  React.useEffect(() => {
    const dir = lang === "fa" ? "rtl" : "ltr"
    document.documentElement.lang = lang
    document.documentElement.dir = dir
    // Also set a class on body for CSS hooks (e.g. font switching)
    document.body.classList.toggle("lang-fa", lang === "fa")
    document.body.classList.toggle("lang-en", lang === "en")
  }, [lang])

  const setLang = React.useCallback((l: Lang) => {
    setLangState(l)
    try { localStorage.setItem(STORAGE_KEY, l) } catch {}
  }, [])

  const toggle = React.useCallback(() => {
    setLangState((prev) => {
      const next = prev === "en" ? "fa" : "en"
      try { localStorage.setItem(STORAGE_KEY, next) } catch {}
      return next
    })
  }, [])

  const t = React.useCallback(
    (key: TranslationKey) => translations[lang][key] ?? translations.en[key] ?? key,
    [lang]
  )

  const dir = lang === "fa" ? "rtl" : "ltr"

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggle, t, dir }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang() {
  const ctx = React.useContext(LanguageContext)
  if (!ctx) throw new Error("useLang must be used inside <LanguageProvider>")
  return ctx
}
