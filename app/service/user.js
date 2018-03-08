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

    if (user) {
      const token = this.app.jwt.sign(
        { id: user.id },
        this.app.config.jwt.secret,
        this.app.config.jwt.options
      );

      return `Bearer ${token}`;
    }
  }
  async findById(id) {
    const user = await this.ctx.model.User.findById(id);
    console.log(this.app.jwt.decode(this.ctx.request.header.authorization.split(' ')[1]));
    return user;
  }
  async destroy(id) {
    const ret = await this.ctx.model.User.destroy({
      where: {
        id,
      },
    });

    return ret;
  }
}

module.exports = UserService;
