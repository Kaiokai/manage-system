<template>
    <div>
      <!-- 系统管理-基本设置  -->
        <div class="card-item">
          <el-row :gutter="20">
            <el-col :span="24"><div class="grid-content bg-purple"><input type="checkbox" v-model="xtszBox01"><span>启用系统Guest用户登录</span></div></el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="24"><div class="grid-content bg-purple"><input type="checkbox" v-model="xtszBox02"><span>统计井下人数是不包括井上分站</span></div></el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="24"><div class="grid-content bg-purple"><input type="checkbox" v-model="xtszBox03"><span>如果出井时间为空则用最后出现在井下的时间代替</span></div></el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="24"><div class="grid-content bg-purple"><input type="checkbox" v-model="xtszBox04"><span>计算工时津贴等时员工当前的设置进行计算</span></div></el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="12"><div class="grid-content bg-purple"><input type="checkbox" v-model="xtszBox05"><span style="margin-right:300px;">设定必须显示的分站状态</span></div></el-col>
            <el-col :span="12"><div class="grid-content bg-purple"><el-button type="primary" round @click="xtzsBut01">必须显示状态锁定</el-button></div></el-col>
          </el-row>
          <br>
          <el-row :gutter="20">
            <el-col :span="5"><div class="grid-content bg-purple">分站状态动态显示中人员流动显示，显示</div></el-col>
            <el-col :span="14"><div class="grid-content bg-purple"><el-input v-model="rightMain01" placeholder="请输入内容"></el-input></div></el-col>
            <el-col :span="5"><div class="grid-content bg-purple">分钟内的人员流动</div></el-col>
          </el-row>
          <br>
          <el-row :gutter="20">
            <el-col :span="5"><div class="grid-content bg-purple">井下停留超过</div></el-col>
            <el-col :span="14"><div class="grid-content bg-purple"><el-input v-model="rightMain02" placeholder="请输入内容"></el-input></div></el-col>
            <el-col :span="5"><div class="grid-content bg-purple">分钟时提示超时(以动态图形提示)</div></el-col>
          </el-row>
          <br>
          <el-row :gutter="20">
            <el-col :span="5"><div class="grid-content bg-purple">定义一天的开始时间</div></el-col>
            <el-col :span="14"><div class="grid-content bg-purple"><el-input v-model="rightMain03" placeholder="请输入内容"></el-input></div></el-col>
            <el-col :span="5"><div class="grid-content bg-purple">(以该时间开始计算当天下井总人数)</div></el-col>
          </el-row>
          <br>
          <el-row :gutter="20">
            <el-col :span="8"><div class="grid-content bg-purple">网页主标题显示:(20字以内)</div></el-col>
            <el-col :span="15"><div class="grid-content bg-purple"><el-input v-model="rightMain04" placeholder="请输入内容"></el-input></div></el-col>
          </el-row>
          <br>
          <el-row :gutter="20">
            <el-col :span="8"><div class="grid-content bg-purple">网页次标题显示:(16字以内)</div></el-col>
            <el-col :span="15"><div class="grid-content bg-purple"><el-input v-model="rightMain05" placeholder="请输入内容"></el-input></div></el-col>
          </el-row>
          <br>
          <el-row :gutter="20">
            <el-col :span="24"><div class="grid-content bg-purple" style="text-align:center"><el-button @click="xtszButton" type="primary" round>修改</el-button></div></el-col>
          </el-row>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            // CheckBox
            xtszBox01: false,
            xtszBox02: false,
            xtszBox03: false,
            xtszBox04: false,
            xtszBox05: false,
            // 填空
            rightMain01:'',
            rightMain02:'',
            rightMain03:'',
            rightMain04:'',
            rightMain05:'',
        }
    },
    methods:{
        // 系统管理-基本设置 按钮:必须显式状态锁定
        xtzsBut01(){
          window.console.log("xtsz-按钮:必须显式状态锁定");
          this.open("锁定");
        },
        // 系统管理-基本设置 按钮:最后提交按钮 点击控制台打印本页数据
        xtszButton(){
          window.console.log("/About/xtgl/xtsz修改按钮:");
          window.console.log("checkBox:",this.xtszBox01,this.xtszBox01,this.xtszBox01,this.xtszBox01);
          window.console.log("输入框:",this.rightMain01,this.rightMain02,this.rightMain03,this.rightMain04);
          this.open("修改");
        },
        // 按钮:修改弹出框函数
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
    },
    mounted(){

    }
}
</script>

<style scoped>
/* Public */

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