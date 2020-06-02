<template>
  <div class="about">
    <!-- Header -->
    <div class="header">
      <el-row>
        <!-- 标题 -->
        <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
          <div class="box1"><h1 class="bg-font">隧道工程人员管理系统</h1></div>
        </el-col>
        <!-- 菜单 -->
        <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
          <div class="box2">
            <ul class="menu-ul">
              <router-link to="/"><li class="menu-li"><strong>首页</strong></li></router-link>
              <router-link to="/about/xtgl"><li @click="setActid(1)" class="menu-li" :class="{'liColor':actid==1}">系统管理<div :class="{'liClo-s':actid==1}" id="liClo1" class="liClo"></div></li></router-link>
              <router-link to="/about/zhgl"><li @click="setActid(2)" class="menu-li" :class="{'liColor':actid==2}">综合管理<div :class="{'liClo-s':actid==2}" id="liClo2" class="liClo"></div></li></router-link>
              <router-link to="/about/yhgl"><li @click="setActid(3)" class="menu-li" :class="{'liColor':actid==3}">用户管理<div :class="{'liClo-s':actid==3}" id="liClo3" class="liClo"></div></li></router-link>
              <router-link to="/about/yggl"><li @click="setActid(4)" class="menu-li" :class="{'liColor':actid==4}">员工管理<div :class="{'liClo-s':actid==4}" id="liClo4" class="liClo"></div></li></router-link>
              <router-link to="/about/rygz"><li @click="setActid(5)" class="menu-li" :class="{'liColor':actid==5}">人员跟踪<div :class="{'liClo-s':actid==5}" id="liClo5" class="liClo"></div></li></router-link>
              <router-link to="/about/NotFound"><li @click="setActid(6)" class="menu-li" :class="{'liColor':actid==6}">查询统计<div :class="{'liClo-s':actid==6}" id="liClo6" class="liClo"></div></li></router-link>
              <router-link to="/about/NotFound"><li @click="setActid(7)" class="menu-li" :class="{'liColor':actid==7}">考勤管理<div :class="{'liClo-s':actid==7}" id="liClo7" class="liClo"></div></li></router-link>
              <router-link to="/about/NotFound"><li @click="setActid(8)" class="menu-li" :class="{'liColor':actid==8}">系统帮助<div :class="{'liClo-s':actid==8}" id="liClo8" class="liClo"></div></li></router-link>
            </ul>
          </div>
        </el-col>
      </el-row>
    </div>

    <!-- 主显示部分 -->
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      actid: 0
    }
  },
  methods: {
    setActid(i) {
      this.openFullScreen();
      this.actid = i;
    },
    // 加载
    openFullScreen() {
      const loading = this.$loading({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      });
      setTimeout(() => {
        loading.close();
      }, 300);
    }
  },
}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
/* Public */
.header{
  width: 100%;
  height: 100px;
  background-color: #3f3b3b;
}
.box1{
  width: 100%;
  height: 100px;
}
.box2{
  width: 100%;
  height: 100px;

  display: flex;
  flex-direction: row;
}
.bg-font{
  padding: 23px 35px;
  font-size: 40px;
  color: #ffffff;
}
.menu-ul{
  list-style: none;
  background-color: #ffffff;

  align-self: flex-end;
 
}
.menu-li{
  width: 100px;
  height: 50px;
  /* background-color: bisque; */
  float: left;
  padding: 5px 0;
  margin: 0 1px;
  text-align: center;
  line-height: 50px;
  cursor: pointer;
  transition: all 0.5s;
  color: #000;

  position: relative;
  
}
.menu-li:hover{
  background-color: #f39c9c;
}
.liClo{
  width: 0;
  height: 4px;
  background-color: #236969;
  transition: all 0.5s;
  
  position: absolute;
  top: 56px;
  left: 0;
}
.liClo-s {
  width: 100px;
}
.liColor{
  background-color: #f39c9c;
}
/* Main */
.main{
  width: 100%;
  min-height: 400px;
  /* background-color: red; */
  margin: 10px auto;
}

/* Color */
.c1{
  background-color: red;
}
.c2{
  background-color: yellow;
}
.c3{
  background-color: pink;
}
</style>