 angular.module('stingMusicApp')
 .controller('ViewMusicCtrl', 
    ['$scope', '$timeout','$filter','$http', '$location', '$anchorScroll', function($scope, $timeout, $filter, $http, $location, $anchorScroll) {

        $scope.searchedAlbums = [];

        $scope.settings = {
            selected: false,
            albumHighlighted : false,
            currentAlbum: null,
            currentAlbumDepth: 0,
            searching: false,
            fetchDataSuccess: true,
            sortByYearReverse: false,
        }
        
        $http.get("http://thesting.wdev.wrur.org/wp-content/themes/thesting/api/albums")
        .success(function(data) {
            console.log(data)
            $scope.albums = data;
           
                
        });

        $scope.isCorrectRow = function(album) {
            var index = $scope.albums.indexOf(album) + 1;
            var selectedIndex = $scope.albums.indexOf($scope.settings.selected);

            var col = Math.floor(index / 5);
            var row = index % 5;
            var lowerBound = (index - 1) - ((index - 1) % 5);

            return ((row === 0) || (index === $scope.albums.length)) &&
            ((selectedIndex >= lowerBound) && (selectedIndex < index))

        }
     

        $scope.selectAlbum = function(album) {
             if ($scope.settings.selected === album) {
                  $scope.settings.selected = false;
                  return;
            }
    
           $scope.settings.selected = album;
                    
        }

        $scope.shouldShowPanel = function(index) {
            return ($scope.settings.albumHighlighted && (index == $scope.settings.currentAlbumDepth));
        }

        $scope.sortBy = function(what) {

            var albums;
            if (what == "year") {
                albums = $filter('orderBy')($scope.albums, 'year');
                albums = $scope.settings.sortByYearReverse ? albums.reverse() : albums;
                $scope.settings.sortByYearReverse = !$scope.settings.sortByYearReverse;
                $scope.brokenAlbums = breakIntoRows(albums);
            }
            
        }

   

         $scope.$watch('search', function(newValue, oldValue) {
             if (oldValue == newValue || newValue == "") 
                return;
             
            $http.get("http://thesting.wdev.wrur.org/wp-content/themes/thesting/api/search/" + newValue).
                success(function(data) {   
                    if (!angular.equals($scope.searchedAlbums, data)) {
                        $scope.searchedAlbums = data;       
                    } 
                });
         });


 }]);