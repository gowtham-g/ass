var myApp=angular.module('myApp',['ngRoute','ngMessages']);

myApp.config(function($routeProvider){
$routeProvider
.when('/',{

	templateUrl:'pages/login.html',
	controller:'loginController'
})
.when('/home',{
     resolve:{
         "check":function($location,$rootScope){
             if(!$rootScope.loggedIn){
               $location.path('/');
             }
         }
     },

    templateUrl:'pages/home.html',
	controller:'homeController'
})
.when('/user',{
resolve:{
         "check":function($location,$rootScope){
             if(!$rootScope.loggedIn){
               $location.path('/');
             }
         }
     },
    templateUrl:'pages/user.html',
	controller:'homeController'
})
.when('/register',{
resolve:{
         "check":function($location,$rootScope){
             if(!$rootScope.loggedIn){
               $location.path('/');
             }
         }
     },
    templateUrl:'pages/register.html',
	controller:'registerController'
})

.when('/logout',{
// resolve:{

     //     "check":function($location,$rootScope){
              
     //         if(!$rootScope.loggedIn){
     //         	 $rootScope.loggedIn=false;
     //           $location.path('/');
     //         }
     //     }
     // },
    templateUrl:'pages/register.html',
	controller:'registerController'
})



});


/*controllers*/

/*homeController*/

myApp.controller('loginController',['$scope','$location','$rootScope',function($scope,$location,$rootScope){
  $scope.uname;
$scope.upass;
$scope.login=function(){
var regex = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
if($scope.uname == "admin" && regex.test($scope.upass) ){

$rootScope.loggedIn=true;
  $location.path('/home');
}
else{

  $scope.error="pls provide valid username or passord ";
  $location.path('/');
}
}


}]);


myApp.controller('homeController',['$scope','$http','myService',function($scope,$http,myService){

$http.get('http://192.168.5.11/prjects/Assignments/Angularjs%20projects/Aug-30-2018/products.json')
.then(function(result){
	$scope.collections=result.data;
	console.log($scope.collections);
}),(function(error){
  console.log(error);
})
$scope.total=myService.total || 0;
$scope.arr=myService.arr||[];
$scope.cart=function(val){
var id=document.querySelector(".cart").getAttribute('id');
alert(id);

  $scope.arr.push({id:val,price:$scope.collections.ProductCollection[val].Price});
 
/*   $scope.total=$scope.total+$scope.collections.ProductCollection[val].Price;
*/
$scope.total=$scope.totalFunction();
console.log($scope.total);

}
$scope.totalFunction=function(){
	$scope.total=0;
	for(i=0 ; i<$scope.arr.length;i++){
	$scope.total=$scope.total+$scope.arr[i].price;

	}
	return $scope.total;
}

$scope.$watch('total',function(){
       myService.total=$scope.total;
	});
$scope.remove=function(id){
 	console.log(id);
 	$scope.arr.splice(id,1);
 	$scope.total=$scope.totalFunction();
 	
 }
 $scope.logout=function($rootScope,$location){
 	$rootScope.loggedIn=true;
 	$location.path('/');
 }

	$scope.$watch('arr',function(){
       myService.arr=$scope.arr;
	});
 if($scope.arr==[]){
  $scope.empty;
 }

 

}]);


myApp.controller('userController',['$scope','$http',function($scope,$http){

$scope.arr=myService.arr;
$scope.$watch('arr',function(){
       myService.arr=$scope.arr;
	});

	
}]);


 myApp.controller('registerController',['$scope','$http','$compile',function($scope,$http,$compile){
var div=document.createElement('div');
div.setAttribute('class','alert alert-success');
$scope.a="vasanth"
div.innerHTML="hi its working {{a}}";
document.querySelector(".a").appendChild(div);
$compile(div)($scope);
	
}]);


 /*Services*/

 myApp.service('myService',function(){
  this.arr;
  this.total;
 });



 /*

var promise1 = TestService.get();
var promise2 = promise1.then(function(value) {
                  console.log('service resolved: '+value);
                  return "Hello World";
               });
var promise3 = promise2.then(function(value) {
                  console.log(value);
               });
promise3.then(function(value) {
       console.log(value);
});

 */