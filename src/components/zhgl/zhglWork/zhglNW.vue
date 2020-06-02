<template>
    <div>
      <!-- 综合管理-班次管理-新建工作面 -->
        <div class="card-item">
            <el-row :gutter="5">
                <el-col :span="10"><div class="grid-content bg-purple"><span class="boxSpan">在此新建工作面,请在下面输入你想要建立的工作面名称:</span></div></el-col>
            </el-row>
            <el-row :gutter="5">
                <el-col :span="4"><div class="grid-content bg-purple"><span class="boxSpan">工作面名称:</span></div></el-col>
                <el-col :span="17"><div class="grid-content bg-purple"><el-input v-model="NWInput01" placeholder="请输入内容"></el-input></div></el-col>
            </el-row>
            <el-row :gutter="5">
                <el-col :span="4"><div class="grid-content bg-purple"><span class="boxSpan">上线人数:</span></div></el-col>
                <el-col :span="17"><div class="grid-content bg-purple"><el-input v-model="NWInput02" placeholder="请输入内容"></el-input></div></el-col>
            </el-row>
            <br>
            <el-row :gutter="20">
              <el-col :span="9"><div class="grid-content bg-purple"></div></el-col>
              <el-col :span="3"><div class="grid-content bg-purple"><el-button type="primary" @click="NWBut01" round>确定</el-button></div></el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            // 输入框
            NWInput01: '',
            NWInput02: '',
        }
    },
    methods:{
        // 综合管理-工作面管理-新建工作面 确定 控制台输出相关信息
        NWBut01(){
          window.console.log("/about/zhgl/zhglWork/zhglNW按钮-确定:");
          window.console.log("Input:",this.NWInput01,this.NWInput02);
          this.open("确定");
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