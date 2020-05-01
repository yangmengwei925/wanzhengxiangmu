<template>
  <div>
    <div id="table">
			<div class="add">
				<input type="text" placeholder="标题" v-model="obj.title"/>
				<input type="text" placeholder="发布人"  v-model="obj.user"/>
				<input type="date" placeholder="发布时间"  v-model="obj.dates"/>
				<button @click="add()">新增</button>
			</div>
			<table cellpadding="0" cellspacing="0">
				<thead>
					<tr>
						<th>序号</th>
						<th>标题</th>
						<th>发布人</th>
						<th>发布时间</th>
						<th>操作</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(item,index) in items" :key="index">
						<td>{{index+1}}</td>
						<td>{{item.title}}</td>
						<td>{{item.user}}</td>
						<td>{{item.dates}}</td>
						<td>
							<span class="delete" @click="del(index)">删除</span>
							<span class="edit" @click="edit(item)">编辑</span>
						</td>
					</tr>
				</tbody>
			</table>
      <!-- 弹层 -->
			<div id="layer" v-show="flag">
				<div class="mask">
					<div class="title">
						编辑
						<span @click="flag=false">x</span>
					</div>
					<div class="content">
						<input type="text"  placeholder="标题" v-model="editObj.title"/>
						<input type="text" placeholder="发布人"   v-model="editObj.user"/>
						<input type="date" placeholder="发布时间"   v-model="editObj.dates"/>
						<button @click="update()">更新</button>
						<button @click="flag=false">取消</button>
					</div>
				</div>
			</div> 
		</div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      obj:{
        title:'',
        user:'',
        dates:''
      },
      editObj:{  //编 辑 数据
        title:'',
        user:'',
        dates:''
      },
      flag:false, //弹层默认值  隐藏
      items:[
        {title:'标题1',user:'张三',dates:'2019-09-19',id:1},
        {title:'标题2',user:'张四',dates:'2019-09-06',id:2}
      ]
    }
  },
  methods:{
    add() {  //添加到数组中
      if(!this.obj.title || !this.obj.user || !this.obj.dates) return;
      var _id = Math.max.apply(null,this.items.map(function(item){return item.id}))+1;  //Id的最大值
      this.items.push({
        title:this.obj.title,
        user:this.obj.user,
        dates:this.obj.dates,
        id:_id
      });
      this.obj = {};
    },
    del(index){  //删 除
      this.items.splice(index,1);
    },
    edit(item){ //编辑
      this.flag = true; //弹层显示
      //this.editObj = item;  //浅拷贝
      this.editObj ={   ////深拷贝
        title:item.title,
        user:item.user,
        dates:item.dates,
        id:item.id
      }
    },
    update() { //更新
      for(var i=0;i<this.items.length;i++){
        if(this.items[i].id == this.editObj.id){
          this.items[i] = this.editObj;
          this.flag = false; //弹层
        }
      }
    }
  }
}
</script>

<style scoped>
@import '../assets/css/table.css'
</style>
