'use strict';

/** 
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.post('/login', controller.login.login);
  router.post('/register', controller.login.register);
  router.get('/list',controller.list.list)
  router.post('/add',controller.add.add)

  router.post('/detail/option',controller.detail.option)
  router.post('/detail/update',controller.detail.update)

  router.post('/chart/user',controller.chart.index)


};
