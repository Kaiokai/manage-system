<template>
  <div>
    <!-- 人员跟踪-员工位置查询 -->
    <el-col :xs="24" :sm="18" :md="18" :lg="18" :xl="18">
      <div class="box2">
        <template>
          <el-tabs v-model="tagsDef">
            <el-tab-pane label="员工位置查询" name="plan">
              <div class="card-item">
                <el-row :gutter="20">
                    <el-col :span="5"><div class="grid-content bg-purple"><span class="boxSpan">输入员工卡号:</span></div></el-col>
                    <el-col :span="7"><div class="grid-content bg-purple"><el-input v-model="PosInput01" placeholder="请输入内容"></el-input></div></el-col>
                    <el-col :span="5">
                        <div class="grid-content bg-purple">
                            <el-button type="primary" @click="PosBut01">选择</el-button>
                            <el-button type="primary" @click="PosBut02">查询</el-button>
                        </div>
                    </el-col>
                </el-row>
                <br>
                <el-row :gutter="20">
                  <el-col :span="23">
                    <div class="grid-content bg-purple">
                        <table border="1" cellspacing="0" cellpadding="6" style="border: #dee2e6; width:100%;">
                            <tr>
                                <td width="200" height="35">工号:</td>
                                <td>&nbsp;</td>
                                <td width="200" height="35">卡号:</td>
                                <td>&nbsp;</td>
                            </tr>
                            <tr>
                                <td width="200" height="35">当前位置:</td>
                                <td>&nbsp;</td>
                                <td width="200" height="35">到达时间:</td>
                                <td>&nbsp;</td>
                            </tr>
                            <tr>
                                <td width="200" height="35">来源位置:</td>
                                <td>&nbsp;</td>
                                <td width="200" height="35">在此停留:</td>
                                <td>&nbsp;</td>
                            </tr>
                            <tr>
                                <td width="200" height="35">来源位置:</td>
                                <td>&nbsp;</td>
                                <td width="200" height="35">在此停留:</td>
                                <td>&nbsp;</td>
                            </tr>
                            <tr>
                                <td width="200" height="35">下井时间:</td>
                                <td>&nbsp;</td>
                                <td width="200" height="35">井下停留:</td>
                                <td>&nbsp;</td>
                            </tr>
                        </table>
                    </div>
                  </el-col>
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
      // 选项卡默认选中
      tagsDef: "plan",
      // Input
      PosInput01: '',

    };
  },
  methods: {
    // 人员跟踪-位置查询 按钮
    PosBut01() {
        window.console.log("/about/rygz/rygzPostion 位置查询");
        window.console.log("Input",this.PosInput01);
        this.open("选择");
    },
    // 人员跟踪-选择跟踪 按钮
    PosBut02() {
        window.console.log("/about/rygz/rygzPostion 位置查询");
        this.open("查询");
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
</style>