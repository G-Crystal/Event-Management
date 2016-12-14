/**
 * Configure the Routes
 */
angular.module('angula').config(['$routeProvider', function($routeProvider) {
    $routeProvider
    // Home
        .when("/", { templateUrl: "view/partials/home.html", controller: "SearchEventController" })

    // User Menu
    .when("/user_messages", { templateUrl: "view/partials/user/dashboard.html", controller: "HomeCtrl" })

    // Admin Menu
    .when("/messages", { templateUrl: "view/partials/event/create_event.html", controller: "HomeCtrl" })
        .when("/digital_market", { templateUrl: "view/partials/event/create_event.html", controller: "HomeCtrl" })
        .when("/box_office", { templateUrl: "view/partials/event/create_event.html", controller: "HomeCtrl" })
        .when("/service", { templateUrl: "view/partials/event/create_event.html", controller: "HomeCtrl" })
        .when("/allyhub", { templateUrl: "view/partials/event/create_event.html", controller: "HomeCtrl" })

    .when("/404", { templateUrl: "view/partials/404.html", controller: "PageCtrl" })
}]);