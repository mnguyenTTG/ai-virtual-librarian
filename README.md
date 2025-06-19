# 📚 AI Virtual Librarian

A smart school library system with AI book summaries and personalized mood-based recommendations.

## Features
- Add/Edit/Delete books
- Check-in/out management
- Search by title/author/genre
- ✨ AI Book Summarizer (via GPT-4o)
- 🎯 AI Book Recommender by reader mood
- 🔊 Optional audio summaries

## Stack
- Node.js + TypeScript
- SQLite + Prisma
- OpenAI API (GPT-4o)

## Setup Instructions

```bash
git clone https://github.com/your-username/ai-virtual-librarian.git
cd ai-virtual-librarian
npm install
npx prisma db push
npm run dev
```

## Environment Variables

Create a `.env` file:

```
OPENAI_API_KEY=your_openai_api_key_here
```
