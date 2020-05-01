/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */

module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};
  //引入白名单
  const whiteList=require('./whiteList')
  //开启post
  
  config.mysql = {
    // database configuration
    client: {
      host: 'localhost',
      port: '3306',
      user: 'root',
      password: 'root',
      database: 'vacation',
    },
    // load into app, default true
    app: true,
    // load into agent, default false
    agent: false,
  };
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1580448123372_4420';

  // add your middleware config here
  config.middleware = ['jwt'];
  config.jwt=whiteList

  // add your user config here
  const userConfig = {
    security : {
      csrf: false
    }
  };

  return {
    ...config,
    ...userConfig,
  };
};
