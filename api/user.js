const express = require("express");
const app = express();

app.get("/api/hello", (req, res) => {
  res.json({ message:[7,8,9,10] });
});

module.exports = app;
