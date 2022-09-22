import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from '@/router/routes'

Vue.use(VueRouter)
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location,OnResolve,OnReject){
    if(OnReject||OnResolve){
        return originalPush.call(this,location,OnResolve,OnReject)
    }
    return originalPush.call(this,location).catch(()=>{
    })
}

export default new VueRouter({
    mode:'history',
    routes
})