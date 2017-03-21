(function (angular) {

    'use strict';

    angular.module('familyTree.family', ['ngRoute'])
        .controller('familyCtrl', ['breadcrumbs', '$document', '$uibModal', '$log', '$scope', function (breadcrumbs, $document, $uibModal, $log, $scope) {

            var familyCtrl = function () {
                this.init();
            };

            familyCtrl.prototype.init = function () {
                var that = this;
                breadcrumbs.setTitle('Family');
                that.user = {
                    name: 'Liu',
                };
            };


            familyCtrl.prototype.addNewMember = function () {
                var that = this;
                 $uibModal.open({
                    animation: true,
                    ariaLabelledBy: 'modal-title',
                    ariaDescribedBy: 'modal-body',
                    templateUrl: 'template/memberModal.html',
                    controller:'modalCtrl',
                     controllerAs:'modal',
                    size: 'lg',
                    resolve: {
                        user: function () {
                            return that.user;
                        }
                    }
                });
            };

            return new familyCtrl();
        }])
})(angular);