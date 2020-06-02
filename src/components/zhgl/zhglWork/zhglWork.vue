<template>
    <div>
        <!-- 综合管理-工作面管理 -->
        <el-col :xs="24" :sm="18" :md="18" :lg="18" :xl="18">
            <div class="box2">
                <template>
                  <el-tabs v-model="tagsDef"> 
                    <el-tab-pane label="关联设置" name="glsz">
                        <zhglAbout/>
                    </el-tab-pane>
                    <el-tab-pane label="新建工作面" name="newWork">
                        <zhglNW/>
                    </el-tab-pane>
                    <el-tab-pane label="删除工作面" name="delWork">
                        <zhglDW/>
                    </el-tab-pane>
                    <el-tab-pane label="修改人数" name="perNum">
                        <zhglCW/>
                    </el-tab-pane>
                  </el-tabs>
                </template>
            </div>
        </el-col>
    </div>
</template>

<script>
// 引入组件
import zhglAbout from './zhglAbout.vue'
import zhglNW from './zhglNW.vue'
import zhglDW from './zhglDW.vue'
import zhglCW from './zhglCW.vue'

export default {
    components:{
        zhglAbout,
        zhglNW,
        zhglDW,
        zhglCW
    },
    data() {
      return {
        // 选项卡默认选中
        tagsDef: 'glsz',
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