<template>
  <div>
    <!-- 员工管理-标识卡管理 -->
    <el-col :xs="23" :sm="17" :md="17" :lg="17" :xl="17">
      <div class="box2">
        <div class="card-item">
          <el-row :gutter="20">
            <el-col :span="23">
              <div class="grid-content bg-purple">
                <table border="1" cellspacing="0" cellpadding="6" style="border: #dee2e6; width:100%;">
                  <tr>
                      <td colspan="3">在此进行标识卡更改操作</td>
                  </tr>
                  <tr>
                      <td width="180">旧标识卡卡号：</td>
                      <td><el-input v-model="CarInput01" placeholder="请输入内容"></el-input></td>
                      <td><el-button type="primary" @click="carBut01">选择</el-button></td>
                  </tr>
                  <tr>
                      <td>新标识卡卡号：</td>
                      <td><el-input v-model="CarInput02" placeholder="请输入内容"></el-input></td>
                      <td>&nbsp;</td>
                  </tr>
                  <tr>
                      <td colspan="3">
                          <input type="checkbox" v-model="CarBox01">
                          <span class="boxSpan">将本月及以上月旧标识卡的考勤记录和活动轨迹转移到新的卡号上</span>
                      </td>
                  </tr>
                </table>
              </div>
            </el-col>
          </el-row>
          <br />
          <el-row :gutter="20">
            <el-col :span="8">
              <div class="grid-content bg-purple">
                <span class="boxSpan"></span>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="grid-content bg-purple">
                <el-button type="primary" @click="carBut02">选择</el-button>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </el-col>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Input
      CarInput01: "",
      CarInput02: "",
      // CheckBox
      CarBox01: ""
    };
  },
  methods: {
    // 员工管理 标识卡管理 选择： 详细信息输出控制台
    carBut01: function() {
      window.console.log("/about/yggl/ygglCard 按钮:选择");
      this.open("选择");
    },
    // 员工管理 标识卡管理 选择： 详细信息输出控制台
    carBut02: function() {
      window.console.log("/about/yggl/ygglCard 按钮:选择");
      window.console.log("CheckBox:",this.CarBox01);
      window.console.log("Input:",this.CarInput01,this.CarInput02);
      this.open("选择");
    },
    // 弹出框函数
    open(mes) {
      mes = mes + " 详细信息请查看-控制台";
      this.$alert(mes, "Message", {
        confirmButtonText: "确定",
        callback: action => {
          this.$notify({
            title: "Hint",
            message: `action: ${action}`
          });
        }
      });
    }
  }
};
</script>

<style scoped>
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