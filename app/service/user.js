'use strict';

const { Service } = require('egg');

class UserService extends Service {
  async login({ username, password }) {
    const user = await this.ctx.model.User.findOne({
      where: {
        username,
      },
    });

    if (user && this.ctx.helper.encrypt(password) === user.password) {
      const token = this.app.jwt.sign(
        { id: user.id },
        this.app.config.jwt.secret,
        this.app.config.jwt.options
      );

      return `Bearer ${token}`;
    }
  }
  async create({ username, password }) {
    const user = await this.ctx.model.User.create({
      username,
      password: this.ctx.helper.encrypt(password),
    });

    return user;
  }
  async findById(id) {
    const user = await this.ctx.model.User.findById(id);

    return user;
  }
}

module.exports = UserService;
