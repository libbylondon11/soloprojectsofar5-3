var express=require('express');
var router=express.Router();

router.get('/', function(request, response, next){
  response.send(request.isAuthenticated());
  console.log('users are logging');
});
//set up a post route.

module.exports=router;

 //should bring to a page that says true.
