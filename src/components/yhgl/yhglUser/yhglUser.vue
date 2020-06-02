<template>
    <div>
        <!-- 用户管理-新建用户-左侧菜单 -->
        <el-col :xs="24" :sm="18" :md="18" :lg="18" :xl="18">
            <div class="box2">
                <template>
                  <el-tabs v-model="tagsDef">
                    <el-tab-pane label="新增用户" name="xtsz">
                        <div class="card-item">
                        <el-row :gutter="20">
                            <el-col :span="4"><div class="grid-content bg-purple"><span class="boxSpan">用户名:</span></div></el-col>
                        </el-row>
                        <el-row :gutter="20">
                            <el-col :span="18"><div class="grid-content bg-purple"><el-input v-model="UserInput01" placeholder="请输入内容"></el-input></div></el-col>
                        </el-row>
                        <el-row :gutter="20">
                            <el-col :span="4"><div class="grid-content bg-purple"><span class="boxSpan">密码:</span></div></el-col>
                        </el-row>
                        <el-row :gutter="20">
                            <el-col :span="18"><div class="grid-content bg-purple"><el-input v-model="UserInput02" placeholder="请输入内容"></el-input></div></el-col>
                        </el-row>
                        <el-row :gutter="20">
                            <el-col :span="4"><div class="grid-content bg-purple"><span class="boxSpan">确认密码:</span></div></el-col>
                        </el-row>
                        <el-row :gutter="20">
                            <el-col :span="18"><div class="grid-content bg-purple"><el-input v-model="UserInput03" placeholder="请输入内容"></el-input></div></el-col>
                        </el-row>
                        <el-row :gutter="20">
                            <el-col :span="4"><div class="grid-content bg-purple"><span class="boxSpan">用户等级:</span></div></el-col>
                        </el-row>
                        <el-row :gutter="20">
                            <el-col :span="18">
                                <div class="grid-content bg-purple">
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
                                </div>
                            </el-col>
                        </el-row>
                        <br>
                        <el-row :gutter="20">
                            <el-col :span="5"><div class="grid-content bg-purple"><input type="checkbox" v-model="UserBox01"><span class="boxSpan">允许该用户创建比其级别低的用户</span></div></el-col>
                        </el-row>
                        <el-row :gutter="20">
                            <el-col :span="5"><div class="grid-content bg-purple"><input type="checkbox" v-model="UserBox02" disabled><span class="boxSpan">允许改用户修改数据</span></div></el-col>
                        </el-row>
                        <br>
                        <el-row :gutter="20">
                            <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
                            <el-col :span="3"><div class="grid-content bg-purple"><el-button type="primary" @click="UserBut01">提交</el-button></div></el-col>
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
        tagsDef: 'xtsz',
        // 输入框
        UserInput01: '',
        UserInput02: '',
        UserInput03: '',
        // CheckBox
        UserBox01: false,
        UserBox02: false,
        // Select
        SelectBox01: '',
        options01: [
            {value: 'A', label: 'A'},
            {value: 'B', label: 'B'},
            {value: 'C', label: 'C'}
        ],
      };
    },
    methods: {
        // 用户管理-新建用户-提交 按钮：提交 控制台输出相关信息
        UserBut01:function(){
            window.console.log("/about/yhgl/yhglCreate/yhglUser按钮-提交:");
            window.console.log("selectBox:",this.SelectBox01);
            window.console.log("checkBox:",this.UserBox01,this.UserBox02);
            window.console.log("Input:",this.UserInput01,this.UserInput02,this.UserInput03);
            this.open("提交")
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