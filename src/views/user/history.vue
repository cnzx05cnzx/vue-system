<template>
  <div>
    <div class="container">
      <div class="handle-box">
        <el-button
            type="primary"
            icon="el-icon-delete"
            class="handle-del mr10"
            @click="delAllSelection"
        >批量删除
        </el-button>
        <el-input v-model="query.name" placeholder="用户名" class="handle-input mr10"></el-input>
        <el-button type="primary" icon="el-icon-search" @click="handleSearch">搜索</el-button>
      </div>
      <el-table
          :data="tableData"
          border
          class="table"
          ref="multipleTable"
          header-cell-class-name="table-header"
          @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55" align="center"></el-table-column>
        <el-table-column prop="id" label="编号" width="55" align="center"></el-table-column>
        <el-table-column prop="name" label="服务名称" align="center"></el-table-column>
        <el-table-column  prop="item" label="商品链接" width="300" align="center"></el-table-column>

<!--        <el-table-column prop="address" label="地址"></el-table-column>-->
        <el-table-column label="状态" align="center">
          <template #default="scope">
            <el-tag
                :type="
                                scope.row.state === '成功'
                                    ? 'success'
                                    : scope.row.state === '失败'
                                    ? 'danger'
                                    : ''
                            "
            >{{ scope.row.state }}
            </el-tag>
          </template>
        </el-table-column>

        <el-table-column prop="date" label="服务时间" align="center"></el-table-column>
        <el-table-column label="操作" width="180" align="center">
          <template #default="scope">
            <el-button
                type="text"
                icon="el-icon-delete"
                class="red"
                @click="handleDelete(scope.$index, scope.row)"
            >删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="pagination">
        <el-pagination
            background
            layout="total, prev, pager, next"
            :current-page="query.pageIndex"
            :page-size="query.pageSize"
            :total="pageTotal"
            @current-change="handlePageChange"
        ></el-pagination>
      </div>
    </div>


  </div>
</template>

<script>


export default {
  name: "basetable",
  data() {
    return {
      query: {
        address: "",
        name: "",
        pageIndex: 1,
        pageSize: 10
      },
      tableData: [
        {
          address: "广东省东莞市长安镇",
          date: "2019-11-1",
          id: 1001,
          item: '未知',
          name: "商品评论分析",
          state: "成功",

        },
        {
          address: "广东省广州市白云区",
          date: "2019-10-11",
          id: 205,
          item: '未知',
          name: "商品评论分析",
          state: "成功",
        },
        {
          address: "湖南省长沙市",
          date: "2019-11-11",
          id: 356,
          item: 'https://item.jd.com/100030561166.html',
          name: "商品评论爬取",
          state: "失败",
        },
        {
          address: "福建省厦门市鼓浪屿",
          date: "2019-10-20",
          id: 479,
          item: 'https://item.jd.com/100014352497.html',
          name: "类似商品推荐",
          state: "成功",
        },
      ],
      multipleSelection: [],
      delList: [],
      editVisible: false,
      pageTotal: 0,
      form: {},
      idx: -1,
      id: -1
    };
  },

  methods: {
    // 获取 easy-mock 的模拟数据

    // 触发搜索按钮
    handleSearch() {
      this.$set(this.query, "pageIndex", 1);
      this.getData();
    },
    // 删除操作
    handleDelete(index) {
      // 二次确认删除
      this.$confirm("确定要删除吗？", "提示", {
        type: "warning"
      })
          .then(() => {
            this.$message.success("删除成功");
            this.tableData.splice(index, 1);
          })
          .catch(() => {
          });
    },
    // 多选操作
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    delAllSelection() {
      const length = this.multipleSelection.length;
      let str = "";
      this.delList = this.delList.concat(this.multipleSelection);
      for (let i = 0; i < length; i++) {
        str += this.multipleSelection[i].name + " ";
      }
      this.$message.error(`删除了${str}`);
      this.multipleSelection = [];
    },
    // 分页导航
    handlePageChange(val) {
      this.$set(this.query, "pageIndex", val);
      this.getData();
    }
  }
};
</script>

<style scoped>
.handle-box {
  margin-bottom: 20px;
}


.handle-input {
  width: 300px;
  display: inline-block;
}

.table {
  width: 100%;
  font-size: 14px;
}

.red {
  color: #ff0000;
}

.mr10 {
  margin-right: 10px;
}


</style>
