'use client'

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { RefreshCw, AlertCircle } from "lucide-react"
import { useLang } from "../language-provider"

type State =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "done"; data: { name: string; email: string; site: string } }
  | { status: "error"; message: string }

const fakeUser = {
  name: "AmirAli",
  email: "amir@rt-mastery.dev",
  site: "amiralisite.github.io/react-ts-mastery",
}

export function FetchDemo() {
  const { t } = useLang()
  const [state, setState] = React.useState<State>({ status: "idle" })

  const load = React.useCallback(() => {
    const ctrl = new AbortController()
    setState({ status: "loading" })

    const timer = setTimeout(() => {
      if (ctrl.signal.aborted) return
      if (Math.random() < 0.15) {
        setState({ status: "error", message: t("fetch.errorMessage") })
        return
      }
      setState({ status: "done", data: fakeUser })
    }, 800)

    return () => {
      ctrl.abort()
      clearTimeout(timer)
    }
  }, [t])

  const statusLabel = () => {
    switch (state.status) {
      case "idle": return t("fetch.idle")
      case "loading": return t("fetch.loading")
      case "done": return t("fetch.resolved")
      case "error": return t("fetch.failed")
    }
  }

  return (
    <div className="flex flex-col gap-3 py-4">
      <div className="flex items-center justify-between">
        <span className="font-mono text-xs text-foreground/50">{statusLabel()}</span>
        <button
          onClick={load}
          disabled={state.status === "loading"}
          className="inline-flex items-center gap-2 rounded-full border border-border/60 px-3 py-1.5 text-xs hover:border-accent hover:text-accent disabled:opacity-50"
        >
          <RefreshCw className={`h-3 w-3 ${state.status === "loading" ? "animate-spin" : ""}`} />
          {t("fetch.button")}
        </button>
      </div>

      <div className="min-h-[80px] rounded-lg border border-border/40 bg-background/60 p-3">
        <AnimatePresence mode="wait">
          {state.status === "idle" && (
            <motion.div key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-xs text-foreground/40">
              {t("fetch.idleHint")}
            </motion.div>
          )}
          {state.status === "loading" && (
            <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-2">
              <div className="h-3 w-1/2 animate-pulse rounded bg-muted" />
              <div className="h-3 w-2/3 animate-pulse rounded bg-muted" />
              <div className="h-3 w-1/3 animate-pulse rounded bg-muted" />
            </motion.div>
          )}
          {state.status === "done" && (
            <motion.div key="done" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="space-y-1.5 text-sm" dir="ltr">
              <div><span className="text-foreground/50">{t("fetch.name")}:</span> <span className="font-mono text-accent">{state.data.name}</span></div>
              <div><span className="text-foreground/50">{t("fetch.email")}:</span> <span className="font-mono">{state.data.email}</span></div>
              <div><span className="text-foreground/50">{t("fetch.site")}:</span> <span className="font-mono">{state.data.site}</span></div>
            </motion.div>
          )}
          {state.status === "error" && (
            <motion.div key="err" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2 text-sm text-destructive">
              <AlertCircle className="h-4 w-4" />
              {state.message}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
