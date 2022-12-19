import request from '@/utils/request'
import qs from 'qs';

export function checklogin() {
  return request({
    url: 'http://localhost:8080/user/isLogin',
    method: 'get',
  })
}

export function login(data) {
  return request({
    url: 'http://localhost:8080/user/doLogin',
    method: 'post',
    data: qs.stringify({
      userName: data.userName,
      password: data.password,
    }),
  })
}

export function sendCode(data) {
  return request({
    url: 'http://localhost:8080/user/sendCode',
    method: 'post',
    data: qs.stringify({
      email: data.email,
    }),
  })
}

export function verifyCode(data) {
  return request({
    url: 'http://localhost:8080/user/verifyCode',
    method: 'post',
    data: qs.stringify({
      code: data.code,
    }),
  })
}

export function register(data) {
  return request({
    url: 'http://localhost:8080/user/register',
    method: 'post',
    data: qs.stringify({
      userName: data.userName,
      password: data.password,
      email: data.email
    }),
  })
}

export function getweather(city) {
  return request({
    url: 'http://localhost:8080/api/sysWeatherCondition/getAll',
    method: 'post',
    data: qs.stringify({
      city: city
    }),
  })
}

export function gettemperature(city) {
  return request({
    url: 'http://localhost:8080/api/sysWeatherCondition/get7days',
    method: 'post',
    data: qs.stringify({
      city: city
    }),
  })
}

export function getrain(city) {
  return request({
    url: 'http://localhost:8080/api/sysRainCondition/getByCity',
    method: 'post',
    data: qs.stringify({
      city: city
    }),
  })
}

export function feedback(data) {
  return request({
    url: 'http://localhost:8080/feedback/post',
    method: 'post',
    data: qs.stringify({
      message: data.message,
    })
  })
}

export function getAllFeedback() {
  return request({
    url: 'http://localhost:8080/feedback/queryAll',
    method: 'get',
  })
}
