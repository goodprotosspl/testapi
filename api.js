import express from 'express';
import { receiveData, receiveSingleData } from './db.js';

const app = express();

app.get("/test", async (req, res) => {
  const test = await receiveData();
  res.json(test);
});  

app.get("/test/:id", async (req, res) => {
  const test = await receiveSingleData(req.params.id);
  if (!test) return res.status(404).send("The requested data was not found.");
  res.json(test);
});

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('BROKEN');
});

app.listen(8080, () => {
  console.log(`Server is running on port 8080`);
});