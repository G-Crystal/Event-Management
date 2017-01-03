/**
 * Configure the Routes
 */
angular.module('angula').config(['$routeProvider', function($routeProvider, $cookies) {
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
        .when("/promoter", { templateUrl: "view/partials/information/promoter.html", controller: "AccordionCtrl" })
        .when("/venue_ticket", { templateUrl: "view/partials/information/venues.html", controller: "AccordionCtrl" })
        .when("/payment_plan", { templateUrl: "view/partials/information/payment.html", controller: "AccordionCtrl" })
        .when("/ticket_sale", { templateUrl: "view/partials/information/ticket_sale.html", controller: "AccordionCtrl" })
        .when("/printed_ticket", { templateUrl: "view/partials/information/printed_ticket.html", controller: "AccordionCtrl" })
        .when("/box", { templateUrl: "view/partials/information/box_office.html", controller: "AccordionCtrl" })
        .when("/ticket_scanning", { templateUrl: "view/partials/information/ticket_scanning.html", controller: "AccordionCtrl" })
        .when("/event_marketing", { templateUrl: "view/partials/information/event_marketing.html", controller: "AccordionCtrl" })
        .when("/collect_payment", { templateUrl: "view/partials/information/collect_payment.html", controller: "AccordionCtrl" })
        .when("/auditing", { templateUrl: "view/partials/information/auditing.html", controller: "AccordionCtrl" })
        .when("/get_started", { templateUrl: "view/partials/information/get_started.html", controller: "AccordionCtrl" })
}])

.run(['$rootScope', '$location', '$cookies', function($rootScope, $location, $cookies) {
    $rootScope.$on('$routeChangeSuccess', function(event, current, previous) {
        if (typeof(current.$$route) == "undefined") return;
        if (current.$$route.originalPath.search('info_') >= 0) return;

        switch (current.$$route.originalPath) { // information URL
            case '/log_in':
            case '/sign_up':
            case '/reset':
            case '/forgot':

            case '/faq':
            case '/promoter':
            case '/venue_ticket':
            case '/payment_plan':
            case '/ticket_sale':
            case '/printed_ticket':
            case '/box':
            case '/ticket_scanning':
            case '/event_marketing':
            case '/collect_payment':
            case '/auditing':
            case '/get_started':
                return;
            default: // invalid URL
                break;
        }

        if (typeof($cookies.user_type) == "undefined") {
            if (document.cookie != "") {
                var cookieArray = document.cookie.split("; ");
                var userArray = cookieArray[4].split("=");
                var user_type = userArray[1];
            } else {
                var user_type = 0;
            }
        } else {
            var user_type = $cookies.user_type;
        }

        // for common credential
        if (user_type == 1 || user_type == 2) {
            switch (current.$$route.originalPath) {
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
                default: // invalid URL
                    break;
            }
        }
        // for user credential
        if (user_type == 1) {
            switch (current.$$route.originalPath) {
                case '/user_dashboard':
                case '/user_messages':
                case '/user_profile_settings':
                case '/user_password_settings':
                case '/user_payments_settings': // valid URL
                    break;
                default: // invalid URL
                    $location.path('/user_dashboard');
                    break;
            }
        }
        // for organizer credential
        else if (user_type == 2) {
            switch (current.$$route.originalPath) {
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
                case '/payments_settings': // valid URL
                    break;
                default: // invalid URL
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