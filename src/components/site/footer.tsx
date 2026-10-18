'use client'

import Link from "next/link"
import { Github, Twitter, BookMarked } from "lucide-react"
import { useLang } from "./language-provider"

export function Footer() {
  const { t } = useLang()

  const cols = [
    {
      title: t("footer.course"),
      links: [
        { label: t("footer.course.path"), href: "#path" },
        { label: t("footer.course.demos"), href: "#demos" },
        { label: t("footer.course.code"), href: "#code" },
        { label: t("footer.course.faq"), href: "#faq" },
      ],
    },
    {
      title: t("footer.resources"),
      links: [
        { label: "React Docs", href: "https://react.dev" },
        { label: "TypeScript Handbook", href: "https://www.typescriptlang.org/docs/handbook/intro.html" },
        { label: "Next.js", href: "https://nextjs.org/docs" },
        { label: "Vite", href: "https://vitejs.dev" },
      ],
    },
    {
      title: t("footer.project"),
      links: [
        { label: t("footer.project.source"), href: "https://github.com/amiraliSite/react-ts-mastery" },
        { label: t("footer.project.issues"), href: "https://github.com/amiraliSite/react-ts-mastery/issues" },
        { label: t("footer.project.license"), href: "https://github.com/amiraliSite/react-ts-mastery/blob/main/LICENSE" },
      ],
    },
  ]

  return (
    <footer className="mt-auto border-t border-border/40 bg-card/30">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="flex flex-col gap-8 border-b border-border/40 pb-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-sm">
            <Link href="#" className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                <span className="font-mono text-sm font-bold">RT</span>
              </span>
              <span className="font-display text-lg font-bold tracking-tight">
                React<span className="text-accent">·</span>TS
              </span>
            </Link>
            <p className="mt-3 text-sm text-foreground/60">
              {t("footer.tagline")}
            </p>

            <div className="mt-5 flex items-center gap-2">
              {[Github, Twitter, BookMarked].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border/60 text-foreground/70 transition-colors hover:border-accent hover:text-accent"
                  aria-label="Social"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {cols.map((c) => (
              <div key={c.title}>
                <h4 className="mb-3 font-mono text-xs uppercase tracking-widest text-foreground/50">
                  {c.title}
                </h4>
                <ul className="space-y-2">
                  {c.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        href={l.href}
                        className="text-sm text-foreground/70 transition-colors hover:text-accent"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-6 sm:flex-row">
          <p className="text-xs text-foreground/50">
            {t("footer.copy")}
          </p>
          <div className="flex items-center gap-4 text-xs text-foreground/50">
            <Link href="#" className="hover:text-accent">{t("footer.privacy")}</Link>
            <Link href="#" className="hover:text-accent">{t("footer.terms")}</Link>
          </div>
        </div>
      </div>

      <div className="overflow-hidden px-4 pb-4">
        <div className="select-none text-center">
          <span className="font-display block bg-gradient-to-b from-foreground/15 to-foreground/5 bg-clip-text text-[16vw] font-bold leading-none tracking-tighter text-transparent">
            react·ts
          </span>
        </div>
      </div>
    </footer>
  )
}
