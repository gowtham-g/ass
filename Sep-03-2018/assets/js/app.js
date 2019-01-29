var myApp=angular.module('myApp',['ui.router']);

myApp.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('login',{
              url:'/',
               templateUrl: 'pages/login.html',
               controller:'loginController'
            })
            .state('home', {
                 url:'/home',
                templateUrl: 'pages/home.html'
            })
            .state('user', {
                 url:'/user',
                templateUrl: 'pages/user.html'
            })
            .state('logout', {
                 url:'/logout',
                templateUrl: 'pages/login.html',
                controller:'loginController'
            })
        $urlRouterProvider.otherwise('/');
    }]);


/*myApp.config(function($routeProvider){
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
.when('/preview',{
resolve:{
         "check":function($location,$rootScope){
             if(!$rootScope.loggedIn){
               $location.path('/');
             }
         }
     },
    templateUrl:'pages/preview.html',
  controller:'homeController'
})
.when('/logout',{

    templateUrl:'pages/login.html',
	controller:'loginController'
})



});*/


/*controllers*/

/*homeController*/


myApp.controller('loginController',['$scope','$rootScope','$state',function($scope,$rootScope,$state){
  $scope.uname;
$scope.upass;
$scope.login=function(){

if($scope.uname == "admin" && $scope.upass=="admin"){

$rootScope.loggedIn=true;
var mobiles=document.getElementsByClassName("mobiles");
  console.log(mobiles);
  for(i=0;i<mobiles.length;i++){
 mobiles[i].style.display="none";
  }
  $state.go('home');
}
else{

  $scope.error="pls provide valid username or passord ";
  $state.go('login');
}
}


}]);


myApp.controller('homeController',['$scope','$http','myService','$location','$compile',function($scope,$http,myService,$location,$compile){

$scope.products={

  accessories:[
  {
id:0,
pic:"img/accessories/model1.jpg",
name:"brand 1",
price:200,
type:"accessories"


},
{
id:1,
pic:"img/accessories/model2.jpg",
name:"brand 2",
price:300,
type:"accessories"

},
{
  id:2,
pic:"img/accessories/model3.jpg",
name:"brand 3",
price:400,
type:"accessories"

}],
fruits :[{
id:3,
pic:"img/fruits/model1.jpg",
name:"Apple",
price:10,
type:"fruits"

},
{
id:4,
pic:"img/fruits/model2.jpg",
name:"Banana",
price:20,
type:"fruits"

},
{
  id:5,
pic:"img/fruits/model3.jpg",
name:"Orange",
price:30,
type:"fruits"

}],

mobiles:[{
id:6,
pic:"img/mobiles/model1.jpg",
name:"brand 1",
price:10000,
type:"mobiles"
},
{
id:7,
pic:"img/mobiles/model2.jpeg",
name:"brand 2",
price:20000,
type:"mobiles"
},
{
  id:8,
pic:"img/mobiles/model3.jpg",
name:"brand 3",
price:30000,
type:"mobiles"
}]

};


$scope.mobileDiv = true;
    $scope.FruitDiv = false;
    $scope.acessDiv = false;
$scope.m=function(value){

  if(value == 'mobiles'){
    $scope.mobileDiv = true;
    $scope.FruitDiv = false;
    $scope.acessDiv = false;
  }else if(value == 'accessories'){
    $scope.mobileDiv = false;
    $scope.FruitDiv = false;
    $scope.acessDiv = true;
  }else if(value == 'fruits'){
    $scope.mobileDiv = false;
    $scope.FruitDiv = true;
    $scope.acessDiv = false;
  }

}


$scope.total=myService.total ||0;
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


$scope.arr=myService.arr || [];

$scope.itemCount=0;

$scope.viewCart=function(){
 $scope.list=document.querySelectorAll(".check");
 

 for(i=0;i<$scope.list.length;i++){
   if($scope.list[i].checked==true){
    console.log($scope.list[i].id);
    // $scope.value=angular.element(this).target.attr('id');
    $scope.arr=($scope.list[i].id);
    console.log($scope.arr);
   }
 }


$scope.add=function(event,id){

if(event.target.checked){

$scope.itemCount=$scope.itemCount+1;
  /*$scope.arr.push(id);
  console.log($scope.arr);*/
console.log("clicked");

}
else{
  /*$scope.arr.splice(id,1);
console.log("notclicked");
  console.log($scope.arr);*/

$scope.itemCount=$scope.itemCount-1;


}
}



  $scope.total=$scope.totalFunction();


}
$scope.$watch('arr',function(){
  myService.arr=$scope.arr;
});

 $scope.isPreview=false;
$scope.preview=function(item){
  
  $scope.isPreview=true;
$scope.previewImg=item.pic;
$scope.previewName=item.name;
$scope.previewPrice=item.price;
console.log($scope.previewPrice);
/*$location.path('/preview');*/

} 


$scope.$watch('previewName',function(){
  myService.previewName=$scope.previewName;
});

$scope.$watch('previewImg',function(){
  myService.previewImg=$scope.previewImg;
});


$scope.$watch('previewPrice',function(){
  myService.previewPrice=$scope.previewPrice;
});


$scope.previewImg=myService.previewImg;
$scope.previewName=myService.previewName;
$scope.previewPrice=myService.previewPrice;

$scope.buy=function(){
  $scope.msg="msg";
  $scope.arr=[];
  $scope.total=0;
}

}]);


 /*Services*/

 myApp.service('myService',function(){
  this.arr;
  this.check;
  this.total;

this.previewImg;
this.previewName;
 });
 
