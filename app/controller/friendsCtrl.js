(function (angular) {

    'use strict';

angular.module('familyTree.friends', ['ngRoute'])
    .controller('friendsCtrl', ['$scope','$q','breadcrumbs','$location',function($scope,$q,breadcrumbs,$location) {

        var friendsCtrl=function () {
            var that=this;
            that.isSearch=$location.search().isSearch;
            if( that.isSearch == 1)
            {
                that.searchResult();
            }else if( that.isSearch == 0){
                that.initData();
                that.i            }


        };

        friendsCtrl.prototype.initData=function(){
            var that=this;
            breadcrumbs.setTitle('Friends');
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



        friendsCtrl.prototype.searchResult=function(){
            var that=this;
            breadcrumbs.setTitle('Search Results');
            that.friendList=[{
                id:'1',
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