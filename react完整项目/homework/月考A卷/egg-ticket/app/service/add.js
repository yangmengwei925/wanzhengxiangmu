const Service = require('egg').Service;

class AddService extends Service {
  async insert(obj){
    return await this.app.mysql.insert('ticket',obj)
  }
  
}

module.exports = AddService;