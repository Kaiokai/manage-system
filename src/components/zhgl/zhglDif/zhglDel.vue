<template>
    <div>
      <!-- 综合管理-分站管理-删除 -->
        <div class="card-item">
            <el-row :gutter="5">
                <el-col :span="7"><div class="grid-content bg-purple"></div></el-col>
                <el-col :span="12"><div class="grid-content bg-purple"><span class="boxSpan">在此进行分站的删除操作，你确定要删除该分站后，在下面选择你想要删除的分站名称</span></div></el-col>
            </el-row>
            <el-row :gutter="5">
                <el-col :span="5"><div class="grid-content bg-purple"><span class="boxSpan">请选择工作面名称:</span></div></el-col>
                <el-col :span="15">
                    <div class="grid-content bg-purple">
                        <el-select v-model="DelSelect01" placeholder="请选择" style="width:100%;">
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
              <el-col :span="3"><div class="grid-content bg-purple"><el-button type="primary" @click="DelBut01" round>确定</el-button></div></el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            // 输入框
            DelSelect01: '',
            // 选择器
            options: [
                {value: 'test01', label: 'test01'}
            ],
        }
    },
    methods:{
        // 综合管理-工作面管理-关联设置 查询 控制台输出相关信息
        DelBut01(){
          window.console.log("/about/zhgl/zhglDif/zhglDel按钮-确定:");
          window.console.log("SelectBox:",this.DelSelect01);
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