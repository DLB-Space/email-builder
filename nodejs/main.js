import fs from "fs";
import express from "express";
import bodyParser from "body-parser";
import { genHTML } from "./generator.js";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import cors from 'cors';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const port = 3002;
const app = express();
app.use(express.static('dist'))
app.use(cors())
app.use(bodyParser.json());

app.post('/generate', async (req, res) => {

  // Set CORS headers
  // res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  // res.header('Access-Control-Allow-Methods', 'POST');

  const { data } = req.body;
  const result = `You sent me: ${data}`;

  try {
    const fileName = "./dist/index.html";
    const html = genHTML(data);
    await fs.promises.writeFile(fileName, html);

    const link = `${req.protocol}://${req.get('host')}/index.html`;

    res.status(200);
    res.json({ message: result, link: link });
  } catch (err) {
    console.error(err);
    res.status(500);
    res.send("Error creating file");
  }
})

app.get("/download/:filename", (request, response) => {
  const filePath = __dirname + "/dist/" + request.params.filename;
  response.download(filePath, "index.html");

  response.status(200);
  response.send('File download successful');
});

// Start the server
const server = app.listen(port, (error) => {
  if (error) return console.log(`Error: ${error}`);
  console.log(`Server listening on port ${server.address().port}`);
});
