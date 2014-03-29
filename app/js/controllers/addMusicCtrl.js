angular.module('stingMusicApp')
.controller('AddMusicCtrl', 
    ['$scope', '$timeout', function($scope, $timeout) {

       // $(document).foundation("section", "reflow")

        $scope.newSong = {title:"", artist:"", album:"", genre:"", length:""};
        $scope.status = {message:""};
        $scope.recentlyAddedSongs = new Array();
        function message(msg) { $scope.status.message = msg; }
        
        $scope.numSongs = ["one", "two"];
        $scope.addSong = function() {
            message("working");
            
            $timeout(function() {
                $scope.recentlyAddedSongs.push({
                title:$scope.newSong.title,
                artist:$scope.newSong.artist,
                album:$scope.newSong.album,
                genre:$scope.newSong.genre,
                length:$scope.newSong.length,
            })
            
            $scope.newSong = {
                title : "",
                artist : "",
                album: "",
                genre: "",
                length: ""
            };

            $scope.add_music_form.$setPristine();
            message("saved!");
            }, 500);

        }


        $scope.fields = config['INPUT_FIELDS'];



}])