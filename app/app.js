(function (global) {
    'use strict';

    var app = global.app = angular.module('app', [
        'ngMaterial',

        'ui.router',
        'app.directives',

        'app.principal'
    ]);

    angular.module('app.directives', []);

    app.constant('APP_CONFIG', {
        api: 'http://localhost/api'
    });

    app.run(Run);
    app.config(Config);

    Run.$inject = ['$rootScope'];

    function Run($rootScope) {

        $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {

        });

        $rootScope.$on('$viewContentLoaded', function (event) {
        });
    }

    Config.$inject = ['$urlRouterProvider'];

    function Config($urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');
    }

})(this);