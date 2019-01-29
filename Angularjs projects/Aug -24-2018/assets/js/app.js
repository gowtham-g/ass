var myApp=angular.module('myApp',['ngRoute']);
myApp.config(function($routeProvider){
$routeProvider
.when('/',{
	templateUrl:'pages/home.html',
	controller:'homeController'
})
.when('/first/:num', {
	templateUrl:'pages/register.html',
	controller:'registerController'
})
.when('/second',{
 templateUrl:'pages/login.html',
 	controller:'loginController'
})
.when('/third',{
 templateUrl:'pages/user.html',
 	controller:'userController'
})
});


/*services*/
myApp.service('nameService',function(){
	var self=this;
	this.name="vasanth";
	this.namelength=function(){
	return self.name.length;
	}
});
myApp.controller('homeController',['$scope','nameService',function($scope,nameService){
	$scope.name=nameService.name;	
	$scope.$watch('name',function(){
	nameService.name=$scope.name;	
	});


$scope.people=[{
	name:"vasanth",
	age:'22'
},
{
	name:"raja",
	age:'23'
},
{
	name:"raj",
	age:'24'
}
]

$scope.formatedFunction=function(person){
	return person.name + ',' + person.age;
}

}]);
myApp.controller('registerController',['$scope','$routeParams','nameService',function($scope,$routeParams,nameService){
	$scope.name=nameService.name;	

$scope.num=$routeParams.num;	
$scope.$watch('name',function(){
	nameService.name=$scope.name;	
	});
}]);
myApp.controller('loginController',['$scope','nameService',function($scope,nameService){
	$scope.name=nameService.name;	
	$scope.$watch('name',function(){
	nameService.name=$scope.name;	
	});
	
}]);
myApp.controller('userController',['$scope','nameService','$log',function($scope,nameService,$log){
$scope.name=nameService.name;	
$scope.$watch('name',function(){
	nameService.name=$scope.name;	
	});
$log.log(nameService.name);
$log.log(nameService.namelength());
}]);

/*custom directives*/
myApp.directive('searchResult',function(){
	return {
    restrict:'AECM',
    templateUrl:'directives/searchResult.html',
     replace:true ,
     scope:{
     	// personName:"@",
     	// personAge:"@"  
           personObject:'=',
           personFormatedFunction:'&'
     }
	}
});