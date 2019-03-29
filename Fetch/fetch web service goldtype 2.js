//fetch web service gold price 2

var https = require('https')

https.get('https://online965.huasengheng.com/ServiceAPI/api/values/getprice/', ready)

function ready(response) {
    var all = '' //string data
//when insert data will born event name data
    response.on('data', function f(chunk) {
    all = all + chunk //sum data 
    })
//when end data will have event name end
    response.on('end', function f() {
    var list = JSON.parse(all)
    for (var i in list){
    list[i].Buy = parseFloat( list[i].Buy.replace(',','') )
    list[i].Sell = parseFloat( list[i].Sell.replace(',','') )
    console.log(list[i].GoldType + ' ' + 
                    (list[i].Sell - list[i].Buy.toFixed(2)) ) //.toFixed is todsaniyom 2 
    }    
    })
}

//https://online965.huasengheng.com/ServiceAPI/api/values/getprice/
