import request from '@/utils/request'

export function getlocate() {
  return request({
    url: 'https://restapi.amap.com/v3/ip?parameters',
    method: 'get',
    params: {
      key: '251b1d87479d58137d54b673dbdec2ea',
    },
  })
}

export function login(data) {
  return request({
    url: 'http://localhost:8080/login',
    method: 'post',
    data,
  })
}

export function register(data) {
  return request({
    url: 'http://localhost:8080/register',
    method: 'post',
    data,
  })
}

export function getweather(data) {
  return request({
    url: 'http://127.0.0.1:4523/m1/2094758-0-default/weather',
    method: 'post',
    data
  })
}

export function gettemperature(data) {
  return request({
    url: 'http://127.0.0.1:4523/m1/2094758-0-default/temperature',
    method: 'post',
    data,
  })
}

export function getrain(data) {
  return request({
    url: 'http://127.0.0.1:4523/m1/2094758-0-default/rain',
    method: 'post',
    data,
  })
}

export function feedback(data) {
  return request({
    url: 'http://localhost:8080/feedback',
    method: 'post',
    data,
  })
}
