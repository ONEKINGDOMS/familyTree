(function (angular) {
    'use strict';

    angular.module('familyTree.settings', ['ngRoute'])
        .controller('settingsCtrl', ['breadcrumbs',function (breadcrumbs) {
            var settingsCtrl=function () {
                this.init();
            };

            settingsCtrl.prototype.init=function(){
                var that=this;
                breadcrumbs.setTitle('Setting');
            };

            return new settingsCtrl();
        }])
}(angular))
