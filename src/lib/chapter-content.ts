// Bilingual lesson content for every chapter.
// Each chapter has 4-6 sections: intro → lessons (with code) → takeaways.
// All bodies are arrays of paragraphs.

export type CodeBlock = { lang: "ts" | "tsx" | "bash" | "json"; code: string };

export type Section = {
  en: { heading: string; body?: string[]; code?: CodeBlock; bullets?: string[] };
  fa: { heading: string; body?: string[]; code?: CodeBlock; bullets?: string[] };
};

export type ChapterContent = {
  id: string;
  intro: Section;
  lessons: Section[];
  takeaway: Section;
};

export const chapterContents: Record<string, ChapterContent> = {
  "ts-fundamentals": {
    id: "ts-fundamentals",
    intro: {
      en: {
        heading: "Why TypeScript, not just JavaScript?",
        body: [
          "JavaScript is dynamically typed — variables can hold any value, and the type can change at runtime. That flexibility is great for quick hacks, but it means a whole class of bugs (typos in property names, passing the wrong shape of data) only surfaces when the user hits the broken code path.",
          "TypeScript adds a compile-time type layer on top of JavaScript. Your editor tells you about mistakes before you even run the code. Refactoring becomes safe. The shape of every function, every component, every API response is documented in the types themselves.",
        ],
      },
      fa: {
        heading: "چرا TypeScript، نه فقط JavaScript؟",
        body: [
          "JavaScript به‌صورت dynamic type هست — متغیرها می‌تونن هر مقداری داشته باشن و type در runtime می‌تونه عوض بشه. این انعطاف برای هک‌های سریع عالیه، ولی یعنی یه دسته از bugها (اشتباه تایپی در اسم prop، پاس‌دادن shape اشتباه داده) فقط وقتی کاربر مسیر خراب کد رو می‌زنه پیدا می‌شن.",
          "TypeScript یه لایه‌ی type در compile-time اضافه می‌کنه. ادیتورت قبل از اجرای کد، اشتباهات رو بهت می‌گه. Refactor کردن امن می‌شه. Shape هر function، هر component، هر API response در خود typeها مستند می‌شه.",
        ],
      },
    },
    lessons: [
      {
        en: {
          heading: "Basic types — strings, numbers, booleans, arrays",
          body: [
            "TypeScript ships with the same primitives JavaScript has, plus a few extras like `unknown`, `never`, and `enum`. Annotate variables explicitly when the type isn't obvious from the value, otherwise let inference do the work.",
          ],
          code: {
            lang: "ts",
            code: `let username: string = "amir";
let count: number = 0;
let isAdmin: boolean = false;
let scores: number[] = [10, 25, 7];

// Tuple — fixed length, mixed types
let pair: [string, number] = ["Amir", 30];

// let + type guard via typeof
if (typeof username === "string") {
  console.log(username.toUpperCase());
}`,
          },
        },
        fa: {
          heading: "Typeهای پایه — string، number، boolean، array",
          body: [
            "TypeScript همان primitiveهای JavaScript رو داره، به‌علاوه چند مورد اضافه مثل `unknown`، `never` و `enum`. وقتی type از روی value مشخص نیست، متغیرها رو صریح annotate کن؛ در غیر این صورت، inference رو بذار کار کنه.",
          ],
          code: {
            lang: "ts",
            code: `let username: string = "amir";
let count: number = 0;
let isAdmin: boolean = false;
let scores: number[] = [10, 25, 7];

// Tuple — طول ثابت، typeهای مخلوط
let pair: [string, number] = ["Amir", 30];

// let + type guard با typeof
if (typeof username === "string") {
  console.log(username.toUpperCase());
}`,
          },
        },
      },
      {
        en: {
          heading: "Interfaces — describe the shape of an object",
          body: [
            "An `interface` is a contract: any object that claims to satisfy it must have those properties with those types. Use interfaces for objects you pass around — props, API responses, store state.",
          ],
          code: {
            lang: "ts",
            code: `interface User {
  id: number;
  name: string;
  email: string;
  role?: "admin" | "user";  // optional, with union
  readonly createdAt: Date;
}

function greet(u: User) {
  return \`Hello, \${u.name}\`;
}

greet({ id: 1, name: "Amir", email: "a@b.com", createdAt: new Date() });`,
          },
        },
        fa: {
          heading: "Interface — shape یک object رو توصیف می‌کنه",
          body: [
            "یه `interface` یه قرارداده: هر object که ادعا می‌کنه اونو ارضا می‌کنه، باید اون propertyها رو با اون typeها داشته باشه. از interface برای objectهایی که پاس می‌دیم — props، API responseها، store state.",
          ],
          code: {
            lang: "ts",
            code: `interface User {
  id: number;
  name: string;
  email: string;
  role?: "admin" | "user";  // optional، با union
  readonly createdAt: Date;
}

function greet(u: User) {
  return \`سلام، \${u.name}\`;
}

greet({ id: 1, name: "Amir", email: "a@b.com", createdAt: new Date() });`,
          },
        },
      },
      {
        en: {
          heading: "Generics — write code that works with any type",
          body: [
            "A generic is a type parameter. Instead of writing `useLocalStorage<string>` AND `useLocalStorage<number>` AND `useLocalStorage<User>`, you write `useLocalStorage<T>` once and the caller decides `T`.",
          ],
          code: {
            lang: "ts",
            code: `function first<T>(arr: T[]): T | undefined {
  return arr[0];
}

const n = first([1, 2, 3]);       // type: number | undefined
const s = first(["a", "b"]);      // type: string | undefined

// Multiple type params
function map<T, U>(arr: T[], fn: (x: T) => U): U[] {
  return arr.map(fn);
}`,
          },
        },
        fa: {
          heading: "Generic — کدی بنویس که با هر typeی کار کنه",
          body: [
            "یه generic یه type parameterه. به‌جای نوشتن `useLocalStorage<string>` و `useLocalStorage<number>` و `useLocalStorage<User>`، یه بار `useLocalStorage<T>` رو بنویس و صداکننده `T` رو تعیین کنه.",
          ],
          code: {
            lang: "ts",
            code: `function first<T>(arr: T[]): T | undefined {
  return arr[0];
}

const n = first([1, 2, 3]);       // type: number | undefined
const s = first(["a", "b"]);      // type: string | undefined

// چند type parameter
function map<T, U>(arr: T[], fn: (x: T) => U): U[] {
  return arr.map(fn);
}`,
          },
        },
      },
      {
        en: {
          heading: "Type narrowing — runtime checks the compiler understands",
          body: [
            "When you check `typeof x === \"string\"` inside an `if`, TS narrows the type of `x` to `string` inside that block. Discriminated unions take this further — a literal `type` field lets TS pick the right branch in a switch.",
          ],
          code: {
            lang: "ts",
            code: `type Result =
  | { status: "ok"; data: User }
  | { status: "error"; message: string };

function handle(r: Result) {
  if (r.status === "ok") {
    console.log(r.data.name);  // TS knows r.data exists
  } else {
    console.log(r.message);     // TS knows r.message exists
  }
}`,
          },
        },
        fa: {
          heading: "Type narrowing — runtime checkهایی که compiler می‌فهمه",
          body: [
            "وقتی `typeof x === \"string\"` رو داخل `if` چک می‌کنی، TS توی اون block نوع `x` رو به `string` narrow می‌کنه. discriminated union این رو جلوتر می‌بره — یه literal `type` field به TS اجازه می‌ده branch درست رو در switch انتخاب کنه.",
          ],
          code: {
            lang: "ts",
            code: `type Result =
  | { status: "ok"; data: User }
  | { status: "error"; message: string };

function handle(r: Result) {
  if (r.status === "ok") {
    console.log(r.data.name);  // TS می‌دونه r.data هست
  } else {
    console.log(r.message);     // TS می‌دونه r.message هست
  }
}`,
          },
        },
      },
    ],
    takeaway: {
      en: {
        heading: "Key takeaways",
        bullets: [
          "Let TypeScript infer types when it can — only annotate where it adds value.",
          "Use `interface` for object shapes, `type` for unions and utility types.",
          "Generics let you write one function that works for many types — without `any`.",
          "Discriminated unions + switch = the cleanest way to model state machines.",
        ],
      },
      fa: {
        heading: "نکات کلیدی",
        bullets: [
          "بذار TypeScript typeها رو inferred کنه وقتی می‌تونه — فقط جایی annotate کن که ارزش اضافه می‌کنه.",
          "از `interface` برای shapeهای object، از `type` برای union و utility type استفاده کن.",
          "Generic بهت اجازه می‌ده یه function بنویسی که برای چند type کار کنه — بدون `any`.",
          "Discriminated union + switch = تمیزترین راه برای مدل کردن state machine.",
        ],
      },
    },
  },

  "react-ts-setup": {
    id: "react-ts-setup",
    intro: {
      en: {
        heading: "Pick the right scaffold",
        body: [
          "Two main ways to start a React + TS project today: Vite (lightweight SPA) or Next.js (full-stack with App Router). Vite is faster to boot and simpler to reason about. Next.js gives you routing, SSR/SSG, and API routes for free — pick it if you need any of those.",
          "Either way, the workflow is the same: scaffold, then immediately configure tsconfig path aliases and ESLint with TypeScript-aware rules. You'll thank yourself in two weeks.",
        ],
      },
      fa: {
        heading: "scaffold درست رو انتخاب کن",
        body: [
          "دو راه اصلی برای شروع پروژه‌ی React + TS امروز: Vite (SPA سبک) یا Next.js (full-stack با App Router). Vite سریع‌تر boot می‌شه و ساده‌تره. Next.js routing، SSR/SSG، و API routes رو رایگان می‌ده — اگه هرکدوم رو نیاز داری، اون رو انتخاب کن.",
          "تو هر دو حالت، workflow یکی هست: scaffold کن، بعد فوراً tsconfig path aliases و ESLint با ruleهای TypeScript-aware رو پیکربندی کن. دو هفته بعد از خودت تشکر می‌کنی.",
        ],
      },
    },
    lessons: [
      {
        en: {
          heading: "Scaffold with Vite",
          body: [
            "One command — Vite handles Babel/SWC, TypeScript, HMR, and build. You get an SPA you can deploy anywhere static.",
          ],
          code: {
            lang: "bash",
            code: `# Scaffold a TS + React app
bun create vite my-app --template react-ts
cd my-app
bun install
bun run dev   # → http://localhost:5173`,
          },
        },
        fa: {
          heading: "Scaffold با Vite",
          body: [
            "یه دستور — Vite به Babel/SWC، TypeScript، HMR و build رسیدگی می‌کنه. یه SPA می‌گیری که می‌تونی هرجا static deploy کنی.",
          ],
          code: {
            lang: "bash",
            code: `# Scaffold یک اپ TS + React
bun create vite my-app --template react-ts
cd my-app
bun install
bun run dev   # → http://localhost:5173`,
          },
        },
      },
      {
        en: {
          heading: "Scaffold with Next.js",
          body: [
            "Next.js is the right pick when you need routing, server components, or API routes. The App Router (in `app/`) is the modern default.",
          ],
          code: {
            lang: "bash",
            code: `bunx create-next-app@latest my-app \\
  --typescript --tailwind --app \\
  --eslint --import-alias "@/*"
cd my-app
bun run dev   # → http://localhost:3000`,
          },
        },
        fa: {
          heading: "Scaffold با Next.js",
          body: [
            "Next.js انتخاب درستیه وقتی routing، server componentها یا API routes نیاز داری. App Router (در `app/`) پیش‌فرض مدرنه.",
          ],
          code: {
            lang: "bash",
            code: `bunx create-next-app@latest my-app \\
  --typescript --tailwind --app \\
  --eslint --import-alias "@/*"
cd my-app
bun run dev   # → http://localhost:3000`,
          },
        },
      },
      {
        en: {
          heading: "Path aliases in tsconfig",
          body: [
            "Stop the `../../../`-hell. Map `@/*` to `src/*` once and import from anywhere.",
          ],
          code: {
            lang: "json",
            code: `{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}`,
          },
        },
        fa: {
          heading: "Path aliases در tsconfig",
          body: [
            "به `../../../`-hell پایان بده. `@/*` رو به `src/*` map کن و از هرجا import کن.",
          ],
          code: {
            lang: "json",
            code: `{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}`,
          },
        },
      },
    ],
    takeaway: {
      en: {
        heading: "Key takeaways",
        bullets: [
          "Vite = SPA. Next.js = full-stack. Pick based on what you actually need.",
          "Always set path aliases — `@/components/...` beats `../../../components/...`.",
          "Turn on ESLint with `next/typescript` recommended rules from day one.",
        ],
      },
      fa: {
        heading: "نکات کلیدی",
        bullets: [
          "Vite = SPA. Next.js = full-stack. بر اساس چیزی که واقعاً نیاز داری انتخاب کن.",
          "همیشه path aliases رو روشن کن — `@/components/...` از `../../../components/...` بهتره.",
          "ESLint رو با ruleهای پیشنهادی `next/typescript` از روز اول روشن کن.",
        ],
      },
    },
  },

  "components-props": {
    id: "components-props",
    intro: {
      en: {
        heading: "Components are functions, props are arguments",
        body: [
          "A React function component is just a function that takes a `props` object and returns JSX. TypeScript's job is to make the shape of `props` explicit — so when you mistype `onClck` instead of `onClick`, your editor catches it before your user does.",
          "Everything in this chapter builds on that single idea: type the props, type the children, type the events. The compiler does the rest.",
        ],
      },
      fa: {
        heading: "Componentها function هستن، props argument",
        body: [
          "یه React function component فقط یه function هست که یه object `props` می‌گیره و JSX برمی‌گردونه. کار TypeScript اینه که shape `props` رو صریح کنه — تا وقتی `onClck` به‌جای `onClick` تایپ می‌کنی، ادیتورت قبل از کاربرت می‌گیره.",
          "همه‌چیز در این فصل روی همین یه ایده بنا می‌شه: props رو type کن، children رو type کن، eventها رو type کن. compiler کار بقیه رو انجام می‌ده.",
        ],
      },
    },
    lessons: [
      {
        en: {
          heading: "Typing props — the canonical pattern",
          body: [
            "Define a `Props` type, then destructure in the function signature. Optional props get a `?`. Default values go in the destructure.",
          ],
          code: {
            lang: "tsx",
            code: `type ButtonProps = {
  variant?: "primary" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
};

export function Button({
  variant = "primary",
  size = "md",
  onClick,
  children,
}: ButtonProps) {
  return (
    <button
      className={\`btn btn-\${variant} btn-\${size}\`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}`,
          },
        },
        fa: {
          heading: "Typing کردن props — الگوی کانونیک",
          body: [
            "یه type `Props` تعریف کن، بعد در function signature destructrue کن. propهای optional یه `?` می‌گیرن. default valueها در destructure قرار می‌گیرن.",
          ],
          code: {
            lang: "tsx",
            code: `type ButtonProps = {
  variant?: "primary" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
};

export function Button({
  variant = "primary",
  size = "md",
  onClick,
  children,
}: ButtonProps) {
  return (
    <button
      className={\`btn btn-\${variant} btn-\${size}\`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}`,
          },
        },
      },
      {
        en: {
          heading: "The children prop — what goes between the tags",
          body: [
            "`React.ReactNode` is the broadest type — accepts strings, numbers, JSX, arrays. `React.ReactElement` only accepts JSX. Use `ReactNode` unless you have a reason not to.",
          ],
          code: {
            lang: "tsx",
            code: `type CardProps = {
  title: string;
  children: React.ReactNode;  // accepts anything renderable
};

export function Card({ title, children }: CardProps) {
  return (
    <section className="card">
      <h3>{title}</h3>
      <div>{children}</div>
    </section>
  );
}

// Usage — all valid
<Card title="Hi">Hello</Card>
<Card title="Hi"><p>Para</p></Card>
<Card title="Hi">{[<p key="1" />, <p key="2" />]}</Card>`,
          },
        },
        fa: {
          heading: "propی children — چی بین tagها قرار می‌گیره",
          body: [
            "`React.ReactNode` broadest typeه — string، number، JSX، array قبول می‌کنه. `React.ReactElement` فقط JSX قبول می‌کنه. از `ReactNode` استفاده کن مگه دلیل داشته باشی.",
          ],
          code: {
            lang: "tsx",
            code: `type CardProps = {
  title: string;
  children: React.ReactNode;  // هرچی renderable باشه
};

export function Card({ title, children }: CardProps) {
  return (
    <section className="card">
      <h3>{title}</h3>
      <div>{children}</div>
    </section>
  );
}`,
          },
        },
      },
      {
        en: {
          heading: "Polymorphic components with generics",
          body: [
            "When a component can render as different HTML elements (like `as=\"a\"` vs `as=\"button\"`), use a generic + `React.ComponentPropsWithRef` to keep the right props.",
          ],
          code: {
            lang: "tsx",
            code: `type ButtonProps<C extends React.ElementType = "button"> = {
  as?: C;
} & React.ComponentPropsWithRef<C>;

export function Button<C extends React.ElementType = "button">({
  as,
  ...rest
}: ButtonProps<C>) {
  const Comp = as ?? "button";
  return <Comp {...rest} />;
}

// TS knows anchor props are valid here
<Button as="a" href="/about" target="_blank">About</Button>`,
          },
        },
        fa: {
          heading: "Componentهای polymorphic با generic",
          body: [
            "وقتی یه component می‌تونه به‌عنوان HTML elementهای مختلف render بشه (مثل `as=\"a\"` یا `as=\"button\"`)، از یه generic + `React.ComponentPropsWithRef` استفاده کن تا propهای درست حفظ بشن.",
          ],
          code: {
            lang: "tsx",
            code: `type ButtonProps<C extends React.ElementType = "button"> = {
  as?: C;
} & React.ComponentPropsWithRef<C>;

export function Button<C extends React.ElementType = "button">({
  as,
  ...rest
}: ButtonProps<C>) {
  const Comp = as ?? "button";
  return <Comp {...rest} />;
}

// TS اینجا می‌دونه propهای anchor معتبرن
<Button as="a" href="/about" target="_blank">About</Button>`,
          },
        },
      },
    ],
    takeaway: {
      en: {
        heading: "Key takeaways",
        bullets: [
          "Always type props — even simple ones. The cost is one line, the payoff is huge.",
          "Use `React.ReactNode` for children — it's the most flexible.",
          "Polymorphic components need generics + `ComponentPropsWithRef`.",
        ],
      },
      fa: {
        heading: "نکات کلیدی",
        bullets: [
          "همیشه props رو type کن — حتی ساده‌هاشون. هزینه‌ش یه خطه، پاداشش بزرگه.",
          "از `React.ReactNode` برای children استفاده کن — انعطاف‌پذیرترینه.",
          "componentهای polymorphic به generic + `ComponentPropsWithRef` نیاز دارن.",
        ],
      },
    },
  },

  "state-events": {
    id: "state-events",
    intro: {
      en: {
        heading: "State is the data that drives your UI",
        body: [
          "Every interactive React component has state — data that changes over time, and when it changes, the component re-renders. `useState` is the hook that makes a value reactive. Controlled inputs are how you bind state to a form field.",
          "Once you understand state + events, you understand 80% of what makes a React app tick. The patterns in this chapter appear in every component you'll ever write.",
        ],
      },
      fa: {
        heading: "state داده‌ایه که UI رو هدایت می‌کنه",
        body: [
          "هر interactive React component یه state داره — داده‌ای که با زمان عوض می‌شه، و وقتی عوض می‌شه، component re-render می‌شه. `useState` هوکیه که یه value رو reactive می‌کنه. controlled inputها چطوری state رو به یه form field bind می‌کنن.",
          "وقتی state + eventها رو فهمیدی، ۸۰٪ از چیزی که یه React app رو تیک‌تاک می‌کنه فهمیدی. الگوهای این فصل در هر component که تا حالا می‌نویسی ظاهر می‌شن.",
        ],
      },
    },
    lessons: [
      {
        en: {
          heading: "useState — the basic state hook",
          body: [
            "Returns a tuple: the current value, and a setter. Call the setter with the new value (or an updater function for derived state).",
          ],
          code: {
            lang: "tsx",
            code: `import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(c => c + 1)}>
      Clicked {count} times
    </button>
  );
}`,
          },
        },
        fa: {
          heading: "useState — هوک پایه‌ی state",
          body: [
            "یه tuple برمی‌گردونه: value فعلی، و یه setter. setter رو با value جدید (یا یه updater function برای derived state) صدا بزن.",
          ],
          code: {
            lang: "tsx",
            code: `import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(c => c + 1)}>
      {count} بار کلیک شد
    </button>
  );
}`,
          },
        },
      },
      {
        en: {
          heading: "Controlled inputs — bind state to a form field",
          body: [
            "Make React the source of truth: `value` and `onChange` on the input, with state behind both. This is the controlled pattern — the input's visible value always reflects your state.",
          ],
          code: {
            lang: "tsx",
            code: `export function NameForm() {
  const [name, setName] = useState("");

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      alert(\`Hi \${name}\`);
    }}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your name"
      />
      <button type="submit">Submit</button>
    </form>
  );
}`,
          },
        },
        fa: {
          heading: "Controlled inputها — bind کن state رو به form field",
          body: [
            "React رو منبع حقیقت بکن: `value` و `onChange` روی input، با state پشت هر دو. این الگوی controlledه — value قابل‌مشاهده‌ی input همیشه stateت رو منعکس می‌کنه.",
          ],
          code: {
            lang: "tsx",
            code: `export function NameForm() {
  const [name, setName] = useState("");

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      alert(\`سلام \${name}\`);
    }}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="اسمت"
      />
      <button type="submit">ارسال</button>
    </form>
  );
}`,
          },
        },
      },
      {
        en: {
          heading: "Event types — let TypeScript infer them",
          body: [
            "You usually don't need to annotate event types yourself — `onChange={(e) => ...}` infers `e: React.ChangeEvent<HTMLInputElement>`. Annotate only when you extract the handler into a named function.",
          ],
          code: {
            lang: "tsx",
            code: `// Inline — TS infers the event type
<input onChange={(e) => setName(e.target.value)} />

// Extracted — annotate the event
function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
}

<form onSubmit={handleSubmit}>...</form>`,
          },
        },
        fa: {
          heading: "Event typeها — بذار TypeScript inferred کنه",
          body: [
            "معمولاً نیازی نیست event typeها رو خودت annotate کنی — `onChange={(e) => ...}` به‌صورت inferred `e: React.ChangeEvent<HTMLInputElement>` می‌شه. فقط وقتی handler رو به‌عنوان named function extract می‌کنی annotate کن.",
          ],
          code: {
            lang: "tsx",
            code: `// Inline — TS نوع event رو inferred می‌کنه
<input onChange={(e) => setName(e.target.value)} />

// Extracted — event رو annotate کن
function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
}

<form onSubmit={handleSubmit}>...</form>`,
          },
        },
      },
    ],
    takeaway: {
      en: {
        heading: "Key takeaways",
        bullets: [
          "useState returns `[value, setter]` — never destructure setter as the first item.",
          "Use the updater form (`setX(x => x + 1)`) when the next state depends on the current.",
          "Controlled inputs (value + onChange) are the React-idiomatic form pattern.",
        ],
      },
      fa: {
        heading: "نکات کلیدی",
        bullets: [
          "useState `[value, setter]` برمی‌گردونه — هیچ‌وقت setter رو به‌عنوان item اول destructure نکن.",
          "از فرم updater (`setX(x => x + 1)`) وقتی state بعدی به state فعلی وابسته‌ست استفاده کن.",
          "controlled inputها (value + onChange) الگوی form idiomatic در React هستن.",
        ],
      },
    },
  },

  "effects-lifecycle": {
    id: "effects-lifecycle",
    intro: {
      en: {
        heading: "useEffect — when state needs to reach outside React",
        body: [
          "Some things can't happen during render: fetching data, subscribing to a WebSocket, reading from localStorage, manually focusing a DOM node. These are side effects, and `useEffect` is how you schedule them.",
          "The hook takes a function and an array of dependencies. React runs the function after render, and re-runs it when any dependency changes. The cleanup function (returned from the effect) runs before the next re-run and on unmount.",
        ],
      },
      fa: {
        heading: "useEffect — وقتی state باید از React بیرون بره",
        body: [
          "بعضی چیزها نمی‌تونن در حین render اتفاق بیفتن: fetch داده، subscribe به WebSocket، خواندن از localStorage، manually focus کردن یه DOM node. این‌ها side effect هستن، و `useEffect` چطوری اون‌ها رو schedule می‌کنی.",
          "هوک یه function و یه array از dependencyها می‌گیره. React بعد از render function رو اجرا می‌کنه، و وقتی هر dependency تغییر می‌کنه، دوباره اجرا می‌کنه. cleanup function (که از effect برگردانده می‌شه) قبل از re-run بعدی و در unmount اجرا می‌شه.",
        ],
      },
    },
    lessons: [
      {
        en: {
          heading: "The basic shape — function + dependency array",
          body: [
            "Every effect has two parts: the body (what to do) and the deps (when to re-run it). Empty deps `[]` = run only once after mount. No deps = run after every render (rarely what you want).",
          ],
          code: {
            lang: "tsx",
            code: `import { useEffect, useState } from "react";

export function UserProfile({ userId }: { userId: number }) {
  const [user, setUser] = useState<User | null>(null);

  // Re-runs when userId changes
  useEffect(() => {
    let cancelled = false;
    fetch(\`/api/users/\${userId}\`)
      .then(r => r.json())
      .then(data => {
        if (!cancelled) setUser(data);
      });

    return () => { cancelled = true; };
  }, [userId]);

  return <div>{user?.name ?? "Loading..."}</div>;
}`,
          },
        },
        fa: {
          heading: "شکل پایه — function + dependency array",
          body: [
            "هر effect دو بخش داره: body (چی کار کنه) و dependencyها (کِی re-run بشه). dependency خالی `[]` = فقط یک بار بعد از mount اجرا بشه. بدون dependency = بعد از هر render (بعضی مواقع چیزی که می‌خوای نیست).",
          ],
          code: {
            lang: "tsx",
            code: `import { useEffect, useState } from "react";

export function UserProfile({ userId }: { userId: number }) {
  const [user, setUser] = useState<User | null>(null);

  // وقتی userId تغییر می‌کنه re-run می‌شه
  useEffect(() => {
    let cancelled = false;
    fetch(\`/api/users/\${userId}\`)
      .then(r => r.json())
      .then(data => {
        if (!cancelled) setUser(data);
      });

    return () => { cancelled = true; };
  }, [userId]);

  return <div>{user?.name ?? "در حال بارگذاری..."}</div>;
}`,
          },
        },
      },
      {
        en: {
          heading: "AbortController — cancel in-flight requests",
          body: [
            "When the user navigates away or changes `userId`, the old fetch is still pending. If it resolves now, it tries to call `setUser` on an unmounted component. Abort the request in cleanup to prevent both memory leaks and React warnings.",
          ],
          code: {
            lang: "tsx",
            code: `useEffect(() => {
  const ctrl = new AbortController();
  fetch(\`/api/users/\${userId}\`, { signal: ctrl.signal })
    .then(r => r.json())
    .then(setUser)
    .catch(err => {
      if (err.name !== "AbortError") setError(err);
    });

  return () => ctrl.abort();
}, [userId]);`,
          },
        },
        fa: {
          heading: "AbortController — درخواست‌های pending رو لغو کن",
          body: [
            "وقتی کاربر navigate می‌کنه یا `userId` رو عوض می‌کنه، fetch قدیمی هنوز pendingه. اگه الان resolve بشه، سعی می‌کنه `setUser` رو روی یه component unmounted صدا بزنه. درخواست رو در cleanup لغو کن تا هم memory leak و هم warningهای React جلوگیری بشه.",
          ],
          code: {
            lang: "tsx",
            code: `useEffect(() => {
  const ctrl = new AbortController();
  fetch(\`/api/users/\${userId}\`, { signal: ctrl.signal })
    .then(r => r.json())
    .then(setUser)
    .catch(err => {
      if (err.name !== "AbortError") setError(err);
    });

  return () => ctrl.abort();
}, [userId]);`,
          },
        },
      },
      {
        en: {
          heading: "Strict mode double-mount — it's a feature, not a bug",
          body: [
            "In React 18+ dev mode, every effect runs twice on mount (mount → unmount → mount). This surfaces bugs in your cleanup logic — if you wrote it correctly, the second mount should produce a clean state. Don't disable Strict mode; fix the cleanup.",
          ],
          code: {
            lang: "tsx",
            code: `// In dev: this effect runs twice.
// In prod: once. Same code, no changes needed.
useEffect(() => {
  const id = setInterval(tick, 1000);
  return () => clearInterval(id);  // ← must clean up!
}, []);`,
          },
        },
        fa: {
          heading: "Strict mode double-mount — featureه، bug نه",
          body: [
            "در React 18+ dev mode، هر effect دو بار در mount اجرا می‌شه (mount → unmount → mount). این bugها در منطق cleanup تو رو surfacing می‌کنه — اگه درست نوشتی، mount دوم باید یه state تمیز تولید کنه. Strict mode رو غیرفعال نکن؛ cleanup رو درست کن.",
          ],
          code: {
            lang: "tsx",
            code: `// در dev: این effect دو بار اجرا می‌شه.
// در prod: یک بار. همین کد، بدون تغییر.
useEffect(() => {
  const id = setInterval(tick, 1000);
  return () => clearInterval(id);  // ← باید cleanup بشه!
}, []);`,
          },
        },
      },
    ],
    takeaway: {
      en: {
        heading: "Key takeaways",
        bullets: [
          "Effects are for side effects only — never for deriving data you can compute during render.",
          "Always pass a dependency array — `[]` for mount-only, `[x]` for re-run on x change.",
          "If your effect subscribes/fetches/starts an interval, your cleanup must unsubscribe/abort/clear.",
        ],
      },
      fa: {
        heading: "نکات کلیدی",
        bullets: [
          "effect فقط برای side effect هست — هیچ‌وقت برای derived data که می‌تونی در حین render compute کنی نیست.",
          "همیشه یه dependency array پاس بده — `[]` برای mount-only، `[x]` برای re-run در تغییر x.",
          "اگه effectت subscribe/fetch/interval شروع می‌کنه، cleanup باید unsubscribe/abort/clear کنه.",
        ],
      },
    },
  },

  "refs-dom": {
    id: "refs-dom",
    intro: {
      en: {
        heading: "Refs are escape hatches",
        body: [
          "Most React code is declarative — you describe what the UI should look like, React makes it so. But sometimes you need to touch the DOM directly: focus an input, measure an element's size, integrate a non-React library.",
          "`useRef` is the hook for this. The `.current` property holds a mutable value that doesn't trigger re-render when it changes. Stick a DOM node there, or any value you need to persist across renders.",
        ],
      },
      fa: {
        heading: "Refها راه‌فرار هستن",
        body: [
          "بیشتر کد React declarativeه — UI که می‌خوای رو توصیف می‌کنی، React انجامش می‌ده. ولی بعضی وقت‌ها باید مستقیم به DOM دسترسی داشته باشی: focus یه input، اندازه‌ی یه element رو اندازه بگیری، یه library غیر-React رو integrate کنی.",
          "`useRef` هوک اینه. property `.current` یه mutable value نگه می‌دارن که وقتی عوض می‌شه، re-render trigger نمی‌کنه. یه DOM node رو اونجا بذار، یا هر valueای که نیاز داری در renderها persist بشه.",
        ],
      },
    },
    lessons: [
      {
        en: {
          heading: "Focus an input on mount",
          body: [
            "The classic use case: auto-focus an input when a form mounts. Pass the ref to the element's `ref` prop, then call `.focus()` in a `useEffect`.",
          ],
          code: {
            lang: "tsx",
            code: `import { useEffect, useRef } from "react";

export function AutoFocusInput() {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return <input ref={inputRef} placeholder="Auto-focused" />;
}`,
          },
        },
        fa: {
          heading: "Focus یه input در mount",
          body: [
            "use case کلاسیک: auto-focus یه input وقتی form mount می‌شه. ref رو به prop `ref` element بده، بعد `.focus()` رو در یه `useEffect` صدا بزن.",
          ],
          code: {
            lang: "tsx",
            code: `import { useEffect, useRef } from "react";

export function AutoFocusInput() {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return <input ref={inputRef} placeholder="Auto-focused" />;
}`,
          },
        },
      },
      {
        en: {
          heading: "forwardRef — let parents pass refs to your component",
          body: [
            "By default, a function component doesn't accept a `ref` prop. `forwardRef` wraps your component so the parent can pass one in — useful for design systems where the parent needs to control a child input.",
          ],
          code: {
            lang: "tsx",
            code: `import { forwardRef } from "react";

type InputProps = {
  label: string;
  defaultValue?: string;
};

export const FancyInput = forwardRef<HTMLInputElement, InputProps>(
  function FancyInput({ label, defaultValue }, ref) {
    return (
      <label>
        {label}
        <input ref={ref} defaultValue={defaultValue} />
      </label>
    );
  }
);

// Usage
<FancyInput ref={parentRef} label="Email" />`,
          },
        },
        fa: {
          heading: "forwardRef — به parentها اجازه بده ref رو به componentت پاس بدن",
          body: [
            "به‌صورت پیش‌فرض، یه function component prop `ref` رو قبول نمی‌کنه. `forwardRef` componentت رو wrap می‌کنه تا parent بتونه یکی پاس بده — برای design systemها مفیده که parent لازمه child input رو کنترل کنه.",
          ],
          code: {
            lang: "tsx",
            code: `import { forwardRef } from "react";

type InputProps = {
  label: string;
  defaultValue?: string;
};

export const FancyInput = forwardRef<HTMLInputElement, InputProps>(
  function FancyInput({ label, defaultValue }, ref) {
    return (
      <label>
        {label}
        <input ref={ref} defaultValue={defaultValue} />
      </label>
    );
  }
);

// استفاده
<FancyInput ref={parentRef} label="ایمیل" />`,
          },
        },
      },
      {
        en: {
          heading: "useImperativeHandle — expose only what you want",
          body: [
            "When a parent has a ref to your component, they could in theory touch any DOM API. `useImperativeHandle` lets you expose a custom, controlled API instead of the raw DOM node.",
          ],
          code: {
            lang: "tsx",
            code: `import { forwardRef, useImperativeHandle, useRef } from "react";

type Handle = { focus: () => void; clear: () => void };

export const ControlledInput = forwardRef<Handle, { label: string }>(
  function ControlledInput({ label }, ref) {
    const inputRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => ({
      focus: () => inputRef.current?.focus(),
      clear: () => {
        if (inputRef.current) inputRef.current.value = "";
      },
    }));

    return <input ref={inputRef} />;
  }
);

// Parent can call .focus() and .clear(), nothing else
const ref = useRef<Handle>(null);
<button onClick={() => ref.current?.clear()} />`,
          },
        },
        fa: {
          heading: "useImperativeHandle — فقط چیزی که می‌خوای رو expose کن",
          body: [
            "وقتی parent یه ref به componentت داره، در تئوری می‌تونه به هر DOM API دسترسی داشته باشه. `useImperativeHandle` بهت اجازه می‌ده یه API custom و controlled به‌جای DOM node خام expose کنی.",
          ],
          code: {
            lang: "tsx",
            code: `import { forwardRef, useImperativeHandle, useRef } from "react";

type Handle = { focus: () => void; clear: () => void };

export const ControlledInput = forwardRef<Handle, { label: string }>(
  function ControlledInput({ label }, ref) {
    const inputRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => ({
      focus: () => inputRef.current?.focus(),
      clear: () => {
        if (inputRef.current) inputRef.current.value = "";
      },
    }));

    return <input ref={inputRef} />;
  }
);

// Parent می‌تونه .focus() و .clear() رو صدا بزنه، هیچ چیز دیگه
const ref = useRef<Handle>(null);
<button onClick={() => ref.current?.clear()} />`,
          },
        },
      },
    ],
    takeaway: {
      en: {
        heading: "Key takeaways",
        bullets: [
          "useRef holds a value across renders without triggering re-renders.",
          "Pass it to `ref=` to get the underlying DOM node.",
          "forwardRef + useImperativeHandle = controlled API for design-system components.",
        ],
      },
      fa: {
        heading: "نکات کلیدی",
        bullets: [
          "useRef یه value رو در renderها نگه می‌دارن بدون re-render trigger کردن.",
          "برای گرفتن DOM node underlying، اونو به `ref=` بده.",
          "forwardRef + useImperativeHandle = API controlled برای componentهای design-system.",
        ],
      },
    },
  },

  "context-reducer": {
    id: "context-reducer",
    intro: {
      en: {
        heading: "Prop drilling is a code smell",
        body: [
          "When you pass the same prop through 5 layers of components just so the deepest one can use it, you're prop drilling. It works, but it's brittle — any change ripples through every intermediate component.",
          "Context solves this. A Provider high in the tree makes a value available to every descendant, no matter how deep. Combine with `useReducer` for complex state that needs typed, predictable updates.",
        ],
      },
      fa: {
        heading: "prop drilling یه code smellه",
        body: [
          "وقتی یه prop رو از ۵ لایه component پاس می‌دی تا عمیق‌ترین اون یکی بتونه استفاده کنه، در حال prop drilling هستی. کار می‌کنه، ولی شکننده‌ست — هر تغییر در هر component میانی ripple می‌شه.",
          "Context این رو حل می‌کنه. یه Provider در بالای درخت، یه value رو به هر descendant قابل‌access می‌کنه، بدون توجه به عمیق بودن. با `useReducer` برای state پیچیده‌ای که نیاز به update تایپ‌شده و قابل‌پیش‌بینی داره ترکیبش کن.",
        ],
      },
    },
    lessons: [
      {
        en: {
          heading: "Create + consume a context",
          body: [
            "Call `createContext` with a default value (used when no Provider is found, mostly for testing). Wrap your tree in `<Ctx.Provider value={...}>`. Descendants consume via `useContext(Ctx)`.",
          ],
          code: {
            lang: "tsx",
            code: `import { createContext, useContext } from "react";

type Theme = "dark" | "light";
const ThemeContext = createContext<Theme>("dark");

// Provider
export function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Page />
    </ThemeContext.Provider>
  );
}

// Consumer
function Page() {
  const theme = useContext(ThemeContext);
  return <div className={theme}>...</div>;
}`,
          },
        },
        fa: {
          heading: "یه context بساز + consume کن",
          body: [
            "`createContext` رو با یه value پیش‌فرض صدا بزن (وقتی Provider پیدا نمی‌شه استفاده می‌شه، بیشتر برای تست). درخت رو در `<Ctx.Provider value={...}>` wrap کن. descendantها از طریق `useContext(Ctx)` consume می‌کنن.",
          ],
          code: {
            lang: "tsx",
            code: `import { createContext, useContext } from "react";

type Theme = "dark" | "light";
const ThemeContext = createContext<Theme>("dark");

// Provider
export function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Page />
    </ThemeContext.Provider>
  );
}

// Consumer
function Page() {
  const theme = useContext(ThemeContext);
  return <div className={theme}>...</div>;
}`,
          },
        },
      },
      {
        en: {
          heading: "useReducer for predictable state updates",
          body: [
            "When state has many possible update paths, `useState` becomes a mess of conditional setters. `useReducer` lets you describe all transitions in one place, with a discriminated union of actions.",
          ],
          code: {
            lang: "tsx",
            code: `type State = { count: number; step: number };
type Action =
  | { type: "increment" }
  | { type: "decrement" }
  | { type: "set_step"; step: number }
  | { type: "reset" };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "increment": return { ...state, count: state.count + state.step };
    case "decrement": return { ...state, count: state.count - state.step };
    case "set_step":  return { ...state, step: action.step };
    case "reset":     return { count: 0, step: 1 };
  }
}

const [state, dispatch] = useReducer(reducer, { count: 0, step: 1 });
// dispatch({ type: "set_step", step: 5 })  ← TS checks the payload`,
          },
        },
        fa: {
          heading: "useReducer برای state updateهای قابل‌پیش‌بینی",
          body: [
            "وقتی state چند مسیر update ممکن داره، `useState` یه mess از setterهای شرطی می‌شه. `useReducer` بهت اجازه می‌ده همه‌ی transitionها رو در یه جا توصیف کنی، با یه discriminated union از actionها.",
          ],
          code: {
            lang: "tsx",
            code: `type State = { count: number; step: number };
type Action =
  | { type: "increment" }
  | { type: "decrement" }
  | { type: "set_step"; step: number }
  | { type: "reset" };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "increment": return { ...state, count: state.count + state.step };
    case "decrement": return { ...state, count: state.count - state.step };
    case "set_step":  return { ...state, step: action.step };
    case "reset":     return { count: 0, step: 1 };
  }
}

const [state, dispatch] = useReducer(reducer, { count: 0, step: 1 });
// dispatch({ type: "set_step", step: 5 })  ← TS payload رو چک می‌کنه`,
          },
        },
      },
      {
        en: {
          heading: "Combine Context + useReducer — global typed state",
          body: [
            "Wrap your reducer in a context, expose `dispatch` and `state` via a custom hook, and now any descendant can dispatch actions without prop drilling. The classic Redux pattern, but in 30 lines.",
          ],
          code: {
            lang: "tsx",
            code: `const StoreContext = createContext<{ state: State; dispatch: Dispatch<Action> } | null>(null);

export function StoreProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, { count: 0, step: 1 });
  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
}

export function useStore() {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error("useStore must be inside <StoreProvider>");
  return ctx;
}`,
          },
        },
        fa: {
          heading: "ترکیب Context + useReducer — state global تایپ‌شده",
          body: [
            "reducerت رو در یه context wrap کن، `dispatch` و `state` رو از طریق یه custom hook expose کن، و حالا هر descendant می‌تونه بدون prop drilling actionها رو dispatch کنه. الگوی کلاسیک Redux، ولی در ۳۰ خط.",
          ],
          code: {
            lang: "tsx",
            code: `const StoreContext = createContext<{ state: State; dispatch: Dispatch<Action> } | null>(null);

export function StoreProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, { count: 0, step: 1 });
  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
}

export function useStore() {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error("useStore باید داخل <StoreProvider> باشه");
  return ctx;
}`,
          },
        },
      },
    ],
    takeaway: {
      en: {
        heading: "Key takeaways",
        bullets: [
          "Context = pass values deep without prop drilling.",
          "useReducer = predictable, typed state transitions.",
          "Context + useReducer = the Redux pattern in 30 lines of React.",
        ],
      },
      fa: {
        heading: "نکات کلیدی",
        bullets: [
          "Context = valueها رو عمیق بدون prop drilling پاس بده.",
          "useReducer = transitionهای state قابل‌پیش‌بینی و تایپ‌شده.",
          "Context + useReducer = الگوی Redux در ۳۰ خط React.",
        ],
      },
    },
  },

  "custom-hooks": {
    id: "custom-hooks",
    intro: {
      en: {
        heading: "Custom hooks are the ultimate refactor",
        body: [
          "When the same `useState` + `useEffect` pattern shows up in three components, it's time to extract a custom hook. The rule is simple: if it starts with `use` and uses other hooks, it's a custom hook.",
          "A good custom hook has a clear name (`useLocalStorage`, `useMediaQuery`, `useDebouncedValue`), a focused purpose, and returns either a value or a tuple. Naming it `useThing` makes it instantly discoverable to other developers.",
        ],
      },
      fa: {
        heading: "custom hookها ultimate refactor هستن",
        body: [
          "وقتی یه الگوی `useState` + `useEffect` در سه component ظاهر می‌شه، وقت extract کردن یه custom hookه. قانون ساده‌ست: اگه با `use` شروع می‌شه و از hookهای دیگه استفاده می‌کنه، یه custom hookه.",
          "یه custom hook خوب اسم واضح داره (`useLocalStorage`، `useMediaQuery`، `useDebouncedValue`)، هدف متمرکز، و یا یه value یا یه tuple برمی‌گردونه. اسم‌گذاری `useThing` به طور فوری برای developerهای دیگه قابل‌کشف می‌کنه.",
        ],
      },
    },
    lessons: [
      {
        en: {
          heading: "useLocalStorage — persist state across reloads",
          body: [
            "Wrap `useState` with `localStorage` reads/writes in a `useEffect`. Lazy initialization reads from storage on first render; the effect writes back whenever the value changes.",
          ],
          code: {
            lang: "tsx",
            code: `import { useEffect, useState } from "react";

export function useLocalStorage<T>(key: string, initial: T) {
  const [value, setValue] = useState<T>(() => {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) as T : initial;
    } catch {
      return initial;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {}
  }, [key, value]);

  return [value, setValue] as const;
}`,
          },
        },
        fa: {
          heading: "useLocalStorage — state رو در reloadها حفظ کن",
          body: [
            "`useState` رو با read/writeهای `localStorage` در یه `useEffect` wrap کن. lazy initialization در اولین render از storage می‌خونه؛ effect هر بار value عوض شد برمی‌گرده.",
          ],
          code: {
            lang: "tsx",
            code: `import { useEffect, useState } from "react";

export function useLocalStorage<T>(key: string, initial: T) {
  const [value, setValue] = useState<T>(() => {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) as T : initial;
    } catch {
      return initial;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {}
  }, [key, value]);

  return [value, setValue] as const;
}`,
          },
        },
      },
      {
        en: {
          heading: "useDebouncedValue — delay updates until input settles",
          body: [
            "Great for search boxes that hit an API. The debounced value only updates after the user stops typing for N ms. Cancels the pending timer in cleanup.",
          ],
          code: {
            lang: "tsx",
            code: `import { useEffect, useState } from "react";

export function useDebouncedValue<T>(value: T, delayMs = 300) {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const id = setTimeout(() => setDebounced(value), delayMs);
    return () => clearTimeout(id);
  }, [value, delayMs]);

  return debounced;
}

// Usage — fires API only when user pauses
const [query, setQuery] = useState("");
const debouncedQuery = useDebouncedValue(query, 400);`,
          },
        },
        fa: {
          heading: "useDebouncedValue — updateها رو تا settle شدن input به‌تاخیر بنداز",
          body: [
            "برای search boxهایی که API می‌زنن عالیه. valueی debounced فقط بعد از N ms توقف کاربر از تایپ update می‌شه. timer pending رو در cleanup لغو می‌کنه.",
          ],
          code: {
            lang: "tsx",
            code: `import { useEffect, useState } from "react";

export function useDebouncedValue<T>(value: T, delayMs = 300) {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const id = setTimeout(() => setDebounced(value), delayMs);
    return () => clearTimeout(id);
  }, [value, delayMs]);

  return debounced;
}

// استفاده — فقط وقتی کاربر مکث می‌کنه API رو می‌زنه
const [query, setQuery] = useState("");
const debouncedQuery = useDebouncedValue(query, 400);`,
          },
        },
      },
      {
        en: {
          heading: "Rules of hooks — never break them",
          body: [
            "Hooks must run in the same order on every render. So: only call hooks at the top level (not inside conditions, loops, or nested functions), and only from React functions (components or other hooks).",
          ],
          code: {
            lang: "tsx",
            code: `// ✅ Good — hook at top level, unconditional
function Counter({ initial }: { initial: number }) {
  const [count, setCount] = useState(initial);
  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;
}

// ❌ Bad — conditional hook call
function Bad({ initial }: { initial?: number }) {
  if (initial !== undefined) {
    const [count] = useState(initial);  // breaks hook order!
  }
}`,
          },
        },
        fa: {
          heading: "قوانین hookها — هیچ‌وقت نشکونشون",
          body: [
            "hookها باید در هر render به همون ترتیب اجرا بشن. پس: فقط hookها را در top level صدا بزن (نه داخل condition، loop، یا nested function)، و فقط از functionهای React (component یا hookهای دیگه).",
          ],
          code: {
            lang: "tsx",
            code: `// ✅ خوب — hook در top level، بدون condition
function Counter({ initial }: { initial: number }) {
  const [count, setCount] = useState(initial);
  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;
}

// ❌ بد — conditional hook call
function Bad({ initial }: { initial?: number }) {
  if (initial !== undefined) {
    const [count] = useState(initial);  // hook order رو می‌شکنه!
  }
}`,
          },
        },
      },
    ],
    takeaway: {
      en: {
        heading: "Key takeaways",
        bullets: [
          "Custom hooks = the same pattern showing up three times → extract.",
          "Name them `useThing` — that's how other devs find them.",
          "Hooks must run in the same order on every render — never conditional.",
        ],
      },
      fa: {
        heading: "نکات کلیدی",
        bullets: [
          "custom hook = یه الگو سه بار ظاهر شد → extract کن.",
          "اسم‌شون رو `useThing` بذار — همین‌طور developerهای دیگه پیداشون می‌کنن.",
          "hookها باید در هر render به همون ترتیب اجرا بشن — هیچ‌وقت conditional نباشن.",
        ],
      },
    },
  },

  "performance": {
    id: "performance",
    intro: {
      en: {
        heading: "React is fast — until it isn't",
        body: [
          "Most React apps don't need performance work. The default render model is fine for 95% of cases. The other 5% is when you have huge lists, expensive computations, or animations that need to stay at 60fps.",
          "This chapter covers the four tools React gives you: `memo`, `useMemo`, `useCallback`, and code-splitting via `React.lazy`. Use them sparingly — premature memoization makes code harder to read, not faster.",
        ],
      },
      fa: {
        heading: "React سریعه — تا وقتی نیست",
        body: [
          "بیشتر appهای React نیاز به کار performance ندارن. مدل render پیش‌فرض برای ۹۵٪ caseها خوبه. ۵٪ بقیه وقتیه که listهای بزرگ، computationهای گرون، یا animationهایی که باید در ۶۰fps بمونن دارن.",
          "این فصل چهار toolی که React بهت می‌ده رو پوشش می‌ده: `memo`، `useMemo`، `useCallback`، و code-splitting از طریق `React.lazy`. به‌نجات‌شون استفاده کن — memoization زودرس کد رو سخت‌تر می‌خونه، نه سریع‌تر.",
        ],
      },
    },
    lessons: [
      {
        en: {
          heading: "React.memo — skip re-renders when props are equal",
          body: [
            "Wrap a component in `memo` and React will skip re-rendering it if all props are shallowly equal. Best for components that render often with stable props (like list items in a big list).",
          ],
          code: {
            lang: "tsx",
            code: `import { memo } from "react";

type ItemProps = { id: number; title: string; onSelect: (id: number) => void };

export const Item = memo(function Item({ id, title, onSelect }: ItemProps) {
  // Skips re-render if id, title, onSelect are all unchanged
  return (
    <li>
      <button onClick={() => onSelect(id)}>{title}</button>
    </li>
  );
});`,
          },
        },
        fa: {
          heading: "React.memo — re-renderها رو وقتی propها برابرن skip کن",
          body: [
            "یه component رو در `memo` wrap کن و React اونو re-render نمی‌کنه اگه همه‌ی propها shallowly برابر باشن. برای componentهایی که اغلب با propهای stable render می‌شن (مثل itemهای list در یه list بزرگ) بهترینه.",
          ],
          code: {
            lang: "tsx",
            code: `import { memo } from "react";

type ItemProps = { id: number; title: string; onSelect: (id: number) => void };

export const Item = memo(function Item({ id, title, onSelect }: ItemProps) {
  // اگه id، title، onSelect همگی بدون تغییر باشن re-render skip می‌شه
  return (
    <li>
      <button onClick={() => onSelect(id)}>{title}</button>
    </li>
  );
});`,
          },
        },
      },
      {
        en: {
          heading: "useMemo + useCallback — cache expensive work",
          body: [
            "If a component receives an inline function or array as a prop, every parent re-render creates a new reference, breaking `memo`. `useCallback` stabilizes the function; `useMemo` stabilizes the derived value.",
          ],
          code: {
            lang: "tsx",
            code: `function Parent({ data }: { data: BigItem[] }) {
  // Without useCallback, this is a new fn on every render
  const handleSelect = useCallback((id: number) => {
    console.log("selected", id);
  }, []);

  // Without useMemo, this filter runs on every render
  const activeItems = useMemo(
    () => data.filter(item => item.active),
    [data]
  );

  return <List items={activeItems} onSelect={handleSelect} />;
}`,
          },
        },
        fa: {
          heading: "useMemo + useCallback — cache کن کار گرون رو",
          body: [
            "اگه یه component یه inline function یا array به‌عنوان prop دریافت می‌کنه، هر re-render والد یه reference جدید می‌سازه که `memo` رو می‌شکنه. `useCallback` function رو stabilize می‌کنه؛ `useMemo` valueی derived رو stabilize می‌کنه.",
          ],
          code: {
            lang: "tsx",
            code: `function Parent({ data }: { data: BigItem[] }) {
  // بدون useCallback، این در هر render یه fn جدیده
  const handleSelect = useCallback((id: number) => {
    console.log("selected", id);
  }, []);

  // بدون useMemo، این filter در هر render اجرا می‌شه
  const activeItems = useMemo(
    () => data.filter(item => item.active),
    [data]
  );

  return <List items={activeItems} onSelect={handleSelect} />;
}`,
          },
        },
      },
      {
        en: {
          heading: "React.lazy + Suspense — code-split by route",
          body: [
            "Shipping 500KB of JS for a settings page most users never see is wasteful. `React.lazy` splits a component into its own chunk, loaded on demand. Wrap with `<Suspense fallback={...}>` for the loading state.",
          ],
          code: {
            lang: "tsx",
            code: `import { lazy, Suspense } from "react";

const Settings = lazy(() => import("./Settings"));

export function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <Settings />
    </Suspense>
  );
}

// Settings.tsx is a separate chunk, loaded only when <Settings> renders`,
          },
        },
        fa: {
          heading: "React.lazy + Suspense — code-split بر اساس route",
          body: [
            "شیپ کردن ۵۰۰KB JS برای یه صفحه‌ی settings که بیشتر کاربرها هیچ‌وقت نمی‌بینن wastefulه. `React.lazy` یه component رو به chunk خودش split می‌کنه، به‌صورت on-demand load می‌شه. با `<Suspense fallback={...}>` برای loading state wrap کن.",
          ],
          code: {
            lang: "tsx",
            code: `import { lazy, Suspense } from "react";

const Settings = lazy(() => import("./Settings"));

export function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <Settings />
    </Suspense>
  );
}

// Settings.tsx یه chunk جداگانه‌ست، فقط وقتی <Settings> render می‌شه load می‌شه`,
          },
        },
      },
    ],
    takeaway: {
      en: {
        heading: "Key takeaways",
        bullets: [
          "Profile before optimizing — the React DevTools Profiler shows you what to fix.",
          "`memo` skips re-renders when props are equal; pair with `useCallback`/`useMemo` for it to actually work.",
          "Code-split routes with `React.lazy` — easy wins for big apps.",
        ],
      },
      fa: {
        heading: "نکات کلیدی",
        bullets: [
          "قبل از optimize کردن profile کن — React DevTools Profiler بهت نشون می‌ده چی رو fix کنی.",
          "`memo` وقتی propها برابرن re-renderها رو skip می‌کنه؛ با `useCallback`/`useMemo` جفت کن تا واقعاً کار کنه.",
          "routeها رو با `React.lazy` code-split کن — winهای آسان برای appهای بزرگ.",
        ],
      },
    },
  },

  "forms-validation": {
    id: "forms-validation",
    intro: {
      en: {
        heading: "Forms are where React apps get hairy",
        body: [
          "A simple login form is easy. A 30-field signup form with async username validation, conditional fields, and cross-field rules is not. The combination of state, validation, accessibility, and error messages needs structure.",
          "Enter `react-hook-form` for state management and `Zod` for schema validation. They pair beautifully: define your schema in Zod, infer the form values type from it, and let react-hook-form handle the rest.",
        ],
      },
      fa: {
        heading: "formها جایی هستن که appهای React پیچیده می‌شن",
        body: [
          "یه form ساده‌ی login آسونه. یه form signup با ۳۰ فیلد، async validation یه username، conditional fieldها، و ruleهای cross-field نیست. ترکیب state، validation، accessibility، و error messageها به ساختار نیاز داره.",
          "وارد `react-hook-form` برای state management و `Zod` برای schema validation بشین. با هم به‌خوبی جفت می‌شن: schemaت رو در Zod تعریف کن، type form values رو ازش infer کن، و بذار react-hook-form بقیه رو مدیریت کنه.",
        ],
      },
    },
    lessons: [
      {
        en: {
          heading: "Define a Zod schema",
          body: [
            "Zod is a schema-first validation library. You describe what valid data looks like once, and TS infers the type from the schema — no double maintenance.",
          ],
          code: {
            lang: "ts",
            code: `import { z } from "zod";

export const signupSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(8, "Min 8 chars"),
  age: z.number().int().min(13, "Must be 13+"),
  terms: z.literal(true, {
    errorMap: () => ({ message: "You must accept the terms" }),
  }),
});

// Infer the TS type from the schema
export type SignupValues = z.infer<typeof signupSchema>;`,
          },
        },
        fa: {
          heading: "یه schema Zod تعریف کن",
          body: [
            "Zod یه library validation schema-firstه. داده‌ی valid رو یک بار توصیف می‌کنی، و TS type رو از schema inferred می‌کنه — بدون maintenance دوگانه.",
          ],
          code: {
            lang: "ts",
            code: `import { z } from "zod";

export const signupSchema = z.object({
  email: z.string().email("ایمیل نامعتبر"),
  password: z.string().min(8, "حداقل ۸ کاراکتر"),
  age: z.number().int().min(13, "باید ۱۳+ باشه"),
  terms: z.literal(true, {
    errorMap: () => ({ message: "باید قوانین رو بپذیری" }),
  }),
});

// type TS رو از schema inferred کن
export type SignupValues = z.infer<typeof signupSchema>;`,
          },
        },
      },
      {
        en: {
          heading: "Wire it up with react-hook-form",
          body: [
            "`useForm` takes your schema's resolver. `register` binds inputs. `formState.errors` holds per-field errors. `handleSubmit` runs validation and only calls your `onSubmit` when valid.",
          ],
          code: {
            lang: "tsx",
            code: `import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema, SignupValues } from "./schema";

export function SignupForm() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } =
    useForm<SignupValues>({
      resolver: zodResolver(signupSchema),
    });

  const onSubmit = async (values: SignupValues) => {
    await fetch("/api/signup", { method: "POST", body: JSON.stringify(values) });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("email")} placeholder="Email" />
      {errors.email && <span>{errors.email.message}</span>}
      <input type="password" {...register("password")} />
      {errors.password && <span>{errors.password.message}</span>}
      <button disabled={isSubmitting}>Sign up</button>
    </form>
  );
}`,
          },
        },
        fa: {
          heading: "با react-hook-form وایراش کن",
          body: [
            "`useForm` resolver schemaت رو می‌گیره. `register` inputها رو bind می‌کنه. `formState.errors` خطاهای per-field رو نگه می‌داره. `handleSubmit` validation رو اجرا می‌کنه و فقط وقتی valid باشه `onSubmit`ت رو صدا می‌زنه.",
          ],
          code: {
            lang: "tsx",
            code: `import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema, SignupValues } from "./schema";

export function SignupForm() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } =
    useForm<SignupValues>({
      resolver: zodResolver(signupSchema),
    });

  const onSubmit = async (values: SignupValues) => {
    await fetch("/api/signup", { method: "POST", body: JSON.stringify(values) });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("email")} placeholder="ایمیل" />
      {errors.email && <span>{errors.email.message}</span>}
      <input type="password" {...register("password")} />
      {errors.password && <span>{errors.password.message}</span>}
      <button disabled={isSubmitting}>ثبت‌نام</button>
    </form>
  );
}`,
          },
        },
      },
      {
        en: {
          heading: "Accessibility — label every input",
          body: [
            "Every input needs a label. Use `htmlFor` on the label matching `id` on the input. Or wrap the input inside the label. Screen readers depend on this; sighted users get the click-to-focus bonus too.",
          ],
          code: {
            lang: "tsx",
            code: `// ✅ Both work — pick one and be consistent

// Pattern 1: htmlFor / id
<label htmlFor="email">Email</label>
<input id="email" {...register("email")} />

// Pattern 2: wrap
<label>
  Email
  <input {...register("email")} />
</label>`,
          },
        },
        fa: {
          heading: "Accessibility — هر input یه label داره",
          body: [
            "هر input یه label لازم داره. از `htmlFor` در label با `id` در input استفاده کن. یا input رو داخل label wrap کن. screen readerها به این وابسته‌ن؛ userهای sighted click-to-focus bonus رو هم می‌گیرن.",
          ],
          code: {
            lang: "tsx",
            code: `// ✅ هر دو کار می‌کنن — یکی رو انتخاب کن و consistent باش

// الگوی ۱: htmlFor / id
<label htmlFor="email">ایمیل</label>
<input id="email" {...register("email")} />

// الگوی ۲: wrap
<label>
  ایمیل
  <input {...register("email")} />
</label>`,
          },
        },
      },
    ],
    takeaway: {
      en: {
        heading: "Key takeaways",
        bullets: [
          "Zod = schema-first validation, with TS types inferred automatically.",
          "react-hook-form handles the messy state of forms: errors, touched, submitting.",
          "Always label inputs (with htmlFor+id or wrapping) for accessibility.",
        ],
      },
      fa: {
        heading: "نکات کلیدی",
        bullets: [
          "Zod = validation schema-first، با typeهای TS به‌صورت inferred.",
          "react-hook-form به state messy formها رسیدگی می‌کنه: errorها، touched، submitting.",
          "همیشه inputها رو label کن (با htmlFor+id یا wrap) برای accessibility.",
        ],
      },
    },
  },

  "routing": {
    id: "routing",
    intro: {
      en: {
        heading: "Next.js App Router — file-system routing",
        body: [
          "In Next.js 13+, the `app/` directory is the router. Each folder is a route segment; each `page.tsx` is a route. Files like `layout.tsx`, `loading.tsx`, and `error.tsx` are conventions that wrap or replace specific states.",
          "Type safety comes from typing the `params` and `searchParams` props that Next.js passes to your page — every dynamic route segment shows up there.",
        ],
      },
      fa: {
        heading: "Next.js App Router — routing file-system",
        body: [
          "در Next.js 13+، directory `app/` routerه. هر folder یه route segmentه؛ هر `page.tsx` یه routeه. فایل‌هایی مثل `layout.tsx`، `loading.tsx`، و `error.tsx` conventionهایی هستن که stateهای خاص رو wrap یا replace می‌کنن.",
          "type safety از typing کردن propهای `params` و `searchParams` که Next.js به paget پاس می‌ده میاد — هر dynamic route segment اونجا ظاهر می‌شه.",
        ],
      },
    },
    lessons: [
      {
        en: {
          heading: "File conventions",
          body: [
            "`page.tsx` is the route. `layout.tsx` wraps all pages in a segment (and segments below). `loading.tsx` shows while a page is loading. `error.tsx` catches runtime errors. `not-found.tsx` shows for 404s.",
          ],
          code: {
            lang: "tsx",
            code: `app/
├─ layout.tsx          // wraps everything (root layout)
├─ page.tsx            // /
├─ blog/
│  ├─ layout.tsx       // wraps /blog/*
│  ├─ page.tsx         // /blog
│  ├─ [slug]/
│  │  └─ page.tsx      // /blog/:slug
│  └─ loading.tsx      // shows while /blog/* is loading
└─ settings/
   └─ page.tsx         // /settings`,
          },
        },
        fa: {
          heading: "conventionهای فایل",
          body: [
            "`page.tsx` routeه. `layout.tsx` همه‌ی pageها رو در یه segment (و segmentهای زیر) wrap می‌کنه. `loading.tsx` در حالی که یه page load می‌شه نشون داده می‌شه. `error.tsx` runtime errorها رو catch می‌کنه. `not-found.tsx` برای 404 نشون داده می‌شه.",
          ],
          code: {
            lang: "tsx",
            code: `app/
├─ layout.tsx          // همه‌چیز رو wrap می‌کنه (root layout)
├─ page.tsx            // /
├─ blog/
│  ├─ layout.tsx       // /blog/* رو wrap می‌کنه
│  ├─ page.tsx         // /blog
│  ├─ [slug]/
│  │  └─ page.tsx      // /blog/:slug
│  └─ loading.tsx      // وقتی /blog/* load می‌شه نشون داده می‌شه
└─ settings/
   └─ page.tsx         // /settings`,
          },
        },
      },
      {
        en: {
          heading: "Dynamic routes — typed params",
          body: [
            'A folder like [slug]/page.tsx matches /blog/hello-world. Next.js passes { params: { slug: "hello-world" } } to your page. In Next.js 15+, params is a Promise — await it.',
          ],
          code: {
            lang: "tsx",
            code: `// app/blog/[slug]/page.tsx
type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ from?: string }>;
};

export default async function BlogPost({ params, searchParams }: Props) {
  const { slug } = await params;
  const { from } = await searchParams;
  const post = await fetch(\`/api/posts/\${slug}\`).then(r => r.json());
  return <article>{post.title}</article>;
}`,
          },
        },
        fa: {
          heading: "dynamic routeها — paramهای تایپ‌شده",
          body: [
            "یه folder مثل `[slug]/page.tsx` با `/blog/hello-world` match می‌شه. Next.js `{ params: { slug: \"hello-world\" } }` رو به paget پاس می‌ده. در Next.js 15+، `params` یه Promiseه — awaitش کن.",
          ],
          code: {
            lang: "tsx",
            code: `// app/blog/[slug]/page.tsx
type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ from?: string }>;
};

export default async function BlogPost({ params, searchParams }: Props) {
  const { slug } = await params;
  const { from } = await searchParams;
  const post = await fetch(\`/api/posts/\${slug}\`).then(r => r.json());
  return <article>{post.title}</article>;
}`,
          },
        },
      },
      {
        en: {
          heading: "Link component — client-side navigation",
          body: [
            "Use `next/link` for client-side nav. It prefetches the route on hover/focus, swaps the page without a full reload, and keeps scroll position when going back. The `href` matches the file path.",
          ],
          code: {
            lang: "tsx",
            code: `import Link from "next/link";

export function Nav() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/blog">Blog</Link>
      <Link href={\`/blog/\${slug}\`}>{slug}</Link>
    </nav>
  );
}`,
          },
        },
        fa: {
          heading: "component Link — navigation client-side",
          body: [
            "از `next/link` برای nav client-side استفاده کن. route رو در hover/focus prefetch می‌کنه، صفحه رو بدون reload کامل swap می‌کنه، و موقع back رفتن scroll position رو حفظ می‌کنه. `href` با file path match می‌شه.",
          ],
          code: {
            lang: "tsx",
            code: `import Link from "next/link";

export function Nav() {
  return (
    <nav>
      <Link href="/">خانه</Link>
      <Link href="/blog">بلاگ</Link>
      <Link href={\`/blog/\${slug}\`}>{slug}</Link>
    </nav>
  );
}`,
          },
        },
      },
    ],
    takeaway: {
      en: {
        heading: "Key takeaways",
        bullets: [
          "Each folder in `app/` is a route segment; `page.tsx` makes it a route.",
          "Layouts wrap their segment + all descendants — root layout is required.",
          "Type `params` and `searchParams` on dynamic-route pages — both Promises in Next 15+.",
        ],
      },
      fa: {
        heading: "نکات کلیدی",
        bullets: [
          "هر folder در `app/` یه route segmentه؛ `page.tsx` ازش route می‌سازه.",
          "Layoutها segment + همه‌ی descendantهاشون رو wrap می‌کنن — root layout لازمه.",
          "روی pageهای dynamic-route `params` و `searchParams` رو type کن — هر دو Promise در Next 15+.",
        ],
      },
    },
  },

  "data-fetching": {
    id: "data-fetching",
    intro: {
      en: {
        heading: "Fetching data the right way",
        body: [
          "A bare `useEffect` + `fetch` is fine for one-off cases. But add loading states, error handling, retries, mutations, and cache invalidation — you've reimplemented TanStack Query, badly. Use the right tool.",
          "For server components, just `await fetch()` directly in the component — no hooks needed. For client components, TanStack Query is the de facto standard.",
        ],
      },
      fa: {
        heading: "fetch داده به راه درست",
        body: [
          "یه `useEffect` + `fetch` ساده برای caseهای one-off خوبه. ولی loading stateها، error handling، retry، mutation، و cache invalidation اضافه کن — TanStack Query رو بد reimplemnet کرده‌ای. از ابزار درست استفاده کن.",
          "برای server componentها، فقط `await fetch()` رو مستقیم در component بزن — بدون hook لازم نیست. برای client componentها، TanStack Query استاندارد de facto هست.",
        ],
      },
    },
    lessons: [
      {
        en: {
          heading: "Server components — fetch directly",
          body: [
            "In Next.js App Router, server components can `await fetch()` directly in the function body. No `useEffect`, no `useState` for the data. The runtime caches it automatically with the same cache key.",
          ],
          code: {
            lang: "tsx",
            code: `// app/users/page.tsx — server component by default
export default async function UsersPage() {
  const res = await fetch("https://api.example.com/users", {
    next: { revalidate: 60 },  // cache for 60s
  });
  const users = await res.json();
  return (
    <ul>
      {users.map((u: User) => <li key={u.id}>{u.name}</li>)}
    </ul>
  );
}`,
          },
        },
        fa: {
          heading: "server componentها — مستقیم fetch کن",
          body: [
            "در Next.js App Router، server componentها می‌تونن مستقیم `await fetch()` رو در function body بزن. بدون `useEffect`، بدون `useState` برای داده. runtime به‌صورت خودکار با cache key همون اونو cache می‌کنه.",
          ],
          code: {
            lang: "tsx",
            code: `// app/users/page.tsx — server component به‌صورت پیش‌فرض
export default async function UsersPage() {
  const res = await fetch("https://api.example.com/users", {
    next: { revalidate: 60 },  // cache برای ۶۰s
  });
  const users = await res.json();
  return (
    <ul>
      {users.map((u: User) => <li key={u.id}>{u.name}</li>)}
    </ul>
  );
}`,
          },
        },
      },
      {
        en: {
          heading: "Client components — TanStack Query",
          body: [
            "For interactive, client-side data, TanStack Query handles loading/error/refetch/mutation in one typed hook. Caches by query key; refetches on mount, window focus, and configurable intervals.",
          ],
          code: {
            lang: "tsx",
            code: `"use client";
import { useQuery } from "@tanstack/react-query";

export function UserList() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["users"],
    queryFn: () => fetch("/api/users").then(r => r.json()),
    staleTime: 60_000,        // fresh for 1 min
    refetchOnWindowFocus: true,
  });

  if (isLoading) return <Spinner />;
  if (error)   return <Error msg={error.message} />;
  return <ul>{data.map((u: User) => <li key={u.id}>{u.name}</li>)}</ul>;
}`,
          },
        },
        fa: {
          heading: "client componentها — TanStack Query",
          body: [
            "برای داده‌ی interactive، client-side، TanStack Query در یه hook تایپ‌شده به loading/error/refetch/mutation رسیدگی می‌کنه. بر اساس query key cache می‌کنه؛ در mount، window focus، و intervalهای قابل‌تنظیم refetch می‌کنه.",
          ],
          code: {
            lang: "tsx",
            code: `"use client";
import { useQuery } from "@tanstack/react-query";

export function UserList() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["users"],
    queryFn: () => fetch("/api/users").then(r => r.json()),
    staleTime: 60_000,        // برای ۱ دقیقه fresh
    refetchOnWindowFocus: true,
  });

  if (isLoading) return <Spinner />;
  if (error)   return <Error msg={error.message} />;
  return <ul>{data.map((u: User) => <li key={u.id}>{u.name}</li>)}</ul>;
}`,
          },
        },
      },
      {
        en: {
          heading: "Mutations — update then invalidate",
          body: [
            "After a successful mutation (POST/PUT/DELETE), invalidate the query keys whose data might have changed. TanStack refetches them automatically. For optimistic updates, use `onMutate` to write a draft before the server responds.",
          ],
          code: {
            lang: "tsx",
            code: `const qc = useQueryClient();

const mutation = useMutation({
  mutationFn: (newUser: User) =>
    fetch("/api/users", {
      method: "POST",
      body: JSON.stringify(newUser),
    }).then(r => r.json()),
  onSuccess: () => {
    qc.invalidateQueries({ queryKey: ["users"] });
  },
});

<button onClick={() => mutation.mutate({ name: "Amir" })}>
  Add
</button>`,
          },
        },
        fa: {
          heading: "Mutationها — update کن بعد invalidate کن",
          body: [
            "بعد از یه mutation موفق (POST/PUT/DELETE)، query keyهایی که داده‌شون ممکنه تغییر کرده باشه رو invalidate کن. TanStack به‌صورت خودکار refetch می‌کنه. برای updateهای optimistic، از `onMutate` برای نوشتن draft قبل از response server استفاده کن.",
          ],
          code: {
            lang: "tsx",
            code: `const qc = useQueryClient();

const mutation = useMutation({
  mutationFn: (newUser: User) =>
    fetch("/api/users", {
      method: "POST",
      body: JSON.stringify(newUser),
    }).then(r => r.json()),
  onSuccess: () => {
    qc.invalidateQueries({ queryKey: ["users"] });
  },
});

<button onClick={() => mutation.mutate({ name: "Amir" })}>
  اضافه کن
</button>`,
          },
        },
      },
    ],
    takeaway: {
      en: {
        heading: "Key takeaways",
        bullets: [
          "Server components → `await fetch()` directly, no hooks.",
          "Client components → TanStack Query for loading/error/cache.",
          "After mutations, `invalidateQueries` to refetch dependent data.",
        ],
      },
      fa: {
        heading: "نکات کلیدی",
        bullets: [
          "server componentها → `await fetch()` مستقیم، بدون hook.",
          "client componentها → TanStack Query برای loading/error/cache.",
          "بعد از mutation، `invalidateQueries` برای refetch داده‌ی وابسته.",
        ],
      },
    },
  },

  "state-management": {
    id: "state-management",
    intro: {
      en: {
        heading: "Local vs global state — pick the right tool",
        body: [
          "Not every piece of state needs to be global. A toggle in one button can stay local with `useState`. State shared between siblings goes up to their common parent. State needed across the tree goes to a store.",
          "Today's landscape: Zustand for simple global stores, Jotai for atom-based reactive state, Redux Toolkit for big teams with strict patterns. Pick the smallest tool that fits your problem.",
        ],
      },
      fa: {
        heading: "state local در مقابل global — ابزار درست رو انتخاب کن",
        body: [
          "هر تیکه‌ی state نیاز نداره global باشه. یه toggle در یه button می‌تونه با `useState` local بمونه. state مشترک بین siblingها به parent مشترکشون می‌ره. state که در درخت لازمه به یه store می‌ره.",
          "landscape امروز: Zustand برای storeهای global ساده، Jotai برای state reactive atom-based، Redux Toolkit برای teamهای بزرگ با patternهای سختگیرانه. کوچک‌ترین ابزاری که به problemt fit باشه رو انتخاب کن.",
        ],
      },
    },
    lessons: [
      {
        en: {
          heading: "Zustand — global store in 10 lines",
          body: [
            "Zustand is a tiny, hook-based store. Define the store with a single function, consume anywhere via a hook. No providers, no context boilerplate.",
          ],
          code: {
            lang: "tsx",
            code: `import { create } from "zustand";

type Store = {
  count: number;
  user: User | null;
  increment: () => void;
  setUser: (u: User) => void;
};

export const useStore = create<Store>((set) => ({
  count: 0,
  user: null,
  increment: () => set((s) => ({ count: s.count + 1 })),
  setUser: (user) => set({ user }),
}));

// Anywhere
const count = useStore((s) => s.count);
const increment = useStore((s) => s.increment);`,
          },
        },
        fa: {
          heading: "Zustand — store global در ۱۰ خط",
          body: [
            "Zustand یه store tiny، hook-basedه. store رو با یه function تعریف کن، در هرجا به‌وسیله‌ی یه hook consume کن. بدون provider، بدون context boilerplate.",
          ],
          code: {
            lang: "tsx",
            code: `import { create } from "zustand";

type Store = {
  count: number;
  user: User | null;
  increment: () => void;
  setUser: (u: User) => void;
};

export const useStore = create<Store>((set) => ({
  count: 0,
  user: null,
  increment: () => set((s) => ({ count: s.count + 1 })),
  setUser: (user) => set({ user }),
}));

// هرجا
const count = useStore((s) => s.count);
const increment = useStore((s) => s.increment);`,
          },
        },
      },
      {
        en: {
          heading: "Selectors — only re-render when the slice you use changes",
          body: [
            "Pass a selector to the hook: `useStore((s) => s.count)`. The component only re-renders when `count` changes. Without a selector, every store update re-renders the consumer — usually not what you want.",
          ],
          code: {
            lang: "tsx",
            code: `// ✅ Good — selector narrows subscription
const count = useStore((s) => s.count);
// only re-renders when count changes

// ❌ Bad — subscribes to the whole store
const store = useStore();
// re-renders on ANY state change, even unrelated

// Can also derive state in the selector
const isEven = useStore((s) => s.count % 2 === 0);`,
          },
        },
        fa: {
          heading: "Selectorها — فقط re-render کن وقتی slice‌ای که استفاده می‌کنی تغییر می‌کنه",
          body: [
            "یه selector به hook پاس بده: `useStore((s) => s.count)`. component فقط وقتی `count` تغییر کنه re-render می‌شه. بدون selector، هر store update consumer رو re-render می‌کنه — معمولاً چیزی که می‌خوای نیست.",
          ],
          code: {
            lang: "tsx",
            code: `// ✅ خوب — selector subscription رو narrow می‌کنه
const count = useStore((s) => s.count);
// فقط وقتی count تغییر کنه re-render می‌شه

// ❌ بد — به کل store subscribe می‌کنه
const store = useStore();
// در هر تغییر state (حتی unrelated) re-render می‌شه

// می‌تونی state رو در selector derive کنی
const isEven = useStore((s) => s.count % 2 === 0);`,
          },
        },
      },
      {
        en: {
          heading: "Persist to localStorage",
          body: [
            "Zustand has a `persist` middleware. Wrap your store with it and chosen slices are saved to localStorage (or AsyncStorage, or any storage adapter) automatically on every change.",
          ],
          code: {
            lang: "tsx",
            code: `import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useStore = create<State>()(
  persist(
    (set) => ({
      count: 0,
      increment: () => set((s) => ({ count: s.count + 1 })),
    }),
    {
      name: "app-store",                // localStorage key
      partialize: (s) => ({ count: s.count }),  // only persist count
    }
  )
);`,
          },
        },
        fa: {
          heading: "در localStorage حفظ کن",
          body: [
            "Zustand یه middleware `persist` داره. storeت رو با اون wrap کن و sliceهای انتخاب‌شده در هر تغییر به‌صورت خودکار در localStorage (یا AsyncStorage، یا هر storage adapter) ذخیره می‌شن.",
          ],
          code: {
            lang: "tsx",
            code: `import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useStore = create<State>()(
  persist(
    (set) => ({
      count: 0,
      increment: () => set((s) => ({ count: s.count + 1 })),
    }),
    {
      name: "app-store",                // localStorage key
      partialize: (s) => ({ count: s.count }),  // فقط count رو persist کن
    }
  )
);`,
          },
        },
      },
    ],
    takeaway: {
      en: {
        heading: "Key takeaways",
        bullets: [
          "Keep state local (useState) when only one component needs it.",
          "Lift to parent when siblings need it; to a store when it's truly global.",
          "Zustand selectors (`useStore(s => s.x)`) prevent re-renders on unrelated changes.",
        ],
      },
      fa: {
        heading: "نکات کلیدی",
        bullets: [
          "وقتی فقط یه component به state نیاز داره، local نگهش دار (useState).",
          "وقتی siblingها نیاز دارن به parent lift کن؛ وقتی واقعاً globalه به یه store.",
          "selectorهای Zustand (`useStore(s => s.x)`) re-render در تغییرهای unrelated رو جلوگیری می‌کنن.",
        ],
      },
    },
  },

  "testing": {
    id: "testing",
    intro: {
      en: {
        heading: "Tests give you confidence to change code",
        body: [
          "Tests aren't bureaucracy — they're the safety net that lets you refactor without fear. The trick is testing at the right level: unit tests for pure functions, component tests for UI behavior, end-to-end tests for full user flows.",
          "Modern React testing stack: Vitest (fast Jest-compatible runner), React Testing Library for components, Playwright for E2E. All TypeScript-native.",
        ],
      },
      fa: {
        heading: "testها بهت اعتماد برای تغییر کد می‌دن",
        body: [
          "testها bureaucracy نیستن — اون‌ها safety netی هستن که بهت اجازه می‌دن بدون ترس refactor کنی. ترفند اینه که در سطح درست تست بزنی: unit test برای functionهای pure، component test برای رفتار UI، end-to-end test برای flowهای کامل کاربر.",
          "stack testing مدرن React: Vitest (runner سریع Jest-compatible)، React Testing Library برای componentها، Playwright برای E2E. همگی TypeScript-native.",
        ],
      },
    },
    lessons: [
      {
        en: {
          heading: "Unit test a pure function",
          body: [
            "Pure functions are the easiest to test — input in, output out, no side effects. Vitest syntax is Jest-compatible: `describe`, `it`, `expect`.",
          ],
          code: {
            lang: "ts",
            code: `import { describe, it, expect } from "vitest";
import { add, formatPrice } from "./math";

describe("add", () => {
  it("adds two numbers", () => {
    expect(add(1, 2)).toBe(3);
  });
  it("handles negatives", () => {
    expect(add(-1, -2)).toBe(-3);
  });
});

describe("formatPrice", () => {
  it("formats USD", () => {
    expect(formatPrice(1999)).toBe("$1,999");
  });
});`,
          },
        },
        fa: {
          heading: "یه function pure رو unit test کن",
          body: [
            "functionهای pure ساده‌ترین برای test هستن — input در، output out، بدون side effect. syntax Vitest با Jest compatibleه: `describe`، `it`، `expect`.",
          ],
          code: {
            lang: "ts",
            code: `import { describe, it, expect } from "vitest";
import { add, formatPrice } from "./math";

describe("add", () => {
  it("دو عدد رو اضافه می‌کنه", () => {
    expect(add(1, 2)).toBe(3);
  });
  it("عدد منفی رو هندل می‌کنه", () => {
    expect(add(-1, -2)).toBe(-3);
  });
});

describe("formatPrice", () => {
  it("USD رو فرمت می‌کنه", () => {
    expect(formatPrice(1999)).toBe("$1,999");
  });
});`,
          },
        },
      },
      {
        en: {
          heading: "Component test with React Testing Library",
          body: [
            "RTL renders your component into a real DOM, then queries it the way a user would — by text, role, label. `userEvent` simulates realistic clicks and typing.",
          ],
          code: {
            lang: "tsx",
            code: `import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Counter } from "./Counter";

it("increments on click", async () => {
  const user = userEvent.setup();
  render(<Counter initial={0} />);

  expect(screen.getByText("0")).toBeInTheDocument();
  await user.click(screen.getByRole("button", { name: /increment/i }));
  expect(screen.getByText("1")).toBeInTheDocument();
});`,
          },
        },
        fa: {
          heading: "component test با React Testing Library",
          body: [
            "RTL componentت رو در یه DOM واقعی render می‌کنه، بعد اونو طوری که یه کاربر می‌خواد — با text، role، label — query می‌کنه. `userEvent` click و typing واقعی رو simulate می‌کنه.",
          ],
          code: {
            lang: "tsx",
            code: `import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Counter } from "./Counter";

it("در کلیک increment می‌کنه", async () => {
  const user = userEvent.setup();
  render(<Counter initial={0} />);

  expect(screen.getByText("0")).toBeInTheDocument();
  await user.click(screen.getByRole("button", { name: /increment/i }));
  expect(screen.getByText("1")).toBeInTheDocument();
});`,
          },
        },
      },
      {
        en: {
          heading: "E2E test with Playwright",
          body: [
            "Playwright drives a real browser through your app. Tests are slower but cover the full stack — DB, API, UI. Great for the 2-3 critical user flows every app has (signup, checkout, core action).",
          ],
          code: {
            lang: "ts",
            code: `import { test, expect } from "@playwright/test";

test("user can sign up", async ({ page }) => {
  await page.goto("/signup");

  await page.fill('input[name="email"]', "test@example.com");
  await page.fill('input[name="password"]', "secret123");
  await page.click('button[type="submit"]');

  await expect(page).toHaveURL("/dashboard");
  await expect(page.getByText("Welcome")).toBeVisible();
});`,
          },
        },
        fa: {
          heading: "E2E test با Playwright",
          body: [
            "Playwright یه browser واقعی رو در appت drive می‌کنه. testها کندتر هستن ولی کل stack رو پوشش می‌دن — DB، API، UI. برای ۲-۳ user flow بحرانی که هر app داره (signup، checkout، action اصلی) عالیه.",
          ],
          code: {
            lang: "ts",
            code: `import { test, expect } from "@playwright/test";

test("کاربر می‌تونه signup کنه", async ({ page }) => {
  await page.goto("/signup");

  await page.fill('input[name="email"]', "test@example.com");
  await page.fill('input[name="password"]', "secret123");
  await page.click('button[type="submit"]');

  await expect(page).toHaveURL("/dashboard");
  await expect(page.getByText("خوش آمدید")).toBeVisible();
});`,
          },
        },
      },
    ],
    takeaway: {
      en: {
        heading: "Key takeaways",
        bullets: [
          "Test at the right level: unit (pure), component (UI), E2E (full flow).",
          "RTL queries by role/text — like a real user, not by CSS class.",
          "Keep E2E tests to the few critical flows; they're slow.",
        ],
      },
      fa: {
        heading: "نکات کلیدی",
        bullets: [
          "در سطح درست test بزن: unit (pure)، component (UI)، E2E (flow کامل).",
          "RTL با role/text query می‌کنه — مثل یه کاربر واقعی، نه با CSS class.",
          "E2E testها رو به چند flow بحرانی محدود کن؛ کند هستن.",
        ],
      },
    },
  },

  "deployment-patterns": {
    id: "deployment-patterns",
    intro: {
      en: {
        heading: "Shipping is the final feature",
        body: [
          "Code that runs only on your machine is a hobby. Production-ready code is what users see. The deployment chapter covers the patterns and platforms that turn `npm run build` into a real URL.",
          "Two popular paths: Vercel (zero-config, perfect for Next.js) and GitHub Pages (free, static export, great for portfolio/demo sites). Both work with TypeScript out of the box.",
        ],
      },
      fa: {
        heading: "shiP کردن feature نهایی هست",
        body: [
          "کدی که فقط روی ماشین شما اجرا می‌شه یه hoseه. کد production-ready چیزیه که userها می‌بینن. فصل deployment الگوها و platformهایی رو پوشش می‌ده که از `npm run build` یه URL واقعی می‌سازن.",
          "دو راه محبوب: Vercel (zero-config، برای Next.js عالیه) و GitHub Pages (رایگان، static export، برای سایت‌های portfolio/demo عالیه). هر دو با TypeScript به‌صورت out of the box کار می‌کنن.",
        ],
      },
    },
    lessons: [
      {
        en: {
          heading: "Deploy to Vercel",
          body: [
            "Vercel is built by the Next.js team — zero-config deploy, automatic HTTPS, global edge, instant previews on every PR. Connect your GitHub repo and click Deploy.",
          ],
          code: {
            lang: "bash",
            code: `# Option A: CLI
bun i -g vercel
vercel          # preview deploy
vercel --prod   # production deploy

# Option B: Git-connected
# 1. Push to GitHub
# 2. Visit vercel.com/new
# 3. Import the repo
# 4. Click Deploy — done in 60s`,
          },
        },
        fa: {
          heading: "به Vercel deploy کن",
          body: [
            "Vercel توسط تیم Next.js ساخته شده — deploy zero-config، HTTPS خودکار، edge global، preview فوری در هر PR. repo GitHubت رو وصل کن و روی Deploy کلیک کن.",
          ],
          code: {
            lang: "bash",
            code: `# گزینه A: CLI
bun i -g vercel
vercel          # preview deploy
vercel --prod   # production deploy

# گزینه B: Git-connected
# 1. به GitHub push کن
# 2. به vercel.com/new برو
# 3. repo رو import کن
# 4. روی Deploy کلیک کن — در ۶۰s انجام شد`,
          },
        },
      },
      {
        en: {
          heading: "Deploy to GitHub Pages (static export)",
          body: [
            "GitHub Pages serves from a branch (usually `gh-pages` or `/docs` on `main`). For Next.js, set `output: 'export'` in next.config + `basePath: '/repo-name'`, build, and push the `out/` directory.",
          ],
          code: {
            lang: "ts",
            code: `// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/my-repo",            // matches repo name
  assetPrefix: "/my-repo",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;`,
          },
        },
        fa: {
          heading: "به GitHub Pages deploy کن (static export)",
          body: [
            "GitHub Pages از یه branch (معمولاً `gh-pages` یا `/docs` در `main`) سرو می‌کنه. برای Next.js، `output: 'export'` در next.config + `basePath: '/repo-name'` رو تنظیم کن، build بزن، و directory `out/` رو push کن.",
          ],
          code: {
            lang: "ts",
            code: `// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/my-repo",            // با اسم repo match کن
  assetPrefix: "/my-repo",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;`,
          },
        },
      },
      {
        en: {
          heading: "Env vars — keep secrets out of the bundle",
          body: [
            "Anything prefixed with `NEXT_PUBLIC_` is inlined into the client bundle. Everything else stays server-side. Use `.env.local` for development, and your deploy platform's dashboard for production secrets.",
          ],
          code: {
            lang: "bash",
            code: `# .env.local (gitignored, dev only)
DATABASE_URL=postgresql://user:pass@localhost:5432/mydb
NEXT_PUBLIC_API_BASE=https://api.example.com   # client-visible
STRIPE_SECRET_KEY=sk_test_abc123               # server-only

# In code (server component):
// process.env.DATABASE_URL        ← server-only, OK
// process.env.NEXT_PUBLIC_API_BASE ← client-visible, OK
// process.env.STRIPE_SECRET_KEY   ← server-only, OK`,
          },
        },
        fa: {
          heading: "Env varها — secretها رو از bundle خارج نگه‌دار",
          body: [
            "هر چیزی که با `NEXT_PUBLIC_` prefix بشه در bundle client inline می‌شه. بقیه server-side می‌مونه. از `.env.local` برای development، و dashboard platform deployت برای secretهای production استفاده کن.",
          ],
          code: {
            lang: "bash",
            code: `# .env.local (gitignored، فقط dev)
DATABASE_URL=postgresql://user:pass@localhost:5432/mydb
NEXT_PUBLIC_API_BASE=https://api.example.com   # client-visible
STRIPE_SECRET_KEY=sk_test_abc123               # فقط server

# در کد (server component):
// process.env.DATABASE_URL        ← فقط server، OK
// process.env.NEXT_PUBLIC_API_BASE ← client-visible، OK
// process.env.STRIPE_SECRET_KEY   ← فقط server، OK`,
          },
        },
      },
    ],
    takeaway: {
      en: {
        heading: "Key takeaways",
        bullets: [
          "Vercel = zero-config Next.js deploys with global edge.",
          "GitHub Pages = free static hosting — set basePath to /repo-name.",
          "Only `NEXT_PUBLIC_*` vars reach the client; the rest stay server-side.",
        ],
      },
      fa: {
        heading: "نکات کلیدی",
        bullets: [
          "Vercel = deployهای Next.js zero-config با edge global.",
          "GitHub Pages = static hosting رایگان — basePath رو به /repo-name تنظیم کن.",
          "فقط varهای `NEXT_PUBLIC_*` به client می‌رسن؛ بقیه server-side می‌مونن.",
        ],
      },
    },
  },
};
