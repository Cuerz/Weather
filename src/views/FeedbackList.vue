<template>
  <div style="width: 40vw; margin: 5vh auto 0">
    <el-card>
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="time" label="Time" width="210" />
        <el-table-column prop="user" label="User" width="180" />
        <el-table-column prop="message" label="Message" />
      </el-table>
    </el-card>
  </div>
</template>

<script>
import { getAllFeedback } from '@/api'

export default {
  name: 'FeedbackList',
  data() {
    return {
      tableData: [],
    }
  },
  mounted() {
    this.inittable()
  },
  methods: {
    inittable() {
      getAllFeedback().then((response) => {
        var data = response.data.data
        var time,user,message = ''
        for (var i = 0; i < data.length; i++) {
          time = data[i].createTime
          user = data[i].sysUser.userName
          message = data[i].message
          this.tableData.push({
            time: time,
            user: user,
            message: message,
          })
        }
      })
    },
  },
}
</script>

<style lang="scss" scoped></style>
