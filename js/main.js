

/**
 * Main AngularJS Web Application
 */
var app = angular.module('angula', [
  'ngRoute', 'ui.bootstrap', 'ngAnimate', 'ngMaterial', 'ngDialog', 'ui.bootstrap.datetimepicker', 'angularTrix'
]);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", { templateUrl: "partials/home.html", controller: "storeController_sound" })
    .when("/event", { templateUrl: "partials/shop/event_details_page.html", controller: "PageCtrl" })
    .when("/home2", { templateUrl: "partials/home2.html", controller: "HomeCtrl" })
    .when("/home3", { templateUrl: "partials/home3.html", controller: "HomeCtrl" })
    .when("/home4", { templateUrl: "partials/home4.html", controller: "HomeCtrl" })
    .when("/home5", { templateUrl: "partials/home5.html", controller: "HomeCtrl" })
    .when("/venue_profile", { templateUrl: "partials/venue_profile.html", controller: "HomeCtrl" })
    .when("/event_details", { templateUrl: "partials/event_details.html", controller: "HomeCtrl" })
    .when("/talent_profile", { templateUrl: "partials/talent_profile.html", controller: "HomeCtrl" })
    .when("/pagination", { templateUrl: "partials/pagination.html", controller: "HomeCtrl" })
    .when("/organizer_profile", { templateUrl: "partials/organizer_profile.html", controller: "HomeCtrl" })
    .when("/buy_ticket", { templateUrl: "partials/buy_ticket.html", controller: "HomeCtrl" })
    .when("/organizer_signup", { templateUrl: "partials/organizer_signup.html", controller: "HomeCtrl" })
    .when("/log_in", { templateUrl: "partials/log_in.html", controller: "HomeCtrl" })
    .when("/sign_up", { templateUrl: "partials/sign_up.html", controller: "HomeCtrl" })
    .when("/reset", { templateUrl: "partials/reset_password.html", controller: "HomeCtrl" })
    .when("/cart_edit", { templateUrl: "partials/cart_edit.html", controller: "HomeCtrl" })

    .when("/event_order", { templateUrl: "partials/event_order.html", controller: "HomeCtrl" })
    .when("/messages", { templateUrl: "partials/event_order.html", controller: "HomeCtrl" })
    .when("/settings", { templateUrl: "partials/event_order.html", controller: "HomeCtrl" })
    .when("/payments", { templateUrl: "partials/event_order.html", controller: "HomeCtrl" })

    .when("/event_information", { templateUrl: "partials/event_information.html", controller: "HomeCtrl" })
    .when("/events", { templateUrl: "partials/event_information.html", controller: "HomeCtrl" })
    .when("/talents", { templateUrl: "partials/event_information.html", controller: "HomeCtrl" })
    .when("/report", { templateUrl: "partials/event_information.html", controller: "HomeCtrl" })
    .when("/digital_market", { templateUrl: "partials/event_information.html", controller: "HomeCtrl" })
    .when("/box_office", { templateUrl: "partials/event_information.html", controller: "HomeCtrl" })
    .when("/service", { templateUrl: "partials/event_information.html", controller: "HomeCtrl" })
    .when("/allyhub", { templateUrl: "partials/event_information.html", controller: "HomeCtrl" })

    // About
    .when("/about", { templateUrl: "partials/about.html", controller: "PageCtrl" })
    .when("/about2", { templateUrl: "partials/about2.html", controller: "PageCtrl" })
    .when("/about3", { templateUrl: "partials/about3.html", controller: "PageCtrl" })
    .when("/about4", { templateUrl: "partials/about4.html", controller: "PageCtrl" })
    .when("/meet_team", { templateUrl: "partials/meet_team.html", controller: "PageCtrl" })

    //Shop Sound Obj
    .when("/shop", { templateUrl: "partials/shop/store.html", controller: "storeController_sound" })
    .when('/products/:productCode', { templateUrl: 'partials/shop/product.html', controller: "storeController_sound" })
    .when('/cart', { templateUrl: 'partials/shop/shoppingCart.html', controller: "storeController_sound" })

    //Shop Dresses
    .when("/shop_dresses", { templateUrl: "partials/shop/store_dresses.html", controller: "storeController" })
    .when('/products_dresses/:productCode', { templateUrl: 'partials/shop/product_dresses.html', controller: "storeController" })
    .when('/cart_dresses', { templateUrl: 'partials/shop/shoppingCart_dresses.html', controller: "storeController" })
    

    .when("/faq", {templateUrl: "partials/faq.html", controller: "PageCtrl"})
    .when("/pricing", {templateUrl: "partials/pricing.html", controller: "PageCtrl"})
    .when("/services", {templateUrl: "partials/services.html", controller: "PageCtrl"})
    .when("/contact", {templateUrl: "partials/contact.html", controller: "PageCtrl"})
    // Blog
    .when("/blog", {templateUrl: "partials/blog.html", controller: "BlogCtrl"})
    .when("/blog/post", {templateUrl: "partials/blog_item.html", controller: "BlogCtrl"})

    .when("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"})
    // else 404
    .otherwise("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"});
}]);

/**
 * Controls the Blog
 */
app.controller('BlogCtrl', function () {
  console.log("Blog Controller reporting for duty.");
});

/**
 * Controls all other Pages
 */
app.controller('PageCtrl', function () {
  console.log("Page Controller reporting for duty.");

  
  // Activates Tooltips for Social Links
  $('.tooltip-social').tooltip({
    selector: "a[data-toggle=tooltip]"
  });
});

/***Only for Preview ***/
app.controller('ExampleController', ['$scope', '$location', function($scope, $location) {
  $scope.templates =
    [ 
      { name: 'footer', url: 'templates/footer.html'}
    ];
  $scope.template = $scope.templates[3];
  
  $scope.categories =
    [ 
      { value: '1', label: 'Music - Concert, Festival'},
      { value: '2', label: 'Nightlife'},
      { value: '3', label: 'Food - Tasting, Festival'},
      { value: '4', label: 'Entertainment'},
      { value: '5', label: 'Sports - Fitness, Class'},
      { value: '6', label: 'Outdoors'},
      { value: '7', label: 'Conferences'},
      { value: '8', label: 'Community - Meetups, Networking'},
      { value: '9', label: 'Start Ups'},
      { value: '10', label: 'Non Profit - Charity, Fund Raising'},
      { value: '11', label: 'Arts'},
      { value: '12', label: 'Theater'},
      { value: '13', label: 'Other'}
    ];
  
  $scope.cat_music =
    [ 
      { value: '1', label: 'Concert'},
      { value: '2', label: 'Festival'}
    ];
  
  $scope.cat_food =
    [ 
      { value: '1', label: 'Tasting'},
      { value: '2', label: 'Festival'}
    ];
  
  $scope.cat_sports =
    [ 
      { value: '1', label: 'Fitness'},
      { value: '2', label: 'Class'}
    ];
  
  $scope.cat_community =
    [ 
      { value: '1', label: 'Meetups'},
      { value: '2', label: 'Networking'}
    ];
  
  $scope.cat_nonprofit =
    [ 
      { value: '1', label: 'Charity'},
      { value: '2', label: 'Fund Raising'}
    ];
  
  $scope.toggle_menu_flag = false;

  $scope.toggleMenu = function() {
    $scope.toggle_menu_flag = !$scope.toggle_menu_flag;
  };

  $scope.loadBuyTicket = function(event_id = 0) {
    $scope.event_id = event_id;
    $location.path('/buy_ticket/').search({param: $scope.event_id});
  }
}]);

/***Only for Preview ***/

//app.animation('.reveal-animation', function() {
//  return {
//    enter: function(element, done) {
//      element.css('display', 'none');
//      element.fadeIn(900, done);
//      return function() {
//        element.stop();
//      }
//    },
//    leave: function(element, done) {
//      element.fadeOut(800, done)
//      return function() {
//        element.stop();
//      }
//    }
//  }
//})


/*Controller Porfolio and filter Images*/

app.controller("dataImagesWork", function ($scope) {
  $scope.images_work = [
    { num: 1, code: 'APL', category: 'mac', name: 'Nature Pro', src: "1.jpg", description: 'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. ' },
    { num: 2, code: 'AVC', category: 'ipad', name: 'Boat NC', src: "2.jpg", description: 'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. ' },
    { num: 3, code: 'BAN', category: 'phone', name: 'Creative', src: "3.jpg", description: 'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. ' },
    { num: 4, code: 'CTP', category: 'mac', name: 'Room Pro', src: "4.jpg", description: 'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. ' },
    { num: 5, code: 'FIG', category: 'ipad', name: 'Office Airs', src: "5.jpg", description: 'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. ' },
    { num: 6, code: 'FIG', category: 'sound', name: 'Dancing', src: "6.jpg", description: 'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. '}];

});

app.controller("dataImagesWork2", function ($scope) {
  $scope.images_work = [
    { num: 1,  category: 'mac', name: 'Nature Pro', src: "8.jpg", description: 'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. ' },
    { num: 2,  category: 'ipad', name: 'Boat NC', src: "10.jpg", description: 'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. ' },
    { num: 3,  category: 'phone', name: 'Creative', src: "11.jpg", description: 'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. ' },
    { num: 4,  category: 'mac', name: 'Room Pro', src: "5.jpg", description: 'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. ' },
    { num: 5,  category: 'ipad', name: 'Office Airs', src: "4.jpg", description: 'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. ' },
    { num: 6,  category: 'sound', name: 'Dancing', src: "6.jpg", description: 'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. ' },
    { num: 7,  category: 'sound', name: 'Dancing', src: "12.jpg", description: 'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. ' },
    { num: 8,  category: 'sound', name: 'Dancing', src: "9.jpg", description: 'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. '}];

});

//tabs management
app.controller('TabsDemoCtrl', function ($scope, $window) {
  $scope.tabs = [
    { title: 'Dynamic Title 1', content: 'Dynamic content 1' },
    { title: 'Dynamic Title 2', content: 'Dynamic content 2', disabled: true }
  ];

  $scope.alertMe = function () {
    setTimeout(function () {
      $window.alert('You\'ve selected the alert tab!');
    });
  };
});

// monitor animation 
app.controller('HomeCtrl', function ($scope, $interval) {

  var duration = 1600, steps = 3, step = 1;

  $scope.customAttributeValue = step;

  var start = $interval(function () {
    if ($scope.customAttributeValue < steps) {
      $scope.customAttributeValue += step;
    }
    else {
      $scope.customAttributeValue = step;
    }
  }, duration);

});

app.controller('AccordionDemoCtrl', function ($scope) {
  $scope.oneAtATime = true;

  $scope.isopen = {
    first: true,
    second: true,
    three: true,
    four: true,
    five: true,
    six: true,
    seven: true
  }
  $scope.icon = {
    "false": 'fa fa-plus',
    "true": 'fa fa-minus'
  }

  $scope.status = {
    isFirstOpen: true,
    isFirstDisabled: false
  };
});

/* Skill Controller Page About 3*/

app.controller('SkillLinear', ['$scope', '$interval', function($scope, $interval) {
  $scope.mode = 'query';
  $scope.determinateValue1 =  $scope.determinateValue2 =  $scope.determinateValue3 = $scope.determinateValue4 = $scope.determinateValue5 =  30;
  $scope.determinateValue1a = $scope.determinateValue2a =  $scope.determinateValue3a = $scope.determinateValue4a =  $scope.determinateValue5a = 30;

  $interval(function() {
    $scope.determinateValue1 = $scope.determinateValue2 = $scope.determinateValue3 = $scope.determinateValue4 = $scope.determinateValue5 += 1;
    $scope.determinateValue1a =  $scope.determinateValue2a = $scope.determinateValue3a = $scope.determinateValue4a = $scope.determinateValue5a += 1.5;

    if ($scope.determinateValue1 > 70) {
      $scope.determinateValue1 = $scope.determinateValue1a = 70;
    }
    if ($scope.determinateValue2 > 83) {
      $scope.determinateValue2 = $scope.determinateValue2a = 83;
    }
    if ($scope.determinateValue3 > 56) {
      $scope.determinateValue3 = $scope.determinateValue3a = 56;
    }
    if ($scope.determinateValue4 > 65) {
      $scope.determinateValue4 = $scope.determinateValue4a = 65;
    }
    if ($scope.determinateValue5 > 95) {
      $scope.determinateValue5 = $scope.determinateValue5a = 95;
    }
  }, 100, 0, true);
  $interval(function() {
    $scope.mode = ($scope.mode == 'query' ? 'determinate' : 'query');
  }, 7200, 0, true);
}]);

app.controller('carouselController', function($scope){
  $scope.name = "hello world";
  $scope.pictures = [{full: "images/store/product/1.jpg"},
                      {full: "images/store/product/2.jpg"},
                      {full: "images/store/product/3.jpg"},
                      {full: "images/store/product/4.jpg"},
                      {full: "images/store/product/5.jpg"},
                      {full: "images/store/product/6.jpg"},
                      {full: "images/store/product/7.jpg"},
                      {full: "images/store/product/8.jpg"}];
    
 }); 

//Carousel general management
app.directive('owlcarousel', function () {

  var linker = function (scope, element, attr) {
    link: (scope, element, attr)
    $(element).owlCarousel({
      autoPlay: false,
      // "singleItem:true" is a shortcut for:
      items : 3, 
      itemsCustom : false,
      itemsDesktop : [1920,4],
      itemsDesktopSmall : [1280,3],
      itemsTablet: [768,2],
      itemsTabletSmall: false,
      itemsMobile : [479,1],
    });

  }

  return {
    restrict: "A",
    link: linker
  }

});

//Carousel store management
app.directive('carouselprod', function () {

  var linker = function (scope, element, attr) {
    link: (scope, element, attr)
    $(element).owlCarousel({
      navigation: false,
      slideSpeed: 300,
      paginationSpeed: 400,
      autoPlay: true,
      items : 4
    });

  }

  return {
    restrict: "A",
    link: linker
  }

});

// create a data service that provides a store and a shopping cart that
// will be shared by all views (instead of creating fresh ones for each view).
app.factory("DataService", function () {

  // create store
  var myStore = new store();
  var storeDetails = new detailsprod();
  // create shopping cart
  var myCart = new shoppingCart("AngularStore");

  // enable PayPal checkout
  // note: the second parameter identifies the merchant; in order to use the 
  // shopping cart with PayPal, you have to create a merchant account with 
  // PayPal. You can do that here:
  // https://www.paypal.com/webapps/mpp/merchant
  myCart.addCheckoutParameters("PayPal", "corsaro22-facilitator@tiscali.it");

  // return data object with store and cart
  return {
    store: myStore,
    cart: myCart,
    detailsprod: storeDetails
  };
});

app.controller('LMenuController', function ( $scope, $location/*, $http */) {

  $scope.getClass = function (path) {
    return ($location.path().substr(0, path.length) === path) ? 'active' : '';
  }

});

app.controller('EventInfoController', function ($scope, ngDialog, $document) {

  $scope.AddTicket = function () {
    var modalPromise = ngDialog.open({
      template: 'partials/addTicketPopup.html', 
      className: 'ngdialog-theme-default', 
      preserveFocus: false, 
      trapFocus: false,
      width: '768px'
    });
  };

  $scope.AddTalent = function () {
    var modalPromise = ngDialog.open({
      template: 'partials/addTalentPopup.html', 
      className: 'ngdialog-theme-default', 
      preserveFocus: false, 
      trapFocus: false,
      width: '768px'
    });
  };

});

app.controller('LoginController', function ($scope, ngDialog, $document) {

  $scope.login = function () {
    if($scope.login_form.$valid) {

    }
  }

  $scope.reset = function () {
    if($scope.reset_form.$valid) {
      
    }
  }

  $scope.signup = function () {
    if($scope.signup_form.$valid) {
      
    }
  }

})