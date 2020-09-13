/*
 * @Author: chuanjie
 * @Date: 2020-09-12 19:10:46
 * @LastEditors: chuanjie
 * @LastEditTime: 2020-09-12 19:29:08
 * @Description: 
 * @FilePath: \ant-design-vue-pro\src\router\index.js
 */
import Vue from 'vue'
import Router from 'vue-router'
import { constantRouterMap } from '@/config/router.config'

// hack router push callback
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: constantRouterMap
})
