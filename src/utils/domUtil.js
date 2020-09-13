/*
 * @Author: chuanjie
 * @Date: 2020-09-12 19:10:46
 * @LastEditors: chuanjie
 * @LastEditTime: 2020-09-13 19:50:06
 * @Description: 
 * @FilePath: \ant-design-vue-pro\src\utils\domUtil.js
 */
import config from '@/config/defaultSettings'

export const setDocumentTitle = function (title) {
  document.title = title
  const ua = navigator.userAgent
  // eslint-disable-next-line
  const regex = /\bMicroMessenger\/([\d\.]+)/
  if (regex.test(ua) && /ip(hone|od|ad)/i.test(ua)) {
    const i = document.createElement('iframe')
    i.src = '/favicon.ico'
    i.style.display = 'none'
    i.onload = function () {
      setTimeout(function () {
        i.remove()
      }, 9)
    }
    document.body.appendChild(i)
  }
}

export const domTitle = config.title
