<template>
  <div>
    <!-- 人员跟踪-轨迹再现 -->
    <el-col :xs="24" :sm="18" :md="18" :lg="18" :xl="18">
      <div class="box2">
        <template>
          <el-tabs v-model="tagsDef">
            <el-tab-pane label="新增" name="plan">
              <div class="card-item">
                <el-row :gutter="20">
                    <el-col :span="8"><div class="grid-content bg-purple"><span class="boxSpan">请在下面输入需要轨迹再现的员工卡号及显示的日期</span></div></el-col>
                </el-row>
                <br>
                <el-row :gutter="10">
                    <el-col :span="3"><div class="grid-content bg-purple"><span class="boxSpan">再现日期：</span></div></el-col>
                    <el-col :span="19"><div class="grid-content bg-purple"><el-input v-model="RWInput01" placeholder="请输入内容"></el-input></div></el-col>
                </el-row>
                <el-row :gutter="10">
                    <el-col :span="3"><div class="grid-content bg-purple"><span class="boxSpan">员工卡号：</span></div></el-col>
                    <el-col :span="19"><div class="grid-content bg-purple"><el-input v-model="RWInput02" placeholder="请输入内容"></el-input></div></el-col>
                </el-row>
                <el-row :gutter="10">
                    <el-col :span="10"><div class="grid-content bg-purple"></div></el-col>
                    <el-col :span="5"><div class="grid-content bg-purple"><el-button type="primary" @click="WayBut01">确定</el-button></div></el-col>
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
      RWInput01: '',
      RWInput02: '',
    };
  },
  methods: {
    // 人员跟踪-轨迹再现 按钮
    WayBut01() {
        window.console.log("/about/rygz/rygzPostion 轨迹再现");
        window.console.log("Input",this.RWInput01,this.RWInput01);
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
</style>