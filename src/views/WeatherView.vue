<template>
  <el-row>
    <el-col :span="10">
        <WeatherCardVue />
    </el-col>

    <el-col :span="14">
      <el-card style="height:390px;width: 840px;margin-top: 5vh;">
        <TemperatureChartVue />
      </el-card>

      <el-card style="height:390px;width: 840px;margin-top: 5vh;">
        <RainChartVue />
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import WeatherCardVue from '@/components/card.vue'
import TemperatureChartVue from '@/components/TemperatureChart.vue'
import RainChartVue from '@/components/RainChart.vue';
export default {
  name: 'WeatherView',
  components: { WeatherCardVue, TemperatureChartVue,RainChartVue },
}
</script>

<style lang="scss" scoped></style>
