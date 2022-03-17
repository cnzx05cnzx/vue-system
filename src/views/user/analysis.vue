<template>
  <div>
    <div class="container">
      <el-upload
          class="upload-demo"
          drag
          action="http://127.0.0.1:5000/analysis/"
          multiple
          :before-upload="beforeAvatarUpload"
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
  </div>
</template>

<script>

import "cropperjs/dist/cropper.css";

export default {
  name: "upload",
  data() {
    return {

      fileList: [],
      imgSrc: "",
      cropImg: "",
      dialogVisible: false
    };
  },
  components: {},
  methods: {
    beforeAvatarUpload(file) {
      var testmsg = file.name.substring(file.name.lastIndexOf(".") + 1);
      const extension = testmsg === "csv";
      if (!extension) {
        this.$message.error('文件格式不符合');
      }
      // return isJPG && isLt2M
      return extension;
    }
  },

};

</script>

<style scoped>
.content-title {
  font-weight: 400;
  line-height: 50px;
  margin: 10px 0;
  font-size: 22px;
  color: #1f2f3d;
}

.pre-img {
  /*width: 500px;*/
  /*height: 500px;*/
  background: #f8f8f8;
  border: 1px solid #eee;
  border-radius: 5px;
}

.crop-demo {
  display: flex;
  align-items: flex-end;
}

.crop-demo-btn {
  position: relative;
  width: 100px;
  height: 40px;
  line-height: 40px;
  padding: 0 20px;
  margin-left: 30px;
  background-color: #409eff;
  color: #fff;
  font-size: 14px;
  border-radius: 4px;
  box-sizing: border-box;
}

.crop-input {
  position: absolute;
  width: 100px;
  height: 40px;
  left: 0;
  top: 0;
  opacity: 0;
  cursor: pointer;
}
</style>