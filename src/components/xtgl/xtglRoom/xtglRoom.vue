<template>
    <div>
        <!-- 系统管理-左侧菜单(放置右侧显示组件) -->
        <el-col :xs="24" :sm="18" :md="18" :lg="18" :xl="18">
            <div class="box2">
                <template>
                  <el-tabs v-model="tagsDef">
                    <el-tab-pane label="基本设置" name="xtsz">
                        <xtsz/>
                    </el-tab-pane>
                    <el-tab-pane label="权限设置" name="second">
                        <span class="fontWhile">显示设置</span>
                    </el-tab-pane>
                    <el-tab-pane label="显示设置" name="xssz">
                        <xssz/>
                    </el-tab-pane>
                    <el-tab-pane label="系统设置" name="xtszend">
                        <xtszend/>
                    </el-tab-pane>
                  </el-tabs>
                </template>
            </div>
        </el-col>
    </div>
</template>

<script>
// 引入组件(xtsz:基本设置,xssz:显示设置,xtszend:系统设置)
import xtsz from './xtsz.vue'
import xssz from './xssz.vue'
import xtszend from './xtszend'

export default {
    components:{
        xtsz,
        xssz,
        xtszend,
    },
    data() {
      return {
        // 选项卡默认
        tagsDef: 'xtsz',
      };
    },
    methods: {

    }
}
</script>

<style scoped>
/* fontColor */
.fontWhile{
    color: #ffffff;
}
</style>