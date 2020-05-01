const Service = require('egg').Service;

class ListService extends Service {
  async add(obj) {
    return await this.app.mysql.select('option',obj)
  }
  
}

module.exports = ListService;