# Next.js 13 Todo Creator — Course Equivalent

This is an original implementation of the topics publicly listed on **Master Next JS 13 - 2023 - For Busy Developers**. It is not the paid course's private video transcript or source code.

## What the public course outline covers

The visible outline names a Next.js 13 Todo Creator project and topics including routing, caching/revalidation, data fetching, Server and Client Components, route interception, API Routes, JavaScript, React, and Tailwind CSS. This project demonstrates each topic in a small local app.

## 1. Install prerequisites

Install Node.js 18.17+ and Git. Verify:

```bash
node --version
npm --version
git --version
```

## 2. Install and run

```bash
cd next13-todo-equivalent
npm install
npm run dev
```

Open http://localhost:3000.

## 3. Follow the implementation in course order

### Step 1 — App Router and file-based routing

`app/page.js` is the home route, `app/about/page.js` is `/about`, and `app/todos/[id]/page.js` is a dynamic route such as `/todos/1`. In Next.js, folders and `page.js` files define the URL structure.

### Step 2 — Server Components

`app/page.js` is a Server Component by default. It calls `getTodos()` on the server and passes the initial list into the interactive component. No browser JavaScript is required for the first render of the page shell.

### Step 3 — Client Components

`components/TodoCreator.js` starts with `'use client'`. It owns form state, handles clicks, calls the API with `fetch`, and calls `router.refresh()` after a mutation.

### Step 4 — API Routes

`app/api/todos/route.js` exports `GET` and `POST` handlers. `app/api/todos/[id]/route.js` exports a dynamic `PATCH` handler. Try these URLs:

```text
GET  http://localhost:3000/api/todos
POST http://localhost:3000/api/todos
PATCH http://localhost:3000/api/todos/1
```

### Step 5 — Caching and revalidation

`app/page.js` and the dynamic detail page use `export const revalidate = 60`. In a real deployment, Next.js can reuse the rendered result and regenerate it after the interval. The in-memory data module is intentionally simple for learning; use a database for production persistence.

### Step 6 — Data fetching

The initial todo data is fetched directly on the server through `getTodos()`. Browser interactions fetch the Route Handlers at `/api/todos`, showing the difference between server-side loading and client-side mutations.

### Step 7 — Route interception

`app/@modal/(.)todos/[id]/page.js` is an intercepted route. When you navigate with the `Details` link, Next.js can render the detail inside a modal slot while preserving the home page behind it. `app/@modal/default.js` renders nothing when there is no modal.

The modal's **Close** button uses `router.back()`, which returns to the page underneath the modal. Use the **Open full page** link when you want to view the same todo as a normal `/todos/[id]` page.

### Step 8 — Tailwind CSS

`tailwind.config.js`, `postcss.config.js`, and `app/globals.css` configure Tailwind. Utility classes are used throughout the app for layout, colors, spacing, and states.

## Production build

```bash
npm run build
npm run start
```

Then open http://localhost:3000 again.

## GitHub workflow

```bash
git init
git add .
git commit -m "Build Next.js 13 Todo Creator"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/next13-todo-equivalent.git
git push -u origin main
```

## Important limitation

The data store is held in memory, so todos reset when the server restarts and are not suitable for production. Replace `lib/todos.js` with a database layer such as PostgreSQL, Prisma, or another persistence service when you move beyond the tutorial.
