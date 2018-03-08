'use strict';

module.exports = app => {
  const { STRING } = app.Sequelize;
  const User = app.model.define('user', {
    username: {
      type: STRING,
      unique: true,
    },
    password: STRING,
  });

  return User;
};
