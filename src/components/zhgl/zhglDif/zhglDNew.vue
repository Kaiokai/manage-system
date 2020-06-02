<template>
    <div>
      <!-- 综合管理-分站管理-新建 -->
        <div class="card-item">
            <el-row :gutter="20">
                <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
                <el-col :span="8"><div class="grid-content bg-purple"><span class="boxSpan">新建分站操作：在此新建一个全新的分站</span></div></el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="4"><div class="grid-content bg-purple"><span class="boxSpan">请选择想要修改的工种:</span></div></el-col>
                <el-col :span="18">
                    <div class="grid-content bg-purple">
                        <div class="grid-content bg-purple">
                        <el-select v-model="DNSelect01" placeholder="请选择" style="width:100%;">
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
                <el-col :span="4"><div class="grid-content bg-purple"><span class="boxSpan">分站编号:</span></div></el-col>
                <el-col :span="18"><div class="grid-content bg-purple"><el-input v-model="DNInput01" placeholder="请输入内容"></el-input></div></el-col>
            </el-row>
            <br>
            <el-row :gutter="20">
                <el-col :span="4"><div class="grid-content bg-purple"><span class="boxSpan">接口编号:</span></div></el-col>
                <el-col :span="18"><div class="grid-content bg-purple"><el-input v-model="DNInput02" placeholder="请输入内容"></el-input></div></el-col>
            </el-row>
            <br>
            <el-row :gutter="20">
                <el-col :span="4"><div class="grid-content bg-purple"><span class="boxSpan">分站地址:</span></div></el-col>
                <el-col :span="18"><div class="grid-content bg-purple"><el-input v-model="DNInput03" placeholder="请输入内容"></el-input></div></el-col>
            </el-row>
            <br>
            <el-row :gutter="20">
                <el-col :span="4"><div class="grid-content bg-purple"><span class="boxSpan">上井口:</span></div></el-col>
                <el-col :span="18"><div class="grid-content bg-purple"><el-input v-model="DNInput04" placeholder="请输入内容"></el-input></div></el-col>
            </el-row>
            <br>
            <el-row :gutter="20">
                <el-col :span="4"><div class="grid-content bg-purple"><span class="boxSpan">分站类型:</span></div></el-col>
                <el-col :span="18">
                    <div class="grid-content bg-purple">
                        <el-select v-model="DNSelect02" placeholder="请选择" style="width:100%;">
                          <el-option
                            v-for="item in options02"
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
                <el-col :span="5"><div class="grid-content bg-purple"><input type="checkbox" v-model="DNBox01"><span class="boxSpan">限制区</span></div></el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="5"><div class="grid-content bg-purple"><input type="checkbox" v-model="DNBox02"><span class="boxSpan">分战巡舰</span></div></el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="10"><div class="grid-content bg-purple"></div></el-col>
                <el-col :span="3"><div class="grid-content bg-purple"><el-button type="primary" @click="DNBut01">新建</el-button></div></el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            // SelectBox
            DNSelect01: '',
            DNSelect02: '',
            options01: [
                {value: 'testOp01', label: 'testOp01'}
            ],
            options02: [
                {value: 'testOp02', label: 'testOp02'}
            ],
            // checkBox
            DNBox01: false,
            DNBox02: false,
            // 输入框
            DNInput01: '',
            DNInput02: '',
            DNInput03: '',
            DNInput04: '',
        }
    },
    methods:{
        // 综合管理-工种管理-修改 按钮：修改 控制台输出相关信息
        DNBut01(){
          window.console.log("/about/zhgl/zhglDif/zhglDNew按钮-新建:");
          window.console.log("selectBox:",this.DNSelect01,this.DNSelect02);
          window.console.log("checkBox:",this.DNBox01,this.DNBox02);
          window.console.log("Input:",this.DNInput01,this.DNInput02,this.DNInput03,this.DNInput04);
          this.open("修改")
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