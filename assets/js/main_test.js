var app = angular.module('app', []);

app.controller("ListagemController", function ($scope) {
    $scope.itens = [];

    for (var i = 1; i <= 16; i++) {
        $scope.itens.push({ text: i });
    };
})

app.directive('owlcarousel', function () {

    var linker = function (scope, element, attr) {
        link: (scope, element, attr)
        $(element).owlCarousel({

            navigation: true,
            slideSpeed: 300,
            paginationSpeed: 400,
            singleItem: true,
            autoPlay: true
        });
      
    }

    return {
        restrict: "A",
        link: linker
    }

});

