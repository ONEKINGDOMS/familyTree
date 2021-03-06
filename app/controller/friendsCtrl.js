(function (angular) {
'use strict';

angular.module('familyTree.friends', ['ngRoute'])
    .controller('friendsCtrl', ['$scope','$q','breadcrumbs','$location',function($scope,$q,breadcrumbs,$location) {

        var friendsCtrl=function () {
            if($location.search().friendlist)
            {
                this.init();
            }else if($location.search().searchBy == 'family'){
                this.searchByFamily();
            }else if($location.search().searchBy == 'school'){
                this.searchBySchool();
            }

        };

        friendsCtrl.prototype.init=function(){
            var that=this;
            breadcrumbs.setTitle('人脉邀请');
            that.shouldShowOutgoing=false;
            that.shouldShowRequest=false;
            that.friendList=[{
                id:'1',
                name:'Uen Yu',
                position:'Application Developer',
                profile:'../static/profile.jpg'
            },{
                id:'2',
                name:'Uen Yu',
                position:'Application Developer',
                profile:'../static/profile.jpg'
            },{
                id:'3',
                name:'Uen Yu',
                position:'Application Developer',
                profile:'../static/profile.jpg'
            },{
                id:'4',
                name:'Uen Yu',
                position:'Application Developer',
                profile:'../static/profile.jpg'
            },{
                id:'5',
                name:'Uen Yu',
                position:'Application Developer',
                profile:'../static/profile.jpg'
            },{
                id:'6',
                name:'Uen Yu',
                position:'Application Developer',
                profile:'../static/profile.jpg'
            },{
                id:'7',
                name:'Uen Yu',
                position:'Application Developer',
                profile:'../static/profile.jpg'
            },{
                id:'8',
                name:'Uen Yu',
                position:'Application Developer',
                profile:'../static/profile.jpg'
            },{
                id:'9',
                name:'Uen Yu11',
                position:'Application Developer',
                profile:'../static/profile.jpg'
            }];
        };

        friendsCtrl.prototype.searchByFamily=function(){
            var that=this;
            breadcrumbs.setTitle('人脉邀请');
            that.shouldShowOutgoing=true;
            that.shouldShowRequest=false;
            that.friendList=[{
                id:'1',
                name:'Uen Yu',
                position:'Application Developer',
                profile:'../static/profile.jpg'
            },{
                id:'2',
                name:'Uen Yu',
                position:'Application Developer',
                profile:'../static/profile.jpg'
            },{
                id:'3',
                name:'Uen Yu',
                position:'Application Developer',
                profile:'../static/profile.jpg'
            },{
                id:'4',
                name:'Uen Yu',
                position:'Application Developer',
                profile:'../static/profile.jpg'
            },{
                id:'5',
                name:'Uen Yu',
                position:'Application Developer',
                profile:'../static/profile.jpg'
            },{
                id:'6',
                name:'Uen Yu',
                position:'Application Developer',
                profile:'../static/profile.jpg'
            },{
                id:'7',
                name:'Uen Yu',
                position:'Application Developer',
                profile:'../static/profile.jpg'
            },{
                id:'8',
                name:'Uen Yu',
                position:'Application Developer',
                profile:'../static/profile.jpg'
            },{
                id:'9',
                name:'Uen Yu11',
                position:'Application Developer',
                profile:'../static/profile.jpg'
            }];
        };

        friendsCtrl.prototype.searchBySchool=function(){
            var that=this;
            breadcrumbs.setTitle('人脉邀请');
            that.shouldShowOutgoing=true;
            that.shouldShowRequest=false;
            that.friendList=[{
                id:'1',
                name:'Uen Yu',
                position:'Application Developer',
                profile:'../static/profile.jpg'
            },{
                id:'2',
                name:'Uen Yu',
                position:'Application Developer',
                profile:'../static/profile.jpg'
            },{
                id:'3',
                name:'Uen Yu',
                position:'Application Developer',
                profile:'../static/profile.jpg'
            },{
                id:'4',
                name:'Uen Yu',
                position:'Application Developer',
                profile:'../static/profile.jpg'
            },{
                id:'5',
                name:'Uen Yu',
                position:'Application Developer',
                profile:'../static/profile.jpg'
            },{
                id:'6',
                name:'Uen Yu',
                position:'Application Developer',
                profile:'../static/profile.jpg'
            },{
                id:'7',
                name:'Uen Yu',
                position:'Application Developer',
                profile:'../static/profile.jpg'
            },{
                id:'8',
                name:'Uen Yu',
                position:'Application Developer',
                profile:'../static/profile.jpg'
            },{
                id:'9',
                name:'Uen Yu11',
                position:'Application Developer',
                profile:'../static/profile.jpg'
            }];
        };

        return new friendsCtrl();
    }])
}(angular));