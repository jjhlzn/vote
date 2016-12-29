var request = require('request');

var url = 'http://wx90095.weixiaoxin.com//Vipvote/index/?wid=90095&id=8184&c=6c9e476a509557cdc5a29c0d93056ec8';
var options = {
  url: url,
  headers: {
    'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 7_0_4 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) Mobile/11B554a MicroMessenger/6.2.4 NetType/WIFI Language/zh_CN'
  }
};

setInterval( function() {

request(options, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // 打印google首页
  }
}) }, 1000);