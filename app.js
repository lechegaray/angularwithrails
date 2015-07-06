angular.module('flapperNews', [])
    .controller('MainCtrl', [
        '$scope',
        function($scope){
            $scope.test = 'Hello world!';
            $scope.posts = [
                {title: 'post 1', upvotes: 5},
                {title: 'post 1', upvotes: 7},
                {title: 'post 1', upvotes: 1},
                {title: 'post 1', upvotes: 2},
                {title: 'post 1', upvotes: 5}
            ];
            $scope.addPost = function(){
                $scope.posts.push({title: $scope.title, upvotes: 0});
                $scope.title = '';
            };
        }]);

