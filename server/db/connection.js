//the purpose of this document is to connect up with my sql database.
var pg=require('pg');

var connectionString;

if(process.env.DATABASE_URL){
  pg.defaults.ssl=true;
  connectionString=process.env.DABASE_URL;
}else{
  connectionString='postgres://localhost:5432/whitepowders';
}
module.exports=router;
