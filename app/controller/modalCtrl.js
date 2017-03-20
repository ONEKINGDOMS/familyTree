'use strict';

angular.module('familyTree.family', ['ngRoute'])
    .controller('modalCtrl', ['breadcrumbs','$document','$uibModal','$log','$scope',function(breadcrumbs,$document,$uibModal,$log,$scope) {

        var modalCtrl=function () {
            this.init();
        };

        return new modalCtrl();
    }]);