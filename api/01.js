module.exports = (req, res) => {
  console.info(req.body);
  res.json({
    data: { body: req.body },
    meta: { msg: "post 请求 仅携带 body", status: 200 },
  });
};
