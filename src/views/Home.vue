<template>
  <div class="home">
    <!-- Header -->
    <div class="box1 c1">
      <h1 class="bt_font">隧道工程人员管理系统</h1>
    </div> 
    <br>
    <!-- Main -->
    <div class="box1 c2" v-for="(item,index) in items" :key="index">
      <div class="main_box c1">
        <div class="main_item" @click="cs(item[0])">{{item[0].name}}</div>
        <div class="main_item" @click="cs(item[1])">{{item[1].name}}</div>
        <div class="main_item" @click="cs(item[2])">{{item[2].name}}</div>
      </div>
      <!-- <div class="box2 c4"></div>
      <div class="box2 c4"></div> -->
    </div>
  </div>
</template>

<script>
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {

  },
  data(){
    return{
      items:[
        [{ name:"系统管理",page:"/xtgl" },{ name:"综合管理",page:"/zhgl" },{ name:"用户管理",page:"/yhgl" }],
        [{ name:"员工管理",page:"/yggl" },{ name:"人员跟踪",page:"/rygz" },{ name:"查询统计",page:"/NotFound" }],
        [{ name:"考勤管理",page:"/NotFound" },{ name:"GIS管理",page:"/NotFound" },{ name:"系统帮助",page:"/NotFound" }],
      ]
    }
  },
  methods:{
    cs(item){
      var that = this;
      // window.console.log("name:",item.name,"page:",item.page);
      this.openFullScreen(function(){that.$router.push("/About"+item.page);});
      
    },
    // 加载
    openFullScreen(callback) {
      const loading = this.$loading({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      });
      setTimeout(() => {
        loading.close();
        callback&&callback();
      }, 300);
    }
  }
}
</script>

<style scoped>
/* Public */
.box1{
  width: 80%;
  height: auto;
  margin: auto;
  text-align: center;
}
.box2{
  width: 100%;
  min-height: 50px;
  margin: 10px auto;
}

/* Header */
.bt_font{
  font-size: 50px;
  color: #ffffff;
}
/* Main */
.main_box{
  width: 100%;
  min-height: 50px;
  margin: 20px auto;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.main_item{
  width: 150px;
  height: 150px;
  /* border: 1px solid #ffffff; */
  float: left;
  border-radius: 15px;
  margin: 10px auto;
  box-shadow: 1px 1px 15px #ffffff inset;
  cursor: pointer;
  
  line-height: 130px;
  font-size: 20px;
  font-weight: 600;
  color: azure;
  transition: all 0.2s;
}
.main_item:hover{
  transform: scale(1.08);
  background-color: #236969;
  box-shadow: 1px 8px 20px rgba(0, 0, 0, 0.5);
}
/* Color */
/* .c1{
  background-color: red;
}
.c2{
  background-color: yellow;
}
.c3{
  background-color: blue;
}
.c4{
  background-color: green;
} */
</style>