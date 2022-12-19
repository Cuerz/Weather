import axios from 'axios';

// create an axios instance
const service = axios.create({
  withCredentials: true, // 设置请求时带Cookies
  timeout: 25000, // 请求延迟
});

export default service;