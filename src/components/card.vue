<template lang="">
  <div></div>
</template>
<script>
import { getlocate } from '@/api'
export default {
  name: 'WeatherCard',
  data() {
    return {
      input: '',
      city: '',
      adcode: '',
      address: '',
      ipAddress: '',
      ipAdCode: '',
      weather: '',
      temperature: '',
      winddirection: '',
      windpower: '',
      humidity: '',
      reporttime: '',
      icon: true,
    }
  },
  watch: {
    adcode() {
      //当adcode发生变化时，重新请求该地天气
      this.$axios
        .get('https://restapi.amap.com/v3/weather/weatherInfo?parameters', {
          params: {
            key: '#在这里填入你申请来的key#', //需要操作
            city: this.adcode,
            extensions: 'base',
          },
        })
        .then(
          (response) => {
            let lives = response.data.lives[0]
            this.weather = lives.weather
            this.temperature = lives.temperature
            this.winddirection = lives.winddirection
            this.windpower = lives.windpower
            this.humidity = lives.humidity
            this.reporttime = lives.reporttime
            this.address = lives.city

            localStorage.setItem('adcode', this.adcode) //将存储目前查询的天气
          },
          (error) => {
            this.$notify.info({
              title: '未知错误',
              message: error.message,
            })
          }
        )
    },
  },
  computed: {
    // getIcon() {
    //   this.icon = false
    //   if (this.weather == '晴') {
    //     return 'el-icon-sunny'
    //   } else if (this.weather == '多云') {
    //     return 'el-icon-cloudy-and-sunny'
    //   } else if (this.weather == '阴') {
    //     return 'el-icon-partly-cloudy'
    //   } else if (this.weather.indexOf('雨')) {
    //     return 'el-icon-heavy-rain'
    //   } else if (this.weather.indexOf('雪')) {
    //     return 'el-icon-light-rain'
    //   }
    //   this.icon = true
    // },
  },
  methods: {
    useIp() {
      this.adcode = this.ipAdCode
    },
    keyUp() {
      this.city = this.input
      this.input = ''
      this.getCityCode()
    },
    getIp() {
      //挂载时执行，获取ip地址
      getlocate().then((response) => {
        this.ipAddress = `${response.data.province}${response.data.city}`
        this.ipAdCode = response.data.adcode
      })
    },
    getCityCode() {
      //查询城市的adcode
      this.$axios
        .get('https://restapi.amap.com/v3/geocode/geo?parameters', {
          params: {
            key: '#在这里填入你申请来的key#', //需要操作
            address: this.city,
          },
        })
        .then((response) => {
          if (response.data.status == '1') {
            console.log(response)
            this.adcode = response.data.geocodes[0].adcode
          } else if (response.data.status == '0') {
            this.$notify.error({
              title: '查询错误',
              message: '请重新核对查询地址',
            })
          }
        })
    },
  },
  mounted() {
    this.getIp()
    this.ElMessageBox.alert('This is a message', 'Title', {
    // if you want to disable its autofocus
    // autofocus: false,
    confirmButtonText: 'OK',
  })
  },
}
</script>
<style scoped>
.ipAddress {
  margin-top: 10px;
}

.el-card {
  background-color: rgba(255, 215, 55, 0.8);
  height: 409px;
  color: #000;
}

h1 {
  margin: 0px 0px 10px 10px;
}

.showBlock {
  margin-top: 10px;
}

.temperature {
  font-size: 50px;
}

.weather {
  margin-left: 20px;
  font-size: 35px;
}

.address {
  font-size: 20px;
}

.other {
  margin-top: 10px;
}

.other p {
  margin-top: 10px;
  font-size: 18px;
}

#reporttime {
  margin-top: 10px;
  font-size: 14px;
}

.mainWeather {
  float: right;
  margin-top: 10px;
  margin-right: 10%;
  font-size: 120px;
}

.showBlock {
  margin-left: 10px;
}
</style>
