import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export default async function ({ params }) {
  const book = await db.book.findUnique({ where: { id: Number(params.id) } });

  const response = await openai.chat.completions.create({
    model: 'gpt-4o',
    messages: [{ role: 'user', content: `Summarize the book "${book.title}" by ${book.author}.` }]
  });

  const summary = response.choices[0].message.content;
  await db.book.update({ where: { id: book.id }, data: { summary } });

  return { summary };
}
