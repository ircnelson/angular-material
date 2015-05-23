(function () {
    'use strict';

    angular.module('app.principal')
        .controller('LeftCtrl', LeftCtrl);

    LeftCtrl.$inject = ['$scope', '$timeout', '$mdSidenav', '$log'];

    function LeftCtrl($scope, $timeout, $mdSidenav, $log) {
        
        $scope.close = function () {
            $mdSidenav('left').close()
                .then(function () {
                $log.debug("close LEFT is done");
            });
        };
    };

} ());