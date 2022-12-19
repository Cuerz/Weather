<template>
  <div class="main">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>留言反馈</span>
          <el-button type="text" @click="submit">提交</el-button>
        </div>
      </template>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="留言">
          <el-input type="textarea" v-model="form.message"></el-input>
        </el-form-item>
      </el-form>
    </el-card>
    <el-button
      type="primary"
      style="margin-top: 3vh; height: 50px; width: 140px"
      @click="allfeedback"
    >
      查看所有留言<el-icon class="el-icon--right"><ArrowRight /></el-icon>
    </el-button>
  </div>
</template>

<script>
import { feedback } from '@/api'
import { ElMessage } from 'element-plus'
export default {
  name: 'FeedBack',
  data() {
    return {
      form: {
        message: '',
      },
    }
  },
  methods: {
    submit() {
      feedback(this.form).then((response) => {
        var data = response.data
        if (data.code === 0) {
          ElMessage({
            message: '留言成功',
            type: 'success',
          })
        } else {
          ElMessage({
            message: 'error',
            type: 'success',
          })
        }
      })
      this.form.message = ''
    },
    allfeedback() {
      this.$router.push({ path: '/allfeedback' })
    }
  },
}
</script>

<script setup>
import { ArrowRight } from '@element-plus/icons-vue'
</script>

<style scoped>
.main {
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  background-color: #8ec5fc;
  background-image: linear-gradient(62deg, #8ec5fc 0%, #e0c3fc 100%);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.box-card {
  width: 480px;
  height: 200px;
  display: block;
  margin: 15vh auto 0;
}
</style>
