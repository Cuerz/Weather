<template>
  <div ref="temEcharts" :style="{ height: height, width: width }" />
</template>

<script>
var temEcharts = null
import * as echarts from 'echarts'
import { gettemperature } from '@/api'
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
  computed: {
    city(){
			return this.$store.state.city
    }
  },
  watch:{
    city(){
      gettemperature({ city: this.city }).then((response) => {
        console.log(response)
      })
      // this.setOption(date,temperature)
    }
  },
  methods: {
    initchart() {
      temEcharts = echarts.init(this.$refs.temEcharts, 'customed', {
        renderer: 'svg',
      })
    },
    setOption(date,temperature) {
      const option = {
        title: {
          text: 'Temperature Condition',
        },
        tooltip: {
          trigger: 'axis',
        },
        xAxis: {
          type: 'category',
          data: date,
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
            data: temperature,
            type: 'line',
            smooth: true,
          },
        ],
      }
      option && temEcharts.setOption(option)
    }
  },
}
</script>

<style lang="scss" scoped></style>
