'use strict';

angular.module('familyTree.modal', ['ngRoute'])
    .controller('modalCtrl', ['$uibModalInstance','user',function($uibModalInstance,user) {

        var modalCtrl=function () {
            this.popup={};
            this.dateOptions = {
                formatYear: 'yy',
                maxDate: new Date(2020, 5, 22),
                minDate: new Date(),
                startingDay: 1
            };
        };

        modalCtrl.prototype.open=function () {
            this.popup.opened = true;
        }

        modalCtrl.prototype.confirm=function () {
            $uibModalInstance.dismiss('cancel');
        }
        
        modalCtrl.prototype.cancel=function () {
            $uibModalInstance.dismiss('cancel');
        }

        return new modalCtrl();
    }]);