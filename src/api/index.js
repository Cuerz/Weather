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

export function login (data) {
  return request({
    url: '/login',
    method: 'post',
    data
  });
}

export function register (data) {
  return request({
    url: '/register',
    method: 'post',
    data
  });
}
