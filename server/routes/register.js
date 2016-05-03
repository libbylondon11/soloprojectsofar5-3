var express=require('express');
var router=express.Router();
var passport=require('passport');
var path=require('path');
var pg=require('pg');
var connectionString='postgres://localhost:5432/whitepowders';
var bcrypt=require("../../modules/encryption");


router.get('/', function(request, response, next){
  response.sendFile(path.join(__dirname, '../public/views/register.html'));
});

router.post('/', function(request, response, next){
  console.log(request.body);
  pg.connect(connectionString, function(err, client){

  var user={
    username: request.body.username,
    password: bcrypt.encryptPassword(request.body.password)
  }

    var query=client.query('INSERT INTO users (username, password) VALUES ($1, $2)', [user.username, user.password]);

    query.on('error', function(err){
      console.log(err);
    })
    query.on('end', function(){
      response.sendStatus(200);
      client.end();
    })
  })
})
module.exports=router;
