module.exports = (app) => {
  app.use("/post", require("./post"));
  app.use((req, res) => {
    res.json({ error: "api地址有问题", status: 202 });
  });
};
