<template>
    <div>
      <!-- 综合管理-职称管理-修改 -->
        <div class="card-item">
            <el-row :gutter="20">
                <el-col :span="4"><div class="grid-content bg-purple"><span class="boxSpan">请选择想要修改的工种:</span></div></el-col>
                <el-col :span="18"><div class="grid-content bg-purple"><el-input v-model="xgInput01" placeholder="请输入内容"></el-input></div></el-col>
            </el-row>
            <br>
            <el-row :gutter="20">
                <el-col :span="4"><div class="grid-content bg-purple"><span class="boxSpan">工种名称:</span></div></el-col>
                <el-col :span="18"><div class="grid-content bg-purple"><el-input v-model="xgInput02" placeholder="请输入内容"></el-input></div></el-col>
            </el-row>
            <br>
            <el-row :gutter="20">
                <el-col :span="4"><div class="grid-content bg-purple"><span class="boxSpan">工种编号:</span></div></el-col>
                <el-col :span="18"><div class="grid-content bg-purple"><el-input v-model="xgInput03" placeholder="请输入内容"></el-input></div></el-col>
            </el-row>
            <br>
            <el-row :gutter="20">
                <el-col :span="4"><div class="grid-content bg-purple"><span class="boxSpan">工种特性:</span></div></el-col>
                <el-col :span="18"><div class="grid-content bg-purple"><el-input v-model="xgInput04" placeholder="请输入内容"></el-input></div></el-col>
            </el-row>
            <br>
            <el-row :gutter="20">
                <el-col :span="4"><div class="grid-content bg-purple"><span class="boxSpan">工种计算方式:</span></div></el-col>
                <el-col :span="9"><div class="grid-content bg-purple"><el-input v-model="xgInput05" placeholder="请输入内容"></el-input></div></el-col>
                <el-col :span="9"><div class="grid-content bg-purple"><el-input v-model="xgInput06" placeholder="请输入内容"></el-input></div></el-col>
            </el-row>
            <br>
            <el-row :gutter="20">
                <el-col :span="4"><div class="grid-content bg-purple"><span class="boxSpan">工种默认工时:</span></div></el-col>
                <el-col :span="18"><div class="grid-content bg-purple"><el-input v-model="xgInput07" placeholder="请输入内容"></el-input></div></el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="4"><div class="grid-content bg-purple"><span class="boxSpan"></span></div></el-col>
                <el-col :span="18"><div class="grid-content bg-purple"><input type="checkbox" v-model="xgBox01"><span class="boxSpan">工时应用到所有人</span></div></el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="4"><div class="grid-content bg-purple"><span class="boxSpan">默认津贴:</span></div></el-col>
                <el-col :span="18"><div class="grid-content bg-purple"><el-input v-model="xgInput08" placeholder="请输入内容"></el-input></div></el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="4"><div class="grid-content bg-purple"><span class="boxSpan"></span></div></el-col>
                <el-col :span="18"><div class="grid-content bg-purple"><input type="checkbox" v-model="xgBox02"><span class="boxSpan">津贴默认到所有人</span></div></el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="4"><div class="grid-content bg-purple"><span class="boxSpan">排序位置为:</span></div></el-col>
                <el-col :span="18"><div class="grid-content bg-purple"><el-input v-model="xgInput09" placeholder="请输入内容"></el-input></div></el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="4"><div class="grid-content bg-purple"><span class="boxSpan"></span></div></el-col>
                <el-col :span="18"><div class="grid-content bg-purple"><input type="checkbox" v-model="xgBox03"><span class="boxSpan">位于前面(不选位于其后)</span></div></el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="10"><div class="grid-content bg-purple"></div></el-col>
              <el-col :span="3"><div class="grid-content bg-purple"><el-button type="primary" @click="xjBut01" round>修改</el-button></div></el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            // checkBox
            xgBox01: false,
            xgBox02: false,
            xgBox03: false,
            // 输入框
            xgInput01: '',
            xgInput02: '',
            xgInput03: '',
            xgInput04: '',
            xgInput05: '',
            xgInput06: '',
            xgInput07: '',
            xgInput08: '',
            xgInput09: '',
        }
    },
    methods:{
        // 综合管理-工种管理-修改 按钮：修改 控制台输出相关信息
        xjBut01(){
          window.console.log("/about/zhgl/zhglJobType/zhglTPxg按钮-修改:");
          window.console.log("checkBox:",this.xgBox01,this.xgBox02,this.xgBox03);
          window.console.log("Input:",this.xgInput01,this.xgInput02,this.xgInput03,this.xgInput04,this.xgInput05,this.xgInput06,this.xgInput07,this.xgInput08,this.xgInput09);
          this.open("修改")
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