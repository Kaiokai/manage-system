<template>
  <div>
    <div class="card-item">
      <!-- 综合管理-部门管理-表格 -->
      <el-row :gutter="20">
        <el-col :span="23">
          <div class="grid-content bg-purple">
            <el-table :data="tableData" style="width: 100%">
              <el-table-column prop="id" label="序号" width="180"></el-table-column>
              <el-table-column prop="sectionId" label="部门编号" width="180"></el-table-column>
              <el-table-column prop="name" label="部门名称"></el-table-column>
              <el-table-column prop="other" label="特殊属性"></el-table-column>
              <el-table-column prop="per01" label="人数"></el-table-column>
              <el-table-column prop="money" label="津贴"></el-table-column>
              <el-table-column prop="time" label="工时"></el-table-column>
            </el-table>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 综合管理-部门管理-表格
        tableData: [
        {
            id: '1',
            viewName: '',
            time: '',
            per01: '',
            other: '',
            choose: ''
        }, 
        ]
    };
  },
  methods: {
    // 系统管理-显示设置 按钮：状态设定 控制台输出相关信息
    xsszBut01() {
      window.console.log("/about/xtgl/xtglRoom/xssz按钮:");
      window.console.log("checkBox:",this.xsszBox01,this.xsszBox02,this.xsszBox03,this.xsszBox04,this.xsszBox05,this.xsszBox06);
      window.console.log("rideo:",this.xsszRideo01,this.xsszRideo02,this.xsszRideo03);
      window.console.log("Input:",this.xsszInput01,this.xsszInput01,this.xsszInput01);
      this.open("修改");
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