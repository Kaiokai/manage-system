<template>
  <div>
    <div class="card-item">
      <!-- 综合管理-职务管理-表格 -->
      <el-row :gutter="20">
        <el-col :span="22">
          <div class="grid-content bg-purple">
            <el-table :data="tableData" style="width: 100%">
              <el-table-column prop="id" label="序号" width="180"></el-table-column>
              <el-table-column prop="sectionId" label="职务管理" width="180"></el-table-column>
              <el-table-column prop="name" label="职务名称"></el-table-column>
              <el-table-column prop="other" label="职务级别"></el-table-column>
              <el-table-column prop="per01" label="默认工时"></el-table-column>
              <el-table-column prop="money" label="取得人数"></el-table-column>
              <el-table-column prop="time" label="跟班"></el-table-column>
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
      // 综合管理-职务管理-表格
        tableData: [
        {
            id: '1',
            viewName: '',
            time: '',
            per01: '',
            other: '',
            choose: ''
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