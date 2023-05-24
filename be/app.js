const express = require("express");
const dotenv = require("dotenv");
const db = require("./models/index");
const applyDotenv = require("./lambdas/applyDotenv");
const { Comment } = require("./models/comment");
const bodyParser = require("body-parser");
const app = express();
const port = 4000;

//application/json
app.use(bodyParser.json());

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

app.get("/", (req, res) => {});

app.get("/api/comments", async (req, res) => {
  console.log("get commnents");
  const comments = await Comment.find({});
  console.log("comments", comments);
  res.status(200).json({ data: comments });
});

app.post("/api/comments", async (req, res) => {
  console.log("post comments");
  const comment = new Comment({
    text: req.body.text,
  });
  const data = await comment.save();
  console.log("data", data);

  res.status(200).json({ data: comment });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
