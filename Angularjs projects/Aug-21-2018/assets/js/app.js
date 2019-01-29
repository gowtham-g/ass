var myApp=angular.module('myApp',['ngMessages']);
myApp.controller('mainController',['$scope','$log','$filter','$timeout','$http',function($scope,$log,$filter,$timeout,$http){
	$scope.name="vasanth.N"
	$scope.Caps=$filter('uppercase')($scope.name);
	$scope.num1;
	$scope.num2;
	$timeout(function(){
		$scope.name="raja";

	},4000);


	/*Xml http request*/
	$http.get('http://192.168.5.11/prjects/Assignments/Angularjs%20projects/Aug-21-2018/products.json')
	.then(function(result){

		$scope.products=result.data ;

	}),(function(error){
		console.log(error);
	});
	$scope.total=0;
	/*add to cart */
	$scope.cartItems=[];
	$scope.cart= function(index,event){
		console.log(event);
	
		$scope.cartItems.push({id:val,price:$scope.products.ProductCollection[val].Price})
		console.log($scope.cartItems.length);
		console.log($scope.cartItems);

		$scope.total=$scope.total+ $scope.products.ProductCollection[val].Price;
	}


}]);


myApp.controller('myController',["$scope","$timeout",function($scope,$timeout){
	$scope.text="vasanth";
	$scope.condition=6;
	$timeout(function(){
		$scope.text="raja";

	},3000);
}]);