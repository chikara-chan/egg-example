'use strict';

module.exports = appInfo => {
  const config = exports = {};

  config.keys = appInfo.name + '__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED';
  config.middleware = [];
  config.sequelize = {
    dialect: 'mysql',
    database: 'egg_example',
    host: 'localhost',
    port: '3306',
    username: 'root',
    password: '123456',
  };
  config.security = {
    csrf: {
      enable: false,
    },
  };
  exports.jwt = {
    secret: appInfo.name + '__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED',
    options: {
      expiresIn: 60 * 60 * 24,
    },
    enable: true,
    ignore: /^\/user/,
  };
  return config;
};
