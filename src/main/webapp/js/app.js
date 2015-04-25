// create the module and name it scotchApp
var scotchApp = angular.module('scotchApp', ['ngRoute']);

// configure our routes
scotchApp.config(function($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl : 'contents/home.html',
            controller  : 'mainController'
        })

        // route for the comcodereg page
        .when('/comcodereg', {
            templateUrl : 'contents/comcodereg.html',
            controller  : 'comcoderegController'
        })

        // route for the customereg page
        .when('/customereg', {
            templateUrl : 'contents/customereg.html',
            controller  : 'customeregController'
        })

                // route for the forecatingreg page
        .when('/forecatingreg', {
            templateUrl : 'contents/forecatingreg.html',
            controller  : 'forecatingregController'
        })

                // route for the contractreg page
        .when('/contractreg', {
            templateUrl : 'contents/contractreg.html',
            controller  : 'contractregController'
        })

                // route for the accountreg page
        .when('/accountreg', {
            templateUrl : 'contents/accountreg.html',
            controller  : 'accountregController'
        })

                // route for the workreg page
        .when('/workreg', {
            templateUrl : 'contents/workreg.html',
            controller  : 'workregController'
        });
});

// create the controller and inject Angular's $scope
scotchApp.controller('mainController', function($scope) {
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
});

scotchApp.controller('comcoderegController', function($scope) {
    $scope.message = '공통코드등록화면';
});

scotchApp.controller('customeregController', function($scope) {
    $scope.message = '고객등록';
});

scotchApp.controller('forecatingregController', function($scope) {
    $scope.message = '포케스팅등록';
});

scotchApp.controller('contractregController', function($scope) {
    $scope.message = '계약등록';
});

scotchApp.controller('accountregController', function($scope) {
    $scope.message = '계산서 발행';
});

scotchApp.controller('workregController', function($scope) {
    $scope.message = '업무등록';
});