<template>
  <div ref="rainEcharts" :style="{ height: height, width: width }" />
</template>

<script>
var rainEcharts = null
import { getrain } from '@/api'
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
  computed: {
    city() {
      return this.$store.state.city
    },
  },
  watch: {
    city() {
      getrain(this.city).then((response) => {
        var data = response.data.data
        var rain=[]
        for(var i = 0; i < data.length; i++){
          rain.push(data[i].rain)
        }
        this.setOption(rain)
      })
    },
  },
  methods: {
    initchart() {
      rainEcharts = echarts.init(this.$refs.rainEcharts, 'customed', {
        renderer: 'svg',
      })
    },
    setOption(rain) {
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
            data: rain,
          },
        ],
      }
      option && rainEcharts.setOption(option)
    },
  },
}
</script>

<style lang="scss" scoped></style>
