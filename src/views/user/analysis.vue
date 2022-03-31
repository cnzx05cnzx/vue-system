<template>
  <div>

    <div class="container" :style="{display:hidden.item1} ">
      <el-upload
          class="upload-demo"
          drag
          action="http://127.0.0.1:5000/analysis/"
          multiple
          :before-upload="beforeAvatarUpload"
          :on-success="handleSuccess"
          :on-error="handleFail"
      >
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">
          将文件拖到此处，或
          <em>点击上传</em>
        </div>
        <template #tip>
          <div class="el-upload__tip">只能上传 csv 文件</div>
        </template>
      </el-upload>
    </div>

    <div :style="{visibility:hidden.item2}">

      <el-row :gutter="10" justify="align" type="flex">
        <div @click="writeMessageFun($event)">
          <div id="light" class="white_content" ref="msk">
            <br>
            <img src="../../assets/img/cloud.png" alt="">
          </div>
          <div id="fade" class="black_overlay"></div>
        </div>

        <el-col>
          <el-card shadow="hover" class="mgb20">
            <div class="user-info">
              <img :src="item.href" class="user-avator" alt/>
              <div class="user-info-cont">
                <div class="user-info-name" style="font-size: 20px">{{ item.name }}</div>
                <br>
                <el-button type="primary" @click="showpic">显示词云</el-button>
              </div>
            </div>
          </el-card>
        </el-col>

        <el-col :span="45">
          <el-card shadow="hover" class="mgb20">
            <v-chart class="chart" :option="option4" style="width: 550px;height:400px;"/>
          </el-card>
        </el-col>

        <el-col :span="45">
          <el-card shadow="hover" class="mgb20">
            <v-chart class="chart" :option="option2" style="width: 550px;height:400px;"/>
          </el-card>
        </el-col>

        <el-col :span="45">
          <el-card shadow="hover" class="mgb20">
            <v-chart class="chart" :option="option1" style="width: 550px;height:400px;"/>
          </el-card>
        </el-col>

        <el-col :span="45">
          <el-card shadow="hover" class="mgb20">
            <v-chart class="chart" :option="option3" style="width: 550px;height:400px;"/>
          </el-card>
        </el-col>

      </el-row>

    </div>


  </div>
</template>

<script>

import "cropperjs/dist/cropper.css";
import {use} from "echarts/core";
import {CanvasRenderer} from "echarts/renderers";
import {RadarChart, BarChart, HeatmapChart} from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  TimelineComponent,
  GridComponent,
  VisualMapComponent
} from "echarts/components";
import VChart from "vue-echarts";
import {ref} from "vue";
import {map1, map2, map3, map4} from "../../config/chart";

use([
  CanvasRenderer,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  TimelineComponent,
  GridComponent,
  VisualMapComponent,
  RadarChart,
  BarChart,
  HeatmapChart,
]);

export default {
  name: "upload",
  data() {
    return {
      item: {
        name: "OPPO K9x 5G 手机天玑810游戏芯 5000mAh超长续航 6400万超清三摄游戏拍照手机 银紫超梦 8GB+128GB",
        href: "https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/181267/16/21498/172168/6230b3beE9a6a075b/a2be8e017456c30f.jpg!q80.dpg.webp"
      },
      fileList: [],
      imgSrc: "",
      hidden: {
        item1: "block",
        // item1: "none",
        // item2: "visible"
        item2: "hidden"
      },

    };
  },
  components: {VChart},
  methods: {
    beforeAvatarUpload(file) {
      var testmsg = file.name.substring(file.name.lastIndexOf(".") + 1);
      const extension = testmsg === "csv";
      if (!extension) {
        this.$message.error('文件格式不符合');
      }
      // return isJPG && isLt2M
      return extension;
    },
    handleSuccess() {
      this.$message.success("文件分析中");
      setTimeout(() => {
        this.hidden.item1 = "none";
        this.hidden.item2 = "visible";
      }, 2000);

    },
    handleFail() {
      this.$message.error("文件上传出错");
    },
    showpic() {
      document.getElementById('light').style.display = 'block';
      document.getElementById('fade').style.display = 'block';
    },
    writeMessageFun(ev) {
      if (!this.$refs.msk.contains(ev.target)) {
        document.getElementById('light').style.display = 'none';
        document.getElementById('fade').style.display = 'none'
      }
    }
  },
  setup: () => {
    const option1 = ref(map1);
    const option2 = ref(map2);
    const option3 = ref(map3);
    const option4 = ref(map4);
    return {option1, option2, option3, option4};
  }

};

</script>

<style scoped>

.black_overlay {
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  z-index: 1001;
  -moz-opacity: 0.8;
  opacity: .70;
  filter: alpha(opacity=88);
}

.white_content {
  text-align: center;
  display: none;
  position: absolute;
  top: 5%;
  left: 25%;
  width: 500px;
  height: 450px;
  padding: 20px;
  border: 10px solid orange;
  background-color: white;
  z-index: 1002;
  overflow: auto;
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


.user-info-list span {
  margin-left: 70px;
}

.mgb20 {
  margin-bottom: 20px;
}


</style>