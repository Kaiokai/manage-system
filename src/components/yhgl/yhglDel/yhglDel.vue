<template>
    <div>
        <!-- 用户管理-新建用户-修改用户信息 -->
        <el-col :xs="24" :sm="18" :md="18" :lg="18" :xl="18">
            <div class="box2">
                <template>
                  <el-tabs v-model="tagsDef">
                    <el-tab-pane label="删除用户" name="yhglDel">
                        <div class="card-item">
                        <el-row :gutter="20">
                            <el-col :span="6"><div class="grid-content bg-purple"><span class="boxSpan">请输入你准备要删除的用户名称</span></div></el-col>
                        </el-row>
                        <el-row :gutter="20">
                            <el-col :span="4"><div class="grid-content bg-purple"><span class="boxSpan">用户名称:</span></div></el-col>
                        </el-row>
                        <el-row :gutter="20">
                            <el-col :span="18"><div class="grid-content bg-purple"><el-input v-model="DelInput01" placeholder="请输入内容"></el-input></div></el-col>
                        </el-row>
                        <br>
                        <el-row :gutter="20">
                            <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
                            <el-col :span="3"><div class="grid-content bg-purple"><el-button type="primary" @click="DelBut01">提交</el-button></div></el-col>
                        </el-row>
                        </div>
                    </el-tab-pane>
                  </el-tabs>
                </template>
            </div>
        </el-col>
    </div>
</template>

<script>

export default {
    data() {
      return {
        // 选项卡默认
        tagsDef: 'yhglDel',
        // 输入框
        DelInput01: '',
      };
    },
    methods: {
        // 用户管理-删除已有用户-确定 确定 控制台输出相关信息
        DelBut01:function(){
            window.console.log("/about/yhgl/yhglDel/yhglDel按钮-确定:");
            window.console.log("Input:",this.DelInput01);
            this.open("确定")
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