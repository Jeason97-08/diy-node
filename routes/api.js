var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/test', function(req, res, next) {
  res.send({
    code: 200,
    msg: '测试成功'
  })
});


module.exports = router;
