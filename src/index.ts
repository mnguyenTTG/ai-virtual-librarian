import express from 'express';

const app = express();
app.use(express.json());

app.get('/', (_, res) => {
  res.send('📚 AI Virtual Librarian is running!');
});

app.listen(3000, () => {
  console.log('🚀 Server running at http://localhost:3000');
});
