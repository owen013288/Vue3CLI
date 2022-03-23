const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  lintOnSave: false, //關閉語法檢查
  //開啟代理服務器 =>　記得重新啟動
  devServer: {
    proxy: 'http://localhost:5538'
  }
})