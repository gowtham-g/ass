var myApp=angular.module('myApp',[]);

myApp.controller('homeContrller',['$scope','$http',function($scope,$http){

var promise = $http.get('http://192.168.5.11/prjects/Assignments/Angularjs%20projects/Aug-30-2018/products.json');

// using then. the first callback is success.
promise.then(function(res){
    console.log("promise then success 1");
});

// using then. the first callback is success + chaining another one.    
promise.then(function(res){
    console.log("promise then success 2");
});

// using success.
promise.success(function(res){
    console.log("success 1");
});

// using error.
promise.error(function(res){
    console.log("error 1");
});

// using then. The first arg is a success callback and the second is an error callback.
promise.then(function(res){
    console.log("promise then success");
},
function(e){
    console.log("promise then error");
});

}]);
