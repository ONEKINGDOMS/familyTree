(function (angular) {
'use strict';

angular.module('familyTree.search', ['ngRoute'])
    .controller('searchCtrl', ['$location','breadcrumbs',function($location,breadcrumbs) {

        var searchCtrl=function () {
            this.init();
        };

        searchCtrl.prototype.init=function () {
            var that=this;
            breadcrumbs.setTitle('寻找人脉');
            that.shouldShowType=$location.search().shouldShowType;
            that.terms="请输入真实信息";
            that.searchByFamily==false;
            that.searchBySchool=false;
        };

        //doing searching get resaon from server go
        searchCtrl.prototype.search=function () {
            var that=this;
            if(that.searchByFamily)
            {
                $location.url('friends?searchBy=family');
            }else if(that.searchBySchool)
            {
                $location.url('friends?searchBy=school');
            }
        };

        //show different type search
        searchCtrl.prototype.showSearch=function (typeCode) {
            var that=this;
            if(typeCode == 0)
            {
                that.searchByFamily=true;
                that.searchBySchool=false;
                that.shouldShowType=0;
            }else if(typeCode == 1)
            {
                that.searchByFamily=false;
                that.searchBySchool=true;
                that.shouldShowType=0;
            }
        };

        return new searchCtrl();
    }])
}(angular))