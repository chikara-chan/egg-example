'use strict';

module.exports = {
  up(queryInterface, { STRING, INTEGER, DATE }) {
    queryInterface.createTable('users', {
      id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      username: STRING,
      password: STRING,
      created_at: DATE,
      updated_at: DATE,
    });
    queryInterface.bulkInsert('users', [
      {
        username: 'root',
        password: 123456,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },
  down(queryInterface) {
    queryInterface.dropTable('users');
  },
};
