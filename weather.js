const express = require("express");

const app = express();
const https = require("https");

app.get("/", (req, res) => {
  res.send(" server is runnning");
});

app.listen(3000, () => {
  console.log("server runing");
});
