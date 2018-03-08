'use strict';

exports.static = false;
exports.sequelize = {
  enable: true,
  package: 'egg-sequelize',
};
// exports.passport = {
//   enable: true,
//   package: 'egg-passport',
// };
exports.jwt = {
  enable: true,
  package: 'egg-jwt',
};
exports.cors = {
  enable: true,
  package: 'egg-cors',
};
