angular.module('app.user')

  .directive('pwCheck', [function() {

    return {
      require: 'ngModel',
      link: function (scope, element, attrs, ctrl) {
        var firstPassword = '#' + attrs.pwCheck;
        element.add(firstPassword).on('keyup', function () {
          scope.$apply(function () {
            ctrl.$setValidity('pwmatch', element.val() === $(firstPassword).val());
          });
        });
      }
    };

  }])

  .directive('onEnter', [function() {

    return function (scope, element, attrs) {
      element.bind("keydown keypress", function (event) {
        if(event.which === 13) {
          scope.$apply(function () {
            scope.$eval(attrs.onEnter);
          });

          event.preventDefault();
        }
      });
    };

  }]);
