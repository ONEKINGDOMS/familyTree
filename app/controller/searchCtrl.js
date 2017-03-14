(function (angular) {
'use strict';

angular.module('familyTree.search', ['ngRoute'])
    .controller('searchCtrl', ['$location','breadcrumbs',function($location,breadcrumbs) {

        var searchCtrl=function () {
            this.init();
        }

        searchCtrl.prototype.init=function () {
            var that=this;
            breadcrumbs.setTitle('Search');
            that.searchBy=$location.search().searchBy;
        }

        searchCtrl.prototype.search=function () {

        }


        return new searchCtrl();
    }])
}(angular))