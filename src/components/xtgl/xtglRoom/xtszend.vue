<template>
    <div>
      <!-- 系统管理-系统设置 -->
        <div class="card-item">
          <el-row :gutter="20">
            <el-col :span="4"><div class="grid-content bg-purple"><span>井口停留时间: (分)</span></div></el-col>
            <el-col :span="7"><div class="grid-content bg-purple"><span><el-input v-model="endtime1" placeholder="请输入内容"></el-input></span></div></el-col>
            <el-col :span="4"><div class="grid-content bg-purple"><span>异常超时处理时间: (分)</span></div></el-col>
            <el-col :span="7"><div class="grid-content bg-purple"><span><el-input v-model="endtime2" placeholder="请输入内容"></el-input></span></div></el-col>
          </el-row>
          <br>
          <el-row :gutter="20">
            <el-col :span="4"><div class="grid-content bg-purple"><span>井口时间间隔: (分)</span></div></el-col>
            <el-col :span="7"><div class="grid-content bg-purple"><span><el-input v-model="endtime3" placeholder="请输入内容"></el-input></span></div></el-col>
            <el-col :span="4"><div class="grid-content bg-purple"><span>重叫次数: (分)</span></div></el-col>
            <el-col :span="7"><div class="grid-content bg-purple"><span><el-input v-model="endtime4" placeholder="请输入内容"></el-input></span></div></el-col>
          </el-row>
          <br>
          <el-row :gutter="20">
            <el-col :span="4"><div class="grid-content bg-purple"><span>LED显示方式</span></div></el-col>
            <el-col :span="12"><div class="grid-content bg-purple"><span><el-input v-model="endled" placeholder="请输入内容"></el-input></span></div></el-col>
          </el-row>
          <br>
          <el-row :gutter="20">
            <el-col :span="5"><div class="grid-content bg-purple"><span></span></div></el-col>
            <el-col :span="13"><div class="grid-content bg-purple"><span>接口IP地址设置(接口编号与分站接口编号相对应)</span></div></el-col>
          </el-row>
          <br>
          <el-row :gutter="20">
            <el-col :span="4"><div class="grid-content bg-purple"><span>接口编号1:</span></div></el-col>
            <el-col :span="7"><div class="grid-content bg-purple"><span><el-input v-model="endapi1" placeholder="请输入内容"></el-input></span></div></el-col>
            <el-col :span="4"><div class="grid-content bg-purple"><span>接口编号2:</span></div></el-col>
            <el-col :span="7"><div class="grid-content bg-purple"><span><el-input v-model="endapi2" placeholder="请输入内容"></el-input></span></div></el-col>
          </el-row>
          <br>
          <el-row :gutter="20">
            <el-col :span="4"><div class="grid-content bg-purple"><span>接口编号3:</span></div></el-col>
            <el-col :span="7"><div class="grid-content bg-purple"><span><el-input v-model="endapi3" placeholder="请输入内容"></el-input></span></div></el-col>
            <el-col :span="4"><div class="grid-content bg-purple"><span>接口编号4:</span></div></el-col>
            <el-col :span="7"><div class="grid-content bg-purple"><span><el-input v-model="endapi4" placeholder="请输入内容"></el-input></span></div></el-col>
          </el-row>
          <br>
          <el-row :gutter="20">
            <el-col :span="9"><div class="grid-content bg-purple"><span></span></div></el-col>
            <el-col :span="13"><div class="grid-content bg-purple"><el-button type="primary" @click="endSub" round>修改</el-button></div></el-col>
          </el-row>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            // 填空
            endtime1:'',
            endtime2:'',
            endtime3:'',
            endtime4:'',
            endled:'',
            endapi1:'',
            endapi2:'',
            endapi3:'',
            endapi4:''
        }
    },
    methods:{
        // 系统管理-系统设置 按钮:修改
        endSub(){
            window.console.log('/about/xtgl/xtglRoom/xtszend');
            window.console.log('xtszend-time:',this.endtime1,this.endtime2,this.endtime3,this.endtime4);
            window.console.log('xtszend-led:',this.endled);
            window.console.log('xtszend-api:',this.endapi1,this.endapi2,this.endapi3,this.endapi4);
            this.open("修改");
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