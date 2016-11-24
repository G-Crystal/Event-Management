var app = angular.module('angula', [
    'ngRoute',
    'ngCookies',
    'ngAnimate',
    'ui.bootstrap',
    'ngMaterial',
    'ngFileUpload',
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