 /*module */
var wheatherApp=angular.module('wheatherApp',['ngRoute','ngResource']);

/*Routing*/

wheatherApp.config(function($routeProvider){
 $routeProvider
 .when('/',{
 templateUrl:'pages/home.html',
 controller:'homeController'
 })
 .when('/forecast',{
 	templateUrl:'pages/forecast.html',
 	controller:'forcastController'
 })
 .when('/forecast/:page',{
 	templateUrl:'pages/forecast.html',
 	controller:'forcastController'
 })
});
wheatherApp.service('cityservices',function(){
	this.amount;
	this.category;


});

/* home controller*/

wheatherApp.controller('homeController',['$scope','cityservices','$resource','$location',function($scope,cityservices,$resources,$location){
   $scope.amount=cityservices.amount;


$scope.category=cityservices.category;
 
   $scope.$watch('amount',function(){
   cityservices.amount=$scope.amount;
   });
    $scope.$watch('category',function(){
cityservices.category=$scope.category;
   });
    $scope.submit=function(){
    	$location.path('/forecast');
    }
}]);

/*forecast controller*/

wheatherApp.controller('forcastController',['$scope','cityservices','$resource','$http','$routeParams',function($scope,cityservices,$resources,$http,$routeParams){

$scope.$watch('amount',function(){
   cityservices.amount=$scope.amount;
   });
    $scope.$watch('category',function(){
cityservices.category=$scope.category;
   });


$scope.page=$routeParams.page || 1;
   $scope.amount=cityservices.amount || 4;

$scope.category=cityservices.category ||"bird";
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