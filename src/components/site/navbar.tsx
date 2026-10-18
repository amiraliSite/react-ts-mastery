'use client'

import * as React from "react"
import Link from "next/link"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { Menu, X, Github } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"
import { LanguageToggle } from "./language-toggle"
import { useLang } from "./language-provider"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const { t } = useLang()
  const [scrolled, setScrolled] = React.useState(false)
  const [open, setOpen] = React.useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 24))

  const links = [
    { href: "#path", label: t("nav.chapters") },
    { href: "#demos", label: t("nav.demos") },
    { href: "#code", label: t("nav.code") },
    { href: "#faq", label: t("nav.faq") },
    { href: "#resources", label: t("nav.resources") },
  ]

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/40"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="#" className="group flex items-center gap-2">
          <span className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground">
            <motion.span whileHover={{ scale: 1.1, rotate: 5 }} className="font-mono text-sm font-bold">
              RT
            </motion.span>
          </span>
          <span className="font-display text-lg font-bold tracking-tight">
            React<span className="text-accent">·</span>TS
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l, i) => (
            <motion.div
              key={l.href}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.06 }}
            >
              <Link
                href={l.href}
                className="group relative text-sm text-foreground/80 transition-colors hover:text-foreground"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-accent transition-all duration-300 group-hover:w-full rtl:left-auto rtl:right-0" />
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <LanguageToggle />
          <ThemeToggle />
          <Button
            size="icon"
            variant="ghost"
            className="hidden h-9 w-9 rounded-full md:inline-flex"
            asChild
          >
            <a
              href="https://github.com/amiraliSite/react-ts-mastery"
              target="_blank"
              rel="noreferrer"
              aria-label={t("nav.github")}
            >
              <Github className="h-4 w-4" />
            </a>
          </Button>
          <Button
            size="sm"
            className="hidden h-9 rounded-full bg-accent text-accent-foreground hover:bg-accent/90 md:inline-flex"
            asChild
          >
            <a href="#path">{t("nav.startLearning")}</a>
          </Button>
          <Button
            size="icon"
            variant="ghost"
            className="md:hidden h-9 w-9 rounded-full"
            onClick={() => setOpen((v) => !v)}
            aria-label={t("nav.menu")}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
      </nav>

      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden border-t border-border/30 bg-background/95 backdrop-blur-xl md:hidden"
      >
        <div className="flex flex-col gap-1 px-6 py-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-b border-border/20 py-3 text-foreground/80 hover:text-accent"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </motion.div>
    </motion.header>
  )
}
