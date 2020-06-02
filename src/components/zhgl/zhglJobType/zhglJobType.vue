<template>
    <div>
        <!-- 综合管理-工种管理 -->
        <el-col :xs="24" :sm="18" :md="18" :lg="18" :xl="18">
            <div class="box2">
                <template>
                  <el-tabs v-model="tagsDef"> 
                    <el-tab-pane label="显示" name="xs">
                        <zhglTPxs/>
                    </el-tab-pane>
                    <el-tab-pane label="新建" name="xj">
                        <zhglTPxj/>
                    </el-tab-pane>
                    <el-tab-pane label="修改" name="xg">
                        <zhglTPxg/>
                    </el-tab-pane>
                    <el-tab-pane label="删除" name="sc">
                        <zhglTPsc/>
                    </el-tab-pane>
                  </el-tabs>
                </template>
            </div>
        </el-col>
    </div>
</template>

<script>
// 引入组件
import zhglTPxs from './zhglTPxs.vue'
import zhglTPxj from './zhglTPxj.vue'
import zhglTPxg from './zhglTPxg.vue'
import zhglTPsc from './zhglTPxc.vue'

export default {
    components:{
        zhglTPxs,
        zhglTPxj,
        zhglTPxg,
        zhglTPsc
    },
    data() {
      return {
        // 选项卡默认选中
        tagsDef: 'xs',
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