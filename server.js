const express = require("express");
var app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.listen(5000);