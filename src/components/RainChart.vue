<template>
  <div ref="rainEcharts" :style="{ height: height, width: width }" />
</template>

<script>
import * as echarts from 'echarts'
export default {
  name: 'RainChart',
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
      var rainEcharts = null
      const option = {
        title: {
          text: 'Rain Condition',
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          },
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
        },
        xAxis: [
          {
            type: 'category',
            data: [
              'Jan',
              'Feb',
              'Mar',
              'Apr',
              'May',
              'Jun',
              'Jul',
              'Aug',
              'Sep',
              'Oct',
              'Nov',
              'Dec',
            ],
            axisTick: {
              alignWithLabel: true,
            },
          },
        ],
        yAxis: [
          {
            type: 'value',
            axisLabel: {
              formatter: '{value} mm',
            },
          },
        ],
        series: [
          {
            name: 'Rain',
            type: 'bar',
            barWidth: '60%',
            data: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
          },
        ],
      }
      rainEcharts = echarts.init(this.$refs.rainEcharts, 'customed', {
        renderer: 'svg',
      })
      option && rainEcharts.setOption(option)
    },
  },
}
</script>

<style lang="scss" scoped></style>
