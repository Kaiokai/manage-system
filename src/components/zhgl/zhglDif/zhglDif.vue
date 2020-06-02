<template>
    <div>
        <!-- 综合管理-班次设置 -->
        <el-col :xs="24" :sm="18" :md="18" :lg="18" :xl="18">
            <div class="box2">
                <template>
                  <el-tabs v-model="tagsDef"> 
                    <el-tab-pane label="显示" name="show">
                        <zhglDShow/>
                    </el-tab-pane>
                    <el-tab-pane label="新建" name="new">
                        <zhglDNew/>
                    </el-tab-pane>
                    <el-tab-pane label="修改" name="change">
                        <zhglDChange/>
                    </el-tab-pane>
                    <el-tab-pane label="删除" name="del">
                        <zhglDel/>
                    </el-tab-pane>
                  </el-tabs>
                </template>
            </div>
        </el-col>
    </div>
</template>

<script>
import zhglDShow from './zhglDShow.vue'
import zhglDNew from './zhglDNew'
import zhglDChange from './zhglDChange'
import zhglDel from './zhglDel'

export default {
    components:{
      zhglDShow,
      zhglDNew,
      zhglDChange,
      zhglDel
    },
    data() {
      return {
        // 选项卡默认选中
        tagsDef: 'show',
      };
    },
}
</script>

<style scoped>
/* Public */
.boxSpan{
    line-height: 40px;
    color: #ffffff;
}
</style>