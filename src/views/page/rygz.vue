<template>
  <div id="xtgl">
    <!-- 人员跟踪-左侧菜单栏 -->
    <el-row>
        <el-col :xs="24" :sm="6" :md="6" :lg="6" :xl="6">
            <div class="box1">
                <div class="leftbox1">
                    <ul class="leftmenu-ul">
                        <li class="leftmenu-li" style="background-color:#2b5ec1; font-size:17px; cursor: auto;"><strong>人员跟踪</strong></li>
                        <li v-for="(item,index) in xtItems" :key="index" @click="isActive(index)" :class="{'left-active':item.active}" class="leftmenu-li">{{item.name}}</li>
                    </ul>
                </div>
            </div>
        </el-col>

        <!-- 右侧 显示部分 -->
        <router-view></router-view>
    </el-row>
  </div>
</template>

<script>
export default {
    data(){
        return{
            // 本页左侧单栏 { name：菜单名,active：是否选中,page: 对应路径 }
            xtItems:[
                // { name:"系统管理",active:true,page:'/xtglRoom/' },
                { name:"选择跟踪",active:true,page:'/rygzChoose/' },
                { name:"实时跟踪",active:false,page:'/rygzNow/' },
                { name:"位置跟踪",active:false,page:'/rygzPosition/' },
                { name:"活动轨迹",active:false,page:'/rygzWay/' },
                { name:"轨迹再现",active:false,page:'/rygzResWay/' },
                { name:"个人定位",active:false,page:'/rygzMine/' }
            ]
        }
    },
    methods:{
        // 选中样式 效果+路由
        isActive(index){
            //  循环给左菜单栏绑定 元素(true为选中状态)
            for(var i=0;i<this.xtItems.length;i++){
                this.xtItems[i].active = false;
            }
            // 选中项将active改为true
            this.xtItems[index].active = true;
            // window.console.log(index);
            // 定义 跳转路径
            var goPath = "/about/rygz"+this.xtItems[index].page;
            // 判断当前路径
            var nowPath = this.$router.app._route.fullPath;
            // window.console.log(goPath,nowPath);
            // 如果在当前位置不在本页 点击跳转
            if(goPath != nowPath){
                this.$router.push(goPath);
            }
        },
    },
    mounted(){

    }
}
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
}

.box1{
    width: 100%;
    min-height: 100px;
    /* background-color: pink; */
}
.box2{
    width: 100%;
    min-height: 100px;
    /* background-color: yellow; */
    margin: 30px 0;
}

/* left */
.leftbox1{
    width: 90%;
    min-height: 300px;
    /* background-color: purple; */
}
.leftmenu-ul{
    width: 80%;
    border-radius: 10px;
    overflow: hidden;
    list-style: none;
    background-color: #ffffff;

    align-self: flex-end;
    margin: 5px 15px;
}
.leftmenu-li{
    width: 100%;
    height: 50px;
    /* background-color: bisque; */
    padding: 5px 20px;
    line-height: 50px;
    cursor: pointer;
    border-bottom: 1px solid rgba(0,0,0,.125);
    transition: all 0.2s;
}
.noborder{
    border: none;
}
.left-active{
    background-color: #6ea6f3;
    color: #ffffff;
}
</style>