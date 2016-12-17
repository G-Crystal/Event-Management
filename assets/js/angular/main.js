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
    .when("/service", { templateUrl: "view/partials/event/create_event.html", controller: "HomeCtrl" })
    .when("/allyhub", { templateUrl: "view/partials/event/create_event.html", controller: "HomeCtrl" })

    .when("/404", { templateUrl: "view/partials/404.html", controller: "MainController" })

    // Information Menu
    .when("/faq", { templateUrl: "view/partials/information/faq.html", controller: "AccordionCtrl" })
}])

.run(['$rootScope', '$location', '$cookies', function($rootScope, $location, $cookies) {
    $rootScope.$on('$routeChangeStart', function (event, current, previous) {
        if (typeof(current.$$route) == "undefined") return;
        if (current.$$route.originalPath.search('info_') >= 0) return;

        switch(current.$$route.originalPath) {  // information URL
            case '/faq':
                return;
            default:                            // invalid URL
                break;
        }

        // for common credential
        if ($cookies.user_type == 1 || $cookies.user_type == 2) {
            switch(current.$$route.originalPath) {
                case '/log_in':
                case '/sign_up':
                case '/reset':
                case '/forgot':
                    return;
                case '/':
                case '/pagination':
                case '/event_details':
                case '/venue_profile':
                case '/talent_profile':
                case '/organizer_signup':
                case '/organizer_profile':
                case '/order_confirm_details':
                case '/cart':
                case '/buy_ticket':
                case '/404':
                    return;
                default:                            // invalid URL
                    break;
            }
        }
        // for user credential
        if ($cookies.user_type == 1) {
            switch(current.$$route.originalPath) {
                case '/user_dashboard':
                case '/user_messages':
                case '/user_profile_settings':
                case '/user_password_settings':
                case '/user_payments_settings':     // valid URL
                    break;
                default:                            // invalid URL
                    $location.path('/user_dashboard');
                    break;
            }
        }
        // for organizer credential
        else if ($cookies.user_type == 2) {
            switch(current.$$route.originalPath) {
                case '/organizer_dashboard':
                case '/create_events':
                case '/upcoming_events':
                case '/past_events':
                case '/event_order':
                case '/add_talents':
                case '/order_report':
                case '/ticket_report':
                case '/digital_market':
                case '/box_office':
                case '/service':
                case '/allyhub':
                case '/messages':
                case '/profile_settings':
                case '/password_settings':
                case '/payments_settings':          // valid URL
                    break;
                default:                            // invalid URL
                    $location.path('/profile_settings');
                    break;
            }
        }
        // for invalid credential or expired
        else {
            $cookies = '';
            $location.path('/log_in');
        }
    });
}]);