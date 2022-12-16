<template>
  <div ref="temEcharts" :style="{ height: height, width: width }" />
</template>

<script>
import * as echarts from 'echarts'
export default {
  name: 'TemperatureChart',
  props: {
    height: {
      type: String,
      default: '350px',
    },
    width: {
      type: String,
      default: '800px',
    },
  },
  data() {
    return {}
  },
  mounted() {
    this.initchart()
  },
  methods: {
    initchart() {
      var temEcharts = null
      const option = {
        title: {
          text: 'Temperature Condition',
        },
        tooltip: {
          trigger: 'axis',
        },
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            formatter: '{value} °C',
          },
        },
        series: [
          {
            name: 'Temperature',
            data: [20, 15, 10, 8, 0, -1, 15],
            type: 'line',
            smooth: true,
          },
        ],
      }
      temEcharts = echarts.init(this.$refs.temEcharts, 'customed', {
        renderer: 'svg',
      })
      option && temEcharts.setOption(option)
    },
  },
}
</script>

<style lang="scss" scoped></style>
