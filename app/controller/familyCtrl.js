'use strict';

angular.module('familyTree.family', ['ngRoute'])
.controller('familyCtrl', ['breadcrumbs',function(breadcrumbs) {

    var familyCtrl=function () {
        this.init();
    };

    familyCtrl.prototype.init=function(){
        var that=this;
        breadcrumbs.setTitle('Family');
    };

    familyCtrl.prototype.addNewMember=function () {

    }

    return new familyCtrl();
}]);