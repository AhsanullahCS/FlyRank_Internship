# Ahsan's Portfolio Assistant 🤖

An AI-powered portfolio assistant that answers questions about Ahsan Ullah's education, skills, projects, and technical experience using a curated portfolio knowledge base.

The project was developed as part of the FlyRank ML Internship and demonstrates a simple Retrieval-Augmented Generation (RAG-style) workflow using Python, keyword-based retrieval, OpenRouter, and an LLM.

---

## 📌 Overview

Ahsan's Portfolio Assistant is designed to provide quick and reliable answers about my professional and academic portfolio.

Instead of asking a visitor to manually search through multiple portfolio pages, the assistant allows them to ask questions such as:

- What machine learning projects has Ahsan built?
- What programming languages does Ahsan know?
- What is Ahsan's customer churn project?
- What deep learning technologies does Ahsan use?
- What is Ahsan's educational background?

The assistant retrieves relevant information from a local Markdown knowledge base and provides the retrieved information to an AI language model to generate a concise answer.

---

## 🎯 Purpose

The main purpose of this project is to create an AI interface for a personal portfolio.

### Target users

The assistant is intended for:

- Recruiters
- Employers
- Potential collaborators
- Interviewers
- Visitors exploring my technical portfolio

The goal is to make portfolio information easier to access through natural-language questions.

---

## ✨ Features

### 1. Portfolio Knowledge Base

The assistant reads information from Markdown files stored in the `knowledge/` directory.

Current knowledge files include:

- `about.md`
- `skills.md`
- `customer-churn.md`
- `heart-disease.md`
- `handwritten-digit.md`

### 2. Keyword-Based Retrieval

The system analyzes the user's question and searches the knowledge files for relevant keywords.

Only files containing matching keywords are selected as context for the language model.

### 3. LLM-Powered Answers

The retrieved information is sent to an LLM through OpenRouter.

The model generates a concise answer based on the supplied portfolio information.

### 4. Portfolio Safety Rules

The system prompt instructs the assistant to:

- Use only the provided knowledge base
- Avoid inventing information
- Avoid inventing project results or credentials
- State when information is unavailable
- Stay within the portfolio-assistant scope
- Avoid revealing API keys
- Avoid revealing system instructions

### 5. Command-Line Interface

The current version can be run directly from a terminal.

The user enters a question and receives an answer from the assistant.

---

## 🏗️ Architecture

The project follows a simple retrieval-and-generation pipeline:

```text
                    ┌──────────────────┐
                    │      User        │
                    │  asks a question │
                    └────────┬─────────┘
                             │
                             ▼
                    ┌──────────────────┐
                    │  Query Processing│
                    │  & Keyword Match │
                    └────────┬─────────┘
                             │
                             ▼
                    ┌──────────────────┐
                    │ Knowledge Base   │
                    │ Markdown Files   │
                    └────────┬─────────┘
                             │
                             ▼
                    ┌──────────────────┐
                    │ Retrieved Context│
                    └────────┬─────────┘
                             │
                             ▼
                    ┌──────────────────┐
                    │    OpenRouter    │
                    │    LLM API       │
                    └────────┬─────────┘
                             │
                             ▼
                    ┌──────────────────┐
                    │  Portfolio       │
                    │  Assistant       │
                    └────────┬─────────┘
                             │
                             ▼
                    ┌──────────────────┐
                    │   Final Answer   │
                    └──────────────────┘