<template>
  <div>
    <el-row :gutter="10">
      <el-col>
        <el-card shadow="hover" class="mgb20">
          <div class="user-info">
            <img src="../../assets/img/img.jpg" class="user-avator" alt/>
            <div class="user-info-cont">
              <div class="user-info-name">{{ name }}</div>

            </div>
          </div>
          <div class="user-info-list">
            密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码：
            <span>cnzx05cnzx</span>
          </div>
          <br>
        </el-card>
      </el-col>

    </el-row>

    <el-row :gutter="10" justify="align" type="flex">
      <el-col :span="45">
        <el-card shadow="hover" class="mgb20">
          <v-chart class="chart" :option="option1" style="width: 550px;height:400px;"/>
        </el-card>
      </el-col>
      <el-col :span="45">
        <el-card shadow="hover" class="mgb20">
          <v-chart class="chart" :option="option2" style="width: 550px;height:400px;"/>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="10" justify="align" type="flex">
      <el-col :span="45">
        <el-card shadow="hover" class="mgb20">
          <v-chart class="chart" :option="option3" style="width: 550px;height:400px;"/>
        </el-card>
      </el-col>
      <el-col :span="45">
        <el-card shadow="hover" class="mgb20">
          <v-chart class="chart" :option="option2" style="width: 550px;height:400px;"/>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {use} from "echarts/core";
import {CanvasRenderer} from "echarts/renderers";
import {RadarChart, BarChart} from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  TimelineComponent,
  GridComponent,

} from "echarts/components";
import VChart from "vue-echarts";
import {ref, defineComponent} from "vue";
import {map1, map2, map3} from "../../config/chart";

use([
  CanvasRenderer,
  RadarChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  TimelineComponent,
  GridComponent,
  BarChart
]);


export default defineComponent({
  name: "index",

  components: {
    VChart
  },
  data() {
    return {
      name: localStorage.getItem("ms_username"),
    }
  },
  setup: () => {
    const option1 = ref(map1);
    const option2 = ref(map2);
    const option3 = ref(map3);
    return {option1, option2, option3};
  }
});
</script>

<style scoped>


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


</style>
