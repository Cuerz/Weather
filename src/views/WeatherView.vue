<template>
  <div class="base">
    <el-row>
      <el-col :span="10">
        <WeatherCardVue />
      </el-col>

      <el-col :span="14">
        <el-card style="height: 390px; width: 840px; margin-top: 5vh">
          <TemperatureChartVue />
        </el-card>

        <el-card style="height: 390px; width: 840px; margin-top: 5vh">
          <RainChartVue />
        </el-card>
      </el-col>
    </el-row>
    <el-button
      type="primary"
      size="large"
      :icon="Edit"
      style="position: absolute; top: 3vh; right: 3vw"
      @click="goFeedback"
      >留言反馈</el-button
    >
  </div>
</template>

<script>
import WeatherCardVue from '@/components/card.vue'
import TemperatureChartVue from '@/components/TemperatureChart.vue'
import RainChartVue from '@/components/RainChart.vue'
export default {
  name: 'WeatherView',
  components: { WeatherCardVue, TemperatureChartVue, RainChartVue },
  methods: {
    goFeedback() {
      this.$router.push({ path: '/feedback' })
    },
  },
}
</script>

<script setup>
import { Edit } from '@element-plus/icons-vue'
</script>

<style scoped>
.base {
  width: 100vw;
  height: 100vh;
  background-color: #ffdee9;
  background-image: linear-gradient(0deg, #ffdee9 0%, #b5fffc 100%);
}
</style>
