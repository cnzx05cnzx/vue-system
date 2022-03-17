<template>
  <div class="login-wrap">
    <div class="ms-login">
      <div class="ms-title">废品回收平台</div>

      <el-form :model="param" :rules="rules" ref="login" label-width="0px" class="ms-content">
        <el-form-item prop="atype" style="text-align: center">
          <el-radio-group v-model="param.atype">
            <el-radio label='1'>个人</el-radio>
            <el-radio label='2'>企业</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-lable></el-lable>
        <el-form-item prop="username">
          <el-input v-model="param.username" placeholder="请输入用户名">
            <template #prepend>
              <el-button icon="el-icon-user"></el-button>
            </template>
          </el-input>
        </el-form-item>

        <el-form-item prop="password">
          <el-input
              type="password"
              placeholder="请输入密码"
              v-model="param.password"
          >
            <template #prepend>
              <el-button icon="el-icon-lock"></el-button>
            </template>
          </el-input>
        </el-form-item>


        <el-form-item prop="phone">
          <el-input v-model="param.phone" placeholder="请输入电话">
            <template #prepend>
              <el-button icon="el-icon-mobile-phone"></el-button>
            </template>
          </el-input>
        </el-form-item>


        <el-form-item prop="address">
          <el-input v-model="param.address" placeholder="请输入地址">
            <template #prepend>
              <el-button icon="el-icon-location-outline"></el-button>
            </template>
          </el-input>
        </el-form-item>


        <el-form-item prop="email">
          <el-input v-model="param.email" placeholder="请输入邮箱">
            <template #prepend>
              <el-button icon="el-icon-message"></el-button>
            </template>
          </el-input>


        </el-form-item>
        <div class="login-btn">
          <el-button type="primary" @click="regForm(reg)">注册</el-button>
        </div>

      </el-form>

    </div>
  </div>
</template>

<script>
import {reg} from "../../network/account"

export default {
  data() {
    return {
      param: {
        username: "",
        password: "",
        phone: null,
        email: "",
        address: "",
        atype: "1",
        roles: ['user', 'enterprise', 'admin'],
      },
      rules: {
        username: [
          {required: true, message: "请输入用户名", trigger: "blur"}
        ],
        password: [
          {required: true, message: "请输入密码", trigger: "blur"}
        ],
        address: [
          {required: true, message: "请输入地址", trigger: "blur"}
        ],
        phone: [
          {required: true, message: '请输入电话', trigger: 'blur'},
        ],
        email: [
          {required: true, message: '请输入邮箱', trigger: 'blur'},
          {
            type: 'email',
            message: '请输入正确的邮箱',
            trigger: ['blur', 'change'],
          },
        ],
        atype: [
          {required: true, message: '请选择登陆身份', trigger: 'change'}
        ],
      }
    };
  },
  created() {
    this.$store.commit("clearTags");
  },
  methods: {
    regForm() {

      this.$refs.login.validate(valid => {

        if (valid) {
          reg(this.param).then(res => {
            console.log(res);
            this.$message.success("注册成功");
            this.$router.push("/login")
            // return true;
          }).catch(err => {
            console.log(err);
            this.$message.error("用户名已存在");
            return false;
          })

        } else {
          this.$message.error("请校验输入是否正确");
          return false;
        }
      });
    },
  },

};
</script>

<style scoped>
.login-wrap {
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url(~@/assets/img/login-bg.jpg);
  background-size: 100%;
}

.ms-title {
  width: 100%;
  line-height: 50px;
  text-align: center;
  font-size: 20px;
  color: #728eff;
  border-bottom: 1px solid #ddd;
}

.ms-login {
  position: absolute;
  left: 50%;
  top: 45%;
  width: 350px;
  margin: -190px 0 0 -175px;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.3);
  overflow: hidden;
}

.ms-content {
  padding: 30px 30px;
}

.login-btn {
  text-align: center;
}

.login-btn button {
  width: 100%;
  height: 36px;
  margin-bottom: 10px;
}

.login-tips {
  font-size: 12px;
  line-height: 30px;
  color: #fff;
}
</style>