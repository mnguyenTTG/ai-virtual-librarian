export default async function ({ params }) {
  return await db.book.update({
    where: { id: Number(params.id) },
    data: { isCheckedOut: true },
  });
}
