// 1.加载 express 模块
const express = require("express");
// 2.创建 express web 服务器
const app = express();
// 4.监听客户端的 GET 和 POST 请求，并向客户端发送具体的内容
app.all("/user", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  //   res.send(JSON.stringify({ name: "混元天尊", age: 10000, gender: "男" }));
  // res.send({ name: "混元天尊", age: 10000, gender: "男" });
  console.log(req.query);
  res.send(req.query);
});

// 注意：这里的 :id是一个动态的参数
app.all("/user", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  console.log(req.params);
  res.send(req.params);
});

// 3.启动 web 服务器
app.listen(8080, () => {
  console.log("express server running at http://127.0.0.1");
});
