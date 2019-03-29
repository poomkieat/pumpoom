var fs = require('fs')
var https = require('https')
https.get('https://codestar.work/john.mp4', ready)

function ready(response) {
    var all = ''
    response.setEncoding('binary')
    response.on('data',function f(chunk){
        all = all + chunk
    })
    response.on('end',function f() {
    fs.writeFile('9334.jpg',all,'binary',function f(e,r) {
    console.log('Error is ' + e)
    })
    })
}


