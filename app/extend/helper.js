'use strict';

const crypto = require('crypto');

exports.encrypt = str => {
  const md5 = crypto.createHash('md5');

  return md5.update(str).digest('hex');
};
