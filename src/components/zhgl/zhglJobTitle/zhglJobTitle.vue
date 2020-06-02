<template>
    <div>
        <!-- 综合管理-右侧标签卡 -->
        <el-col :xs="24" :sm="18" :md="18" :lg="18" :xl="18">
            <div class="box2">
                <template>
                  <el-tabs v-model="tagsDef"> 
                    <el-tab-pane label="显示" name="bmgl">
                        <zhglJTxs/>
                    </el-tab-pane>
                    <el-tab-pane label="新建" name="xj">
                        <zhglJTxj/>
                    </el-tab-pane>
                    <el-tab-pane label="修改" name="xg">
                        <zhglJTxg/>
                    </el-tab-pane>
                    <el-tab-pane label="删除" name="sc">
                        <span class="boxSpan">删除</span>
                    </el-tab-pane>
                  </el-tabs>
                </template>
            </div>
        </el-col>
    </div>
</template>

<script>
// 引入组件
import zhglJTxs from './zhglJTxs.vue'
import zhglJTxj from './zhglJTxj.vue'
import zhglJTxg from './zhglJTxg.vue'

export default {
    components:{
        zhglJTxs,
        zhglJTxj,
        zhglJTxg,
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