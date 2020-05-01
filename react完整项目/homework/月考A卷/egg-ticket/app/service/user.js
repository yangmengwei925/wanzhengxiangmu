const Service = require('egg').Service;

class UserService extends Service {
  // 登录
  async find(username) {
    return await this.app.mysql.select('user',{where:{username}})
  }
  // 注册
  async register(username,password){
      return await this.app.mysql.insert('user',{username,password})
  }
  // 渲染列表
  async list(){
    return await this.app.mysql.select('ticket')
  }
  // 列表插入数据
//   async insert(insertData){
//     return await this.app.mysql.insert('ticket',insertData)
// }
}

module.exports = UserService;