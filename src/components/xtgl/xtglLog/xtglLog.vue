<template>
    <div>
        <el-col :xs="23" :sm="17" :md="17" :lg="17" :xl="17">
            <div class="box2">
                <template>
                <!-- 操作日记管理 -->
                  <el-tabs v-model="tagsDef"> 
                    <el-tab-pane label="操作日记管理" name="mmxg">
                        <div class="card-item">
                            <el-row :gutter="20">
                              <el-col :span="3"><div class="grid-content bg-purple"><span class="boxSpan">操作类别:</span></div></el-col>
                              <el-col :span="8"><div class="grid-content bg-purple"><el-input v-model="LogInput01" placeholder="请输入内容"></el-input></div></el-col>
                              <el-col :span="3"><div class="grid-content bg-purple"><span class="boxSpan">操作级别:</span></div></el-col>
                              <el-col :span="8"><div class="grid-content bg-purple"><el-input v-model="LogInput02" placeholder="请输入内容"></el-input></div></el-col>
                            </el-row>
                            <br>
                            <el-row :gutter="20">
                              <el-col :span="3"><div class="grid-content bg-purple"><span class="boxSpan">被操作员工:</span></div></el-col>
                              <el-col :span="8"><div class="grid-content bg-purple"><el-input v-model="LogInput03" placeholder="请输入内容"></el-input></div></el-col>
                              <el-col :span="3"><div class="grid-content bg-purple"><span class="boxSpan">操作员名:</span></div></el-col>
                              <el-col :span="8"><div class="grid-content bg-purple"><el-input v-model="LogInput04" placeholder="请输入内容"></el-input></div></el-col>
                            </el-row>
                            <br>
                            <el-row :gutter="20">
                              <el-col :span="3"><div class="grid-content bg-purple"><span class="boxSpan">操作时间:</span></div></el-col>
                              <el-col :span="8"><div class="grid-content bg-purple"><el-input v-model="LogInput05" placeholder="请输入内容"></el-input></div></el-col>
                              <el-col :span="3"><div class="grid-content bg-purple"><el-radio v-model="LogBox01" label="1">以月查询</el-radio></div></el-col>
                            </el-row>
                            <br>
                            <el-row :gutter="20">
                              <el-col :span="7"><div class="grid-content bg-purple"></div></el-col>
                              <el-col :span="2"><div class="grid-content bg-purple"><el-button type="primary" @click="LogBut01" round>选择</el-button></div></el-col>
                              <el-col :span="2"><div class="grid-content bg-purple"><el-button type="primary" @click="LogBut02" round>查询</el-button></div></el-col>
                              <el-col :span="2"><div class="grid-content bg-purple"><el-button type="primary" @click="LogBut03" round>删除</el-button></div></el-col>
                            </el-row>
                        </div>
                    </el-tab-pane>
                  </el-tabs>
                  <!-- 操作日记管理---表格 -->
                    <el-row :gutter="20">
                        <el-col :span="20">
                            <div class="grid-content bg-purple">
                                <el-table
                                :data="tableData"
                                style="width: 100%">
                                <el-table-column
                                  prop="id"
                                  label="序号"
                                  width="180">
                                </el-table-column>
                                <el-table-column
                                  prop="date"
                                  label="发生日期"
                                  width="180">
                                </el-table-column>
                                <el-table-column
                                  prop="per01"
                                  label="操作人">
                                </el-table-column>
                                <el-table-column
                                  prop="per02"
                                  label="操作对象">
                                </el-table-column>
                                <el-table-column
                                  prop="types"
                                  label="类型">
                                </el-table-column>
                                <el-table-column
                                  prop="per03"
                                  label="被操作员工">
                                </el-table-column>
                                <el-table-column
                                  prop="other"
                                  label="操作描述">
                                </el-table-column>
                                </el-table>
                            </div>
                        </el-col>
                    </el-row>
                    <br>
                    <el-row :gutter="20">
                        <el-col :span="7"><div class="grid-content bg-purple"></div></el-col>
                        <el-col :span="7"><div class="grid-content bg-purple"><el-button type="primary" @click="LogBut04" round>导入excel</el-button><el-button type="primary" @click="LogBut05" round>打印</el-button></div></el-col>
                    </el-row>
                    
                </template>
            </div>
        </el-col>
    </div>
</template>

<script>
export default {
    components:{
        
    },
    data() {
      return {
        // 选项卡默认选中
        tagsDef: 'mmxg',
        // 日志Checkbox
        LogBox01: false,
        // 日志Input
        LogInput01: '',
        LogInput02: '',
        LogInput03: '',
        LogInput04: '',
        LogInput05: '',

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
      };
    },
    methods: {
        // 日志选择按钮 控制台输出相关信息
        LogBut01(){
            window.console.log("/about/xtgl/xtglLog操作日记管理:按钮选择");
            this.open('选择')
        },
        // 日志查询按钮 控制台输出相关信息
        LogBut02(){
            window.console.log("/about/xtgl/xtglLog操作日记管理:按钮查询");
            window.console.log("日记Input:",this.LogInput01,this.LogInput02,this.LogInput03,this.LogInput04,this.LogInput05);
            window.console.log("日记Check:",this.LogBox01);
            this.open('查询');
        },
        // 日志删除按钮 控制台输出相关信息
        LogBut03(){
            window.console.log("/about/xtgl/xtglLog操作日记管理:按钮删除");
            this.open('删除');
        },
        // 日志导入excel按钮 控制台输出相关信息
        LogBut04(){
            window.console.log("/about/xtgl/xtglLog操作日记管理:按钮导入excel");
            this.open('正在导入excel...');
        },
        // 日志打印按钮 控制台输出相关信息
        LogBut05(){
            window.console.log("/about/xtgl/xtglLog操作日记管理:按钮打印");
            this.open('正在打印....');
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

</style>