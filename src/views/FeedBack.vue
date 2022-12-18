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
        <el-form-item label="联系方式">
          <el-input v-model="form.phone" placeholder="请填写手机号"></el-input>
        </el-form-item>
        <el-form-item label="留言">
          <el-input type="textarea" v-model="form.comment"></el-input>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { feedback } from '@/api'

export default {
  name: 'FeedBack',
  data() {
    return {
      form: {
        phone: '',
        comment: '',
      },
    }
  },
  methods: {
    submit() {
      feedback(this.form).then((response) => {
        console.log(response)
      })
    },
  },
}
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
  height: 280px;
  display: block;
  margin: 15vh auto 0;
}
</style>
