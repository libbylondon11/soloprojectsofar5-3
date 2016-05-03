var express=require('express');
var passport=require('passport');
var session=require('express-session');
var bodyParser=require('body-parser');
var pg=require('pg');
var localStrategy=require('passport-local').Strategy;

//local//
var register=require('./routes/register');
var index=require('./routes/index');
var connectionString='postgres://localhost:5432/whitepowders';

var app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static('server/public'));

app.use(session({
  secret: 'aqua walls',
  resave: true,
  saveUninitialized: false,
  cookie: {maxAge: 60000, secure: false}
}));
//initializing passport////
app.use(passport.initialize());
app.use(passport.session());

passport.use('local', new localStrategy({
  passReqToCallback: true,
  usernameField: 'username'
},
function(request, username, password, done){
  console.log('CHECKING PASSWORD');
  pg.connect(connectionString, function(err, client){
    var query=client.query("SELECT * FROM users WHERE username = $1", [username]);

    if(err){
      console.log(err);
    }
    var user={};

    query.on('row', function(row){
      console.log('user ob', row);
      user=rown;
      console.log(password, user.password, 'passwords');
      if(password===user.password){
        console.log('a user has been found');
        done(err, user);
      }else{
        console.log('no matches found');
        done(null, false);
      }
    });
    query.on('end', function(){
      client.end();
      response.send(results);
    });
    if(err){
      console.log(err);
    }
  });
}));

passport.serializeUser(function(user, done){
  console.log('hit serializeUser');
  done(null, user.id);
});
passport.deserializeUser(function(id, passportDone){
  console.log('hit deserializeUser');

  pg.connect(connectionString, function(err, client, done){
    if(err){
      console.log(err);
    }
    var user={};
    var query=client.query('SELECT * FROM users where id=$1', [id]);

    query.on('row', function(row){
      user=row;
      passportDone(null, user);
    })
    query.on('end', function(){
      client.end();
    });
    if(err){
      console.log(err);
    }
  });
});

app.use('/register', register);
app.use('/', index);

var server=app.listen(3000, function(){
  var port=server.address().port;
  console.log('listening on port', port);
})
