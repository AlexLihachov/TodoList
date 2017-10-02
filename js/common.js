jQuery.noConflict();
jQuery( document ).ready(function(  ){

    jQuery('.add_item').click(function(){
        jQuery('#add_text').val('');
        });
    });

var myApp = angular.module('todo',[])
    .controller('listCtrl', function($scope, homeFactory){
        $scope.tasks = homeFactory.getTasks();

        $scope.addTask = function() {
            $scope.tasks = homeFactory.addTask($scope.newTask);
                }

        $scope.dellTast = function(task) {
            $scope.tasks = homeFactory.dellTask(task);
                }
        $scope.activePoint = function(task) {
            var i = $scope.tasks.indexOf(task);
            $scope.tasks[i].isActive = !$scope.tasks[i].isActive;
                }
        $scope.currentDate = new Date();

    }).factory('homeFactory', function($http){
        var factory = {};
        var tasks = [];

        factory.getTasks = function(){
            return tasks;
                }

        factory.addTask = function(task){
            tasks.push({name:task,
                        isActive:false
                            });
            return tasks;
                }

        factory.dellTask = function(task){
            if (task) {
                var index = tasks.indexOf(task);
                tasks.splice(index, 1);
                         }
            return tasks;
                }

        return factory;
    });
