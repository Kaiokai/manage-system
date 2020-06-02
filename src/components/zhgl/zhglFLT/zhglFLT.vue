<template>
    <div>
        <!-- 综合管理-班次设置 -->
        <el-col :xs="24" :sm="18" :md="18" :lg="18" :xl="18">
            <div class="box2">
                <template>
                  <el-tabs v-model="tagsDef"> 
                    <el-tab-pane label="班次设置" name="bcsz">
                        <zhglbc/>
                    </el-tab-pane>
                    <el-tab-pane label="列出所有班次设置信息" name="bcMes">
                        <zhglMes/>
                    </el-tab-pane>
                  </el-tabs>
                </template>
            </div>
        </el-col>
    </div>
</template>

<script>
// 引入组件
import zhglbc from './zhglbc.vue'
import zhglMes from './zhglMes.vue'

export default {
    components:{
        zhglbc,
        zhglMes
    },
    data() {
      return {
        // 选项卡默认选中
        tagsDef: 'bcsz',
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