var express = require('express')
var app = express()

app.get('/', function (req, res) {
    res.sendFile("/Users/zhannalibman/targilim/day2/jsBootcampDay2/index.html");
    console.log("hello");
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})