<template>
    <div>
      <!-- 综合管理-工种管理-删除 -->
        <div class="card-item">
            <el-row :gutter="20">
                <el-col :span="4"><div class="grid-content bg-purple"><span class="boxSpan">欲修改工种的名称:</span></div></el-col>
                <el-col :span="18"><div class="grid-content bg-purple"><el-input v-model="xgInput01" placeholder="请输入内容"></el-input></div></el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            // 输入框
            xgInput01: '',
        }
    },
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