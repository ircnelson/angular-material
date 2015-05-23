(function () {
    'use strict';

    angular.module('app.directives')
    .directive('hamburguerMenu', HamburguerMenu);

    HamburguerMenu.$inject = ['$mdSidenav'];

    function HamburguerMenu($mdSidenav) {
        return {
            restrict: "E",
            scope: {
                'side': '='
            },
            templateUrl: "/app/directives/hamburguerMenu/hamburguerMenu.html",
            link: function(scope, $element, attrs) {
                scope.toggleLeft = function () {
                    $mdSidenav(attrs.side).toggle();
                };
            }
        };
    }

})();