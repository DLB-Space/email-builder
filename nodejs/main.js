import fs from "fs";
import express from "express";
import bodyParser from "body-parser";
import { genHTML } from "./generator.js";

const port = 3002;
const app = express();
app.use(express.static('dist'))
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", (request, response) => {
  const fileName = "./dist/index.html";
  const stream = fs.createWriteStream(fileName);
  stream.once("open", function (fd) {
    var html = genHTML();

    stream.end(html);
  });

  response.set("Content-Type", "text/html");
  response.send(JSON.stringify(fileName));
});

// Start the server
const server = app.listen(port, (error) => {
  if (error) return console.log(`Error: ${error}`);
  console.log(`Server listening on port ${server.address().port}`);
});
