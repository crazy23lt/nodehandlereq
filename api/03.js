module.exports = (req, res) => {
  res.json({
    data: { params: req.params.id },
    meta: { msg: "post 请求 仅携带 params", status: 200 },
  });
};
