import { createRequire } from "module";
import { ChatGPTAPIBrowser } from "chatgpt";
const require = createRequire(import.meta.url);

const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 4000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get("/api", (req, res) => {
  res.json({
    message: "Hello world",
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

app.post("/api", async (req, res) => {
  const { prompt } = req.body;
  console.log(prompt);
});
