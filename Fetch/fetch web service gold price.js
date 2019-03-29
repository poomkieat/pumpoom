//fetch web service gold price

var https = require('https')

https.get('https://apigoldprice99.huasengheng.com/api/values', ready)

function ready(response) {
    var all = '' //string data
//when insert data will born event name data
    response.on('data', function f(chunk) {
    all = all + chunk //sum data 
    })
//when end data will have event name end
    response.on('end', function f() {
    var price = JSON.parse(all) // covert string data to JSON
    var p = parseFloat(price.Sell.replace(',', '') )
    var b = parseFloat(price.Buy.replace(',', '') )
    console.log(p - b) //print Sell - Buy
    })
}

//https://apigoldprice99.huasengheng.com/api/values
