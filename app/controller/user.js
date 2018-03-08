'use strict';

const { Controller } = require('egg');

class UserController extends Controller {
  async login() {
    const payload = this.ctx.request.body;
    const token = await this.ctx.service.user.login(payload);

    if (token) {
      this.ctx.body = { token };
    } else {
      this.ctx.throw(400, 'username or password is not correct');
    }
  }
  async create() {
    const payload = this.ctx.request.body;
    const token = await this.ctx.service.user.create(payload);

    this.ctx.body = { token };
  }
  async findById() {
    const payload = this.ctx.params;
    const user = await this.ctx.service.user.findById(payload.id);

    this.ctx.body = {
      username: user.username,
    };
  }
  async destroy() {
    const payload = this.ctx.params;
    const ret = await this.ctx.service.user.destroy(payload.id);

    if (ret) {
      this.ctx.body = {};
    } else {
      this.ctx.throw(400, 'user not found');
    }
  }
}

module.exports = UserController;
