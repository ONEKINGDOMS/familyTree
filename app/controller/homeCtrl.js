(function (angular) {
'use strict';

angular.module('familyTree.home',[])
.controller('homeCtrl', ['$scope','breadcrumbs',function($scope,breadcrumbs) {

    var homeCtrl=function () {
        this.init();
    }

    homeCtrl.prototype.init=function () {
        var that=this;
        breadcrumbs.setTitle('首页');
    }


    return new homeCtrl();
}])
}(angular));