const express = require('express')
const history = require('connect-history-api-fallback')

const app = express()
// 必須在靜態資源前使用
app.use(history())
app.use(express.static(__dirname + '/static'))

app.get('/person', (req, res) => {
    res.send({
        name: 'owen',
        age: 18
    })
})

app.listen(5005, (err) => {
    if (!err) console.log('服務器啟動成功啦！')
})