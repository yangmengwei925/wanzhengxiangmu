<template>
  <div class="container">
    <!-- <h1>Hello</h1>
    <h2>{{name}}</h2>

    <button @click="add">+</button>
    <h4>{{num}}</h4>
    <button @click="sub">-</button> -->
    <table class="table table-bordered table-hover">				
			<tr>
			  <td>
			      <input type="checkbox" v-model="checkAll" @click="selectAll" />
			  </td>
			  <td>
				  商品名称
			  </td>
			  <td>
				  商品价格
			   </td>
			  <td>
				  商品数量
			  </td>
			  <td>
				  商品总额
			  </td>
			  <td>
				  操作
			  </td>
			  </tr>
            <tr v-for="(item,index) in listInfo" :key="index">
               <td>
	              <input type="checkbox" :value="item.id" v-model="checkItem" @change="selectOne" />
               </td>
				<td>{{item.shopName}}</td>
				<td>{{item.shopPrice}}</td>
				<td>
					<button class="btn btn-default" @click="reduce(index)">-</button>
					<input type="text" v-model="item.shopCount" />
					<button class="btn btn-default" @click="add(index)">+</button>
				</td>
				<td>
					{{item.shopPrice*item.shopCount}}
				</td>
				<td>
					<button class="btn btn-warning" @click="del(index)">删除</button>
				</td>
			</tr>				
				</table>
				<p class="text-right">
					金额总计:{{sum}}
				</p>
				<p class="text-right">
					商品数量:{{count}}
				</p>
				<hr />
				<form>
					<div class="form-group">
						<input class="form-control" placeholder="商品名称" v-model="shopName" />
					</div>
					<div class="form-group">
						<input class="form-control" placeholder="商品价格" v-model = "shopPrice"/>
					</div>
					<div class="form-group">
						<button class="btn btn-primary" type="button" @click="addInfo">增加</button>
					</div>
				</form>
				<Show/>
			</div>
</template>

<script>
import Show from './views/Show.vue'
  export default {
    // data() {
    //   return {
        // num: 0,
        // name: '蜡笔小新'
        data(){
          return {
                listInfo:[
                            {id:1,shopName:"男装1",shopPrice:1000,shopCount:0},
                            {id:2,shopName:"男装2",shopPrice:2000,shopCount:0},
                            {id:3,shopName:"男装3",shopPrice:3000,shopCount:0},
                            {id:4,shopName:"男装4",shopPrice:4000,shopCount:0},
                            {id:5,shopName:"男装5",shopPrice:5000,shopCount:0},
                          ],
                          shopName:"",
                          shopPrice:"",
                          checkItem:[],
                          checkAll:false
        //   }
					
				// }

      }
    },
    methods: {
      // add() {
      //   this.num++;
      // },
      // sub() {
      //   this.num--;
      // }
      add:function(index){
						this.listInfo[index].shopCount++
						 
					},
					reduce:function(index){
						if(this.listInfo[index].shopCount<=0){
							this.listInfo[index].shopCount = 0
						}else {
							this.listInfo[index].shopCount--
						}
						
					},
					del:function(index){
			  	 		this.listInfo.splice(index,1)
             },
           addInfo:function(){
//						alert(1)
					
						var obj = {
							id:this.listInfo.length+1,
							shopName:this.shopName,
							shopPrice:this.shopPrice,
							shopCount:0
						}
						console.log(obj)
						this.listInfo.push(obj)						
          },
         selectAll:function(){
						this.checkItem = []
						if(!this.checkAll){
							for (var i=0;i<this.listInfo.length;i++) {
								this.checkItem.push(this.listInfo[i].id)
							}
						}else {
							this.checkItem = []
							this.checkAll = false
						}
					},
          selectOne(){
						console.log(this.checkItem)
						if(this.checkItem.length == this.listInfo.length){
							this.checkAll = true
						}else {
							this.checkAll = false
						}
					}
				},
      computed:{
        sum(){
						var total = 0
						for (var i=0;i<this.listInfo.length;i++) {
							total+=parseFloat(this.listInfo[i].shopPrice)*parseFloat(this.listInfo[i].shopCount)
						}
						return total	
					},
        count:function(){
						var total = 0
						for (var i=0;i<this.listInfo.length;i++) {
							total+=parseInt(this.listInfo[i].shopCount)
						}
						return total
					}
	  },
	  components:{
		  Show
	  }
    }

</script>

<style scoped>
  .action{
	  transform:rotate(90deg);
	  position: absolute;
	  top:200px;
	  left:200px
  }
</style>
