<template>
    <div>
        <!-- 综合管理-职务管理 -->
        <el-col :xs="24" :sm="18" :md="18" :lg="18" :xl="18">
            <div class="box2">
                <template>
                  <el-tabs v-model="tagsDef"> 
                    <el-tab-pane label="职务管理" name="bmgl">
                        <zhglzw/>
                    </el-tab-pane>
                    <el-tab-pane label="新建" name="xj">
                        <zhglzwxj/>
                    </el-tab-pane>
                    <el-tab-pane label="修改" name="xg">
                        <zhglzwxg/>
                    </el-tab-pane>
                    <el-tab-pane label="删除" name="sc">
                        <span class="boxSpan">选项四</span>
                    </el-tab-pane>
                  </el-tabs>
                </template>
            </div>
        </el-col>
    </div>
</template>

<script>
// 引入组件
import zhglzw from './zhglzw.vue'
import zhglzwxj from './zhglzwxj.vue'
import zhglzwxg from './zhglzwxg.vue'

export default {
    components:{
        zhglzw,
        zhglzwxj,
        zhglzwxg,
    },
    data() {
      return {
        // 选项卡默认选中
        tagsDef: 'bmgl',
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