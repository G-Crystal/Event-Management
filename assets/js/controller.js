'use strict';

// the storeController contains two objects:
// - store: contains the product list
// - cart: the shopping cart object
// - detailsprod: contains the details product
app.controller('storeController', function($scope, $routeParams, DataService) {

    // get store and cart from service
    $scope.detailsprod = DataService.detailsprod;
    $scope.store = DataService.store;
    $scope.cart = DataService.cart;

    if ($routeParams.productCode != null) {
        $scope.product = $scope.store.getProduct($routeParams.productCode);
        $scope.detail = $scope.detailsprod.getDetail($routeParams.productCode);
    }
});

/***Only for Preview ***/
app.controller('MainController', ['$scope', '$location', '$cookies', function($scope, $location, $cookies) {
    $scope.templates = [
        { name: 'footer', url: 'view/templates/footer.html' }
    ];
    $scope.template = $scope.templates[0];

    $scope.categories = [
        { value: '1', label: 'Music - Concert, Festival' },
        { value: '2', label: 'Nightlife' },
        { value: '3', label: 'Food - Tasting, Festival' },
        { value: '4', label: 'Entertainment' },
        { value: '5', label: 'Sports - Fitness, Class' },
        { value: '6', label: 'Outdoors' },
        { value: '7', label: 'Conferences' },
        { value: '8', label: 'Community - Meetups, Networking' },
        { value: '9', label: 'Start Ups' },
        { value: '10', label: 'Non Profit - Charity, Fund Raising' },
        { value: '11', label: 'Arts' },
        { value: '12', label: 'Theater' },
        { value: '13', label: 'Other' }
    ];

    $scope.cat_music = [
        { value: '1', label: 'Concert' },
        { value: '2', label: 'Festival' }
    ];

    $scope.cat_food = [
        { value: '1', label: 'Tasting' },
        { value: '2', label: 'Festival' }
    ];

    $scope.cat_sports = [
        { value: '1', label: 'Fitness' },
        { value: '2', label: 'Class' }
    ];

    $scope.cat_community = [
        { value: '1', label: 'Meetups' },
        { value: '2', label: 'Networking' }
    ];

    $scope.cat_nonprofit = [
        { value: '1', label: 'Charity' },
        { value: '2', label: 'Fund Raising' }
    ];

    $scope.toggle_menu_flag = false;

    $scope.toggleMenu = function() {
        $scope.toggle_menu_flag = !$scope.toggle_menu_flag;
    };

    $scope.menu_click = function() {
        $scope.toggle_menu_flag = !$scope.toggle_menu_flag;
    };

    $scope.is_login = function() {
        return (typeof($cookies.token) == 'undefined' || $cookies.token == '') ? false : true;
    };

    // Log out
    $scope.logout = function() {
        $cookies = '';
        $location.path('/log_in');
    }

    $scope.global_init = function() {
        $scope.userinfo = [];
        $scope.userinfo.username = $cookies.username;
        $scope.userinfo.profile = $cookies.profile;

        var path = $location.$$path;
        $scope.toggle_events = (path.search('_events') < 0);
        $scope.toggle_order = (path.search('_order') < 0);
        $scope.toggle_talents = (path.search('_talents') < 0);
        $scope.toggle_report = (path.search('_report') < 0);
        $scope.toggle_box = (path.search('_box') < 0);
        $scope.toggle_settings = (path.search('_settings') < 0);
    };

    $scope.myaccount_click = function() {
        if ($scope.is_login()) {
            if ($cookies.user_type == 1)
                $location.path('/user_profile_settings');
            else if ($cookies.user_type == 2)
                $location.path('/profile_settings');
            else
                $scope.logout();
        } else
            $scope.logout();
    };

    $scope.browse_click = function() {
        $location.path('/');
    };
}]);

app.controller('LoadImageController', function($scope, $modalInstance, dimensions) {
    $scope.dimensions = dimensions;

    $scope.image = {
        src: 'assets/images/store/product/1.jpg',
        maxWidth: 938
    };

    $scope.selector = {};

    // $scope.drawer = [
    //     { x1: 625, y1: 154, x2: 777, y2: 906, color: '#337ab7', stroke: 1 },
    //     { x1: 778, y1: 154, x2: 924, y2: 906, color: '#3c763d', stroke: 1 },
    //     { x1: 172, y1: 566, x2: 624, y2: 801, color: '#a94442', stroke: 1 }
    // ];

    // $scope.addRect = function() {
    //     $scope.drawer.push({
    //         x1: $scope.selector.x1,
    //         y1: $scope.selector.y1,
    //         x2: $scope.selector.x2,
    //         y2: $scope.selector.y2,
    //         color: '#337ab7',
    //         stroke: 1
    //     });
    //     $scope.selector.clear();
    // };

    $scope.cropRect = function() {
        $scope.cropResult = $scope.selector.crop();
    };

    $scope.save = function() {
        $scope.cropResult = $scope.selector.crop();
        // $modalInstance.close(1);
    };

    $scope.cancel = function() {
        $modalInstance.dismiss('cancel');
    }
});

app.controller('LMenuController', function($scope, $location, $cookies) {
    $scope.getClass = function(path) {
        return ($location.path().substr(0, path.length) === path) ? 'active' : '';
    };

    $scope.setToggle = function(status) {
        switch (status) {
            case 'toggle_events':
                $scope.toggle_events = !$scope.toggle_events;
                break;
            case 'toggle_order':
                $scope.toggle_order = !$scope.toggle_order;
                break;
            case 'toggle_talents':
                $scope.toggle_talents = !$scope.toggle_talents;
                break;
            case 'toggle_report':
                $scope.toggle_report = !$scope.toggle_report;
                break;
            case 'toggle_box':
                $scope.toggle_box = !$scope.toggle_box;
                break;
            case 'toggle_settings':
                $scope.toggle_settings = !$scope.toggle_settings;
                break;
        }
    };

    $scope.init = function() {
        if (typeof($cookies.token) == 'undefined' || $cookies.token == '') {
            $scope.logout();
            return false;
        }

        var path = $location.$$path;
        $scope.toggle_events = (path.search('_events') < 0);
        $scope.toggle_order = (path.search('_order') < 0);
        $scope.toggle_talents = (path.search('_talents') < 0);
        $scope.toggle_report = (path.search('_report') < 0);
        $scope.toggle_box = (path.search('_box') < 0);
        $scope.toggle_settings = (path.search('_settings') < 0);

        $scope.userinfo = [];
        $scope.userinfo.username = $cookies.username;
        $scope.userinfo.profile = $cookies.profile;
    };

    $scope.logout = function() {
        $cookies = '';
        $location.path('/log_in');
    };

    $scope.init();
});

// monitor animation 
app.controller('HomeCtrl', function($scope, $interval) {

    var duration = 1600,
        steps = 3,
        step = 1;

    $scope.customAttributeValue = step;

    var start = $interval(function() {
        if ($scope.customAttributeValue < steps) {
            $scope.customAttributeValue += step;
        } else {
            $scope.customAttributeValue = step;
        }
    }, duration);

});