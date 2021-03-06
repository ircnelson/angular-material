﻿(function () {
    'use strict';

    angular.module('app.principal')
        .controller('HomeCtrl', HomeController);

    HomeController.$inject = ['$scope', '$timeout', '$mdSidenav', '$mdUtil', '$log'];

    function HomeController($scope, $timeout, $mdSidenav, $mdUtil, $log) {

        $scope.toggleLeft = buildToggler('left');
        $scope.toggleRight = buildToggler('right');
        /**
         * Build handler to open/close a SideNav; when animation finishes
         * report completion in console
         */
        function buildToggler(navID) {
            var debounceFn = $mdUtil.debounce(function () {
                $mdSidenav(navID)
                    .toggle()
                    .then(function () {
                    $log.debug("toggle " + navID + " is done");
                });
            }, 300);
            return debounceFn;
        }
    };
} ());