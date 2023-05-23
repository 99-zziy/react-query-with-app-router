const express = require("express");
const app = express();
const port = 4000;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.get("/test", (req, res) => {
  console.log("Hello World!");
  res.status(200).json({ data: "hello world" });
});
