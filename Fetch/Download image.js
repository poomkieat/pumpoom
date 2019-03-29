var https = require('https')
var fs = require('fs')
var base = 'https://playboy.co.th/cdn/image/'
var i = 9334
while (i <= 9362) {
    download(i)
    i = i + 1
}
function download(photo){
    https.get(base + photo, function ready(response){
    response.setEncoding('binary')
    var all = ''
    response.on('data', function f(x) {
        all = all + x
    })
    response.on('end', function f(e) {
    if (e == null) {
        fs.writeFile(photo + '.jpg',all,'binary',function f() { } )
    } else {
        console.log('Photo ' + photo + ' ' + e)
    }
    })
    })    
}

