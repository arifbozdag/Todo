var app = angular.module("app", []);

app.controller('task', ['$scope', '$http', '$log', function ($scope, $http, $log) {

    $scope.loadCountry = function(){
        $http({
            url:'http://localhost:4467/Dropdown',
            method: 'GET'
        }).then(function (resp) {
            $log.log(resp.data);
            $scope.countries = resp.data;
        },function (resp) {
            $log.error("Error occured");
        });
    };

    $scope.firstChoice = "Select Task";
    $scope.secondChoice = "Select Task";
    $scope.thirdChoice = "Select Task";

    $scope.empty = "...";
    $scope.task = "Buy Bananas.";
    $scope.taskToDo = $scope.empty;

    $scope.openSecondTab = function(choice){
        $scope.secondOpen = 1;
        $scope.firstChoice = choice;
    };

    $scope.openThirdTab = function(choice){
        $scope.thirdOpen = 1;
        $scope.secondChoice = choice;
    };


    $scope.selectTask = function () {
        $scope.show = 1;
        $scope.taskToDo = "market" ;
    };

    $scope.removeTask = function () {
        $scope.show = undefined;
        $scope.taskToDo = $scope.empty;
    }
}]);

app.directive('myDropDown', function () {
    return {
        templateUrl: "my-drop-down.html"
    };
});

app.directive('myDropDown2', function () {
    return {
        templateUrl: "my-drop-down2.html"
    };
});

app.directive('myTaskBox', function () {
    return {
        templateUrl: "my-task-box.html"
    };
});

app.directive('dynamicDropDown', function () {
    return {
        templateUrl: "dynamic-drop-down.html"
    };
});