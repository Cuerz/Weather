<template lang="">
  <el-row>
    <el-col :span="12">
      <el-card class="weacard" shadow="always">
        <h2>天气</h2>
        <div class="block">
          <el-cascader style="width:8vw;margin-right:10px"
            v-model="city"
            :options="options"
            :props="{expandTrigger: 'hover'}"
          />
          <el-button type="primary">查询</el-button>
        </div>
        <el-divider></el-divider>
        <div class="showBlock">
          <p class="city">{{ city }}</p>
          <p class="temperature">
            {{ temperature }}℃
            <span class="weather">{{ weather }}
              <!-- <span>
                <el-icon :size="20"><Sunny /></el-icon>
                <i class="mainWeather" :class="getIcon"></i>
              </span> -->
            </span>
          </p>
  
        <div class="other">
          <p class="wind">
            <i class="el-icon-wind-power"></i> 风向:<span>{{
              winddirection
            }}</span
            >&nbsp;&nbsp;&nbsp;<span>风力:{{ windpower }}级</span>
          </p>
          <p class="humidity">
            <i class="el-icon-odometer"></i> 湿度:{{ humidity }}
          </p>
        </div>
      </div>
      </el-card>
    </el-col>
  </el-row>
</template>
<script>
import { getlocate } from '@/api'

 
export default {
  name: 'WeatherCard',
  data() {
    return {
      options : [
      {
        value: '江苏',
        label: '江苏',
        children: [
          {
            value: '南京',
            label: '南京',
          },
          {
            value: '苏州',
            label: '苏州',
          },
          {
            value: '无锡',
            label: '无锡',
          },
          {
            value: '镇江',
            label: '镇江',
          },
          {
            value: '南通',
            label: '南通',
          },
          {
            value: '扬州',
            label: '扬州',
          },
          {
            value: '泰州',
            label: '泰州',
          },
          {
            value: '常州',
            label: '常州',
          },
          {
            value: '淮安',
            label: '淮安',
          },
          {
            value: '盐城',
            label: '盐城',
          },
          {
            value: '宿迁',
            label: '宿迁',
          },
          {
            value: '徐州',
            label: '徐州',
          },
          {
            value: '连云港',
            label: '连云港',
          },
        ],
      },
      ],
      city: '',
      ipAddress: '',

      // 天气情况
      weather: '晴',
      temperature: '25',
      winddirection: '南',
      windpower: '5',
      humidity: '4',
      icon: true,
    }
  },
  watch: {
  },
  computed: {
    // getIcon() {
    //   if (this.weather == '晴'){
    //     return 'el-icon-sunny'
    //   }else if (this.weather == '多云') {
    //     return 'el-icon-cloudy-and-sunny'
    //   } else if (this.weather == '阴') {
    //     return 'el-icon-partly-cloudy'
    //   } else if (this.weather.indexOf('雨')) {
    //     return 'el-icon-heavy-rain'
    //   } else if (this.weather.indexOf('雪')) {
    //     return 'el-icon-light-rain'
    //   }
    //   return 'el-icon-sunny'
    // },
  },
  methods: {
    // 挂载时调用，获取当前位置信息
    getAddress() {
      getlocate().then((response) => {
        this.ipAddress = `${response.data.province}${response.data.city}`
        this.city = response.data.city
        this.$alert('检测到您当前城市为'+this.ipAddress+'，已为您切换至当前城市。', 'INFO', {
          // if you want to disable its autofocus
          // autofocus: false,
          confirmButtonText: 'OK',
        })
      })
    },
  },
  mounted() {
    this.getAddress()
  },
}
</script>
<style scoped>
  .weacard{
    margin: 5vh auto;
    width: 25vw;
    background: #dedee0
  }

  .temperature {
    margin: 0 auto;
    font-size: 50px;
  }

  .weather {
    margin-left: 20px;
    font-size: 35px;
  }

  .city {
    font-size: 25px;
  }

  
  .mainWeather {
    float: right;
    margin-top: 10px;
    margin-right: 10%;
    font-size: 120px;
  }
</style>
