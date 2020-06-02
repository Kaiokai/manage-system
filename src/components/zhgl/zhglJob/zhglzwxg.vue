<template>
    <div>
      <!-- 综合管理-职务管理-修改 -->
        <div class="card-item">
            <el-row :gutter="20">
                <el-col :span="4"><div class="grid-content bg-purple"><span class="boxSpan">请选择想要修改的部门:</span></div></el-col>
                <el-col :span="18"><div class="grid-content bg-purple"><el-input v-model="xgInput01" placeholder="请输入内容"></el-input></div></el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="4"><div class="grid-content bg-purple"><span class="boxSpan">部门名称:</span></div></el-col>
                <el-col :span="18"><div class="grid-content bg-purple"><el-input v-model="xgInput02" placeholder="请输入内容"></el-input></div></el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="4"><div class="grid-content bg-purple"><span class="boxSpan">该部门有上属部门并为其指定:</span></div></el-col>
                <el-col :span="18"><div class="grid-content bg-purple"><input type="checkbox" v-model="xgBox01"><span class="boxSpan">该部门有上属部门并为其指定</span></div></el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="4"><div class="grid-content bg-purple"><span class="boxSpan">上属部门:</span></div></el-col>
                <el-col :span="18"><div class="grid-content bg-purple"><el-input v-model="xgInput03" placeholder="请输入内容"></el-input></div></el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="4"><div class="grid-content bg-purple"><span class="boxSpan">该部门职工默认工时:</span></div></el-col>
                <el-col :span="18"><div class="grid-content bg-purple"><el-input v-model="xgInput04" placeholder="小时/工"></el-input></div></el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
                <el-col :span="18"><div class="grid-content bg-purple"><input type="checkbox" v-model="xgBox02"><span class="boxSpan">工时应用到部门所有人</span></div></el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="4"><div class="grid-content bg-purple"><span class="boxSpan">该部门职工默认津贴:</span></div></el-col>
                <el-col :span="18"><div class="grid-content bg-purple"><el-input v-model="xgInput05" placeholder="请输入"></el-input></div></el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
                <el-col :span="18"><div class="grid-content bg-purple"><input type="checkbox" v-model="xgBox03"><span class="boxSpan">津贴应用到部门所有人</span></div></el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="4"><div class="grid-content bg-purple"><span class="boxSpan">部门特殊性:</span></div></el-col>
                <el-col :span="18"><div class="grid-content bg-purple"><el-input v-model="xgInput06" placeholder="请输入内容"></el-input></div></el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="4"><div class="grid-content bg-purple"><span class="boxSpan">工时计算方式:</span></div></el-col>
                <el-col :span="10"><div class="grid-content bg-purple"><el-input v-model="xgInput07" placeholder="请输入内容"></el-input></div></el-col>
                <el-col :span="1"><div class="grid-content bg-purple"></div></el-col>
                <el-col :span="5"><div class="grid-content bg-purple"><el-input v-model="xgInput08" placeholder="请输入内容"></el-input></div></el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="4"><div class="grid-content bg-purple"><span class="boxSpan">部门排列位置:</span></div></el-col>
                <el-col :span="18"><div class="grid-content bg-purple"><el-input v-model="xgInput09" placeholder="请输入内容"></el-input></div></el-col>
            </el-row>
            <br>
            <el-row :gutter="20">
                <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
                <el-col :span="18"><div class="grid-content bg-purple"><input type="checkbox" v-model="xgBox04"><span class="boxSpan">位于前面(不选位于其后)</span></div></el-col>
            </el-row>
            <br>
            <el-row :gutter="20">
              <el-col :span="10"><div class="grid-content bg-purple"></div></el-col>
              <el-col :span="3"><div class="grid-content bg-purple"><el-button type="primary" @click="xgBut01" round>修改</el-button></div></el-col>
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
            xgBox04: false,
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
        // 综合管理-部门管理-修改 按钮：修改 控制台输出相关信息
        xgBut01(){
          window.console.log("/about/zhgl/zhglSection/zhglxg按钮-修改:");
          window.console.log("checkBox:",this.xgBox01,this.xgBox02,this.xgBox03,this.xgBox04);
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