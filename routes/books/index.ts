export default async function ({ query }) {
  return await db.book.findMany({
    where: {
      title: { contains: query.title || '' },
      author: { contains: query.author || '' },
      genre: { contains: query.genre || '' },
    },
  });
}
