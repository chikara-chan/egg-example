'use strict';

const crypto = require('crypto');

exports.encrypt = str => {
  const md5 = crypto.createHash('md5');

  return md5.update(str).digest('hex');
};

exports.success = ({ ctx, res = null, msg = '请求成功' }) => {
  ctx.status = 200;
  ctx.body = {
    code: 0,
    data: res,
    msg,
  };
};
