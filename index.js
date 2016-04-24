var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.set('port', (process.env.PORT || 5000))

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
