angular.module('VideoPlayer.controllers', [])
.controller('InputController', ['$scope', 'Input', function($scope, Input) {
    console.log('input the videos');

    $scope.postVideo = function() {
        var videoObject = {
            title: $scope.fieldname1,
            image: $scope.fieldname2,
            video: $scope.fieldname3,
            category: $scope.fieldname4
        }
        var video = new Input(videoObject);
        video.$save(function(success) {
            console.log(success);
            $scope.fieldname1 = '';
            $scope.fieldname2 = '';
            $scope.fieldname3 = '';
            $scope.fieldname4 = ''
        });
    }
}])
.controller('ViewerController', ['$scope', 'Viewer', function($scope, Viewer) {
    console.log('view the videos');

    $scope.videoTitle = '';
    $scope.videoCategory = '';
    
    $scope.videos = Viewer.query();

    $scope.viewVideo = function(video) {
        console.log('viewing the video');
        console.log(video);

        $(document).ready(function() {
            $('#video-pane').empty();
            $('#video-pane').append($('<iframe height="500" width="700"></iframe>').attr('src', video.videoUrl));
        })

        // $scope.videoUrl = video.videoUrl;
        $scope.videoTitle = video.title;
        $scope.videoCategory = video.category;;
    }
}])