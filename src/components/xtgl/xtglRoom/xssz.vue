<template>
    <div>
      <!-- 系统管理-显示设置 -->
        <div class="card-item">
          <el-row :gutter="20">
            <el-col :span="24"><div class="grid-content bg-purple"><input type="checkbox" v-model="xsszBox01"><span>在界面上显示当前登录用户</span></div></el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="24"><div class="grid-content bg-purple"><input type="checkbox" v-model="xsszBox02"><span>在通风图上显示井下人数和当天下井人数</span></div></el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="1"><div class="grid-content bg-purple"><span></span></div></el-col>
            <el-col :span="23"><div class="grid-content bg-purple"><input type="radio" name="radio" v-model="xsszRideo01"><span>显示井下总人数</span></div></el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="1"><div class="grid-content bg-purple"><span></span></div></el-col>
            <el-col :span="23"><div class="grid-content bg-purple"><input type="radio" name="radio" v-model="xsszRideo02"><span>显示当天下井总人数</span></div></el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="1"><div class="grid-content bg-purple"><span></span></div></el-col>
            <el-col :span="23"><div class="grid-content bg-purple"><input type="radio" name="radio" v-model="xsszRideo03"><span>显示井下人数和当天下井人数</span></div></el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="4"><div class="grid-content bg-purple"><input type="checkbox" v-model="xsszBox03"><span>启用未知员工提示功能</span></div></el-col>
            <el-col :span="3"><div class="grid-content bg-purple"><el-button type="primary" @click="xsszBut01" round>状态设定</el-button></div></el-col>
          </el-row>
          <br>
          <el-row :gutter="20">
            <el-col :span="7"><div class="grid-content bg-purple"><input type="checkbox" v-model="xsszBox04"><span class="boxSpan">启用通风图循环显示 循环显示间隔时间: (秒)</span></div></el-col>
            <el-col :span="8"><div class="grid-content bg-purple"><el-input v-model="xsszInput01" placeholder="请输入内容"></el-input></div></el-col>
          </el-row>
          <br>
          <el-row :gutter="20">
            <el-col :span="4"><div class="grid-content bg-purple"><span class="boxSpan">下井总人数上限:</span></div></el-col>
            <el-col :span="5"><div class="grid-content bg-purple"><el-input v-model="xsszInput02" placeholder="请输入内容"></el-input></div></el-col>
            <el-col :span="4"><div class="grid-content bg-purple"><span class="boxSpan">每班下井总人数上限:</span></div></el-col>
            <el-col :span="5"><div class="grid-content bg-purple"><el-input v-model="xsszInput03" placeholder="请输入内容"></el-input></div></el-col>
          </el-row>
          <br>
          <el-row :gutter="20">
            <el-col :span="3"><div class="grid-content bg-purple"><span>报警:</span></div></el-col>
            <el-col :span="3"><div class="grid-content bg-purple"><input type="checkbox" v-model="xsszBox05"><span>中心站停止运行</span></div></el-col>
            <el-col :span="3"><div class="grid-content bg-purple"><input type="checkbox" v-model="xsszBox06"><span>设备异常</span></div></el-col>
          </el-row>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            // checkBox
            xsszBox01: false,
            xsszBox02: false,
            xsszBox03: false,
            xsszBox04: false,
            xsszBox05: false,
            xsszBox06: false,
            // radio
            xsszRideo01: false,
            xsszRideo02: false,
            xsszRideo03: false,
            // 填空
            xsszInput01: '',
            xsszInput02: '',
            xsszInput03: '',
        }
    },
    methods:{
        // 系统管理-显示设置 按钮：状态设定 控制台输出相关信息
        xsszBut01(){
          window.console.log("/about/xtgl/xtglRoom/xssz按钮:");
          window.console.log("checkBox:",this.xsszBox01,this.xsszBox02,this.xsszBox03,this.xsszBox04,this.xsszBox05,this.xsszBox06);
          window.console.log("rideo:",this.xsszRideo01,this.xsszRideo02,this.xsszRideo03);
          window.console.log("Input:",this.xsszInput01,this.xsszInput01,this.xsszInput01);
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