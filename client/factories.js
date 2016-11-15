angular.module('VideoPlayer.factories', [])
.factory('Input', ['$resource', function($resource) {
    return $resource('/api/input/:id', { id:'@id' });
}])
.factory('Viewer', ['$resource', function($resource) {
    return $resource('/api/viewer/:id', { id:'@id' });
}])