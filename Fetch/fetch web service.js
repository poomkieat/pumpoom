//fetch web service 

var https = require('https')

https.get('https://codestar.work/coffee', ready)

function ready(response) {
    var all = '' //string data
//when insert data will born event name data
    response.on('data', function f(chunk) {
    all = all + chunk //sum data 
    })
//when end data will have event name end
    response.on('end', function f() {
    console.log(all) //print string 
    var coffee = JSON.parse(all) // covert string data to JSON
    console.log(coffee[0])
    })
}
