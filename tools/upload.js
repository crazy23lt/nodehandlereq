const multer = require('multer');
const fs = require('fs');
const fileReName = function (sourceFile, destPath) {
  fs.rename(sourceFile, destPath, function (err) {
    if (err) throw err;
    console.info({ sourceFile, destPath });
  });
};
// 上传文件中间件
const middlewares = {
  // 单文件上传
  upload: (req, res, next) => {
    // upload 目录下存储上传图片
    let upload = multer({ dest: 'upload/' }).single('photo');
    upload(req, res, (err) => {
      // console.info(req.file);
      if (err) {
        res.json({
          data: null,
          meta: { msg: '上传文件失败！:(', status: 200 },
        });
      } else {
        const { filename, destination, mimetype } = req.file;
        let basePath = __dirname + `/../${destination}`;
        let fileType = mimetype.substr(mimetype.lastIndexOf('/') + 1);
        fileReName(basePath + filename, basePath + filename + '.' + fileType);
        req.body.photo = req.file.filename;
        next();
      }
    });
  },
  // 多文件上传
  uploads: (req, res, next) => {
    let upload = multer({ dest: 'upload/' }).array('photo', 3);
    upload(req, res, (err) => {});
  },
};
module.exports = middlewares;
