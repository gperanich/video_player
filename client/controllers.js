angular.module('VideoPlayer.controllers', [])
.controller('InputController', ['$scope', 'Input', function($scope, Input) {
    console.log('input the videos');

    // Posting a new video
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

            $location.url('/viewer');
        });
    }
}])
.controller('ViewerController', ['$scope', 'Viewer', '$location', function($scope, Viewer, $location) {
    console.log('view the videos');

    $scope.videoTitle = '';
    $scope.videoCategory = '';
    
    $scope.videos = Viewer.query();

    // Viewing the single video
    $scope.viewVideo = function(video) {
        console.log('viewing the video');
        console.log(video);

        $(document).ready(function() {
            $('#video-pane').empty();
            $('#video-pane').append($('<iframe height="500" width="700"></iframe>').attr('src', video.videoUrl));
        })

        $scope.videoTitle = video.title;
        $scope.videoCategory = video.category;;
    };

    $scope.updateVideo = function(video) {
        $location.url('/viewer/' + video.id);
    };

    // Confirming the deletion of a video
    $scope.deleteVideo = function(video) {
        console.log(video);
        var confirmDelete = confirm('Are you sure you want to delete this video?');
        if (confirmDelete) {
            video.$delete();

            $location.url('/viewer');
            $scope.videos = Viewer.query();
        }
        
    }
}])
.controller('UpdateController', ['$scope', '$routeParams', 'Viewer', '$location', function($scope, $routeParams, Viewer, $location) {
    $scope.singleVideo = Viewer.get({ id:$routeParams.id });
    console.log($scope.singleVideo);
    
    // Updating the single video
    $scope.submitUpdate = function() {
        console.log('updating');
        $scope.singleVideo.$update();

        $location.url('/viewer');
    }
}])