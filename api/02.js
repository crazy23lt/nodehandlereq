module.exports = (req, res) => {
  res.json({
    data: { query: req.query },
    meta: { msg: "post 请求 仅携带 query", status: 200 },
  });
};
