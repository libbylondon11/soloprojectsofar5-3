//I will create other routes shortly probably? like for registering and for a user page.
var express=require('express');
var router=express.Router();
var path=require('path');
var passport=require('passport');
var pg=require('pg');

router.get('/', function(request, response){
  response.sendFile(path.join(__dirname, '../public/views/index.html'))
});
router.post('/', passport.authenticate('local',
{successRedirect: '/home',
failureRedirect: '/'
})
);

module.exports=router;
