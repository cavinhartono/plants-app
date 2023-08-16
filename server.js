const express = require("express");
const cors = require("cors");

const app = express();

require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(require("./routes/record"));

const db = require("./db/conn");

app.listen(port, () => {
  db.connectToServer(function (err) {
    if (err) console.error(err);
  });
  console.log(`Server is running on port ${port}`);
});
