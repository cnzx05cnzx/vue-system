<template>
  <div>
    <el-row :gutter="10">
      <el-col>
        <el-card shadow="hover" class="mgb20">
          <div class="user-info">
            <img :src="item.href" class="user-avator" alt/>
            <div class="user-info-cont">
              <div class="user-info-name" style="font-size: 20px">{{ item.name }}</div>

            </div>
          </div>
        </el-card>

        <el-card shadow="hover" class="mgb20">
          <el-col :span="45">
            <el-card shadow="hover" class="mgb20">
              <v-chart class="chart" :option="option4" style="width: 550px;height:400px;"/>
            </el-card>
          </el-col>
        </el-card>


      </el-col>

    </el-row>


  </div>
</template>

<script>
import "cropperjs/dist/cropper.css";
import {use} from "echarts/core";
import { HeatmapChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';
import {
  TooltipComponent,
  GridComponent,
  VisualMapComponent
} from "echarts/components";
import VChart from "vue-echarts";
import {ref} from "vue";
import {map4} from "../../config/chart";

use([
  TooltipComponent,
  GridComponent,
  VisualMapComponent,
  HeatmapChart,
  CanvasRenderer
]);

export default ({
  name: "index",

  components: {VChart},
  data() {
    return {
      name: localStorage.getItem("ms_username"),
      item: {
        name: "OPPO K9x 5G 手机天玑810游戏芯 5000mAh超长续航 6400万超清三摄游戏拍照手机 银紫超梦 8GB+128GB",
        href: "https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/181267/16/21498/172168/6230b3beE9a6a075b/a2be8e017456c30f.jpg!q80.dpg.webp"
      }
    }
  },

  methods: {


  },
  setup: () => {

    const option4 = ref(map4);

    return {option4};
  }

});
</script>

<style scoped>


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


.user-info-list span {
  margin-left: 70px;
}

.mgb20 {
  margin-bottom: 20px;
}


</style>
