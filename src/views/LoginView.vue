<template>
  <div class="login-container">
    <el-form
      ref="LoginForm"
      :model="LoginForm"
      :rules="loginRules"
      class="login-form"
      auto-complete="on"
      label-position="left"
    >
      <div class="title-container">
        <h3 class="title">Login</h3>
      </div>

      <el-form-item prop="userName">
        <el-input
          ref="userName"
          v-model="LoginForm.userName"
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
          v-model="LoginForm.password"
          :type="passwordType"
          placeholder="Password"
          name="password"
          tabindex="2"
          auto-complete="false"
        />
      </el-form-item>

      <el-button
        type="primary"
        style="height: 40px; width: 100%; margin-bottom: 30px"
        @click="handleLogin"
        >登陆</el-button
      >

      <el-form-item prop="email">
        <el-input
          ref="email"
          v-model="LoginForm.email"
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
        @click="checkEmail"
        >发送邮箱验证码</el-button
      >

      <el-form-item prop="code">
        <el-input
          ref="code"
          v-model="LoginForm.code"
          placeholder="code"
          name="code"
          type="text"
          tabindex="1"
          auto-complete="false"
        />
      </el-form-item>

      <el-button
        type="primary"
        style="height: 40px; width: 100%; margin-bottom: 30px"
        @click="checkCode"
        >提交验证码</el-button
      >

      <div class="tips">
        <el-button style="margin-right: 20px" type="text" @click="goRegister"
          >未有账号，立即注册</el-button
        >
      </div>
    </el-form>
  </div>
</template>

<script>
import { login, sendCode, verifyCode } from '@/api'
import { ElMessage } from 'element-plus'
export default {
  name: 'LoginView',
  data() {
    return {
      LoginForm: {
        userName: '',
        password: '',
        email: '',
        code: '',
      },
      loginRules: {
        userName: [{ required: true, trigger: 'blur' }],
        password: [{ required: true, trigger: 'blur' }],
      },
      loading: false,
      passwordType: 'password',
      redirect: undefined,
    }
  },
  methods: {
    handleLogin() {
      this.$refs.LoginForm.validate((valid) => {
        if (valid) {
          login(this.LoginForm).then((response) => {
            var data = response.data
            if (data.code === 0) {
              ElMessage({
                message: '请验证邮箱',
                type: 'success',
              })
            } else {
              ElMessage({
                message: '用户名密码错误',
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
    checkEmail() {
      sendCode(this.LoginForm).then((response) => {
        var data = response.data
        if (data.code === 0) {
          ElMessage({
            message: '已发送验证码',
            type: 'success',
          })
        }
      })
    },
    checkCode() {
      verifyCode(this.LoginForm).then((response) => {
        var data = response.data
        if (data.code === 0) {
          ElMessage({
            message: '验证成功',
            type: 'success',
          })
          this.$router.push({ path: '/weather' })
        } else {
          ElMessage({
            message: 'error',
            type: 'error',
          })
        }
      })
    },
    goRegister() {
      this.$router.push({ path: '/register' })
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
  .login-container .el-input input {
    color: $cursor;
  }
}

/* reset element-ui css */
.login-container {
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

.login-container {
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
