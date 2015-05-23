(function () {
    'use strict';

    angular.module('app.principal', [])
    .config(Config);

    Config.$inject = ['$stateProvider'];

    function Config($stateProvider) {
        $stateProvider
        .state('app', {
            url: '/home',
            abstract: true,
            views: {
                'leftNav': {
                    templateUrl: 'app/home/views/leftNav.html',
                    controller: 'LeftCtrl'
                },
                
                'rightNav': {
                    templateUrl: 'app/home/views/rightNav.html',
                    controller: 'RightCtrl'
                },
                
                'content': {
                    templateUrl: 'app/home/views/home.html',
                    controller: 'HomeCtrl'
                }
            }
            
        })

        .state('app.home', {
            url: ''
        });
    }

}());