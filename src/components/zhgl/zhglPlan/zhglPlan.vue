<template>
    <div>
        <!-- 综合管理-应急预案设置 -->
        <el-col :xs="24" :sm="18" :md="18" :lg="18" :xl="18">
            <div class="box2">
                <template>
                  <el-tabs v-model="tagsDef"> 
                    <el-tab-pane label="应急预案管理" name="plan">
                        <span class="boxSpan">应急预案管理</span>
                    </el-tab-pane>
                    <el-tab-pane label="新建" name="newPlan">
                        <span class="boxSpan">新建</span>
                    </el-tab-pane>
                    <el-tab-pane label="修改" name="changePlan">
                        <span class="boxSpan">修改</span>
                    </el-tab-pane>
                    <el-tab-pane label="删除" name="delPlan">
                        <span class="boxSpan">删除</span>
                    </el-tab-pane>
                  </el-tabs>
                </template>
            </div>
        </el-col>
    </div>
</template>

<script>

export default {
    data() {
      return {
        // 选项卡默认选中
        tagsDef: 'plan',
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