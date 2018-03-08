'use strict';

module.exports = app => {
  const { router, controller, jwt } = app;

  router.post('/user/access', controller.user.login);
  router.post('/user', controller.user.create);
  router.get('/user/:id', jwt, controller.user.findById);
  router.delete('/user/:id', jwt, controller.user.destroy);
};
