/**
 * Configure the Routes
 */
angular.module('angula').config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", { templateUrl: "view/partials/home.html", controller: "storeController_sound" })
    .when("/event", { templateUrl: "view/partials/shop/event_details_page.html", controller: "PageCtrl" })
    .when("/home2", { templateUrl: "view/partials/home2.html", controller: "HomeCtrl" })
    .when("/home3", { templateUrl: "view/partials/home3.html", controller: "HomeCtrl" })
    .when("/home4", { templateUrl: "view/partials/home4.html", controller: "HomeCtrl" })
    .when("/home5", { templateUrl: "view/partials/home5.html", controller: "HomeCtrl" })
    .when("/venue_profile", { templateUrl: "view/partials/venue_profile.html", controller: "HomeCtrl" })
    .when("/event_details", { templateUrl: "view/partials/event_details.html", controller: "HomeCtrl" })
    .when("/talent_profile", { templateUrl: "view/partials/talent_profile.html", controller: "HomeCtrl" })
    .when("/pagination", { templateUrl: "view/partials/pagination.html", controller: "HomeCtrl" })
    .when("/organizer_profile", { templateUrl: "view/partials/organizer_profile.html", controller: "HomeCtrl" })
    .when("/organizer_signup", { templateUrl: "view/partials/organizer_signup.html", controller: "HomeCtrl" })
    .when("/buy_ticket", { templateUrl: "view/partials/buy_ticket.html", controller: "HomeCtrl" })
    .when("/cart_edit", { templateUrl: "view/partials/cart_edit.html", controller: "HomeCtrl" })
    .when("/order_confirm_details", { templateUrl: "view/partials/orgarnizer/order_confirm_details.html", controller: "HomeCtrl" })

    // User Menu
    .when("/user_event_order", { templateUrl: "view/partials/user/event_order.html", controller: "HomeCtrl" })
    .when("/user_messages", { templateUrl: "view/partials/user/event_order.html", controller: "HomeCtrl" })
    .when("/user_profile_settings", { templateUrl: "view/partials/user/profile.html", controller: "HomeCtrl" })
    .when("/user_password_settings", { templateUrl: "view/partials/user/update_password.html", controller: "HomeCtrl" })
    .when("/user_payments_settings", { templateUrl: "view/partials/user/payments.html", controller: "HomeCtrl" })

    // Admin Menu
    .when("/event_order", { templateUrl: "view/partials/admin/event_information.html", controller: "HomeCtrl" })
    .when("/messages", { templateUrl: "view/partials/admin/event_information.html", controller: "HomeCtrl" })
    .when("/profile_settings", { templateUrl: "view/partials/admin/profile.html", controller: "HomeCtrl" })
    .when("/password_settings", { templateUrl: "view/partials/admin/update_password.html", controller: "HomeCtrl" })
    .when("/payments_settings", { templateUrl: "view/partials/admin/payments.html", controller: "HomeCtrl" })
    .when("/event_information", { templateUrl: "view/partials/admin/event_information.html", controller: "HomeCtrl" })
    .when("/upcoming_events", { templateUrl: "view/partials/admin/event_information.html", controller: "HomeCtrl" })
    .when("/past_events", { templateUrl: "view/partials/admin/event_information.html", controller: "HomeCtrl" })
    .when("/add_talents", { templateUrl: "view/partials/admin/add_talent.html", controller: "HomeCtrl" })
    .when("/order_report", { templateUrl: "view/partials/admin/event_information.html", controller: "HomeCtrl" })
    .when("/sale_report", { templateUrl: "view/partials/admin/event_information.html", controller: "HomeCtrl" })
    .when("/digital_market", { templateUrl: "view/partials/admin/event_information.html", controller: "HomeCtrl" })
    .when("/box_office", { templateUrl: "view/partials/admin/event_information.html", controller: "HomeCtrl" })
    .when("/service", { templateUrl: "view/partials/admin/event_information.html", controller: "HomeCtrl" })
    .when("/allyhub", { templateUrl: "view/partials/admin/event_information.html", controller: "HomeCtrl" })

    // About
    .when("/about", { templateUrl: "view/partials/about.html", controller: "PageCtrl" })
    .when("/about2", { templateUrl: "view/partials/about2.html", controller: "PageCtrl" })
    .when("/about3", { templateUrl: "view/partials/about3.html", controller: "PageCtrl" })
    .when("/about4", { templateUrl: "view/partials/about4.html", controller: "PageCtrl" })
    .when("/meet_team", { templateUrl: "view/partials/meet_team.html", controller: "PageCtrl" })

    //Shop Sound Obj
    .when("/shop", { templateUrl: "view/partials/shop/store.html", controller: "storeController_sound" })
    .when('/products/:productCode', { templateUrl: 'view/partials/shop/product.html', controller: "storeController_sound" })
    .when('/cart', { templateUrl: 'view/partials/shop/shoppingCart.html', controller: "storeController_sound" })

    //Shop Dresses
    .when("/shop_dresses", { templateUrl: "view/partials/shop/store_dresses.html", controller: "storeController" })
    .when('/products_dresses/:productCode', { templateUrl: 'view/partials/shop/product_dresses.html', controller: "storeController" })
    .when('/cart_dresses', { templateUrl: 'view/partials/shop/shoppingCart_dresses.html', controller: "storeController" })
    

    .when("/faq", {templateUrl: "view/partials/faq.html", controller: "PageCtrl"})
    .when("/pricing", {templateUrl: "view/partials/pricing.html", controller: "PageCtrl"})
    .when("/services", {templateUrl: "view/partials/services.html", controller: "PageCtrl"})
    .when("/contact", {templateUrl: "view/partials/contact.html", controller: "PageCtrl"})
    // Blog
    .when("/blog", {templateUrl: "view/partials/blog.html", controller: "BlogCtrl"})
    .when("/blog/post", {templateUrl: "view/partials/blog_item.html", controller: "BlogCtrl"})

    .when("/404", {templateUrl: "view/partials/404.html", controller: "PageCtrl"})
}]);

/**
 * Controls the Blog
 */
angular.module('angula').controller('BlogCtrl', function () {
  console.log("Blog Controller reporting for duty.");
});

/**
 * Controls all other Pages
 */
angular.module('angula').controller('PageCtrl', function () {
  console.log("Page Controller reporting for duty.");

  
  // Activates Tooltips for Social Links
  $('.tooltip-social').tooltip({
    selector: "a[data-toggle=tooltip]"
  });
});

/***Only for Preview ***/
angular.module('angula').controller('ExampleController', ['$scope', '$location', function($scope, $location) {
  $scope.templates =
    [ 
      { name: 'footer', url: 'view/templates/footer.html'}
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

  $scope.menu_click = function () {
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

angular.module('angula').controller("dataImagesWork", function ($scope) {
  $scope.images_work = [
    { num: 1, code: 'APL', category: 'mac', name: 'Nature Pro', src: "1.jpg", description: 'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. ' },
    { num: 2, code: 'AVC', category: 'ipad', name: 'Boat NC', src: "2.jpg", description: 'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. ' },
    { num: 3, code: 'BAN', category: 'phone', name: 'Creative', src: "3.jpg", description: 'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. ' },
    { num: 4, code: 'CTP', category: 'mac', name: 'Room Pro', src: "4.jpg", description: 'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. ' },
    { num: 5, code: 'FIG', category: 'ipad', name: 'Office Airs', src: "5.jpg", description: 'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. ' },
    { num: 6, code: 'FIG', category: 'sound', name: 'Dancing', src: "6.jpg", description: 'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. '}];

});

angular.module('angula').controller("dataImagesWork2", function ($scope) {
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
angular.module('angula').controller('TabsDemoCtrl', function ($scope, $window) {
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
angular.module('angula').controller('HomeCtrl', function ($scope, $interval) {

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

angular.module('angula').controller('AccordionDemoCtrl', function ($scope) {
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

angular.module('angula').controller('SkillLinear', ['$scope', '$interval', function($scope, $interval) {
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

angular.module('angula').controller('carouselController', function($scope){
  $scope.name = "hello world";
  $scope.pictures = [{full: "assets/images/store/product/1.jpg"},
                      {full: "assets/images/store/product/2.jpg"},
                      {full: "assets/images/store/product/3.jpg"},
                      {full: "assets/images/store/product/4.jpg"},
                      {full: "assets/images/store/product/5.jpg"},
                      {full: "assets/images/store/product/6.jpg"},
                      {full: "assets/images/store/product/7.jpg"},
                      {full: "assets/images/store/product/8.jpg"}];
    
 }); 

//Carousel general management
angular.module('angula').directive('owlcarousel', function () {

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
angular.module('angula').directive('carouselprod', function () {

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
angular.module('angula').factory("DataService", function () {

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

angular.module('angula').controller('LMenuController', function ( $scope, $location/*, $http */) {

  $scope.getClass = function (path) {
    return ($location.path().substr(0, path.length) === path) ? 'active' : '';
  };

  $scope.setToggle = function (status) {
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
      case 'toggle_settings':
        $scope.toggle_settings = !$scope.toggle_settings;
        break;
    }
  };

  $scope.init = function () {
    var path = $location.$$path;
    $scope.toggle_events = (path.search('_events') < 0);
    $scope.toggle_order = (path.search('_order') < 0);
    $scope.toggle_talents = (path.search('_talents') < 0);
    $scope.toggle_report = (path.search('_report') < 0);
    $scope.toggle_settings = (path.search('_settings') < 0);
  };

  $scope.init();

});

angular.module('angula').controller('EventInfoController', function ($scope, ngDialog, $document) {

  $scope.AddTicket = function () {
    var modalPromise = ngDialog.open({
      template: 'view/partials/addTicketPopup.html', 
      className: 'ngdialog-theme-default', 
      preserveFocus: false, 
      trapFocus: false,
      width: '768px'
    });
  };

  $scope.AddTalent = function () {
    var modalPromise = ngDialog.open({
      template: 'view/partials/addTalentPopup.html', 
      className: 'ngdialog-theme-default', 
      preserveFocus: false, 
      trapFocus: false,
      width: '768px'
    });
  };

});


angular.module('angula').controller('OrderController', function ($scope, ngDialog, $document) {

  $scope.save = function () {
  }

  $scope.refundOrder = function () {
  }

  $scope.resendTicket = function () {
  }

})

angular.module('angula').controller('AdminController', function ($scope) {

  $scope.add_talent = function () {
  }

})