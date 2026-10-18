'use client'

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Trash2, Check } from "lucide-react"
import { useLang } from "../language-provider"

type Todo = { id: number; text: string; done: boolean }
type Filter = "all" | "active" | "done"

export function TodoDemo() {
  const { t } = useLang()
  const [todos, setTodos] = React.useState<Todo[]>([
    { id: 1, text: t("hero.stat.chapters") === "Chapters" ? "Learn useState" : "یادگیری useState", done: true },
    { id: 2, text: t("hero.stat.chapters") === "Chapters" ? "Try useEffect" : "امتحان useEffect", done: false },
    { id: 3, text: t("hero.stat.chapters") === "Chapters" ? "Build a custom hook" : "ساختن یه هوک سفارشی", done: false },
  ])
  const [text, setText] = React.useState("")
  const [filter, setFilter] = React.useState<Filter>("all")
  const nextId = React.useRef(4)

  const add = () => {
    const v = text.trim()
    if (!v) return
    setTodos((prev) => [...prev, { id: nextId.current++, text: v, done: false }])
    setText("")
  }

  const toggle = (id: number) =>
    setTodos((prev) => prev.map((td) => (td.id === id ? { ...td, done: !td.done } : td)))

  const remove = (id: number) =>
    setTodos((prev) => prev.filter((td) => td.id !== id))

  const filtered = todos.filter((td) =>
    filter === "all" ? true : filter === "active" ? !td.done : td.done
  )

  const filterLabels: Record<Filter, string> = {
    all: t("todo.all"),
    active: t("todo.active"),
    done: t("todo.done"),
  }

  return (
    <div className="flex flex-col gap-3 py-4">
      <div className="flex gap-2">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && add()}
          placeholder={t("todo.placeholder")}
          className="h-9 flex-1 rounded-lg border border-border/60 bg-background/80 px-3 text-sm outline-none focus:border-accent"
        />
        <button onClick={add} className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground hover:bg-accent/90">
          <Plus className="h-4 w-4" />
        </button>
      </div>

      <div className="flex items-center gap-1 text-xs">
        {(["all", "active", "done"] as Filter[]).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`rounded-full px-3 py-1 transition-colors ${
              filter === f ? "bg-accent text-accent-foreground" : "text-foreground/60 hover:text-foreground"
            }`}
          >
            {filterLabels[f]}
          </button>
        ))}
        <span className="ms-auto font-mono text-foreground/40">{todos.filter((td) => !td.done).length} {t("todo.left")}</span>
      </div>

      <ul className="flex flex-col gap-1.5">
        <AnimatePresence initial={false}>
          {filtered.map((td) => (
            <motion.li
              key={td.id}
              layout
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10, transition: { duration: 0.15 } }}
              className="flex items-center gap-2 rounded-lg border border-border/40 bg-card/40 px-3 py-2"
            >
              <button
                onClick={() => toggle(td.id)}
                className={`flex h-5 w-5 items-center justify-center rounded border transition-colors ${
                  td.done ? "border-accent bg-accent text-accent-foreground" : "border-border/60 hover:border-accent"
                }`}
              >
                {td.done && <Check className="h-3 w-3" />}
              </button>
              <span className={`flex-1 text-sm ${td.done ? "text-foreground/40 line-through" : ""}`}>
                {td.text}
              </span>
              <button
                onClick={() => remove(td.id)}
                className="text-foreground/40 hover:text-destructive"
              >
                <Trash2 className="h-3.5 w-3.5" />
              </button>
            </motion.li>
          ))}
        </AnimatePresence>
        {filtered.length === 0 && (
          <li className="py-4 text-center text-xs text-foreground/40">{t("todo.empty")}</li>
        )}
      </ul>
    </div>
  )
}
