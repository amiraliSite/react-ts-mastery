export type Lang = "en" | "fa";

export const LANGS: Lang[] = ["en", "fa"];

export const langMeta: Record<Lang, { label: string; flag: string }> = {
  en: { label: "EN", flag: "🇬🇧" },
  fa: { label: "FA", flag: "🇮🇷" },
};

// Centralized string table. Keys are flat dotted strings.
export const translations = {
  en: {
    "nav.chapters": "Chapters",
    "nav.demos": "Live Demos",
    "nav.code": "Code",
    "nav.faq": "FAQ",
    "nav.resources": "Resources",
    "nav.startLearning": "Start Learning",
    "nav.menu": "Menu",
    "nav.github": "GitHub repository",
    "nav.theme.light": "Switch to light theme",
    "nav.theme.dark": "Switch to dark theme",
    "nav.language": "Switch language",

    "hero.badge": "15 chapters · 80+ lessons · 100% free",
    "hero.word1": "Zero",
    "hero.word2": "to",
    "hero.word3": "Hero",
    "hero.subtitle": "React + TypeScript",
    "hero.desc":
      'The interactive course that takes you from "what is a component?" to shipping production React + TS apps. 15 chapters, live demos, zero fluff.',
    "hero.cta.start": "Start Chapter 01",
    "hero.cta.demos": "Try live demos",
    "hero.stat.chapters": "Chapters",
    "hero.stat.lessons": "Lessons",
    "hero.stat.hours": "Hours",
    "hero.stat.free": "Free",
    "hero.chip.hook": "Custom Hook",
    "hero.chip.typeSafe": "type-safe →",

    "marquee.interactive": "Interactive",
    "marquee.typeSafe": "Type-Safe",
    "marquee.handsOn": "Hands-On Demos",
    "marquee.progress": "Progress Tracking",
    "marquee.freeForever": "Free Forever",
    "marquee.openSource": "Open Source",
    "marquee.realCode": "Real Code",
    "marquee.noLogin": "No Login Required",

    "path.section": "01 — Learning Path",
    "path.title1": "Fifteen chapters.",
    "path.title2": "One complete journey.",
    "path.completed": "completed",
    "path.whatYouLearn": "What you'll learn",
    "path.markDone": "Mark as done",
    "path.completedBtn": "Completed",
    "path.seeDemo": "See demo →",
    "path.lessons": "lessons",

    "demos.section": "02 — Live Demos",
    "demos.title": "Real code. Real interaction.",
    "demos.desc":
      "Every demo below is a live, running React + TypeScript component — not a screenshot. Click around, see the state change.",
    "demos.hooksUsed": "Hooks used",
    "demos.viewSource": "View source →",
    "demos.counter.title": "Counter",
    "demos.counter.desc": "useState + useCallback — the most fundamental state hook.",
    "demos.todo.title": "Todo List",
    "demos.todo.desc": "useState + controlled inputs + filtering — a tiny app in 60 lines.",
    "demos.fetch.title": "Async Fetch",
    "demos.fetch.desc": "useEffect with AbortController and a typed state machine for loading states.",
    "demos.context.title": "Reducer + Theme",
    "demos.context.desc": "useReducer with a typed action union — the building block of Context API.",

    "counter.reset": "reset",
    "counter.step": "step",

    "todo.placeholder": "Add a task...",
    "todo.all": "all",
    "todo.active": "active",
    "todo.done": "done",
    "todo.left": "left",
    "todo.empty": "Nothing here — add a task above.",

    "fetch.idle": "idle",
    "fetch.loading": "fetching...",
    "fetch.resolved": "✓ resolved",
    "fetch.failed": "✗ failed",
    "fetch.button": "Fetch user",
    "fetch.idleHint": 'Click "Fetch user" to simulate a network request.',
    "fetch.errorMessage": "Network failed (simulated). Try again.",
    "fetch.name": "name",
    "fetch.email": "email",
    "fetch.site": "site",

    "context.theme": "theme",
    "context.electric": "Electric",
    "context.cosmic": "Cosmic",
    "context.warm": "Warm",
    "context.like": "Like",
    "context.brew": "Brew",

    "code.section": "03 — Code Patterns",
    "code.title": "Patterns you'll actually use.",
    "code.t1.title": "Typing a component's props",
    "code.t2.title": "A typed custom hook",
    "code.t3.title": "Discriminated union for state",

    "faq.section": "04 — FAQ",
    "faq.title": "Questions, answered.",
    "faq.q1.q": "Do I need to know JavaScript before starting?",
    "faq.q1.a":
      "Some JavaScript familiarity helps, but the early chapters cover the TS+JS basics you'll need. If you've written any code before, you'll be fine.",
    "faq.q2.q": "How long does the full course take?",
    "faq.q2.a":
      "About 12–14 hours if you go through every chapter end-to-end with the demos. Most learners do 2–3 chapters per session.",
    "faq.q3.q": "Is everything really free?",
    "faq.q3.a":
      "Yes — the entire site, all 15 chapters, all interactive demos, and all source code are open-source under MIT. No signup, no paywall.",
    "faq.q4.q": "What tools do I need installed?",
    "faq.q4.a":
      "Node.js 18+ and any editor (VS Code recommended). The setup chapter walks you through installing everything else.",

    "resources.section": "05 — Resources",
    "resources.title": "Beyond this tutorial.",
    "resources.all": "All",
    "resources.docs": "Docs",
    "resources.tools": "Tools",
    "resources.community": "Community",

    "cta.eyebrow": "Start now — it's free",
    "cta.title1": "Your journey from",
    "cta.title2": "starts now.",
    "cta.title.highlight": "zero to hero",
    "cta.desc":
      "No login. No paywall. Just open Chapter 01, run the demos, and ship. Everything here is open-source under MIT.",
    "cta.openCh1": "Open Chapter 01",
    "cta.starGithub": "Star on GitHub",

    "footer.tagline":
      "The interactive React + TypeScript course. 15 chapters, 80+ lessons, live demos. 100% free and open-source.",
    "footer.course": "Course",
    "footer.resources": "Resources",
    "footer.project": "Project",
    "footer.course.path": "Learning Path",
    "footer.course.demos": "Live Demos",
    "footer.course.code": "Code Patterns",
    "footer.course.faq": "FAQ",
    "footer.project.source": "Source on GitHub",
    "footer.project.issues": "Report an issue",
    "footer.project.license": "License (MIT)",
    "footer.copy":
      "© 2025 React·TS Mastery — MIT licensed. Built with Next.js + TypeScript + Framer Motion.",
    "footer.privacy": "Privacy",
    "footer.terms": "Terms",

    "common.stars": "stars",
    "common.license": "MIT license",
  },
  fa: {
    "nav.chapters": "فصل‌ها",
    "nav.demos": "دموهای زنده",
    "nav.code": "کد",
    "nav.faq": "سوالات متداول",
    "nav.resources": "منابع",
    "nav.startLearning": "شروع یادگیری",
    "nav.menu": "منو",
    "nav.github": "ریپوی گیت‌هاب",
    "nav.theme.light": "تغییر به تم روشن",
    "nav.theme.dark": "تغییر به تم تاریک",
    "nav.language": "تغییر زبان",

    "hero.badge": "۱۵ فصل · ۸۰+ درس · ۱۰۰٪ رایگان",
    "hero.word1": "از صفر",
    "hero.word2": "تا",
    "hero.word3": "قهرمان",
    "hero.subtitle": "ری‌اکت + تایپ‌اسکریپت",
    "hero.desc":
      "دوره‌ی تعاملی که از «یه کامپوننت چیه؟» تا ساخت اپ‌های پروداکشن ری‌اکت + تایپ‌اسکریپت می‌برت. ۱۵ فصل، دموی زنده، بدون حرف اضافه.",
    "hero.cta.start": "شروع فصل ۰۱",
    "hero.cta.demos": "امتحان دموهای زنده",
    "hero.stat.chapters": "فصل",
    "hero.stat.lessons": "درس",
    "hero.stat.hours": "ساعت",
    "hero.stat.free": "رایگان",
    "hero.chip.hook": "هوک سفارشی",
    "hero.chip.typeSafe": "نوع‌امن ←",

    "marquee.interactive": "تعاملی",
    "marquee.typeSafe": "نوع‌امن",
    "marquee.handsOn": "دموهای عملی",
    "marquee.progress": "پیگیری پیشرفت",
    "marquee.freeForever": "همیشه رایگان",
    "marquee.openSource": "متن‌باز",
    "marquee.realCode": "کد واقعی",
    "marquee.noLogin": "بدون ورود",

    "path.section": "۰۱ — مسیر یادگیری",
    "path.title1": "پانزده فصل.",
    "path.title2": "یک سفر کامل.",
    "path.completed": "تکمیل‌شده",
    "path.whatYouLearn": "چه چیزی یاد می‌گیری",
    "path.markDone": "علامت‌گذاری",
    "path.completedBtn": "تکمیل شد",
    "path.seeDemo": "دیدن دمو ←",
    "path.lessons": "درس",

    "demos.section": "۰۲ — دموهای زنده",
    "demos.title": "کد واقعی. تعامل واقعی.",
    "demos.desc":
      "هر دموی زیر یه کامپوننت واقعی در حال اجرای ری‌اکت + تایپ‌اسکریپته — عکس نیست. کلیک کن، تغییر state رو ببین.",
    "demos.hooksUsed": "هوک‌های استفاده‌شده",
    "demos.viewSource": "دیدن سورس ←",
    "demos.counter.title": "شمارنده",
    "demos.counter.desc": "useState + useCallback — پایه‌ای‌ترین state hook.",
    "demos.todo.title": "لیست کارها",
    "demos.todo.desc": "useState + controlled inputs + فیلتر — یه اپ کوچک در ۶۰ خط.",
    "demos.fetch.title": "فچ ناهمگام",
    "demos.fetch.desc": "useEffect با AbortController و یه state machine تایپ‌شده برای loading stateها.",
    "demos.context.title": "Reducer + Theme",
    "demos.context.desc": "useReducer با یه typed action union — بلوک ساختمانی Context API.",

    "counter.reset": "ریست",
    "counter.step": "گام",

    "todo.placeholder": "یه کار اضافه کن...",
    "todo.all": "همه",
    "todo.active": "فعال",
    "todo.done": "انجام‌شده",
    "todo.left": "باقیمانده",
    "todo.empty": "اینجا چیزی نیست — یه کار بالا اضافه کن.",

    "fetch.idle": "بیکار",
    "fetch.loading": "در حال گرفتن...",
    "fetch.resolved": "✓ انجام شد",
    "fetch.failed": "✗ شکست خورد",
    "fetch.button": "گرفتن کاربر",
    "fetch.idleHint": "روی «گرفتن کاربر» کلیک کن تا درخواست شبکه شبیه‌سازی شه.",
    "fetch.errorMessage": "شبکه شکست خورد (شبیه‌سازی). دوباره امتحان کن.",
    "fetch.name": "نام",
    "fetch.email": "ایمیل",
    "fetch.site": "سایت",

    "context.theme": "تم",
    "context.electric": "الکتریک",
    "context.cosmic": "کاسمیک",
    "context.warm": "گرم",
    "context.like": "پسند",
    "context.brew": "دم‌کردن",

    "code.section": "۰۳ — الگوهای کد",
    "code.title": "الگوهایی که واقعاً استفاده می‌کنی.",
    "code.t1.title": "تایپ کردن props کامپوننت",
    "code.t2.title": "یه هوک سفارشی تایپ‌شده",
    "code.t3.title": "Discriminated union برای state",

    "faq.section": "۰۴ — سوالات متداول",
    "faq.title": "سوالات، پاسخ داده‌شده.",
    "faq.q1.q": "آیا قبل از شروع باید جاوااسکریپت بلد باشم؟",
    "faq.q1.a":
      "آشنایی با جاوااسکریپت کمک می‌کنه، ولی فصل‌های اول مبانی TS+JS که نیاز داری رو پوشش می‌دن. اگه تا حالا کدی نوشتی، مشکلی نخواهی داشت.",
    "faq.q2.q": "کل دوره چقدر طول می‌کشه؟",
    "faq.q2.a":
      "حدود ۱۲ تا ۱۴ ساعت اگه همه‌ی فصل‌ها رو با دموها تا انتها بری. بیشتر یادگیرنده‌ها هر جلسه ۲ تا ۳ فصل انجام می‌دن.",
    "faq.q3.q": "واقعاً همه‌چیز رایگانه؟",
    "faq.q3.a":
      "بله — کل سایت، همه‌ی ۱۵ فصل، همه‌ی دموهای تعاملی و همه‌ی سورس کد تحت لایسنس MIT متن‌باز هستن. بدون ثبت‌نام، بدون پولی.",
    "faq.q4.q": "چه ابزارهایی باید نصب باشه؟",
    "faq.q4.a":
      "Node.js ۱۸+ و هر ادیتوری (VS Code پیشنهاد می‌شه). فصل setup نصب بقیه‌ی ابزارها رو راهنماییت می‌کنه.",

    "resources.section": "۰۵ — منابع",
    "resources.title": "فراتر از این آموزش.",
    "resources.all": "همه",
    "resources.docs": "مستندات",
    "resources.tools": "ابزارها",
    "resources.community": "جامعه",

    "cta.eyebrow": "همین حالا شروع کن — رایگانه",
    "cta.title1": "سفرت از",
    "cta.title2": "همین حالا شروع می‌شه.",
    "cta.title.highlight": "صفر تا قهرمان",
    "cta.desc":
      "بدون ورود. بدون پولی. فقط فصل ۰۱ رو باز کن، دموها رو اجرا کن، و شیپ کن. همه‌چیز اینجا تحت لایسنس MIT متن‌بازه.",
    "cta.openCh1": "باز کردن فصل ۰۱",
    "cta.starGithub": "ستاره در گیت‌هاب",

    "footer.tagline":
      "دوره‌ی تعاملی ری‌اکت + تایپ‌اسکریپت. ۱۵ فصل، ۸۰+ درس، دموی زنده. ۱۰۰٪ رایگان و متن‌باز.",
    "footer.course": "دوره",
    "footer.resources": "منابع",
    "footer.project": "پروژه",
    "footer.course.path": "مسیر یادگیری",
    "footer.course.demos": "دموهای زنده",
    "footer.course.code": "الگوهای کد",
    "footer.course.faq": "سوالات متداول",
    "footer.project.source": "سورس در گیت‌هاب",
    "footer.project.issues": "گزارش مشکل",
    "footer.project.license": "لایسنس (MIT)",
    "footer.copy":
      "© ۱۴۰۴ React·TS Mastery — تحت لایسنس MIT. ساخته‌شده با Next.js + TypeScript + Framer Motion.",
    "footer.privacy": "حریم خصوصی",
    "footer.terms": "شرایط",

    "common.stars": "ستاره",
    "common.license": "لایسنس MIT",
  },
} as const;

export type TranslationKey = keyof typeof translations["en"];

export function isLang(v: unknown): v is Lang {
  return v === "en" || v === "fa";
}
