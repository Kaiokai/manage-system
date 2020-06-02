<template>
    <div>
      <!-- 综合管理-职称管理-新建 -->
        <div class="card-item">
            <el-row :gutter="20">
                <el-col :span="4"><div class="grid-content bg-purple"><span class="boxSpan">职称名称:</span></div></el-col>
                <el-col :span="18"><div class="grid-content bg-purple"><el-input v-model="xjInput01" placeholder="请输入内容"></el-input></div></el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="4"><div class="grid-content bg-purple"><span class="boxSpan">职称编号:</span></div></el-col>
                <el-col :span="18"><div class="grid-content bg-purple"><el-input v-model="xjInput02" placeholder="请输入内容"></el-input></div></el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="4"><div class="grid-content bg-purple"><span class="boxSpan">部门排列位置为:</span></div></el-col>
                <el-col :span="18"><div class="grid-content bg-purple"><el-input v-model="xjInput03" placeholder="请输入内容"></el-input></div></el-col>
            </el-row>
            <br>
            <el-row :gutter="20">
                <el-col :span="4"><div class="grid-content bg-purple"><span class="boxSpan"></span></div></el-col>
                <el-col :span="18"><div class="grid-content bg-purple"><input type="checkbox" v-model="xjBox01"><span class="boxSpan">位于前面(不选位于其后)</span></div></el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="10"><div class="grid-content bg-purple"></div></el-col>
              <el-col :span="3"><div class="grid-content bg-purple"><el-button type="primary" @click="xjBut01" round>新建</el-button></div></el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            // checkBox
            xjBox01: false,
            // 输入框
            xjInput01: '',
            xjInput02: '',
            xjInput03: '',
        }
    },
    methods:{
        // 综合管理-职称管理-新建 按钮：新建 控制台输出相关信息
        xjBut01(){
          window.console.log("/about/zhgl/zhglJob/zhglzwgl按钮-新建:");
          window.console.log("checkBox:",this.xjBox01);
          window.console.log("Input:",this.xjInput01,this.xjInput02,this.xjInput03);
          this.open("新建")
        },
        // 弹出框函数
        open(mes){
            mes = mes+" 详细信息请查看-控制台";
            this.$alert(mes,'Message',{
                confirmButtonText: '确定',
                callback: action => {
                    this.$notify({
                        title: 'Hint',
                        message: `action: ${ action}`
                    })
                }
            })
        }
    }
}
</script>

<style scoped>
/* Public */
.boxSpan{
    line-height: 40px;
}

/* card */
.card-item{
    width: 100%;
    min-height: 350px;
    /* background: yellow; */
    text-align: left;
    color: #ffffff;
}
/* Element */
.el-row {
  margin-bottom: 3px;
  /* &:last-child {
    margin-bottom: 0;
  } */
}
.el-col {
  border-radius: 4px;
}
/* .bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
} */
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  /* background-color: #f9fafc; */
}
</style>