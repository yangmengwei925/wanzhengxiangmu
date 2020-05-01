const Service = require('egg').Service;

class NewsService extends Service {
   //渲染列表的数据获取
  async list() {
      //查找全局news
    return await this.app.mysql.select('news')
  }
  async somelist(key){
    return await this.app.mysql.select('news',{where:{class:key}})
  }
}

module.exports = NewsService;