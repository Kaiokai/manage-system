<template>
  <div>
    <!-- 员工管理-员工查询 -->
    <el-col :xs="23" :sm="17" :md="17" :lg="17" :xl="17">
      <div class="box2">
        <div class="card-item">
          <el-row :gutter="20">
            <el-col :span="23">
              <div class="grid-content bg-purple">
                <span class="boxSpan">部门:</span>
                <table border="1" cellspacing="0" cellpadding="6" style="border: #dee2e6;">
                  <tr>
                    <td width="90">卡号：</td>
                    <td width="360">
                      <el-input v-model="CreInput01" placeholder="请输入内容"></el-input>
                    </td>
                    <td width="110">工号：</td>
                    <td width="360">
                      <el-input v-model="CreInput02" placeholder="请输入内容"></el-input>
                    </td>
                    <td rowspan="4" colspan="2">
                      <el-row :gutter="10">
                        <el-col :span="7">
                          <div class="grid-content bg-purple"></div>
                        </el-col>
                        <el-col :span="12">
                          <div class="grid-content bg-purple" style="text-align:center;">
                            <el-button @click="celBut03" type="primary">添加</el-button>
                          </div>
                        </el-col>
                      </el-row>
                    </td>
                  </tr>
                  <tr>
                    <td>姓名：</td>
                    <td>
                      <el-input v-model="CreInput03" placeholder="请输入内容"></el-input>
                    </td>
                    <td>性别：</td>
                    <td>
                      <el-select v-model="CreSelect01" placeholder="请选择" style="width:100%;">
                        <el-option
                          v-for="item in options01"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value"
                        ></el-option>
                    </el-select>
                    </td>
                  </tr>
                  <tr>
                    <td>职称：</td>
                    <td>
                      <el-select v-model="CreSelect02" placeholder="请选择" style="width:100%;">
                        <el-option
                          v-for="item in options01"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value"
                        ></el-option>
                    </el-select>
                    </td>
                    <td>合同方式：</td>
                    <td>
                      <el-select v-model="CreSelect03" placeholder="请选择" style="width:100%;">
                        <el-option
                          v-for="item in options01"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value"
                        ></el-option>
                    </el-select>
                    </td>
                  </tr>
                  <tr>
                    <td>籍贯：</td>
                    <td>
                      <el-select v-model="CreSelect04" placeholder="请选择" style="width:100%;">
                        <el-option
                          v-for="item in options01"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value"
                        ></el-option>
                    </el-select>
                    </td>
                    <td>民族：</td>
                    <td>
                      <el-select v-model="CreSelect05" placeholder="请选择" style="width:100%;">
                        <el-option
                          v-for="item in options01"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value"
                        ></el-option>
                    </el-select>
                    </td>
                  </tr>
                  <tr>
                    <td>部门：</td>
                    <td>
                      <el-select v-model="CreSelect06" placeholder="请选择" style="width:100%;">
                        <el-option
                          v-for="item in options01"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value"
                        ></el-option>
                    </el-select>
                    </td>
                    <td>规定下井次数</td>
                    <td>
                      <el-input v-model="CreInput04" placeholder="请输入内容"></el-input>
                    </td>
                    <td>班组：</td>
                    <td>
                      <el-select v-model="CreSelect07" placeholder="请选择" style="width:100%;">
                        <el-option
                          v-for="item in options01"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value"
                        ></el-option>
                    </el-select>
                    </td>
                  </tr>
                  <tr>
                    <td>工种：</td>
                    <td>
                      <el-select v-model="CreSelect08" placeholder="请选择" style="width:100%;">
                        <el-option
                          v-for="item in options01"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value"
                        ></el-option>
                    </el-select>
                    </td>
                    <td>职务：</td>
                    <td>
                      <el-select v-model="CreSelect09" placeholder="请选择" style="width:100%;">
                        <el-option
                          v-for="item in options01"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value"
                        ></el-option>
                    </el-select>
                    </td>
                    <td>规定下井时间：</td>
                    <td>
                      <el-input v-model="CreInput05" placeholder="请输入内容"></el-input>
                    </td>
                  </tr>
                  <tr>
                    <td>学历：</td>
                    <td>
                      <el-select v-model="CreSelect10" placeholder="请选择" style="width:100%;">
                        <el-option
                          v-for="item in options01"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value"
                        ></el-option>
                    </el-select>
                    </td>
                    <td>工时：</td>
                    <td>
                      <el-input v-model="CreInput06" placeholder="请输入内容"></el-input>
                    </td>
                    <td>政治面貌：</td>
                    <td>
                      <el-select v-model="CreSelect11" placeholder="请选择" style="width:100%;">
                        <el-option
                          v-for="item in options01"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value"
                        ></el-option>
                    </el-select>
                    </td>
                  </tr>
                  <tr>
                    <td>身高：</td>
                    <td>
                      <el-input v-model="CreInput07" placeholder="请输入内容"></el-input>
                    </td>
                    <td>婚否：</td>
                    <td>
                      <el-select v-model="CreSelect12" placeholder="请选择" style="width:100%;">
                        <el-option
                          v-for="item in options01"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value"
                        ></el-option>
                    </el-select>
                    </td>
                    <td>享受津贴级别：</td>
                    <td>
                      <el-select v-model="CreSelect13" placeholder="请选择" style="width:100%;">
                        <el-option
                          v-for="item in options01"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value"
                        ></el-option>
                    </el-select>
                    </td>
                  </tr>
                  <tr>
                    <td>体重：</td>
                    <td>
                      <el-input v-model="CreInput08" placeholder="请输入内容"></el-input>
                    </td>
                    <td>生日：</td>
                    <td>
                      <el-input v-model="CreInput09" placeholder="请输入内容"></el-input>
                    </td>
                    <td>参加工作时间：</td>
                    <td>
                      <el-input v-model="CreInput10" placeholder="请输入内容"></el-input>
                    </td>
                  </tr>
                  <tr>
                    <td>灯号：</td>
                    <td>
                      <el-input v-model="CreInput11" placeholder="请输入内容"></el-input>
                    </td>
                    <td colspan="4">&nbsp;</td>
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
                <el-button type="primary" @click="celBut01">修改</el-button>
                <el-button type="primary" @click="celBut02">确定</el-button>
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
        // 选择器
        CreSelect01: '',
        CreSelect02: '',
        CreSelect03: '',
        CreSelect04: '',
        CreSelect05: '',
        CreSelect06: '',
        CreSelect07: '',
        CreSelect08: '',
        CreSelect09: '',
        CreSelect10: '',
        CreSelect11: '',
        CreSelect12: '',
        CreSelect13: '',
        options01: [
          { value: "A1", label: "A1" },
          { value: "B1", label: "B1" },
          { value: "C1", label: "C1" }
        ],
        // Input
        CreInput01: "",
        CreInput02: "",
        CreInput03: "",
        CreInput04: "",
        CreInput05: "",
        CreInput06: "",
        CreInput07: "",
        CreInput08: "",
        CreInput09: "",
        CreInput10: "",
        CreInput11: "",
    };
  },
  methods: {
    // 员工管理 创建员工 修改： 详细信息输出控制台
    celBut01: function() {
      window.console.log("/about/yggl/ygglCreate 按钮:修改");
      window.console.log("Select:",this.CreSelect01,this.CreSelect02,this.CreSelect03,this.CreSelect04,this.CreSelect05,this.CreSelect06,this.CreSelect07,this.CreSelect08,this.CreSelect09,this.CreSelect10,this.CreSelect11,this.CreSelect12,this.CreSelect13);
      window.console.log("Input:", this.CreInput01, this.CreInput02, this.CreInput03, this.CreInput04, this.CreInput05, this.CreInput06, this.CreInput07, this.CreInput08, this.CreInput09, this.CreInput10, this.CreInput11);
      this.open("修改");
    },
    // 员工管理 创建员工 确定： 详细信息输出控制台
    celBut02: function() {
      window.console.log("/about/yggl/ygglCreate 按钮:确定");
      this.open("确定");
    },
    // 员工管理 创建员工 添加： 详细信息输出控制台
    celBut03: function() {
      window.console.log("/about/yggl/ygglCreate 按钮:添加");
      this.open("添加");
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