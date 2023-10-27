const express = require("express");
const app = express();
const PORT = 8000;

const hps281socal = {
  gorgonio: {
    name: "San Gorgonio Mountain",
    elevation: 11503,
    range: "San Bernardino Mountains",
    section: "San Gorgonio Area",
    nickname: "Old Greyback",
    complete: true,
  },
  jepson: {
    name: "Jepson Peak",
    elevation: 11205,
    range: "San Bernardino Mountains",
    section: "San Gorgonio Area",
    nickname: "",
    complete: true,
  },
  bighorn: {
    name: "Bighorn Mountain",
    elevation: 10997,
    range: "San Bernardino Mountains",
    section: "San Gorgonio Area",
    nickname: "",
    complete: false,
  },
  dragonshead: {
    name: "Dragons Head",
    elevation: 10866,
    range: "San Bernardino Mountains",
    section: "San Gorgonio Area",
    nickname: "",
    complete: false,
  },
  anderson: {
    name: "Anderson Peak",
    elevation: 10840,
    range: "San Bernardino Mountains",
    section: "San Gorgonio Area",
    nickname: "",
    complete: true,
  },
  jacinto: {
    name: "San Jacinto Peak",
    elevation: 10839,
    range: "San Jacinto Mountains",
    section: "San Jacinto Area",
    nickname: "",
    complete: true,
  },
};

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/api", (req, res) => {
  res.json(hps281socal);
});

app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}! You better get moving!`);
});
