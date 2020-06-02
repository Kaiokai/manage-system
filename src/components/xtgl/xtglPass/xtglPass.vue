<template>
    <div>
        <el-col :xs="24" :sm="18" :md="18" :lg="18" :xl="18">
            <div class="box2">
                <template>
                  <el-tabs v-model="tagsDef">
                    <!-- 密码修改 -->
                    <el-tab-pane label="密码修改" name="mmxg">
                        <div class="card-item">
                            <el-row :gutter="20">
                              <el-col :span="3"><div class="grid-content bg-purple"><span class="boxSpan">旧密码:</span></div></el-col>
                              <el-col :span="15"><div class="grid-content bg-purple"><el-input v-model="PassInput01" placeholder="请输入内容"></el-input></div></el-col>
                            </el-row>
                            <br>
                            <el-row :gutter="20">
                              <el-col :span="3"><div class="grid-content bg-purple"><span class="boxSpan">新密码:</span></div></el-col>
                              <el-col :span="15"><div class="grid-content bg-purple"><el-input v-model="PassInput02" placeholder="请输入内容"></el-input></div></el-col>
                            </el-row>
                            <br>
                            <el-row :gutter="20">
                              <el-col :span="3"><div class="grid-content bg-purple"><span class="boxSpan">密码确认:</span></div></el-col>
                              <el-col :span="15"><div class="grid-content bg-purple"><el-input v-model="PassInput03" placeholder="请输入内容"></el-input></div></el-col>
                            </el-row>
                            <br>
                            <el-row :gutter="20">
                              <el-col :span="7"><div class="grid-content bg-purple"></div></el-col>
                              <el-col :span="7"><div class="grid-content bg-purple"><el-button type="primary" @click="PassBut01" round>修改</el-button></div></el-col>
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
    components:{
        
    },
    data() {
      return {
        // 选项卡默认选中
        tagsDef: 'mmxg',
        // 密码Input
        PassInput01:'',
        PassInput02:'',
        PassInput03:'',
      };
    },
    methods: {
        // 修改密码 按钮:修改 控制台输出相关信息
        PassBut01(){
            window.console.log("/about/xtgl/xtglPass密码修改");
            window.console.log("旧密码Input:",this.PassInput01);
            window.console.log("新密码Input:",this.PassInput02,this.PassInput03);
            this.open("密码修改")
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