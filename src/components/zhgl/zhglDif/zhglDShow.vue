<template>
  <div>
    <div class="card-item">
      <!-- 综合管理-分站管理-显示 -->
      <el-row :gutter="20">
        <el-col :span="22">
          <div class="grid-content bg-purple">
            <el-table :data="tableData" style="width: 100%">
              <el-table-column prop="ds01" label="序号" width="180"></el-table-column>
              <el-table-column prop="ds02" label="分站编号" width="180"></el-table-column>
              <el-table-column prop="ds03" label="分站地址"></el-table-column>
              <el-table-column prop="ds04" label="接口编号"></el-table-column>
              <el-table-column prop="ds05" label="上井口"></el-table-column>
              <el-table-column prop="ds06" label="分站类型"></el-table-column>
              <el-table-column prop="ds07" label="限制区"></el-table-column>
              <el-table-column prop="ds08" label="分站巡检"></el-table-column>
            </el-table>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 综合管理-分站管理-表格
        tableData: [
        {
            ds01: '1',
            ds02: '',
            ds03: '',
            ds04: '',
            ds05: '',
            ds06: '',
            ds07: '',
            ds08: ''
        }, 
        ]
    };
  },
  methods: {

  }
};
</script>

<style scoped>
/* Public */
.boxSpan {
  line-height: 40px;
}

/* card */
.card-item {
  width: 100%;
  min-height: 350px;
  /* background: yellow; */
  text-align: left;
  color: #ffffff;
}
</style>