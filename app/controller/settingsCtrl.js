(function (angular) {
    'use strict';

    angular.module('familyTree.settings', ['ngRoute'])
        .controller('settingsCtrl', ['breadcrumbs',function (breadcrumbs) {
            var settingsCtrl=function () {
                this.init();
            };

            settingsCtrl.prototype.init=function(){
                var that=this;
                breadcrumbs.setTitle('设置');
            };

            //change Found status
            settingsCtrl.prototype.changeFoundStatus=function () {

            };

            //log out
            settingsCtrl.prototype.logout=function () {

            };



            return new settingsCtrl();
        }])
}(angular))
