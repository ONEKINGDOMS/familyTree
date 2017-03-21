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


    $scope.addNewMember = function () {
        var that=this;
        var parentElem =
            angular.element($document[0].querySelector('#addNewMember'));
        var modalInstance = $uibModal.open({
            animation: true,
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            templateUrl: 'template/memberModal.html',
            controller: function ($uibModalInstance,user) {
                var that = this;
                that.user = user;
                that.confirm = function () {

                };
                that.cancel = function () {
                    $uibModalInstance.close();
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