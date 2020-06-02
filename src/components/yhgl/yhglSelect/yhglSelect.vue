<template>
    <div>
        <!-- 用户管理-新建用户-用户查询 -->
        <el-col :xs="24" :sm="18" :md="18" :lg="18" :xl="18">
            <div class="box2">
                <template>
                  <el-tabs v-model="tagsDef">
                    <el-tab-pane label="用户查询" name="yhglUser">
                        <div class="card-item">
                        <el-row :gutter="20">
                            <el-col :span="4"><div class="grid-content bg-purple"><span class="boxSpan">用户权限等级</span></div></el-col>
                            <el-col :span="7">
                                <div class="grid-content bg-purple">
                                    <el-select v-model="SelectBox01" placeholder="请选择" style="width:100%;">
                                      <el-option
                                        v-for="item in options01"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                      </el-option>
                                    </el-select>
                                </div>
                            </el-col>
                            <el-col :span="3"><div class="grid-content bg-purple"><span class="boxSpan"><el-button type="primary" @click="SelBut01">查询</el-button></span></div></el-col>
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
                        <br>
                        <el-row :gutter="20">
                            <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
                            <el-col :span="3"><div class="grid-content bg-purple"><el-button type="primary" @click="SelBut02">提交</el-button><el-button type="primary" @click="SelBut03">删除</el-button></div></el-col>
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
        // 选项卡默认
        tagsDef: 'yhglUser',
        // Select选择器
        SelectBox01: '',
        options01: [
            {value: 'A', label: 'A'},
            {value: 'B', label: 'B'},
            {value: 'C', label: 'C'}
        ],
        // 综合管理-职务管理-表格
        tableData: [
        {
            id: '1',
            name: '',
            type: '',
            lasttime: '',
            logNum: '',
            creater: '',
            creattime: '',
            changedata: '',
            createuser: '',
            useer: ''
        }, 
        ]
      };
    },
    methods: {
        // 用户管理-删除已有用户-确定 确定 控制台输出相关信息
        SelBut01:function(){
            window.console.log("/about/yhgl/yhglSelect/yhglSelect按钮-查询:");
            window.console.log("Input:",this.SelectBox01);
            this.open("查询")
        },
        SelBut02:function(){
            window.console.log("/about/yhgl/yhglSelect/yhglSelect按钮-确定:");
            this.open("确定")
        },
        SelBut03:function(){
            window.console.log("/about/yhgl/yhglSelect/yhglSelect按钮-删除:");
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