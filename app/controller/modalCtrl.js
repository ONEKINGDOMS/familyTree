'use strict';

angular.module('familyTree.modal', ['ngRoute'])
    .controller('modalCtrl', ['$uibModalInstance','user',function($uibModalInstance,user) {

        var modalCtrl=function () {
            var that=this;
            that.user=user;
            that.popup={};
            that.staticRelationShipList=[{
                id:'1',
                relative:'父亲'
            },{
                id:'2',
                relative:'母亲'
            },{
                id:'3',
                relative:'配偶'
            },{
                id:'4',
                relative:'子女'
            }];


            that.relationShipList=_.reduce(that.staticRelationShipList,function (array,item) {
                var result=that.user._checkIsExistingRelationship({"relative":item.relative});
                if(result)
                {
                    array.push(item);
                }
                return array;
            },[]);
        };

        modalCtrl.prototype.confirm=function () {
           if(this.newMember.firstname && this.newMember.lastname)
           {
               this.newMember.relative=this.newMember.relative.relative;
               this.newMember.name=this.newMember.firstname+' '+this.newMember.lastname;
               this.user.addNewMember(this.newMember);
               $uibModalInstance.dismiss('cancel');
           }
        };
        
        modalCtrl.prototype.cancel=function () {
            $uibModalInstance.dismiss('cancel');
        };

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