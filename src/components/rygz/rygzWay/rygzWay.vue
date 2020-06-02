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
                    <el-col :span="5"><div class="grid-content bg-purple"><span class="boxSpan">日期:</span></div></el-col>
                    <el-col :span="6"><div class="grid-content bg-purple"><el-input v-model="WayInput01" placeholder="请输入内容"></el-input></div></el-col>
                    <el-col :span="5"><div class="grid-content bg-purple"><span class="boxSpan">员工编号:</span></div></el-col>
                    <el-col :span="6"><div class="grid-content bg-purple"><el-input v-model="WayInput01" placeholder="请输入内容"></el-input></div></el-col>
                </el-row>
                <br>
                <el-row :gutter="20">
                    <el-col :span="9"><div class="grid-content bg-purple"></div></el-col>
                    <el-col :span="5">
                        <div class="grid-content bg-purple">
                            <el-button type="primary" @click="WayBut01">选择</el-button>
                            <el-button type="primary" @click="WayBut02">确定</el-button>
                        </div>
                    </el-col>
                </el-row>
                <br>
                <el-row :gutter="10">
                    <el-col :span="5"><div class="grid-content bg-purple"><input type="checkbox" v-model="WayBox01"><span class="boxSpan">最近两天</span></div></el-col>
                    <el-col :span="2"><div class="grid-content bg-purple"><input type="checkbox" v-model="WayBox02"><span class="boxSpan">时间段</span></div></el-col>
                    <el-col :span="3"><div class="grid-content bg-purple"><el-input v-model="WayInput01" placeholder="请输入内容"></el-input></div></el-col>
                    <el-col :span="1"><div class="grid-content bg-purple"><span class="boxSpan"> 日--</span></div></el-col>
                    <el-col :span="3"><div class="grid-content bg-purple"><el-input v-model="WayInput01" placeholder="请输入内容"></el-input></div></el-col>
                    <el-col :span="1"><div class="grid-content bg-purple"><span class="boxSpan">日</span></div></el-col>
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
      // CheckBox
      WayBox01: '',
      WayBox02: '',   
      // Input
      WayInput01: '',
      WayInput02: '',
    };
  },
  methods: {
    // 人员跟踪-员工活动轨迹 按钮
    WayBut01() {
        window.console.log("/about/rygz/rygzPostion 员工活动轨迹");
        window.console.log("Input",this.PosInput01);
        this.open("选择");
    },
    // 人员跟踪-员工活动轨迹 按钮
    WayBut02() {
        window.console.log("/about/rygz/rygzPostion 员工活动轨迹");
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