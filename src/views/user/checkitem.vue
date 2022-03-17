<template>
  <div>
    <el-row :gutter="10">
      <el-col>
        <el-card shadow="hover" class="mgb20">
          <div class="user-info">
            <img src="../../assets/img/img.jpg" class="user-avator" alt/>
            <div class="user-info-cont">
              <div class="user-info-name">天眼查</div>
              <div>{{ role }}</div>
            </div>
          </div>
          <div class="user-info-list">
            密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码：
            <span>cnzx05cnzx</span>
          </div>
          <br>
          <div class="user-info-list">
            电&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;话：
            <span>18867761923</span>
          </div>
          <br>
          <div class="user-info-list">
            地&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;址：
            <span>东莞</span>
          </div>
          <br>
          <div class="user-info-list">
            邮政编码：
            <span>31000</span>
          </div>
          <br>
          <div class="user-info-list">
            当前地址：
            <map-loc></map-loc>
          </div>
        </el-card>
      </el-col>
    </el-row>

  </div>
</template>

<script>

export default {
  name: "index",
  data() {
    return {
      AMapUI: null,
      AMap: null,
      address:"",
      name: localStorage.getItem("ms_username"),
    };
  },
  components: {

  },
  computed: {
    role() {
      return this.name === "admin" ? "超级管理员" : "普通用户";
    }
  },

  methods: {

  },

};
</script>

<style scoped>


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
