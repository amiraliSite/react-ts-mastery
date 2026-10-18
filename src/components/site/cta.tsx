'use client'

import { motion } from "framer-motion"
import { ArrowRight, Github } from "lucide-react"
import { useLang } from "./language-provider"

export function CTA() {
  const { t } = useLang()

  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/25 via-violet/15 to-transparent rtl:bg-gradient-to-bl" />
        <div className="absolute right-10 top-10 h-72 w-72 rounded-full bg-accent/20 blur-[100px] rtl:right-auto rtl:left-10" />
        <div className="absolute bottom-10 left-10 h-72 w-72 rounded-full bg-violet/20 blur-[100px] rtl:left-auto rtl:right-10" />
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[2.5rem] border border-border/50 bg-background/70 p-8 backdrop-blur-xl sm:p-12 lg:p-16 text-center"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-accent">
            {t("cta.eyebrow")}
          </span>
          <h2 className="mt-3 font-display text-balance text-3xl font-bold tracking-tight sm:text-5xl">
            {t("cta.title1")}
            <br />
            <span className="bg-gradient-to-r from-accent via-accent to-violet bg-clip-text text-transparent rtl:bg-gradient-to-l">
              {t("cta.title.highlight")}
            </span>{" "}
            {t("cta.title2")}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-foreground/70">
            {t("cta.desc")}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#path"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-all hover:gap-3 hover:shadow-[0_8px_30px_-6px] hover:shadow-accent/50"
            >
              {t("cta.openCh1")}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
            </a>
            <a
              href="https://github.com/amiraliSite/react-ts-mastery"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border/60 px-6 py-3 text-sm font-medium text-foreground/80 hover:border-accent hover:text-accent"
            >
              <Github className="h-4 w-4" />
              {t("cta.starGithub")}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
