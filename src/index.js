const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");
const port = 5000;
const dotenv = require("dotenv");
dotenv.config();

app.use(cors());
app.use(express.json());

// 몽고db 연결
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("몽고db 연결 완료");
  })
  .catch((err) => {
    console.log(err);
  });

app.post("/", (req, res) => {
  console.log(req.body);
  res.json(req.body);
});

// express 에러 처리
app.get("/", (req, res, next) => {
  setImmediate(() => {
    next(new Error("It is error!"));
  });
});
app.use((error, req, res, next) => {
  res.status(err.status || 500);
  res.send(error.message || "Error in Server");
});

// 정적인 파일 업로드
app.use(express.static(path.join(__dirname, "../uploads")));

app.listen(port, () => {
  console.log(`${port}에서 실행`);
});
