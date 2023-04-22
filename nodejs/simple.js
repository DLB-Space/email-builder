import fs from "fs";
import { genHTML } from "./generator.js";
import { data } from "./data.js";


const fileName = "./dist/index.html";
const html = genHTML(data);
await fs.promises.writeFile(fileName, html);
