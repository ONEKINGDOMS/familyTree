'use strict';

angular.module('familyTree.family', ['ngRoute'])
.controller('familyCtrl', ['breadcrumbs','$document','$uibModal','$log','$scope',function(breadcrumbs,$document,$uibModal,$log,$scope) {

    var familyCtrl=function () {
        this.init();
    };

    familyCtrl.prototype.init=function(){
        var that=this;
        breadcrumbs.setTitle('Family');
        that.user={
            name:'Liu',
        };
    };


    familyCtrl.prototype.addNewMember = function () {
        var that=this;
        var parentElem =
            angular.element($document[0].querySelector('#addNewMember'));
        var modalInstance = $uibModal.open({
            animation: true,
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            templateUrl: 'template/memberModal.html',
            controller: function ($uibModalInstance,user) {
                $scope.user = user;
                $scope.confirm = function () {
                    $uibModalInstance.close();
                };
                $scope.cancel = function () {
                    $uibModalInstance.dismiss('cancel');
                };
            },
            size: 'lg',
            resolve: {
                user: function () {
                    return that.user;
                }
            }
        });
    };

    return new familyCtrl();
}]);