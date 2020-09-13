/*
 * @Author: chuanjie
 * @Date: 2020-09-12 19:10:46
 * @LastEditors: chuanjie
 * @LastEditTime: 2020-09-13 18:03:18
 * @Description: 
 * @FilePath: \ant-design-vue-pro\src\store\index.js
 */
import Vue from 'vue'
import Vuex from 'vuex'

import app from './modules/app'
import user from './modules/user'

// default router permission control
import permission from './modules/permission'

// dynamic router permission control (Experimental)
// import permission from './modules/async-router'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    app,
    user,
    permission
  },
  state: {

  },
  mutations: {

  },
  actions: {

  },
  getters
})
