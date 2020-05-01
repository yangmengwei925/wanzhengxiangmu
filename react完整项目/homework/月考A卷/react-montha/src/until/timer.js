export default signtime=>{
    // json.stringfy()将对象、数组转换成字符串；json.parse()将字符串转成json对象。
    //把当前时间戳转换为时间格式  将得到的现在的时间转换为字符串
    let str=JSON.stringify(new Date(JSON.parse(signtime)));
    //拼接成想要的格式
    let newStr=str.slice(1,11)+''+str.slice(12,20)
    return newStr
}