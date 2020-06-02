<template>
  <div>
    <!-- 综合管理-班次-显示班次信息 -->
    <div class="card-item">
      <el-row :gutter="5">
        <el-col :span="7">
          <div class="grid-content bg-purple">
            <h2>全矿所有班次设置列表</h2>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="5">
        <el-col :span="22">
          <div class="grid-content bg-purple">
            <table border="2" bordercolor="black" width="100%" cellspacing="0" cellpadding="5">
                <tr>
                    <td rowspan="3"><span>全矿班次设置</span></td>
                    <td><span>班次</span></td>
                    <td><span>起止时间</span></td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>1</td>
                </tr>
            </table>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="5">
        <el-col :span="7">
          <div class="grid-content bg-purple">
            <h3>特殊部门设置班次</h3>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="5">
        <el-col :span="22">
          <div class="grid-content bg-purple">
            <table border="2" bordercolor="black" width="100%" cellspacing="0" cellpadding="5">
                <tr>
                    <td rowspan="3"><span>全矿班次设置</span></td>
                    <td><span>班次</span></td>
                    <td><span>起止时间</span></td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>1</td>
                </tr>
            </table>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="5">
        <el-col :span="7">
          <div class="grid-content bg-purple">
            <h3>特殊工种设置班次</h3>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="5">
        <el-col :span="22">
          <div class="grid-content bg-purple">
            <table border="2" bordercolor="black" width="100%" cellspacing="0" cellpadding="5">
                <tr>
                    <td rowspan="3"><span>全矿班次设置</span></td>
                    <td><span>班次</span></td>
                    <td><span>起止时间</span></td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>1</td>
                </tr>
            </table>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="5">
        <el-col :span="7">
          <div class="grid-content bg-purple">
            <h3>特殊员工设置班次</h3>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="5">
        <el-col :span="22">
          <div class="grid-content bg-purple">
            <table border="2" bordercolor="black" width="100%" cellspacing="0" cellpadding="5">
                <tr>
                    <td rowspan="3"><span>全矿班次设置</span></td>
                    <td><span>班次</span></td>
                    <td><span>起止时间</span></td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>1</td>
                </tr>
            </table>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
/* Public */
.boxSpan {
  line-height: 40px;
}

/* card */
.card-item {
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