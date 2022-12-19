import { ElMessage } from 'element-plus'
import router from './router'
import { checklogin } from './api'

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    checklogin().then((response =>{
        var data=response.data
        if(data.code===0){
            next()
        }
        else {
            ElMessage({
              message: '请先登陆后再访问',
              type: 'error',
            })
            next({ path: '/login' })
          }
    }))
  } else {
    next()
  }
})
