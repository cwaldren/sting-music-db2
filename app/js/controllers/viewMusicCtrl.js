 angular.module('stingMusicApp')
 .controller('ViewMusicCtrl', 
    ['$scope', '$timeout','$filter','$http', '$location', function($scope, $timeout, $filter, $http, $location) {


        $scope.settings = {
            albumHighlighted : false,
            currentAlbum: null,
            currentAlbumDepth: 0,
            searching: false,
            fetchDataSuccess: true,
            sortByYearReverse: false,
        }
        
        $http.get("http://thesting.wdev.wrur.org/wp-content/themes/thesting/api/albums")
        .success(function(data) {
            $scope.brokenAlbums = breakIntoRows(data);
                
        });

        // $http({method: 'GET', url: 'js/albums.json'}).
        // success(function(data, status, headers, config) {
        //     $scope.albums = data;
        //     //Break the albums into a 2d array so it can be displayed correctly because angularjs is terrible
        //     $scope.brokenAlbums = breakIntoRows(data);

        // }).
        // error(function(data, status, headers, config) {
        //     console.log("failed")
        //     $scope.settings.fetchDataSuccess = false;
        // });


        var breakIntoRows = function(data) {
            return $filter('group')(data, 5);
        }

        //The method that gets called when an album is clicked
        $scope.selectAlbum = function(index, parentIndex) {
        
            //Helper variable to cut down on complexity
            var album = $scope.brokenAlbums[parentIndex][index];

            $scope.settings.currentAlbum = album;
            $scope.settings.currentAlbumDepth = parentIndex;

            //Swap the highlighted value
            album.highlighted = !album.highlighted;

            $scope.settings.albumHighlighted = album.highlighted;

            //Make every album but the highlighted one unhighlighted
            for (var x = 0; x < $scope.brokenAlbums.length; x++) 
                for (var y = 0; y < $scope.brokenAlbums[x].length; y++) 
                    if ($scope.brokenAlbums[x][y] != album) 
                        $scope.brokenAlbums[x][y].highlighted = false;

                    
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
                    $scope.albums = data;
            });

         });
 }]);