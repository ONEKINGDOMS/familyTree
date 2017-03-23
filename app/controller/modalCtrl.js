'use strict';

angular.module('familyTree.modal', ['ngRoute'])
    .controller('modalCtrl', ['$uibModalInstance','user',function($uibModalInstance,user) {

        var modalCtrl=function () {
            var that=this;
            that.user=user;
            that.popup={};
            that.staticRelationShipList=[{
                relativeType:'父亲'
            },{
                relative:'母亲'
            },{
                relative:'配偶'
            },{
                relative:'子女'
            }];


            that.relationShipList=_.reduce(that.staticRelationShipList,function (array,item) {
                var find=_.find(that.user.relatives,item);
                if(find === undefined)
                {
                    array.push(item);
                }
                return array;
            },[])

        };

        modalCtrl.prototype.confirm=function () {
           if(this.member)
           {
               this.member.relative=this.member.relative.replace(/\s+/, "");
               this.user.addNewMember(this.member);
               $uibModalInstance.dismiss('cancel');
           }
        }
        
        modalCtrl.prototype.cancel=function () {
            $uibModalInstance.dismiss('cancel');
        }

        modalCtrl.prototype.dateOptions = {
            dateDisabled: disabled,
            formatYear: 'yy',
            maxDate: new Date(),
            minDate: new Date(1900,1,1),
            startingDay: 1
        };

        function disabled(data) {
            var date = data.date,
                mode = data.mode;
            return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
        };

        modalCtrl.prototype.open= function() {
            this.popup.opened = true;
        };


        return new modalCtrl();
    }]);