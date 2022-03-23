const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  lintOnSave: false, //關閉語法檢查
  //開啟代理服務器 =>　記得重新啟動
  //配置一
  // devServer: {
  //   proxy: 'http://localhost:5538'
  // }
  //配置二
  devServer: {
    proxy: {
      //請求前綴
      '/api': {
        target: 'http://localhost:5538',
        // pathRewrite: { '^/owen': '/api' }, Vue3不能用
        ws: true, // 用於支持websocket
        changeOrigin: true // true就是告訴對方我跟你一樣，反之就是告訴對他我是啥
      },
      // '/foo': {
      //   target: '<other_url>'
      // }
    }
  }
})