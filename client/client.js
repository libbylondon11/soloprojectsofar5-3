//what is the role of this client page???? ummmmm angular? functionality?
//do I need multiple client pages? Is that a thing?

var app=angular.module('powderApp', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
  $routeProvider
  .when('/', {//this means index??
    templateUrl: 'views/home.html',
    controller: 'MainController',
    controllerAs: 'home'
  })
  .when('/register', {
    templateUrl: 'views/register.html',
    controller: 'RegisterController',
    controllerAs: 'register'
  })
  .when('/eastside', {
    templateUrl: 'views/eastside.html',
    controller: 'EastSideController',
    controllerAs: 'eastside'
  })
  .when('/sewardFriendship',{
    templateUrl: 'views/sewardFriendship.html',
    controller: 'SewardController',
    controllerAs: 'seward'
  })
  .when('/wedge', {
    templateUrl: 'views/wedge.html',
    controller: 'WedgeController',
    controllerAs: 'wedge'
  })
  .when('/users',{
    templateUrl: 'views/users.html',
    controller: 'UsersController',
    controllerAs: 'users'
  })


  $locationProvider.html5Mode(true);

}])

app.controller('MainController', function(){
  this.message="welcome to the white powder finder app! Some people are hurried and rushing souls. Libby and co are some of these types. Some folks spend time bustling around, forgetting things, and leaving tasks incomplete.  And, time spent in the bulk aisle of a co op grocery store is no exception for these humans. Imagine you are one of these people: you are shopping the bulk aisle as per usual at the Seward Friendship Co-op and you decide to pick up some bulk baking soda.  You fill up a small clear bag of the white powder,  write down the plu number (otherwise the cashier will not be pleased), and head on your merry wayBut, wait. Fast forward two months and you are in the act of baking banananan bread at home.  The recipe calls for some baking soda.  So you go to your cupboard. You find the aforementioned baggie of white powder with the plu number written on it,  but no actual product name to decipher on the bag.   You come to the realization that you have no way of knowing what this white powder actually is just by having the plu number on the bag.  It could be baking soda, but it could also be baking powder, or vitamin c powder, or alum, or cream of tartar or garlic powder for gawdsake. The list goes on.  What are your options? You could just go back to the co op and take a look, or be that lazy jerk that calls the co op and bugs a busy cashier to ask what the product is. But with this app, all you have to do is login, type which co op you bought the said white powder at, type the plu number in, and wohoo you discover that this white powder is not baking soda at all, but rather it it’s cornstarch.  Good thing you checked."
})
app.controller('RegisterController', function(){
  this.message="thanks for registering."
})
app.controller('EastSideController', function(){
  this.message="welcome to Eastside."
})
app.controller('SewardController', function(){
  this.message="welcome to Seward Friendship."
})
app.controller('WedgeController', function(){
  this.message="welcome to the Wedge."
})
app.controller('UsersController', function(){
  this.message="Users, welcome!"
})
// app.controller('MainController', function(){
//   this.message="hello."
// })
