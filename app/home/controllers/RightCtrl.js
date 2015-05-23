(function () {
    'use strict';

    angular.module('app.principal')
        .controller('RightCtrl', RightCtrl);

    RightCtrl.$inject = ['$scope', '$timeout', '$mdSidenav', '$log'];

    function RightCtrl($scope, $timeout, $mdSidenav, $log) {
        $scope.close = function () {
            $mdSidenav('right').close()
                .then(function () {
                $log.debug("close RIGHT is done");
            });
        };
    };

} ());