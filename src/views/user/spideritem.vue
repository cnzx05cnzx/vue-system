<template>
  <div>
    <div class="container">
      <div class="form-box">
        <el-form label-width="80px"
                 ref="baseForm"
                 :model="form"
                 status-icon
                 :rules="basicRules">
          <el-alert title="暂且仅支持京东商品评论爬取" type="info" center show-icon></el-alert>
          <br>
          <el-form-item label="商品链接" prop="url">
            <el-input v-model="form.url" placeholder="https://item.jd.com/10042230577182.html"></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="onSubmit">提交</el-button>
            <el-button>取消</el-button>
          </el-form-item>

        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import {upform} from "@/network/admin"
import {download} from "network/home"

export default {
  name: 'index',
  data() {

    return {
      banners: [],
      code: '200',
      form: {
        name: localStorage.getItem("ms_username"),
        url: ''
      },
      basicRules: {
        url: [
          {required: true, message: '请输入爬取的商品链接', trigger: 'blur'}
        ],
      }

    };
  },
  created() {
    // 1.请求多个数据
    // this.getHomeMultidata()
    // 2.请求商品数据
  },
  methods: {
    onSubmit() {
      this.$refs.baseForm.validate((valid) => {
        if (!valid) {
          return false
        } else {
          this.$message.success({message: '提交成功！请耐心等待!', duration: 1000});
          // console.log("success pass");
          setTimeout(() => {
            upform(this.form.url, this.form.name)
                .then(res => {
                  if (res.byteLength === 25) {
                    this.$message.error('链接格式错误或文件下载失败！请重试');
                  } else {
                    download(res, "spider_admin.csv")
                  }
                })
          }, 3000);
        }
      })
    }
  }
};
</script>