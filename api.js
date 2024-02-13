import express from 'express';
import { receiveData, receiveDataById } from './data.js';

const app = express();

app.get("/test", async (req, res) => {
  const result = receiveData();
  res.json(result);
});  

app.get("/test/:id", async (req, res) => {
  const result = receiveDataById(req.params.id);
  if (!result) {
    return res.status(404).send("Not Found");
  }  
  res.json(result);
});

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('BROKEN');
});

app.listen(8080, () => {
  console.log(`Server is running on port 8080`);
});