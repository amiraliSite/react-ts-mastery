'use client'

import * as React from "react"
import { motion } from "framer-motion"
import { Heart, Zap, Coffee } from "lucide-react"
import { useLang } from "../language-provider"

type Theme = "cyan" | "violet" | "ember"
type Action = { type: "set_theme"; theme: Theme } | { type: "toggle_like" } | { type: "brew" }

const themes: Record<Theme, { color: string; labelKey: "context.electric" | "context.cosmic" | "context.warm"; icon: typeof Zap }> = {
  cyan: { color: "oklch(0.78 0.16 200)", labelKey: "context.electric", icon: Zap },
  violet: { color: "oklch(0.7 0.18 280)", labelKey: "context.cosmic", icon: Heart },
  ember: { color: "oklch(0.7 0.18 50)", labelKey: "context.warm", icon: Coffee },
}

function reducer(state: { theme: Theme; likes: number; brews: number }, action: Action) {
  switch (action.type) {
    case "set_theme":
      return { ...state, theme: action.theme }
    case "toggle_like":
      return { ...state, likes: state.likes + 1 }
    case "brew":
      return { ...state, brews: state.brews + 1 }
  }
}

export function ContextDemo() {
  const { t } = useLang()
  const [state, dispatch] = React.useReducer(reducer, { theme: "cyan", likes: 0, brews: 0 })
  const tInfo = themes[state.theme]
  const Icon = tInfo.icon

  return (
    <div className="flex flex-col gap-4 py-4">
      <div
        className="relative flex h-24 items-center justify-center overflow-hidden rounded-xl border border-border/40"
        style={{ background: `radial-gradient(circle at center, ${tInfo.color}40 0%, transparent 70%)` }}
      >
        <motion.div
          key={state.theme}
          initial={{ scale: 0.6, rotate: -10, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <Icon className="h-10 w-10" style={{ color: tInfo.color }} />
        </motion.div>
        <span className="absolute bottom-2 right-2 font-mono text-[10px] uppercase tracking-widest text-foreground/50 rtl:right-auto rtl:left-2">
          {t(tInfo.labelKey)}
        </span>
      </div>

      <div className="flex items-center gap-2">
        <span className="font-mono text-xs text-foreground/50">{t("context.theme")}:</span>
        {(Object.keys(themes) as Theme[]).map((key) => (
          <button
            key={key}
            onClick={() => dispatch({ type: "set_theme", theme: key })}
            className={`flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs transition-colors ${
              state.theme === key ? "border-accent text-accent" : "border-border/60 text-foreground/60"
            }`}
          >
            <span className="h-2 w-2 rounded-full" style={{ background: themes[key].color }} />
            {t(themes[key].labelKey)}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={() => dispatch({ type: "toggle_like" })}
          className="inline-flex items-center gap-2 rounded-full border border-border/60 px-3 py-1.5 text-xs hover:border-accent hover:text-accent"
        >
          <Heart className="h-3.5 w-3.5" /> {t("context.like")} ({state.likes})
        </button>
        <button
          onClick={() => dispatch({ type: "brew" })}
          className="inline-flex items-center gap-2 rounded-full border border-border/60 px-3 py-1.5 text-xs hover:border-accent hover:text-accent"
        >
          <Coffee className="h-3.5 w-3.5" /> {t("context.brew")} ({state.brews})
        </button>
      </div>
    </div>
  )
}
