 /*module */
var wheatherApp=angular.module('wheatherApp',['ngRoute','ngResource','ngMessages']);

/*Routing*/

wheatherApp.config(function($routeProvider){
 $routeProvider
 .when('/',{
 templateUrl:'pages/login.html',
 controller:'loginController'
 })
 .when('/home',{
 templateUrl:'pages/home.html',
 controller:'homeController'
 })
 .when('/forecast',{
 	templateUrl:'pages/forecast.html',
 	controller:'forcastController'
 })
 .when('/forecast/:amount',{
 	templateUrl:'pages/forecast.html',
 	controller:'forcastController'
 })
});

/*services*/
wheatherApp.service('cityservices',function(){
	this.amount;
	this.category;
  this.upass;

});

/*login controller*/

wheatherApp.controller('loginController',['$scope','$location',function($scope,$location){
  $scope.uname;
/*
 $scope.$watch('upass',function(){
    cityservices.upass=$scope.upass;

     });*/
 $scope.upass;
$scope.login=function(){
var regex = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
if($scope.uname == "admin" && regex.test($scope.upass) ){
  $location.path('/forecast');
}
else{

  $scope.error="pls provide valid username or passord ";
  $location.path('/');
}
}


}]);

/* home controller*/

wheatherApp.controller('homeController',['$scope','cityservices','$resource','$location',function($scope,cityservices,$resources,$location){
   $scope.page=cityservices.page;


$scope.category=cityservices.category;
 $scope.submit=function(){
      $location.path('/forecast');
      
    }
   $scope.$watch('page',function(){
   cityservices.page=$scope.page;
   });
    $scope.$watch('category',function(){
cityservices.category=$scope.category;
   });
    
}]);

/*forecast controller*/

wheatherApp.controller('forcastController',['$scope','cityservices','$resource','$http','$routeParams','$location',function($scope,cityservices,$resources,$http,$routeParams,$location){





$scope.amount=$routeParams.amount || 1;
   $scope.page=cityservices.page || 1;

$scope.category=cityservices.category ||"bird";

$scope.$watch('page',function(){
   cityservices.page=$scope.page;
   });
    $scope.$watch('category',function(){
cityservices.category=$scope.category;
   });
$http.get('https://openclipart.org/search/json/?&query='+$scope.category+'&page='+$scope.page+'&amount='+$scope.amount).then(function(result){
	$scope.collections=result.data;
	console.log($scope.collections.payload[0].svg.png_full_lossy);
}),(function(error){
    console.log();
});

 
}]);

/*custom directives*/
wheatherApp.directive('imageGallery',function(){
return{
restrict:"AEC",
templateUrl:"directives/forecast.html",
replace:"true",
scope:{
    gallery:"="
}
}


});