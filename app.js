const express = require("express");
// const history = require("connect-history-api-fallback");
// const bodyParser = require("body-parser");
const app = express();
// ------------------ 解析四种不同的请求数据格式 -----------------------
// application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));
// application/json
app.use(express.json());
// text/plain
app.use(express.text());
// application/octet-stream
app.use(express.raw());
// -------------------------------------------------------------------
// app.use(history());
app.use(express.static(__dirname + "/dist"));
require("./route")(app);
app.listen(5001, () => {
  console.info("端口5001服务启动成功!:)");
});
