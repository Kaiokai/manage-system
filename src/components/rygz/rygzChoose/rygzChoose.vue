<template>
  <div>
    <!-- 人员跟踪-选择跟踪 -->
    <el-col :xs="24" :sm="18" :md="18" :lg="18" :xl="18">
      <div class="box2">
        <template>
          <el-tabs v-model="tagsDef">
            <el-tab-pane label="员工选择跟踪" name="plan">
              <div class="card-item">
                <!-- 示意图选择---表格 -->
                <el-row :gutter="20">
                  <el-col :span="23">
                    <div class="grid-content bg-purple">
                      <el-table :data="tableData" style="width: 100%">
                        <el-table-column prop="id" label="序号" width="180"></el-table-column>
                        <el-table-column prop="viewName" label="示意图名称" width="180"></el-table-column>
                        <el-table-column prop="time" label="上传时间"></el-table-column>
                        <el-table-column prop="per01" label="上传人"></el-table-column>
                        <el-table-column prop="other" label="描述"></el-table-column>
                        <el-table-column prop="choose" label="选择"></el-table-column>
                      </el-table>
                    </div>
                  </el-col>
                </el-row>
                <br>
                <el-row :gutter="20">
                  <el-col :span="9">
                    <div class="grid-content bg-purple"></div>
                  </el-col>
                  <el-col :span="7">
                    <div class="grid-content bg-purple">
                      <el-button type="primary" @click="ChooseBut01" round>导出Excel</el-button>
                      <el-button type="primary" @click="ChooseBut02" round>打印</el-button>
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
      // 表格
      tableData: [
        {
          id: "1",
          viewName: "Mark",
          time: "Otto",
          per01: "@mdo",
          other: "Otto",
          choose: ""
        }
      ]
    };
  },
  methods: {
    // 人员跟踪-选择跟踪 按钮导出Excel
    ChooseBut01() {
      window.console.log("/about/rygz/rygzChoose选择跟踪");
      this.open("正在导出Excel...");
    },
    // 人员跟踪-选择跟踪 按钮打印
    ChooseBut02() {
      window.console.log("/about/rygz/rygzChoose选择跟踪");
      this.open("打印...");
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
/* .el-col {
  border-radius: 4px;
}
.bg-purple-dark {
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