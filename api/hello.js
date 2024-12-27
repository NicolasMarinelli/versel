const express = require("express");
const app = express();

app.get("/api/hello", (req, res) => {
  res.json({ message: "¡Hola, desde Express!" });
});

module.exports = app;
