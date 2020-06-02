<template>
  <div>
    <div class="card-item">
      <!-- 综合管理-工种管理-显示 -->
      <el-row :gutter="20">
        <el-col :span="22">
          <div class="grid-content bg-purple">
            <el-table :data="tableData" style="width: 100%">
              <el-table-column prop="id" label="序号" width="180"></el-table-column>
              <el-table-column prop="num" label="工种编号" width="180"></el-table-column>
              <el-table-column prop="name" label="工种名称"></el-table-column>
              <el-table-column prop="other" label="工种特殊性"></el-table-column>
              <el-table-column prop="per01" label="人数"></el-table-column>
              <el-table-column prop="money" label="津贴"></el-table-column>
              <el-table-column prop="time" label="工时"></el-table-column>
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
            num: '',
            name: '',
            other: '',
            per01: '',
            money: '',
            time: ''
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