//fetch web app

var http = require('http')

http.get('http://google.com', ready)

function ready(response) {
    var all = '' //string data
//when insert data will born event name data
    response.on('data', function f(chunk) {
    console.log(chunk)
    })
}
