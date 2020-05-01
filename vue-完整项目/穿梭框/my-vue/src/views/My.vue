<!--  -->
<template>
    <div class="my">
      <!-- 元数据 -->
      <div class="col-sm-5">
          <div class=" panel panel-default">
              <div class="panel-heading clearfix" >
                 <span class="pull-right">{{num2(leftData,true)}}/{{leftData.length}}</span>
                  <!-- //<span class="pull-right">{{filterData(leftData,true).length}}/{{leftData.length}}</span> -->
              </div>
             <div class="panel-body">
               <ul>
                 <li v-for="(list ,i) in leftData" :key="i">
                   <div class="checkbox">
                      <label for="">
                        <input type="checkbox" v-model="list.check" >{{list.name}}
                      </label>
                   </div>
                 </li>
               </ul>
               </div> 
          </div>
      <!-- 按钮 -->
      <div class="con-sm-2 text-center">
            <div>
              <button class="btn btn-primary" :disabled="leftData.length==0 || num2(leftData,true)==0" @click="toRight()">>></button>
            </div>
            <div>
               <button class="btn btn-primary" :disabled="rightData.length==0 || num2(rightData,true)==0"> 《《 </button>
            </div>
      </div>
      <!-- 目标数据 -->
           <div class=" panel panel-default2">
              <div class="panel-heading clearfix" >
                  <span class="pull-right">
                   {{num2(rightData,true)}}/{{rightData.length}}
                  </span>
              </div>
             <div class="panel-body">
               <ul>
                 <li v-for="(list ,i) in  rightData" :key="i">
                   <div class="checkbox">
                      <label for="">
                        <input type="checkbox" v-model="list.check" >{{list.name}}
                      </label>
                   </div>
                 </li>
               </ul>
               </div> 
          </div>
      </div>
     
   </div>
</template>
  <script>
export default {
  data (){
    return {
      leftData:[//左侧数据
      {
        name:"数据一",check:false
      },{
        name:"数据二",check:false
      }, {
        name:"数据三",check:false
      },{
        name:"数据四",check:false
      }, {
        name:"数据五",check:false
      },{
        name:"数据六",check:false
      }, {
        name:"数据七",check:false
      },{
        name:"数据八",check:false
      },
    ],
    rightData:[]//右侧数据
    }
    
  },
  methods:{//es5写法
    toRight:function(){
          //筛选check状态为true的数据filter
         // let selectData=this.leftData.filter(function(item,index){
           var selectData=this.filterData(this.leftData,true)
          //  console.log(selectData)
          //  return item.check == true
          // })
          //右侧追加 push合并数组 concat()扩展运算符...es6
          //this.rightData.push(...selectData)
          this.rightData=[...this.rightData,...selectData]
          //左侧数据 check==false
  //          this.leftData=this.leftData.filter(function(item,index){
  //          console.log(selectData)
  //          return item.check == false
  // })
  this.leftData=this.filterData(this.leftData,false)
    },
    //封装filterData()公共方法
    filterData:function(data,state){
      return data.filter(function(item){
        return item.check==state
      })
    }
  },
  //计算属性传参
  computed:{
    num:function(){
      return this.filterData(this.leftData,true).length
    },
    num2:function(){
      return  function(data,state){
        return this.filterData(data,state).length
      }
        
    }
  }
};
// var arr1=[1,2,3];
// var arr2=[4,5]
// var arr3=[...arr1,...arr2]
</script>
<style  scoped>
html,body,#app{
  width:100%;
  height: 100%;
  /* //background: red */
}
ul li{
  list-style: none
}
.my{
  width:100%;
  height: 100%;
  background: #ccc
}
.col-sm-5{
  width:100%;
  height: 800px;
  display: flex;
  justify-content: space-between
}
.panel-default{
  width:40%;
  height: 500px;
  background: saddlebrown;
 
}
.panel-heading{
  width:100%;
  height: 50px;
  line-height: 50px;
  background: sandybrown;
  display: flex;
  justify-content: flex-end;
}
.pull-right{
  margin-right: 20px;
}
.panel-default2{
   width:40%;
  height: 500px;
  background: salmon;
   
}
button{
  width:100px;
  height: 50px;
  background: forestgreen;
  margin-top: 50px;

}
</style>