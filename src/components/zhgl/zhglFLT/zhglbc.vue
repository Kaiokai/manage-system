<template>
    <div>
      <!-- 综合管理-班次管理-班次设置 -->
        <div class="card-item">
            <el-row :gutter="5">
                <el-col :span="7"><div class="grid-content bg-purple"></div></el-col>
                <el-col :span="4"><div class="grid-content bg-purple"><input type="checkbox" v-model="bcBox01"><span class="boxSpan">为全矿/部门设置班次</span></div></el-col>
                <el-col :span="1"><div class="grid-content bg-purple"><span class="boxSpan">部门:</span></div></el-col>
                <el-col :span="4"><div class="grid-content bg-purple"><el-input v-model="bcInput01" placeholder="请输入内容"></el-input></div></el-col>
            </el-row>
            <br>
            <el-row :gutter="5">
                <el-col :span="7"><div class="grid-content bg-purple"></div></el-col>
                <el-col :span="4"><div class="grid-content bg-purple"><input type="checkbox" v-model="bcBox02"><span class="boxSpan">为特殊性工种设置班次</span></div></el-col>
                <el-col :span="1"><div class="grid-content bg-purple"><span class="boxSpan">工种:</span></div></el-col>
                <el-col :span="4"><div class="grid-content bg-purple"><el-input v-model="bcInput02" placeholder="请输入内容"></el-input></div></el-col>
            </el-row>
            <br>
            <el-row :gutter="5">
                <el-col :span="7"><div class="grid-content bg-purple"></div></el-col>
                <el-col :span="4"><div class="grid-content bg-purple"><input type="checkbox" v-model="bcBox03"><span class="boxSpan">为指定员工设置班次</span></div></el-col>
                <el-col :span="1"><div class="grid-content bg-purple"><span class="boxSpan">部门:</span></div></el-col>
                <el-col :span="4"><div class="grid-content bg-purple"><el-input v-model="bcInput03" placeholder="请输入内容"></el-input></div></el-col>
            </el-row>
            <br>
            <el-row :gutter="20">
              <el-col :span="10"><div class="grid-content bg-purple"></div></el-col>
              <el-col :span="3"><div class="grid-content bg-purple"><el-button type="primary" @click="bcBut01" round>修改</el-button></div></el-col>
            </el-row>
            <br><br><br>
            <el-row :gutter="20">
                <el-col :span="22">
                <div class="grid-content bg-purple">
                    <el-table :data="tableData" style="width: 100%">
                        <el-table-column prop="id" label="序号" width="180"></el-table-column>
                        <el-table-column prop="time" label="发生日期" width="180"></el-table-column>
                        <el-table-column prop="per01" label="操作人"></el-table-column>
                        <el-table-column prop="per02" label="操作对象"></el-table-column>
                        <el-table-column prop="type" label="类型"></el-table-column>
                        <el-table-column prop="per03" label="被操作员工"></el-table-column>
                        <el-table-column prop="other" label="操作描述"></el-table-column>
                    </el-table>
                </div>
                </el-col>
            </el-row>
            <br>
            <el-row :gutter="20">
              <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
              <el-col :span="3"><div class="grid-content bg-purple"><el-button type="primary" @click="bcBut02" round>导出Excel</el-button></div></el-col>
              <el-col :span="2"><div class="grid-content bg-purple"><el-button type="primary" @click="bcBut03" round>打印</el-button></div></el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            // checkBox
            bcBox01: false,
            bcBox02: false,
            bcBox03: false,
            // 输入框
            bcInput01: '',
            bcInput02: '',
            bcInput03: '',
            bcInput04: '',
            bcInput05: '',
            bcInput06: '',
            bcInput07: '',
            bcInput08: '',
            bcInput09: '',
            // 综合管理-班次管理-表格
            tableData: [
            {
                id: '1',
                time: 'Mark',
                per01: 'Otto',
                per02: '@mdo',
                type: 'Mark',
                per03: 'Otto',
                other: '@mdo'
            }, 
            ]
        }
    },
    methods:{
        // 综合管理-班次设置 查询 控制台输出相关信息
        bcBut01(){
          window.console.log("/about/zhgl/zhglFLT/zhglbc按钮-查询:");
          window.console.log("checkBox:",this.bcBox01,this.bcBox02,this.bcBox03);
          window.console.log("Input:",this.bcInput01,this.bcInput02,this.bcInput03);
          this.open("查询");
        },
        bcBut02(){
          window.console.log("/about/zhgl/zhglFLT/zhglbc按钮-导出Excel:");
          this.open("正在导出Excel...");
        },
        bcBut03(){
          window.console.log("/about/zhgl/zhglFLT/zhglbc按钮-打印:");
          this.open("正在打印...");
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
}
</script>

<style scoped>
/* Public */
.boxSpan{
    line-height: 40px;
}

/* card */
.card-item{
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