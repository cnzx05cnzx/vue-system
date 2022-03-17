<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="8">
        <el-card shadow="hover" class="mgb20" style="height:252px;">
          <div class="user-info">
            <img src="../../assets/img/img.jpg" class="user-avator" alt />
            <div class="user-info-cont">
              <div class="user-info-name">{{ name }}</div>
              <div>{{ role }}</div>
            </div>
          </div>
          <div class="user-info-list">
            上次登录时间：
            <span>2022-03-14</span>
          </div>
          <div class="user-info-list">
            上次登录地点：
            <span>浙江杭州</span>
          </div>
        </el-card>
        <el-card shadow="hover" style="height:252px;">
          <template #header>
            <div class="clearfix">
              <span>今月服务额度</span>
            </div>
          </template>
          商品评论分析<el-progress :percentage="65" color="#42b983"></el-progress>
          商品评论爬取<el-progress :percentage="50" color="#f1e05a"></el-progress>
          商品推荐<el-progress :percentage="24"></el-progress>
          商品对比<el-progress :percentage="5" color="#f56c6c"></el-progress>
        </el-card>
      </el-col>

      <el-col :span="16">
        <el-row :gutter="20" class="mgb20">
          <el-col :span="8">
            <el-card shadow="hover" :body-style="{ padding: '0px' }">
              <div class="grid-content grid-con-1">
                <i class="el-icon-user-solid grid-con-icon"></i>
                <div class="grid-cont-right">
                  <div class="grid-num">15</div>
                  <div>今日服务次数</div>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card shadow="hover" :body-style="{ padding: '0px' }">
              <div class="grid-content grid-con-2">
                <i class="el-icon-message-solid grid-con-icon"></i>
                <div class="grid-cont-right">
                  <div class="grid-num">4</div>
                  <div>系统消息</div>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card shadow="hover" :body-style="{ padding: '0px' }">
              <div class="grid-content grid-con-3">
                <i class="el-icon-s-goods grid-con-icon"></i>
                <div class="grid-cont-right">
                  <div class="grid-num">4</div>
                  <div>分析商品数</div>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
        <el-card shadow="hover" style="height:403px;">
          <template #header>
            <div class="clearfix">
              <span>待办事项</span>
              <el-button style="float: right; padding: 3px 0" type="text">添加</el-button>
            </div>
          </template>

          <el-table :show-header="false" :data="todoList" style="width:100%;">
            <el-table-column width="40">
              <template #default="scope">
                <el-checkbox v-model="scope.row.status"></el-checkbox>
              </template>
            </el-table-column>
            <el-table-column>
              <template #default="scope">
                <div
                    class="todo-item"
                    :class="{
                                        'todo-item-del': scope.row.status,
                                    }"
                >{{ scope.row.title }}</div>
              </template>
            </el-table-column>
            <el-table-column width="60">
              <template>
                <i class="el-icon-edit"></i>
                <i class="el-icon-delete"></i>
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
    </el-row>


    <el-row :gutter="20">
      <el-col :span="12">
        <el-card shadow="hover">
          <schart ref="bar" class="schart" canvasId="bar" :options="options"></schart>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card shadow="hover">
          <schart ref="line" class="schart" canvasId="line" :options="options2"></schart>
        </el-card>
      </el-col>
    </el-row>

  </div>
</template>

<script>
import Schart from "vue-schart";
export default {
  name: "index",
  data() {
    return {
      name: localStorage.getItem("ms_username"),
      todoList: [
        {
          title: "今天要修复1个bug",
          status: false
        },
        {
          title: "今天要修复1个短板",
          status: false
        },
        {
          title: "今天要写完5行代码",
          status: false
        },
        {
          title: "今天要修复4个bug",
          status: false
        },
        {
          title: "今天要写出1个功能",
          status: true
        },
        {
          title: "今天要吃完4个鸡腿",
          status: true
        }
      ],
      options: {
        type: "bar",
        title: {
          text: "最近一周各服务使用"
        },
        xRorate: 25,
        labels: ["周一", "周二", "周三", "周四", "周五"],
        datasets: [
          {
            label: "商品评论分析",
            data: [4, 2, 0, 1, 2]
          },
          {
            label: "商品评论爬取",
            data: [4, 1, 0, 3, 10]
          },
          {
            label: "商品推荐",
            data: [1, 8, 0, 5, 1]
          },
          {
            label: "商品对比",
            data: [4, 8, 4, 2, 0]
          }
        ]
      },
      options2: {
        type: "line",
        title: {
          text: "最近几个月服务使用量"
        },
        labels: ["1月", "2月", "3月", "4月", "5月"],
        datasets: [
          {
            label: "商品评论分析",
            data: [23, 27, 2, 10, 30]
          },
          {
            label: "商品评论爬取",
            data: [14, 1, 5, 13, 20]
          },
          {
            label: "商品推荐",
            data: [3, 15, 20, 5, 9]
          },
          {
            label: "商品对比",
            data: [0, 0, 2, 5, 9]
          }
        ]
      }
    };
  },
  components: {
    Schart
  },
  computed: {
    role() {
      return this.name === "admin" ? "超级管理员" : "普通用户";
    }
  },

  methods: {

  }
};
</script>

<style scoped>
.el-row {
  margin-bottom: 20px;
}

.grid-content {
  display: flex;
  align-items: center;
  height: 100px;
}

.grid-cont-right {
  flex: 1;
  text-align: center;
  font-size: 14px;
  color: #999;
}

.grid-num {
  font-size: 30px;
  font-weight: bold;
}

.grid-con-icon {
  font-size: 50px;
  width: 100px;
  height: 100px;
  text-align: center;
  line-height: 100px;
  color: #fff;
}

.grid-con-1 .grid-con-icon {
  background: rgb(45, 140, 240);
}

.grid-con-1 .grid-num {
  color: rgb(45, 140, 240);
}

.grid-con-2 .grid-con-icon {
  background: rgb(100, 213, 114);
}

.grid-con-2 .grid-num {
  color: rgb(45, 140, 240);
}

.grid-con-3 .grid-con-icon {
  background: rgb(242, 94, 67);
}

.grid-con-3 .grid-num {
  color: rgb(242, 94, 67);
}

.user-info {
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 2px solid #ccc;
  margin-bottom: 20px;
}

.user-avator {
  width: 120px;
  height: 120px;
  border-radius: 50%;
}

.user-info-cont {
  padding-left: 50px;
  flex: 1;
  font-size: 14px;
  color: #999;
}

.user-info-cont div:first-child {
  font-size: 30px;
  color: #222;
}

.user-info-list {
  font-size: 14px;
  color: #999;
  line-height: 25px;
}

.user-info-list span {
  margin-left: 70px;
}

.mgb20 {
  margin-bottom: 20px;
}

.todo-item {
  font-size: 14px;
}

.todo-item-del {
  text-decoration: line-through;
  color: #999;
}

.schart {
  width: 100%;
  height: 300px;
}
</style>
