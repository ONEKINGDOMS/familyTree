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
                // that.user = {
                //     name: 'Liu',
                //     relatives:[
                //         {
                //             id:'1',
                //             relative:'父亲',
                //             firstname:'Liu',
                //             lastname:'feng',
                //             birthdate:'1960-10-1',
                //             status:'live'
                //         }
                //     ]
                // };
                that.user=new user();
            };

            function user() {
                this.name='LI',
                this.relatives=[{
                        id:'1',
                        relative:'父亲',
                        firstname:'Li',
                        lastname:'feng',
                        birthdate:'1960-10-1',
                        status:'live',
                        name:'Li feng'
                    }
                ];
                this.setFamily();
            }

            user.prototype.setFamily=function () {
                this.father=_.find(this.relatives,{ relative:'父亲'});
                this.mother=_.find(this.relatives,{ relative:'母亲'});
                this.couple=_.find(this.relatives,{ relative:'配偶'});
                this.childrens=_.filter(this.relatives,function (item) {
                    return item.relative=='子女';
                });
            }

            user.prototype.addNewMember=function (member) {
                this.relatives.push(member);
                this.setFamily();
            }






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