<template>
    <div>
      <!-- 系统管理-示意图选择 -->
        <el-col :xs="24" :sm="18" :md="18" :lg="18" :xl="18">
            <div class="box2">
                <template>
                <!-- 示意图选择 -->
                  <el-tabs v-model="tagsDef"> 
                    <el-tab-pane label="示意图选择" name="mmxg">
                        <div class="card-item">
                            <el-row :gutter="20">
                              <el-col :span="12"><div class="grid-content bg-purple"><span class="boxSpan">该矿上传所有示意图如下选择,请选择显示的示意图,上传示意图请点击</span></div></el-col>
                              <el-col :span="11"><div class="grid-content bg-purple"><span class="boxSpan"><input id="file" type="file"></span></div></el-col>
                            </el-row>
                            <br><br>
                            <!-- 示意图选择---表格 -->
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
                                      prop="viewName"
                                      label="示意图名称"
                                      width="180">
                                    </el-table-column>
                                    <el-table-column
                                      prop="time"
                                      label="上传时间">
                                    </el-table-column>
                                    <el-table-column
                                      prop="per01"
                                      label="上传人">
                                    </el-table-column>
                                    <el-table-column
                                      prop="other"
                                      label="描述">
                                    </el-table-column>
                                    <el-table-column
                                      prop="choose"
                                      label="选择">
                                    </el-table-column>
                                    </el-table>
                                </div>
                                </el-col>
                            </el-row>
                            <el-row :gutter="20">
                                <el-col :span="7"><div class="grid-content bg-purple"></div></el-col>
                                <el-col :span="7"><div class="grid-content bg-purple"><el-button type="primary" @click="ViewBut01" round>确定</el-button><el-button type="primary" @click="ViewBut02" round>删除</el-button></div></el-col>
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

        // 表格
        tableData: [
        {
            id: '1',
            viewName: 'Mark',
            time: 'Otto',
            per01: '@mdo',
            other: 'Otto',
            choose: ''
        }, 
        ]
      };
    },
    methods: {
        // 示意图确定按钮 控制台输出相关信息
        ViewBut01(){
            // 获取文件路径
            var file = document.getElementById("file");

            // 打印
            window.console.log('/about/xtgl/xtglview示意图选择 按钮:确定');
            window.console.log('文件:',file.value);
            this.open('确定');
        },
        // 示意图删除按钮 控制台输出相关信息
        ViewBut02(){
            window.console.log('/about/xtgl/xtglview示意图选择 按钮:删除');
            var file = document.getElementById("file");
            file.value = "";
            this.open('删除');
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