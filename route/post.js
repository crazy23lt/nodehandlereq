const Post = require("express").Router();
const multipart = require("connect-multiparty");
const multipartMiddleware = multipart();
const middlewares = require("../tools/upload");
Post.use((req, res, next) => {
  next();
});
// www-form-urlencoded
// post 请求 仅携带 body
Post.post("/body", require("../api/01"));
// post 请求 仅携带 query
Post.post("/query", require("../api/02"));
// post 请求 仅携带 params
Post.post("/params/:id", require("../api/03"));
// post 请求 仅携带 body、query、params都携带
// http://localhost:5001/post/all/123?123=123
Post.post("/all/:id", require("../api/04"));
// form-data
// post 请求 仅携带 body、query、params都携带
// http://localhost:5001/post/fd/all/123?123=123
Post.post("/fd/all/:id", multipartMiddleware, require("../api/05"));
// 上传单个文件
Post.post("/upload", middlewares.upload, require("../api/06"));
// 上传多个文件
Post.post("/uploads", require("../api/07"));
module.exports = Post;
