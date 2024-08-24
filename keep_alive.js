require("dotenv").config();
const { env } = require("node:process");
let express = require("express");
const app = express();
const port = env.PORT || 4000;

app.createServer("/", (req, res) => {
  res.send("I'm alive");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
