export type Difficulty = "Beginner" | "Intermediate" | "Advanced";

export type Chapter = {
  id: string;
  num: string;
  title: string;
  blurb: string;
  faTitle: string;
  faBlurb: string;
  difficulty: Difficulty;
  duration: string;
  lessons: number;
  topics: string[];
  accent: string;
};

export const chapters: Chapter[] = [
  {
    id: "ts-fundamentals",
    num: "01",
    title: "TypeScript Fundamentals",
    blurb: "Type annotations, interfaces, generics, type narrowing — the bedrock of writing safe TypeScript.",
    faTitle: "مبانی تایپ‌اسکریپت",
    faBlurb: "تایپ‌انوتیشن، interface، generic، type narrowing — پایه‌ی نوشتن تایپ‌اسکریپت امن.",
    difficulty: "Beginner",
    duration: "45 min",
    lessons: 7,
    topics: ["Basic types", "Interfaces", "Generics", "Type narrowing", "Utility types", "Enums", "Type assertions"],
    accent: "cyan",
  },
  {
    id: "react-ts-setup",
    num: "02",
    title: "React + TS Project Setup",
    blurb: "Scaffold a modern React + TypeScript project with Vite or Next.js, configure tsconfig, ESLint, Prettier.",
    faTitle: "راه‌اندازی پروژه‌ی React + TS",
    faBlurb: "ساختن یه پروژه‌ی مدرن React + TypeScript با Vite یا Next.js، پیکربندی tsconfig، ESLint، Prettier.",
    difficulty: "Beginner",
    duration: "30 min",
    lessons: 5,
    topics: ["Vite vs Next.js", "tsconfig.json", "ESLint rules", "Prettier", "Path aliases"],
    accent: "violet",
  },
  {
    id: "components-props",
    num: "03",
    title: "Components & Props",
    blurb: "Function components, typing props, children, default values — the building blocks of every React app.",
    faTitle: "کامپوننت‌ها و Props",
    faBlurb: "Function components، تایپ کردن props، children، default values — بلوک‌های ساختمانی هر اپ React.",
    difficulty: "Beginner",
    duration: "55 min",
    lessons: 8,
    topics: ["Function components", "Props typing", "Children prop", "Default props", "Spread props", "Render props", "Composition", "Forwarding refs"],
    accent: "cyan",
  },
  {
    id: "state-events",
    num: "04",
    title: "State & Events",
    blurb: "useState, controlled inputs, event handler types, forms, and the React event system explained.",
    faTitle: "State و Eventها",
    faBlurb: "useState، controlled inputs، تایپ event handlerها، فرم‌ها، و سیستم event در React.",
    difficulty: "Beginner",
    duration: "60 min",
    lessons: 9,
    topics: ["useState", "Lazy initial state", "Controlled inputs", "Event types", "Form events", "SyntheticEvent", "Multiple inputs", "useState with objects", "Batching"],
    accent: "violet",
  },
  {
    id: "effects-lifecycle",
    num: "05",
    title: "Effects & Lifecycles",
    blurb: "useEffect, dependency arrays, cleanup functions, fetch on mount, and avoiding the most common pitfalls.",
    faTitle: "Effectها و Lifecycle",
    faBlurb: "useEffect، dependency arrayها، cleanup functionها، fetch هنگام mount، و پرهیز از رایج‌ترین اشتباهات.",
    difficulty: "Intermediate",
    duration: "70 min",
    lessons: 10,
    topics: ["useEffect basics", "Dependency arrays", "Cleanup", "Fetch on mount", "Race conditions", "Strict mode double-run", "Custom hooks from effects", "useLayoutEffect", "AbortController", "Polling"],
    accent: "cyan",
  },
  {
    id: "refs-dom",
    num: "06",
    title: "Refs & DOM",
    blurb: "useRef, forwardRef, useImperativeHandle — escape hatches for when you really need to touch the DOM.",
    faTitle: "Refها و DOM",
    faBlurb: "useRef، forwardRef، useImperativeHandle — راه‌فرارها برای وقتی واقعاً لازمه به DOM دسترسی داشته باشی.",
    difficulty: "Intermediate",
    duration: "40 min",
    lessons: 6,
    topics: ["useRef", "Mutable vs callback refs", "forwardRef", "useImperativeHandle", "Measuring DOM", "Focus management"],
    accent: "violet",
  },
  {
    id: "context-reducer",
    num: "07",
    title: "Context & Reducer",
    blurb: "Avoid prop drilling with Context, manage complex state with useReducer — typed end-to-end.",
    faTitle: "Context و Reducer",
    faBlurb: "پرهیز از prop drilling با Context، مدیریت state پیچیده با useReducer — تایپ‌شده تا انتها.",
    difficulty: "Intermediate",
    duration: "55 min",
    lessons: 8,
    topics: ["createContext", "Provider pattern", "Typing context", "useReducer", "Discriminated unions", "Action types", "Combining contexts", "Performance pitfalls"],
    accent: "cyan",
  },
  {
    id: "custom-hooks",
    num: "08",
    title: "Custom Hooks",
    blurb: "Extract logic into reusable hooks — patterns, naming, testing, and composition strategies.",
    faTitle: "هوک‌های سفارشی",
    faBlurb: "استخراج لاجیک در هوک‌های قابل استفاده‌ی مجدد — الگوها، نام‌گذاری، تست، و استراتژی‌های composition.",
    difficulty: "Intermediate",
    duration: "50 min",
    lessons: 7,
    topics: ["Hook rules", "Naming convention", "useDebounce", "useLocalStorage", "useMediaQuery", "useFetch", "Composing hooks"],
    accent: "violet",
  },
  {
    id: "performance",
    num: "09",
    title: "Performance Patterns",
    blurb: "memo, useMemo, useCallback, code-splitting with lazy & Suspense — ship less, render faster.",
    faTitle: "الگوهای پرفورمنس",
    faBlurb: "memo، useMemo، useCallback، code-splitting با lazy & Suspense — کمتر شیپ کن، سریع‌تر render کن.",
    difficulty: "Advanced",
    duration: "65 min",
    lessons: 9,
    topics: ["React.memo", "useMemo", "useCallback", "When NOT to memoize", "React.lazy", "Suspense", "Code splitting", "List virtualization", "Profiling with DevTools"],
    accent: "cyan",
  },
  {
    id: "forms-validation",
    num: "10",
    title: "Forms & Validation",
    blurb: "Build robust, accessible forms with react-hook-form + Zod — schema validation done right.",
    faTitle: "فرم‌ها و اعتبارسنجی",
    faBlurb: "ساختن فرم‌های قوی و accessible با react-hook-form + Zod — schema validation درست.",
    difficulty: "Intermediate",
    duration: "60 min",
    lessons: 8,
    topics: ["Controlled vs uncontrolled", "react-hook-form", "Zod schemas", "Form errors", "Async validation", "Field arrays", "Accessibility", "Submit handling"],
    accent: "violet",
  },
  {
    id: "routing",
    num: "11",
    title: "Routing (App Router)",
    blurb: "Next.js App Router — file-system routing, dynamic routes, typed params, layouts & loading states.",
    faTitle: "Routing (App Router)",
    faBlurb: "Next.js App Router — file-system routing، dynamic routeها، typed params، layoutها و loading stateها.",
    difficulty: "Advanced",
    duration: "70 min",
    lessons: 10,
    topics: ["App Router fundamentals", "File conventions", "Dynamic routes", "Typing params", "Layouts", "Loading & error UI", "Server vs client components", "Middleware", "Redirects", "Link component"],
    accent: "cyan",
  },
  {
    id: "data-fetching",
    num: "12",
    title: "Data Fetching",
    blurb: "fetch, SWR, TanStack Query — pick the right tool, handle loading/error states gracefully.",
    faTitle: "Data Fetching",
    faBlurb: "fetch، SWR، TanStack Query — ابزار درست رو انتخاب کن، loading/error stateها رو درست مدیریت کن.",
    difficulty: "Advanced",
    duration: "65 min",
    lessons: 9,
    topics: ["Native fetch", "Loading states", "Error handling", "SWR basics", "TanStack Query", "Mutations", "Cache invalidation", "Optimistic updates", "SSR/SSG"],
    accent: "violet",
  },
  {
    id: "state-management",
    num: "13",
    title: "State Management",
    blurb: "Zustand, Jotai, Redux Toolkit — when you really need global state, pick the right tool.",
    faTitle: "مدیریت State",
    faBlurb: "Zustand، Jotai، Redux Toolkit — وقتی واقعاً به global state نیاز داری، ابزار درست رو انتخاب کن.",
    difficulty: "Advanced",
    duration: "60 min",
    lessons: 8,
    topics: ["Local vs global state", "Zustand stores", "Selectors", "Jotai atoms", "Redux Toolkit", "Slices", "DevTools", "Persisting state"],
    accent: "cyan",
  },
  {
    id: "testing",
    num: "14",
    title: "Testing",
    blurb: "Vitest for unit, React Testing Library for components, Playwright for end-to-end — full coverage.",
    faTitle: "تست",
    faBlurb: "Vitest برای unit، React Testing Library برای کامپوننت‌ها، Playwright برای end-to-end — coverage کامل.",
    difficulty: "Advanced",
    duration: "75 min",
    lessons: 9,
    topics: ["Vitest setup", "Unit tests", "RTL queries", "User events", "Mocking modules", "Async tests", "Coverage", "Playwright basics", "CI integration"],
    accent: "violet",
  },
  {
    id: "deployment-patterns",
    num: "15",
    title: "Deployment & Patterns",
    blurb: "Ship to production — Vercel, GitHub Pages, bundle analysis, env vars, and proven architecture patterns.",
    faTitle: "Deployment و الگوها",
    faBlurb: "شیپ به پروداکشن — Vercel، GitHub Pages، bundle analysis، env variableها، و الگوهای معماری اثبات‌شده.",
    difficulty: "Advanced",
    duration: "55 min",
    lessons: 7,
    topics: ["Vercel deploy", "GitHub Pages", "Static export", "Env vars", "Bundle analysis", "Folder structure", "Common patterns"],
    accent: "cyan",
  },
];

export type Resource = {
  title: string;
  href: string;
  category: "Docs" | "Tools" | "Community";
  desc: string;
  faTitle: string;
  faDesc: string;
};

export const resources: Resource[] = [
  {
    title: "React Docs",
    href: "https://react.dev",
    category: "Docs",
    desc: "Official React documentation — the best place to start.",
    faTitle: "مستندات React",
    faDesc: "مستندات رسمی React — بهترین نقطه‌ی شروع.",
  },
  {
    title: "TypeScript Handbook",
    href: "https://www.typescriptlang.org/docs/handbook/intro.html",
    category: "Docs",
    desc: "Microsoft's official TS guide, from basics to advanced.",
    faTitle: "راهنمای TypeScript",
    faDesc: "راهنمای رسمی TS از مایکروسافت، از مبانی تا پیشرفته.",
  },
  {
    title: "Next.js Docs",
    href: "https://nextjs.org/docs",
    category: "Docs",
    desc: "App Router, data fetching, deployment — all here.",
    faTitle: "مستندات Next.js",
    faDesc: "App Router، data fetching، deployment — همه‌چیز اینجا.",
  },
  {
    title: "Vite",
    href: "https://vitejs.dev",
    category: "Tools",
    desc: "Lightning-fast dev server & bundler for React projects.",
    faTitle: "Vite",
    faDesc: "dev server و bundler فوق‌سریع برای پروژه‌های React.",
  },
  {
    title: "Zod",
    href: "https://zod.dev",
    category: "Tools",
    desc: "TypeScript-first schema validation library.",
    faTitle: "Zod",
    faDesc: "کتابخانه‌ی schema validation با تمرکز بر TypeScript.",
  },
  {
    title: "TanStack Query",
    href: "https://tanstack.com/query/latest",
    category: "Tools",
    desc: "Powerful async state management for data fetching.",
    faTitle: "TanStack Query",
    faDesc: "مدیریت قدرتمند async state برای data fetching.",
  },
  {
    title: "r/reactjs",
    href: "https://reddit.com/r/reactjs",
    category: "Community",
    desc: "Active subreddit for help, news, and discussions.",
    faTitle: "r/reactjs",
    faDesc: "ساب‌ریدیت فعال برای کمک، خبرها، و بحث‌ها.",
  },
  {
    title: "Reactiflux Discord",
    href: "https://www.reactiflux.com",
    category: "Community",
    desc: "Large Discord community for real-time help.",
    faTitle: "دیسکورد Reactiflux",
    faDesc: "جامعه‌ی بزرگ دیسکورد برای کمک در لحظه.",
  },
];

export type FaqItem = { q: string; a: string };

// FAQ keys are now in i18n.ts; this stays as a count stub for type compat
export const faqs: FaqItem[] = [
  { q: "q1", a: "a1" },
  { q: "q2", a: "a2" },
  { q: "q3", a: "a3" },
  { q: "q4", a: "a4" },
];

export const stats = [
  { value: "15", label: "Chapters" },
  { value: "80+", label: "Lessons" },
  { value: "12+", label: "Hours" },
  { value: "100%", label: "Free" },
];
