# Link Shortener — Node stack

A URL shortener with click tracking.

- **Frontend:** Vue 3 (`<script setup>`) + Vite + TypeScript + Vue Router
- **Backend:** Express + Prisma + SQLite (TypeScript)

The backend runs on `http://localhost:5000` and the frontend on `http://localhost:5173`.

## Running it

**Backend** (API on `http://localhost:5000`):

```bash
cd node-stack/backend
cp .env.example .env
npm install
npx prisma migrate dev
npm run dev
```

**Frontend** (app on `http://localhost:5173`), in a second terminal:

```bash
cd node-stack/frontend
npm install
npm run dev
```

Then open `http://localhost:5173`.

## Tests

```bash
cd node-stack/backend
npm test
```

## Project layout

```
backend/
  prisma/schema.prisma     # Link, Click
  src/
    index.ts               # Express app + server
    db.ts                  # Prisma client
    routes/links.ts        # POST /api/links, GET /api/links, GET /api/links/:id/clicks
    routes/redirect.ts     # GET /:code
    services/shortCode.ts  # short-code generation
frontend/
  src/
    views/                 # DashboardView, LinkDetailView
    components/            # LinkCreateForm, LinkList, LinkRow
    api/                   # HTTP client + link calls
```

## Your task

Our users want to understand how their links are performing. Add **click analytics**:
for a given link, show how many times it's been clicked over time, charted on the
link's detail page. The exact shape is up to you — at minimum, clicks bucketed by day,
rendered as a chart. The **unovis** library (`@unovis/vue`) is already installed in the
project — please use it for the chart.

Use AI tools however you normally would — that's part of how we work. We care less about
how much code you personally wrote and more about the decisions behind it and your
ability to walk us through them.

Timebox it to ~25–30 minutes. Don't gold-plate. If you spot things in the existing code
you'd want to change but don't have time for, jot them down — we'll talk about them.
