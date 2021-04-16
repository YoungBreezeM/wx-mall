/*
 * @Author: your name
 * @Date: 2021-03-07 16:24:53
 * @LastEditTime: 2021-04-04 21:02:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /mall4v/static/config/index.js
 */
/**
 * 开发环境
 */
; (function () {
  window.SITE_CONFIG = {}

  // api接口请求地址
  window.SITE_CONFIG['baseUrl'] = 'http://192.168.0.143:8085'

  // 静态资源文件url
  window.SITE_CONFIG['resourcesUrl'] = 'http://qiniu.leshphon.top/'
  // cdn地址 = 域名 + 版本号
  window.SITE_CONFIG['domain'] = './' // 域名
  window.SITE_CONFIG['version'] = ''   // 版本号(年月日时分)
  window.SITE_CONFIG['cdnUrl'] = window.SITE_CONFIG.domain + window.SITE_CONFIG.version
})()
