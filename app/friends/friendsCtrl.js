'use strict';

angular.module('familyTree.friends', ['ngRoute'])
    .controller('friendsCtrl', ['$scope','$q',function($scope,$q) {

        var friendsCtrl=function () {
            this.init();
        };

        friendsCtrl.prototype.init=function(){
            var that=this;
            that.friendList=[{
                id:'1',
                name:'Uen Yu',
                position:'Application Developer',
                profile:''
            },{
                id:'2',
                name:'Uen Yu',
                position:'Application Developer',
                profile:''
            },{
                id:'3',
                name:'Uen Yu',
                position:'Application Developer',
                profile:''
            },{
                id:'4',
                name:'Uen Yu',
                position:'Application Developer',
                profile:''
            },{
                id:'5',
                name:'Uen Yu',
                position:'Application Developer',
                profile:''
            },{
                id:'6',
                name:'Uen Yu',
                position:'Application Developer',
                profile:''
            },{
                id:'7',
                name:'Uen Yu',
                position:'Application Developer',
                profile:''
            },{
                id:'8',
                name:'Uen Yu',
                position:'Application Developer',
                profile:''
            },{
                id:'9',
                name:'Uen Yu11',
                position:'Application Developer',
                profile:''
            }];
        };

        return new friendsCtrl();


    }]);