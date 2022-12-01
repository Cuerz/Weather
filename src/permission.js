// import { getToken } from '@/utils/auth'
// import { ElMessage } from 'element-plus'
// import router from './router'

// router.beforeEach((to, from, next) => {
//   if (to.meta.requireAuth) {
//     if (getToken('token') != undefined) {
//       next()
//     } else {
//       ElMessage({
//         message: '请先登陆后再访问',
//         type: 'error',
//       })
//       next({ path: '/login' })
//     }
//   } else {
//     next()
//   }
// })
