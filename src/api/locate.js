import axios from 'axios';

// create an axios instance
const service = axios.create({
//   withCredentials: true, // 设置请求时带Cookies
  timeout: 25000, // 请求延迟
});

export function getlocate() {
    return service({
      url: 'https://restapi.amap.com/v3/ip?parameters',
      method: 'get',
      params: {
        key: '251b1d87479d58137d54b673dbdec2ea',
      },
    })
  }