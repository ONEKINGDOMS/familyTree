'use strict';

angular.module('familyTree.search', ['ngRoute'])
    .controller('searchCtrl', ['$location',function($location) {

        var searchCtrl=function () {
            this.init();
        }

        searchCtrl.prototype.init=function () {
            var that=this;

        }

        searchCtrl.prototype.search=function () {

        }


        return new searchCtrl();
    }]);