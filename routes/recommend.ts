import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export default async function ({ body }) {
  const { mood } = body;
  const books = await db.book.findMany();
  const bookList = books.map(b => \`\${b.title} (\${b.genre})\`).join('\n');

  const prompt = \`Recommend books from this list for a reader who feels "\${mood}":\n\${bookList}\`;

  const response = await openai.chat.completions.create({
    model: 'gpt-4o',
    messages: [{ role: 'user', content: prompt }]
  });

  return { recommendations: response.choices[0].message.content };
}
