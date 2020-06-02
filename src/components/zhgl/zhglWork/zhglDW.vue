<template>
    <div>
      <!-- 综合管理-班次管理-删除工作面 -->
        <div class="card-item">
            <el-row :gutter="5">
                <el-col :span="10"><div class="grid-content bg-purple"><span class="boxSpan">在此新建工作面,请在下面输入你想要删除的工作面名称:</span></div></el-col>
            </el-row>
            <el-row :gutter="5">
                <el-col :span="4"><div class="grid-content bg-purple"><span class="boxSpan">工作面名称:</span></div></el-col>
                <el-col :span="17">
                    <div class="grid-content bg-purple">
                        <el-select v-model="DBSelect01" placeholder="请选择" style="width:100%;">
                          <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                          </el-option>
                        </el-select>
                    </div>
                </el-col>
            </el-row>
            <br>
            <el-row :gutter="20">
              <el-col :span="9"><div class="grid-content bg-purple"></div></el-col>
              <el-col :span="3"><div class="grid-content bg-purple"><el-button type="primary" @click="DWBut01" round>确定</el-button></div></el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            // 选择器
            DBSelect01:'',
            options: [
                {value: 'test01', label: 'test01'}
            ],
        }
    },
    methods:{
        // 综合管理-工作面管理-删除工作面 确定 控制台输出相关信息
        DWBut01(){
          window.console.log("/about/zhgl/zhglWork/zhglDW按钮-确定:");
          window.console.log("Select:",this.DBSelect01);
          this.open("确定");
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