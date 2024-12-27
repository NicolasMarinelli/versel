const express = require("express");
const app = express();

app.get("/api/hello", (req, res) => {
  res.json({ message:[1,2,3,4,5,6] });
});

module.exports = app;
