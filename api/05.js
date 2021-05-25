module.exports = (req, res) => {
  res.json({
    data: { body: req.body, query: req.query, params: req.params.id },
    meta: { msg: "post 请求 仅携带 body、query、params都携带", status: 200 },
  });
};
