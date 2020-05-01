/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
let whiteList=require('./whiteList')
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};
    config.security = {
      csrf: false
    };
    config.mysql = {
      // database configuration
      client: {
        host: 'localhost',
        port: '3306',
        user: 'root',
        password: 'root',
        database: 'vote',
      },
      // load into app, default true
      app: true,
      // load into agent, default false
      agent: false,
    };
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1581403768822_1194';

  // add your middleware config here
  config.middleware = ['jwt'];
    config.jwt=whiteList

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
