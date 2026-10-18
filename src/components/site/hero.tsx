'use client'

import * as React from "react"
import { motion, useScroll, useTransform, type Variants } from "framer-motion"
import { ArrowRight, Play, Sparkles } from "lucide-react"
import { useLang } from "./language-provider"
import { stats } from "@/lib/curriculum"

const wordVariants: Variants = {
  hidden: { y: "110%" },
  visible: (i: number) => ({
    y: 0,
    transition: { duration: 0.9, delay: 0.5 + i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 1.4 + i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
}

export function Hero() {
  const { t, dir } = useLang()
  const ref = React.useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const codeY = useTransform(scrollYProgress, [0, 1], [0, -100])
  const textY = useTransform(scrollYProgress, [0, 1], [0, 80])
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0, 0.6])

  const headline = [t("hero.word1"), t("hero.word2"), t("hero.word3")]
  const statsArr = [
    { value: "15", label: t("hero.stat.chapters") },
    { value: "80+", label: t("hero.stat.lessons") },
    { value: "12+", label: t("hero.stat.hours") },
    { value: "100%", label: t("hero.stat.free") },
  ]

  return (
    <section ref={ref} className="relative flex min-h-[100svh] flex-col overflow-hidden pt-16">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-32 -top-32 h-[40rem] w-[40rem] rounded-full bg-accent/15 blur-[120px]" />
        <div className="absolute -left-32 bottom-0 h-[30rem] w-[30rem] rounded-full bg-violet/20 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, var(--foreground) 1px, transparent 1px), linear-gradient(to bottom, var(--foreground) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <motion.div
        style={{ opacity: overlayOpacity }}
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-transparent to-background"
      />

      <div className="mx-auto grid w-full max-w-7xl flex-1 grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        <motion.div style={{ y: textY }} className="order-2 lg:order-1 lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/40 px-3 py-1 text-xs text-foreground/70 backdrop-blur"
          >
            <Sparkles className="h-3 w-3 text-accent" />
            <span>{t("hero.badge")}</span>
          </motion.div>

          <h1 className="font-display font-bold leading-[0.95] tracking-tight">
            <span className="block text-5xl sm:text-7xl lg:text-8xl">
              {headline.map((w, i) => (
                <span
                  key={i}
                  className="me-4 inline-block overflow-hidden align-bottom"
                  style={{ paddingBottom: "0.1em" }}
                >
                  <motion.span custom={i} variants={wordVariants} initial="hidden" animate="visible" className="inline-block">
                    {w}
                  </motion.span>
                </span>
              ))}
            </span>
            <span className="mt-2 block overflow-hidden text-3xl sm:text-5xl lg:text-6xl">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block bg-gradient-to-r from-accent via-accent to-violet bg-clip-text text-transparent rtl:bg-gradient-to-l"
              >
                {t("hero.subtitle")}
              </motion.span>
            </span>
          </h1>

          <motion.p
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-6 max-w-md text-base text-foreground/70 sm:text-lg"
          >
            {t("hero.desc")}
          </motion.p>

          <motion.div custom={1} variants={fadeUp} initial="hidden" animate="visible" className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#path"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-all hover:gap-3 hover:shadow-[0_8px_30px_-6px] hover:shadow-accent/50"
            >
              {t("hero.cta.start")}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
            </a>
            <a
              href="#demos"
              className="inline-flex items-center gap-2 rounded-full border border-border/60 px-6 py-3 text-sm font-medium text-foreground/80 transition-colors hover:border-accent hover:text-accent"
            >
              <Play className="h-3.5 w-3.5 rtl:scale-x-[-1]" />
              {t("hero.cta.demos")}
            </a>
          </motion.div>

          <motion.div custom={2} variants={fadeUp} initial="hidden" animate="visible" className="mt-10 flex flex-wrap items-center gap-8 border-t border-border/40 pt-6 text-sm">
            {statsArr.map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-bold text-foreground">{s.value}</div>
                <div className="text-xs text-foreground/60">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div style={{ y: codeY }} className="relative order-1 lg:order-2 lg:col-span-5">
          <div className="relative aspect-[5/6] w-full">
            <div className="absolute -inset-3 -z-10 rounded-3xl bg-gradient-to-tr from-accent/20 via-transparent to-violet/20 blur-2xl rtl:bg-gradient-to-tl" />

            <motion.div
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="grain-bg relative h-full w-full overflow-hidden rounded-3xl border border-border/40 bg-card/60 backdrop-blur-xl"
            >
              <div className="flex items-center justify-between border-b border-border/40 bg-card/40 px-4 py-2.5">
                <div className="flex gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-destructive/70" />
                  <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
                  <span className="h-3 w-3 rounded-full bg-green-500/70" />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-foreground/50">
                  use-counter.ts
                </span>
              </div>

              <pre className="overflow-x-auto p-5 font-mono text-xs leading-relaxed sm:text-sm" dir="ltr">
                <code>
                  <span className="text-violet">{`import`}</span>{` `}<span className="text-accent">{`{ `}</span>{`useState, useCallback`}<span className="text-accent">{` }`}</span>{` `}<span className="text-violet">{`from`}</span>{` `}<span className="text-green-400">{`"react"`}</span>{`;`}

                  {`\n\n`}<span className="text-violet">{`export function`}</span>{` `}<span className="text-yellow-300">{`useCounter`}</span><span className="text-accent">{`(`}</span>{`initial `}<span className="text-violet">{`=`}</span>{` `}<span className="text-green-400">{`0`}</span><span className="text-accent">{`) {`}</span>

                  {`\n  `}<span className="text-violet">{`const`}</span>{` [count, setCount] `}<span className="text-violet">{`=`}</span>{` `}<span className="text-yellow-300">{`useState`}</span><span className="text-accent">{`(`}</span>{`initial`}<span className="text-accent">{`)`}</span>{`;`}

                  {`\n  `}<span className="text-violet">{`const`}</span>{` increment `}<span className="text-violet">{`=`}</span>{` `}<span className="text-yellow-300">{`useCallback`}</span><span className="text-accent">{`(() =>`}</span>{` `}<span className="text-accent">{`{`}</span>{`\n    setCount`}<span className="text-accent">{`(`}</span>{`c `}<span className="text-violet">{`=>`}</span>{` c `}<span className="text-violet">{`+`}</span>{` `}<span className="text-green-400">{`1`}</span><span className="text-accent">{`)`}</span>{`;\n  `}<span className="text-accent">{`}, []);`}</span>

                  {`\n  `}<span className="text-violet">{`return`}</span>{` { count, increment, setCount `}<span className="text-accent">{`}`}</span>{`;`}

                  {`\n`}<span className="text-accent">{`}`}</span>
                </code>
              </pre>

              <motion.div
                initial={{ opacity: 0, y: -10, x: 10 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ duration: 0.8, delay: 1.6 }}
                className="absolute -right-3 -top-3 hidden rounded-2xl border border-border/40 bg-background/90 px-3 py-1.5 text-xs font-semibold backdrop-blur sm:block rtl:-right-auto rtl:-left-3"
              >
                <span className="text-accent">⚡</span> {t("hero.chip.hook")}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10, x: -10 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ duration: 0.8, delay: 1.8 }}
                className="absolute -bottom-3 -left-3 hidden rounded-2xl border border-border/40 bg-background/90 px-3 py-1.5 text-xs backdrop-blur sm:block rtl:-left-auto rtl:-right-3"
              >
                <span className="font-mono text-foreground/50">{t("hero.chip.typeSafe")}</span>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
