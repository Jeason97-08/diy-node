var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//微信接入验证
router.get('/auth', function(req, res, next) {
  let {signature,timestamp,nonce,echostr} = req.query
  let token = 'wxTestToken'
  let arr = [token,timestamp,nonce]
  arr.sort()
  const sha1 = require('sha1')
  let encodeStr = sha1(arr.join('')) 
  if(encodeStr == signature){
    res.send(echostr)
  }else{
    res.send(false)
  }
});


module.exports = router;
