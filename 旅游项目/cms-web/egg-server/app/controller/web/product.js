'use strict';

const Controller = require('egg').Controller;

class ProductController extends Controller {
 
  // 旅游意向调查的option内容返回
  async list(){
    const { ctx,app } = this;
    let data = await ctx.service.product.list();
    ctx.body = app.sendMes(0,'请求成功',data)
  }
  // 模糊搜索
  async search(){
    const { ctx,app } = this;
    const { place,keyword,star,day,dataSort } = ctx.request.body;
    console.log(place,keyword,star,day,dataSort)
    
    let data =await ctx.service.product.list();
    //精确搜索
    if(day !=="") data =data.filter(item.day === day)
    if(star !=="") data =data.filter(item=>item.star ===star)
    //模糊搜索
    if(place !== "") data =data.filter(item =>item.place.indexOf(place)!==-1)
    if(keyword !== "")data =data.filter(item =>item.keyword.indexOf(keyword)!==-1)
    //按星级
    if(dataSort ==="star") data =data.sort((a,b)=>b.star - a.star)
    //按天数
    if(dataSort ==="day") data =data.sort((a,b)=>b.day-a.day)
    //按字母
    if(dataSort ==="place") data =data.sort((a,b)=>b.place.localeCompare(a.place))
    ctx.body=app.sendMes(0,'请成功',data)
    //根据星星和天数判断
    // let obj = {star,day};

    // if(star !=='') obj.star = star;
    // if(day  !=='') obj.day = day;
    // data = await ctx.service.product.search(obj);

    // if(place !== ''){
    //   data = data.filter(item => item.place.indexOf(place)!==-1)
    // }

    // if(keyword !== ''){
    //   data = data.filter(item => item.describe.indexOf(keyword)!==-1)
    // }

    // ctx.body = app.sendMes(0,'请求成功',data)
  }
  //展示详情
  async detail(){
    const { ctx,app } = this;
    const {id} =ctx.request.body;
    let data=await ctx.service.detail.list(id)
    console.log(data)
    ctx.body=app.sendMes(0,'请求成功',data)
    // let data = await ctx.service.product.list();
    // ctx.body = app.sendMes(0,'请求成功',data)
  }
}

module.exports = ProductController;
