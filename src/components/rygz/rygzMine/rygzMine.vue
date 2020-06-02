<template>
  <div>
    <!-- 人员跟踪-个人定位 -->
    <el-col :xs="24" :sm="18" :md="18" :lg="18" :xl="18">
      <div class="box2">
        <template>
          <el-tabs v-model="tagsDef">
            <el-tab-pane label="个人井下定位" name="plan">
              <div class="card-item">
                <el-row :gutter="20">
                    <el-col :span="8"><div class="grid-content bg-purple"><span class="boxSpan">请设置井下实时显示的员工，该设置对当前有效</span></div></el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="23"><div class="grid-content bg-purple"><el-input v-model="MineInput01" placeholder="请输入内容"></el-input></div></el-col>
                </el-row>
                <br>
                <el-row :gutter="20">
                    <el-col :span="9"><div class="grid-content bg-purple"></div></el-col>
                    <el-col :span="5">
                        <div class="grid-content bg-purple">
                            <el-button type="primary" @click="MineBut01">确定</el-button>
                        </div>
                    </el-col>
                </el-row>
                <br>
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
      MineInput01: '',
    };
  },
  methods: {
    // 人员跟踪-个人井下定位 按钮
    MineBut01() {
        window.console.log("/about/rygz/rygzMine 个人井下定位");
        window.console.log("Input",this.MineInput01);
        this.open("确定");
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