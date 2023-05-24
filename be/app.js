const express = require("express");
const dotenv = require("dotenv");
const db = require("./models/index");
const applyDotenv = require("./lambdas/applyDotenv");
const app = express();
const port = 4000;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

const { mongoUri } = applyDotenv(dotenv);
db.mongoose
  .connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("몽고DB 연결 성공");
  })
  .catch((err) => {
    console.log("몽고DB와 연결 실패", err);
    process.exit();
  });

app.get("/test", (req, res) => {
  console.log("Hello World!");
  res.status(200).json({ data: "hello world" });
});
