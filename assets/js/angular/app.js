var app = angular.module('angula', [
    'ngRoute',
    'ngCookies',
    'ngAnimate',
    'ui.bootstrap',
    'ngMaterial',
    'ngFileUpload',
    'angular-img-cropper',
    'mrImage',
    'ui.bootstrap.datetimepicker',
    'angularTrix',
    'app.user',
    'app.organizer',
    'app.event',
    'app.cart',
    'app.venue',
    'app.talent',
    'app.report',
    'app.ticket',
    'app.order'
]);

app.config(['$routeProvider', function($routeProvider) {
    'use strict';
    $routeProvider.otherwise({
        redirectTo: '/404'
    });
}]);

// create a data service that provides a store and a shopping cart that
// will be shared by all views (instead of creating fresh ones for each view).
app.factory("DataService", function() {

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

//Carousel general management
app.directive('owlcarousel', function() {

    var linker = function(scope, element, attr) {
        link: (scope, element, attr)
        $(element).owlCarousel({
            autoPlay: true,
            // "singleItem:true" is a shortcut for:
            items: 3,
            itemsCustom: false,
            itemsDesktop: [1920, 4],
            itemsDesktopSmall: [1280, 3],
            itemsTablet: [768, 2],
            itemsTabletSmall: false,
            itemsMobile: [479, 1],
        });

    }

    return {
        restrict: "A",
        link: linker
    }

});

//Carousel store management
app.directive('carouselprod', function() {

    var linker = function(scope, element, attr) {
        link: (scope, element, attr)
        $(element).owlCarousel({
            navigation: false,
            slideSpeed: 300,
            paginationSpeed: 400,
            autoPlay: true,
            items: 4
        });

    }

    return {
        restrict: "A",
        link: linker
    }
});

app.directive('trumbowygNg', function() {
    'use strict';
    return {
        transclude: true,
        restrict: 'EA',
        require: '?ngModel',
        link: function(scope, element, attrs, ngModelCtrl) {

            var options = angular.extend({
                fullscreenable: true,
                semantic: false,
                closable: false,
                btns: ['viewHTML']
            }, scope.$eval(attrs.editorConfig));

            ngModelCtrl.$render = function() {
                angular.element(element).trumbowyg('html', ngModelCtrl.$viewValue);
            };

            angular.element(element).trumbowyg(options).on('tbwchange', function() {
                ngModelCtrl.$setViewValue(angular.element(element).trumbowyg('html'));
            }).on('tbwpaste', function() {
                ngModelCtrl.$setViewValue(angular.element(element).trumbowyg('html'));
            });
        }
    };
});

app.directive('appFilereader', function($q) {
    /*
    made by elmerbulthuis@gmail.com WTFPL licensed
    */
    var slice = Array.prototype.slice;

    return {
        restrict: 'A',
        require: '?ngModel',
        link: function(scope, element, attrs, ngModel) {
                if (!ngModel) return;

                ngModel.$render = function() {}

                element.bind('change', function(e) {
                    var element = e.target;
                    if (!element.value) return;

                    element.disabled = true;
                    $q.all(slice.call(element.files, 0).map(readFile))
                        .then(function(values) {
                            if (element.multiple) ngModel.$setViewValue(values);
                            else ngModel.$setViewValue(values.length ? values[0] : null);
                            element.value = null;
                            element.disabled = false;
                        });

                    function readFile(file) {
                        var deferred = $q.defer();

                        var reader = new FileReader()
                        reader.onload = function(e) {
                            deferred.resolve(e.target.result);
                        }
                        reader.onerror = function(e) {
                            deferred.reject(e);
                        }
                        reader.readAsDataURL(file);

                        return deferred.promise;
                    }
                }); //change
            } //link
    }; //return
}); //appFilereader