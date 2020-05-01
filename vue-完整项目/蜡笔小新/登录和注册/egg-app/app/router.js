'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  //登录接口
  router.post('/login',controller.login.login)
  router.post('/register',controller.login.register)
  router.get('/new/list',controller.list.list)

  router.post('/new/somelist',controller.list.getInfo)


};
