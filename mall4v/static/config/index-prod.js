/*
 * @Author: your name
 * @Date: 2021-03-07 16:24:53
 * @LastEditTime: 2021-03-08 21:06:12
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /mall4v/static/config/index-prod.js
 */
/**
 * 生产环境
 */
; (function () {
  window.SITE_CONFIG = {}

  // api接口请求地址
  window.SITE_CONFIG['baseUrl'] = 'http://mall4j-admin.gz-yami.com/apis'
  // 静态资源文件url
  window.SITE_CONFIG['resourcesUrl'] = 'http://qp1444erh.hn-bkt.clouddn.com/'
  // cdn地址 = 域名 + 版本号
  window.SITE_CONFIG['domain'] = './' // 域名
  window.SITE_CONFIG['version'] = ''   // 版本号(年月日时分)
  window.SITE_CONFIG['cdnUrl'] = window.SITE_CONFIG.domain + window.SITE_CONFIG.version
})()
