'use client'

import * as React from "react"
import { motion } from "framer-motion"
import { Plus, Minus, RotateCcw } from "lucide-react"
import { useLang } from "../language-provider"

export function CounterDemo() {
  const { t } = useLang()
  const [count, setCount] = React.useState(0)
  const [step, setStep] = React.useState(1)

  const inc = React.useCallback(() => setCount((c) => c + step), [step])
  const dec = React.useCallback(() => setCount((c) => c - step), [step])
  const reset = React.useCallback(() => setCount(0), [])

  return (
    <div className="flex flex-col items-center gap-4 py-6">
      <motion.div
        key={count}
        initial={{ scale: 0.85, opacity: 0.6 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="font-mono text-5xl font-bold tabular-nums text-accent"
      >
        {count}
      </motion.div>

      <div className="flex items-center gap-2">
        <button onClick={dec} className="flex h-9 w-9 items-center justify-center rounded-full border border-border/60 hover:border-accent hover:text-accent">
          <Minus className="h-4 w-4" />
        </button>
        <button onClick={reset} className="rounded-full border border-border/60 px-3 py-2 text-xs text-foreground/70 hover:border-accent hover:text-accent">
          <RotateCcw className="inline h-3 w-3" /> {t("counter.reset")}
        </button>
        <button onClick={inc} className="flex h-9 w-9 items-center justify-center rounded-full border border-border/60 hover:border-accent hover:text-accent">
          <Plus className="h-4 w-4" />
        </button>
      </div>

      <label className="flex items-center gap-2 text-xs text-foreground/60">
        {t("counter.step")}:
        <input
          type="range"
          min={1}
          max={10}
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
          className="accent-[var(--accent)]"
        />
        <span className="font-mono w-6 text-accent">{step}</span>
      </label>
    </div>
  )
}
