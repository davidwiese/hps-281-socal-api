const express = require("express");
const app = express();
const PORT = 8000;

const gorgonio = {
  name: "San Gorgonio Mountain",
  elevation: 11503,
  range: "San Bernardino Mountains",
  nickname: "Old Greyback",
  complete: true,
};

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/api", (req, res) => {
  res.json(gorgonio);
});

app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}! You better get moving!`);
});
