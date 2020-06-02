<template>
  <div>
    <!-- 员工管理-员工查询 -->
    <el-col :xs="24" :sm="17" :md="17" :lg="17" :xl="17">
      <div class="box2">
        <div class="card-item">
          <el-row :gutter="20">
            <el-col :span="2"><div class="grid-content bg-purple"><span class="boxSpan">部门:</span></div></el-col>
            <el-col :span="5">
              <div class="grid-content bg-purple">
                <el-select v-model="WorkSelect01" placeholder="请选择" style="width:100%;">
                  <el-option
                    v-for="item in options01"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </div>
            </el-col>
            <el-col :span="2"><div class="grid-content bg-purple"><span class="boxSpan">职务:</span></div></el-col>
            <el-col :span="5">
              <div class="grid-content bg-purple">
                <el-select v-model="WorkSelect02" placeholder="请选择" style="width:100%;">
                  <el-option
                    v-for="item in options02"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </div>
            </el-col>
            <el-col :span="2"><div class="grid-content bg-purple"><span class="boxSpan">职称:</span></div></el-col>
            <el-col :span="5">
              <div class="grid-content bg-purple">
                <el-select v-model="WorkSelect03" placeholder="请选择" style="width:100%;">
                  <el-option
                    v-for="item in options03"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </div>
            </el-col>
          </el-row>
          <br>
          <el-row :gutter="20">
            <el-col :span="2"><div class="grid-content bg-purple"><span class="boxSpan">工种:</span></div></el-col>
            <el-col :span="5">
              <div class="grid-content bg-purple">
                <el-select v-model="WorkSelect04" placeholder="请选择" style="width:100%;">
                  <el-option
                    v-for="item in options04"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </div>
            </el-col>
            <el-col :span="2"><div class="grid-content bg-purple"><span class="boxSpan">级别:</span></div></el-col>
            <el-col :span="5">
              <div class="grid-content bg-purple">
                <el-select v-model="WorkSelect05" placeholder="请选择" style="width:100%;">
                  <el-option
                    v-for="item in options05"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </div>
            </el-col>
            <el-col :span="2"><div class="grid-content bg-purple"><span class="boxSpan">卡号:</span></div></el-col>
            <el-col :span="2">
              <div class="grid-content bg-purple">
                <el-select v-model="WorkSelect06" placeholder="请选择" style="width:100%;">
                  <el-option
                    v-for="item in options06"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </div>
            </el-col>
            <el-col :span="3"><div class="grid-content bg-purple"><el-input v-model="WorkInput01" placeholder="请输入内容"></el-input></div></el-col>
          </el-row>
          <br>
          <el-row :gutter="20">
            <el-col :span="2"><div class="grid-content bg-purple"><span class="boxSpan">姓名:</span></div></el-col>
            <el-col :span="2"><div class="grid-content bg-purple"><el-input v-model="WorkInput02" placeholder="请输入内容"></el-input></div></el-col>
            <el-col :span="3"><div class="grid-content bg-purple boxSpan"><el-checkbox v-model="WorkBox01">模糊查询</el-checkbox></div></el-col>
            <el-col :span="3"><div class="grid-content bg-purple boxSpan"><el-checkbox v-model="WorkBox02">显示 卡号姓名</el-checkbox></div></el-col>
          </el-row>
          <br />
          <el-row :gutter="20">
            <el-col :span="7"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="7">
              <div class="grid-content bg-purple">
                <el-button type="primary" @click="WorkBut01">选择</el-button>
                <el-button type="primary" @click="WorkBut02">查询</el-button>
                <el-button type="primary" @click="WorkBut03">删除</el-button>
              </div>
            </el-col>
          </el-row>
          <br>
          <el-row :gutter="20">
            <el-col :span="23">
              <div class="grid-content bg-purple">
                <el-table :data="tableData" style="width: 100%">
                  <el-table-column prop="id" label="序号" width="180"></el-table-column>
                  <el-table-column prop="name" label="用户名" width="180"></el-table-column>
                  <el-table-column prop="type" label="用户类型"></el-table-column>
                  <el-table-column prop="lasttime" label="最后登录时间"></el-table-column>
                  <el-table-column prop="logNum" label="登录次数"></el-table-column>
                  <el-table-column prop="creater" label="创建者"></el-table-column>
                  <el-table-column prop="creattime" label="创建日期"></el-table-column>
                  <el-table-column prop="changedata" label="修改数据"></el-table-column>
                  <el-table-column prop="createuser" label="创建用户"></el-table-column>
                  <el-table-column prop="useer" label="使用者"></el-table-column>
                </el-table>
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
  data(){
    return{
      // 选择器
      WorkSelect01: '',
      WorkSelect02: '',
      WorkSelect03: '',
      WorkSelect04: '',
      WorkSelect05: '',
      WorkSelect06: '',
      options01: [
        {value: 'A1', label: 'A1'},
        {value: 'B1', label: 'B1'},
        {value: 'C1', label: 'C1'}
      ],
      options02: [
        {value: 'A2', label: 'A2'},
        {value: 'B2', label: 'B2'},
        {value: 'C2', label: 'C2'}
      ],
      options03: [
        {value: 'A3', label: 'A3'},
        {value: 'B3', label: 'B3'},
        {value: 'C3', label: 'C3'}
      ],
      options04: [
        {value: 'A4', label: 'A4'},
        {value: 'B4', label: 'B4'},
        {value: 'C4', label: 'C4'}
      ],
      options05: [
        {value: 'A5', label: 'A5'},
        {value: 'B5', label: 'B5'},
        {value: 'C5', label: 'C5'}
      ],
      options06: [
        {value: 'A6', label: 'A6'},
        {value: 'B6', label: 'B6'},
        {value: 'C6', label: 'C6'}
      ],
      // CheckBox
      WorkBox01: '',
      WorkBox02: '',
      // Input
      WorkInput01: '',
      WorkInput02: '',
      // 表格
      tableData: [
      {
          id: '1',
          date: 'Mark',
          per01: 'Otto',
          per02: '@mdo',
          types: 'Mark',
          per03: 'Otto',
          other: '@mdo',
      }, 
      ]
    }
  },
  methods:{
    // 员工管理 员工查询 按钮： 详细信息输出控制台
    WorkBut01: function(){
      window.console.log("/about/yggl/ygglWork 按钮:选择")
      window.console.log("Select:",this.WorkSelect01,this.WorkSelect02,this.WorkSelect03,this.WorkSelect04,this.WorkSelect05,this.WorkSelect06);
      window.console.log("CheckBox:",this.WorkBox01,this.WorkBox02);
      window.console.log("Input:",this.WorkInput01,this.WorkInput02);
      this.open("选择")
    },
    WorkBut02: function(){
      window.console.log("/about/yggl/ygglWork 按钮:查询")
      this.open("查询")
    },
    WorkBut03: function(){
      window.console.log("/about/yggl/ygglWork 按钮:删除")
      this.open("删除")
    },
    // 弹出框函数
    open(mes){
        mes = mes+" 详细信息请查看-控制台";
        this.$alert(mes,'Message',{
            confirmButtonText: '确定',
            callback: action => {
                this.$notify({
                    title: 'Hint',
                    message: `action: ${ action}`
                })
            }
        })
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