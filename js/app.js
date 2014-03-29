var stingMusicApp = angular.module('stingMusicApp', ['ngRoute', 'ngAnimate', 'stingMusicControllers']);

stingMusicApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/view', {
        templateUrl: 'partials/music-view.html',
        controller: 'ViewMusicController'
      }).
      when('/add', {
        templateUrl: 'partials/add-view.html',
        controller: 'AddMusicController'
      }).
      otherwise({
        redirectTo: '/view'
      });
  }]);

stingMusicApp.run(function($rootScope) {
    $rootScope.$on('$viewContentLoaded', function () {
        $(document).foundation();
    });
});

stingMusicApp.directive('ngAlbumInfo', function() {
  return {
    restrict: 'A',
    templateUrl: 'templates/ng-album-info-template.html'
  }
});

stingMusicApp.filter('group', function() {
    return function(items, groupItems) {
        if (items) {
            var newArray = [];

            for (var i = 0; i < items.length; i+=groupItems) {
                if (i + groupItems > items.length) {
                    newArray.push(items.slice(i));
                } else {
                    newArray.push(items.slice(i, i + groupItems));
                }
            }

            return newArray;
        }
    };
});  
