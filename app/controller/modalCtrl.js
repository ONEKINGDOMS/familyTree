'use strict';

angular.module('familyTree.modal', ['ngRoute'])
    .controller('modalCtrl', ['$uibModalInstance','user',function($uibModalInstance,user) {

        var modalCtrl=function () {
            
        };

        modalCtrl.prototype.confirm=function () {
            $uibModalInstance.dismiss('cancel');
        }
        
        modalCtrl.prototype.cancel=function () {
            $uibModalInstance.dismiss('cancel');
        }

        return new modalCtrl();
    }]);