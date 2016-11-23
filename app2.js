var app = angular.module("appNg2", []);

app.controller('app1', function ($scope) {
	$scope.array1 = [];

	$scope.showTwoWay = function(){
		$scope.array1.push($scope.txt)
		console.log($scope.array1)
	}
});
