# Ahsan Ullah — AI/ML Portfolio

A Next.js 14 (App Router) portfolio site with an interactive AI assistant chat widget.

## Run it in VS Code

1. Open this folder in VS Code.
2. Open a terminal (`` Ctrl+` ``) and install dependencies:

   ```bash
   npm install
   ```

3. Start the dev server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

That's it — the site works out of the box. The AI chat widget (bottom-right button)
answers common questions from a built-in knowledge base with no setup required.

## Optional: enable open-ended AI answers

The chat widget first tries to answer from a local knowledge base
(`src/data/knowledgeBase.ts`). If a question doesn't match anything there, it calls
`/api/chat`, which uses the OpenAI API — but only if you provide a key.

1. Copy `.env.example` to `.env.local`:

   ```bash
   cp .env.example .env.local
   ```

2. Add your OpenAI API key to `.env.local`:

   ```
   OPENAI_API_KEY=sk-...
   ```

3. Restart the dev server.

Without a key, `/api/chat` still responds gracefully (no crash) — it just falls back to
a generic message pointing the visitor toward the knowledge-base topics.

## Customize

- **Your info**: edit `src/data/knowledgeBase.ts` (bio, skills, projects, internship, contact).
- **Profile photo**: replace `public/images/profile-placeholder.jpg` with your own photo
  (keep the same filename, or update the path in `src/app/page.tsx`).
- **Colors/fonts**: edit `tailwind.config.ts`.
- **Pages**: `src/app/*/page.tsx` — About, Projects, Internship, Contact, plus two project
  case studies under `src/app/projects/`.

## Build for production

```bash
npm run build
npm run start
```

## Project structure

```
ahsan-portfolio/
├── public/
│   └── images/
├── src/
│   ├── app/                 # Pages (App Router)
│   │   ├── layout.tsx
│   │   ├── page.tsx          # Home
│   │   ├── about/
│   │   ├── projects/
│   │   │   ├── page.tsx
│   │   │   ├── mushroom-classification/
│   │   │   └── heart-disease-prediction/
│   │   ├── internship/
│   │   ├── contact/
│   │   └── api/chat/route.ts # Optional OpenAI-backed endpoint
│   ├── components/
│   │   ├── layout/            # Navigation, Footer
│   │   ├── home/               # SkillsSection
│   │   ├── projects/           # ProjectCard
│   │   ├── ai-assistant/       # Chat widget
│   │   └── ui/                 # ContactForm
│   └── data/knowledgeBase.ts   # Single source of truth for site content
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```
