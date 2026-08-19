# Ahsan Ullah — AI/ML Portfolio

A modern personal portfolio website built with **Next.js 14**, featuring information about my AI/ML work, projects, internship experience, skills, and an interactive AI assistant.

The portfolio is designed for **recruiters, employers, universities, collaborators, and anyone interested in my AI/ML work**.

## Live Demo

**Portfolio:** Add your deployed portfolio URL here

**Demo Video:** [Video.mp4](./Video.mp4)

---

## Features

* Responsive personal portfolio website
* Home page with personal introduction
* About section
* AI/ML skills section
* Projects showcase
* Individual project case studies
* Internship information
* Contact section
* Interactive AI assistant
* Local knowledge base for common questions
* Optional OpenAI-powered responses for questions outside the local knowledge base
* Graceful fallback when an OpenAI API key is not configured
* Responsive navigation and UI
* Production-ready Next.js structure

---

## What It Does

The portfolio acts as a central place to present my technical background and AI/ML projects.

Visitors can:

1. Learn about me and my technical background.
2. View my AI/ML skills.
3. Explore my projects.
4. Read individual project case studies.
5. Learn about my internship experience.
6. Contact me.
7. Ask questions using the AI assistant.

The AI assistant first checks a **local knowledge base** containing portfolio information. If a question does not match the available knowledge, the application can optionally send the request to an OpenAI-powered API endpoint.

---

## Target Users

This portfolio is primarily intended for:

* Recruiters
* Employers
* University admissions teams
* Internship reviewers
* Potential collaborators
* Developers and students interested in my work

---

# Tech Stack

### Frontend

* Next.js 14
* React
* TypeScript
* Tailwind CSS

### AI Assistant

* Local knowledge base
* OpenAI API (optional)
* Next.js API route

### Development Tools

* Node.js
* npm
* VS Code
* Git
* GitHub

---

# Getting Started

## Prerequisites

Before running the project, install:

* Node.js
* npm
* Git

You can verify the installations with:

```bash
node --version
npm --version
git --version
```

---

## Installation

Clone the repository:

```bash
git clone https://github.com/AhsanullahCS/FlyRank_Internship.git
```

Navigate to the portfolio directory:

```bash
cd FlyRank_Internship/work/capstone_1_Portfolio
```

Install dependencies:

```bash
npm install
```

---

# Run the Development Server

Start the development server:

```bash
npm run dev
```

Open the application in your browser:

```text
http://localhost:3000
```

The portfolio should now be running locally.

---

# AI Assistant Setup

The AI assistant has two response paths.

### 1. Local Knowledge Base

The assistant first checks:

```text
src/data/knowledgeBase.ts
```

This contains information about:

* Biography
* Skills
* Projects
* Internship
* Contact information
* Other portfolio information

The local knowledge base works without an API key.

### 2. OpenAI API

For questions that are not answered by the local knowledge base, the application can optionally use the OpenAI API.

Create a local environment file:

```bash
cp .env.example .env.local
```

Then add:

```env
OPENAI_API_KEY=your_api_key_here
```

Restart the development server after adding the key:

```bash
npm run dev
```

### Without an API Key

The application does not crash if an OpenAI API key is missing.

Instead, the assistant falls back to a generic response directing the visitor toward information available in the portfolio knowledge base.

---

# Usage Examples

After starting the application, visitors can:

### Explore the portfolio

```text
Open http://localhost:3000
```

Then navigate through:

* Home
* About
* Projects
* Internship
* Contact

### Explore a project

Open the Projects section and select a project to view its case study and details.

### Use the AI assistant

Click the AI assistant button in the bottom-right corner and ask questions such as:

```text
What projects has Ahsan worked on?
```

```text
What are Ahsan's AI/ML skills?
```

```text
Tell me about the heart disease prediction project.
```

---

# Architecture

The application follows a simple Next.js architecture:

```text
                         ┌──────────────────┐
                         │      Visitor     │
                         └────────┬─────────┘
                                  │
                                  ▼
                         ┌──────────────────┐
                         │   Next.js App    │
                         │   React + TS      │
                         └────────┬─────────┘
                                  │
                 ┌────────────────┼────────────────┐
                 │                │                │
                 ▼                ▼                ▼
          ┌─────────────┐  ┌─────────────┐  ┌─────────────┐
          │   Pages     │  │   Projects  │  │   Contact   │
          │ About/Home  │  │ Case Studies│  │    Form     │
          └─────────────┘  └─────────────┘  └─────────────┘
                                  │
                                  ▼
                         ┌──────────────────┐
                         │   AI Assistant   │
                         └────────┬─────────┘
                                  │
                    ┌─────────────┴─────────────┐
                    │                           │
                    ▼                           ▼
           ┌─────────────────┐        ┌─────────────────┐
           │ Local Knowledge │        │  OpenAI API     │
           │     Base        │        │   (Optional)    │
           └─────────────────┘        └─────────────────┘
```

### Request flow

```text
User question
      ↓
AI Assistant
      ↓
Check local knowledge base
      ↓
Answer available?
   ↙          ↘
 Yes           No
  ↓             ↓
Answer      OpenAI API
                ↓
             Response
```

This design keeps common portfolio questions fast and independent of an external API while allowing open-ended questions when the OpenAI integration is configured.

---

# Project Structure

```text
capstone_1_Portfolio/
│
├── public/
│   └── images/
│
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   │
│   │   ├── about/
│   │   ├── projects/
│   │   │   ├── page.tsx
│   │   │   ├── mushroom-classification/
│   │   │   └── heart-disease-prediction/
│   │   │
│   │   ├── internship/
│   │   ├── contact/
│   │   │
│   │   └── api/
│   │       └── chat/
│   │           └── route.ts
│   │
│   ├── components/
│   │   ├── layout/
│   │   ├── home/
│   │   ├── projects/
│   │   ├── ai-assistant/
│   │   └── ui/
│   │
│   └── data/
│       └── knowledgeBase.ts
│
├── public/
├── .env.example
├── next.config.js
├── package.json
├── package-lock.json
├── tailwind.config.ts
└── tsconfig.json
```

---

# V2 Evaluation Results

The V2 version was evaluated through functional testing of the portfolio and AI assistant.

> **Important:** Replace the values below with the actual V2 evaluation results before submitting FL-09. Do not submit invented metrics.

| Evaluation Area                        | V2 Result  |
| -------------------------------------- | ---------- |
| Portfolio pages load correctly         | Add result |
| Navigation works                       | Add result |
| Project pages work                     | Add result |
| Contact functionality works            | Add result |
| AI assistant local knowledge responses | Add result |
| OpenAI fallback behavior               | Add result |
| Responsive UI                          | Add result |
| Production build                       | Add result |

### Evaluation Evidence

Screenshots and test evidence are available in:

```text
Results_proof_ScreenShort/
```

The repository also contains the recorded demo:

```text
Video.mp4
```

---

# Design Decision

One important design decision was to make the AI assistant use a **local knowledge base before calling the OpenAI API**.

This provides several benefits:

* Common portfolio questions can be answered without an external API.
* The application can work without an API key.
* Responses about my portfolio can remain based on information I explicitly provided.
* It reduces unnecessary API requests.
* It provides a graceful fallback when the API is unavailable.

The OpenAI integration is therefore optional rather than being required for the entire portfolio to function.

---

# Limitations

The current version has several limitations:

1. **AI knowledge is limited by the local knowledge base.**
   If a visitor asks a question that is not covered, the local assistant may not provide a useful answer.

2. **OpenAI functionality requires an API key.**
   Open-ended AI responses are unavailable when the API key is not configured.

3. **AI responses may not always be perfect.**
   When using the OpenAI API, generated responses can contain inaccurate or incomplete information.

4. **Portfolio content requires manual updates.**
   New projects, skills, experience, or achievements need to be added to the application's content/knowledge base.

5. **The portfolio is primarily a personal showcase.**
   It is not intended to be a general-purpose AI assistant or a complete professional CMS.

---

# AI Transparency

AI tools were used during development to assist with code generation, debugging, documentation, design ideas, and development guidance.

I reviewed, tested, and modified the generated work and verified the application's behavior myself. The final project structure, portfolio content, configuration, testing, and submitted implementation were reviewed as part of the development process.

---

# Production Build

To create a production build:

```bash
npm run build
```

Then start the production server:

```bash
npm run start
```

---

# Demo

A live end-to-end demonstration is included in:

**[Video.mp4](./Video.mp4)**

The demo shows the actual portfolio running and demonstrates the main functionality, including navigation and the AI assistant.

---

# Evidence

Additional screenshots and result evidence are available in:

```text
Results_proof_ScreenShort/
```

---

# Future Improvements

Possible future improvements include:

* Add a CMS for easier portfolio updates.
* Improve AI assistant retrieval and question matching.
* Add more project case studies.
* Add automated testing.
* Improve accessibility.
* Add analytics to understand visitor interactions.
* Improve AI response evaluation.
* Add deployment monitoring.
* Add better error handling for external API failures.

---

# License

This project was created as part of my FlyRank internship/capstone work and is primarily intended as a personal portfolio project.

---

# Author

**Ahsan Ullah**

AI/ML Developer | Computer Science Student

GitHub:

https://github.com/AhsanullahCS

---

## FL-09 Submission Checklist

Before submitting FL-09, verify:

* [ ] README explains what the project does
* [ ] README identifies the target users
* [ ] Stranger can install and run the project
* [ ] Usage examples are included
* [ ] Architecture sketch is included
* [ ] V2 evaluation results are included
* [ ] Limitations are included
* [ ] AI transparency statement is included
* [ ] Demo video is 3–5 minutes
* [ ] Demo shows the real project running
* [ ] One design decision is explained in the video
* [ ] One limitation is explained in the video
* [ ] README and demo link are posted to the showcase thread
