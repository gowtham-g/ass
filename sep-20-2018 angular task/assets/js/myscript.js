myApp=angular.module('myApp',[]);
/*=====creation of http request=====*/

myApp.controller('mainController',['$scope','$http',function($scope,$http){

$http.get('http://192.168.5.11/prjects/Assignments/sep-20-2018%20angular%20task/sample.json').then(function(result){
	$scope.sdetails=result.data;
 $scope.OnLoad($scope.sdetails);
	// console.log($scope.sdetails);
}),(function(error){
    console.log(eror);
});




 /*===== onload function definition =======*/

 $scope.OnLoad=function(data){

  detail= CustomGrid('grid',{data:data});
 };

 /*===== Calling of search function =====*/
 search= function(val){
  detail._filter(val);
 };
markChange= function(thisdiv,thisid){

  detail._mark(thisdiv,thisid);
 };


 showMarks= function(e,thisbox,thisarr){
  detail._showMarks(e,thisbox,thisarr);
 };



}]);