var express = require('express');
var router = express.Router();
var debug = require('debug')
var debug_std = debug('brapi:server');
var debug_full= debug('brapi:trace');


router.get('/plant/set/:block/:row/:pot',function(req,res,next){
   res.render('phenotyping')
})