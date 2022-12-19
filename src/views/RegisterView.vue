<template>
  <div class="register-container">
    <el-form
      ref="RegisterForm"
      :model="RegisterForm"
      :rules="registerRules"
      class="login-form"
      auto-complete="on"
      label-position="left"
    >
      <div class="title-container">
        <h3 class="title">Register</h3>
      </div>

      <el-form-item prop="userName">
        <el-input
          ref="userName"
          v-model="RegisterForm.userName"
          placeholder="userName"
          name="userName"
          type="text"
          tabindex="1"
          auto-complete="false"
        />
      </el-form-item>

      <el-form-item prop="password">
        <el-input
          :key="passwordType"
          ref="password"
          v-model="RegisterForm.password"
          :type="passwordType"
          placeholder="Password"
          name="password"
          tabindex="2"
          auto-complete="false"
        />
      </el-form-item>

      <el-form-item prop="email">
        <el-input
          ref="email"
          v-model="RegisterForm.email"
          placeholder="email"
          name="email"
          type="text"
          tabindex="1"
          auto-complete="false"
        />
      </el-form-item>

      <el-button
        type="primary"
        style="height: 40px; width: 100%; margin-bottom: 30px"
        @click="handleRegister"
        >注册</el-button
      >

      <div class="tips">
        <el-button style="margin-right: 20px" type="text" @click="goLogin"
          >已有账号，立即登陆</el-button
        >
      </div>
    </el-form>
  </div>
</template>

<script>
import { register } from '@/api'
import { ElMessage } from 'element-plus'

export default {
  name: 'RegisterView',
  data() {
    return {
      RegisterForm: {
        userName: '',
        password: '',
        email: '',
      },
      registerRules: {
        userName: [{ required: true, trigger: 'blur' }],
        password: [{ required: true, trigger: 'blur' }],
        email: [{ required: true, trigger: 'blur' }],
      },
      loading: false,
      passwordType: 'password',
      redirect: undefined,
    }
  },
  methods: {
    handleRegister() {
      this.$refs.RegisterForm.validate((valid) => {
        if (valid) {
          register(this.RegisterForm).then((response) => {
            var data = response.data
            if (data.code === 0) {
              ElMessage({
                message: '注册成功',
                type: 'success',
              })
            } else{
              ElMessage({
                message: '注册失败',
                type: 'error',
              })
            }
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    goLogin() {
      this.$router.push({ path: '/login' })
    },
  },
}
</script>

<style lang="scss">
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

$bg: #283443;
$light_gray: #fff;
$cursor: #fff;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .register-container .el-input input {
    color: $cursor;
  }
}

/* reset element-ui css */
.register-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 100%;

    input {
      width: 496px;
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $bg;
      height: 47px;
      caret-color: $cursor;

      // &:-webkit-autofill {
      //   box-shadow: 0 0 0px 1000px $bg inset !important;
      //   -webkit-text-fill-color: $cursor !important;
      // }
    }
  }

  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}
</style>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;

.register-container {
  height: 100vh;
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;

  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 10vh auto;
    overflow: hidden;
  }

  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }
}
</style>
