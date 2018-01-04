var app = angular.module("carApp", []);
app.controller("parkCtrl", function($scope){
	$scope.car_number = "KA-01 2345";
	$scope.p_name = "Revathi";	
	$scope.occupied = 0;
	
	var cars = [];
	var avail_parking = 5;
	
	$scope.park_car = function(){
		$scope.show_success=false;
		if(cars.length < avail_parking ){
			
			 if( cars.indexOf($scope.car_number) !== -1){
				 alert("Try with different Car number");
				 return false;
			 } 
			
			
			cars.push($scope.car_number);			
			$scope.show_success = true;
			
			
		}
		else{
			alert("Reached Max limits");
		}
		console.log(cars);
		$scope.occupied = cars.length;
	};
		
	$scope.remove_car = function(){
		$scope.unpark_success = false;
		if(cars.indexOf($scope.unpark_number) !== -1){
			var index = cars.indexOf($scope.unpark_number);
			console.log("index", index);
			console.log("found");
			cars.splice(index, 1);
			console.log("remaining: ",cars);
			$scope.occupied = cars.length;
			$scope.unpark_success = true;
		}
		else{
			console.log("not found");
		} 
		
	};
});

