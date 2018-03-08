'use strict';

const { Controller } = require('egg');

class UserController extends Controller {
  async login() {
    const payload = this.ctx.request.body;
    const token = await this.ctx.service.user.login(payload);

    this.ctx.body = { token };
  }
  async create() {
    const payload = this.ctx.request.body;
    const res = await this.ctx.service.user.create(payload);

    this.ctx.body = res;
  }
  async findById() {
    const payload = this.ctx.params;
    const user = await this.ctx.service.user.findById(payload.id);

    this.ctx.body = user;
  }
}

module.exports = UserController;
