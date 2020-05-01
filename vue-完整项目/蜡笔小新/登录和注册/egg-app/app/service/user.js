const Service = require('egg').Service;

class UserService extends Service {
    //登录接口找用户名
  async find(user) {
    return await this.app.mysql.select('user',{where:{user}})
  }
  async insert(pwd,user,role='student')
  {
    //插入方法
    return await this.app.mysql.insert('user',{user,pwd,role})
  }
}

module.exports = UserService;