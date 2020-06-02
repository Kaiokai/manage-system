<template>
    <div>
        <el-col :xs="24" :sm="18" :md="18" :lg="18" :xl="18">
            <div class="box2">
                <template>
                  <el-tabs v-model="tagsDef">
                    <!--注销登录 -->
                    <el-tab-pane label="注销登录" name="zxdl">
                        <div class="card-item">
                            <el-row :gutter="10">
                              <el-col :span="1"><div class="grid-content bg-purple"></div></el-col>
                              <el-col :span="7"><div class="grid-content bg-purple"><el-button type="primary" @click="LogOut">确定注销登录</el-button></div></el-col>
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
        tagsDef: 'zxdl',
      };
    },
    methods: {
        // 注销登录
        LogOut(){
            var that = this;
            window.console.log("/about/xtgl/xtglLogout注销登录 按钮:注销登录");
            this.open("注销登录",function(){that.$router.push("/");});
        },
        // 弹出框函数
        open(mes,callback){
            mes = mes+" 详细信息请查看-控制台";
            this.$alert(mes,'Message',{
                confirmButtonText: '确定',
                callback: action => {
                    this.$notify({
                        title: 'Hint',
                        message: `action: ${ action}`
                    })
                    callback()
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