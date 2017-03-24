(function (angular) {
'use strict';

angular.module('familyTree.chats', ['ngRoute'])
    .controller('chatsCtrl', ['$q','breadcrumbs',function($q,breadcrumbs) {

        var chatsCtrl=function () {
            this.init();
        }

        chatsCtrl.prototype.init=function () {
            var that=this;
            breadcrumbs.setTitle('消息');
            that.sessionList=[{
                id:'1',
                user:{
                    id:'1',
                    profile:'../static/profile.jpg',
                    name:'YEN',
                },
                lastmessage:'Hello World!',
                lasttime:'19:00',
                messagehistory:[{
                    message:'',
                    type:'',
                    time:'',
                },{
                    message:'',
                    type:'',
                    time:'',
                }],
            },{
                id:'2',
                user:{
                    id:'2',
                    profile:'../static/profile.jpg',
                    name:'YEN2',
                },
                lastmessage:'Hello World!',
                lasttime:'19:00',
                messagehistory:[{
                    message:'',
                    type:'',
                    time:'',
                },{
                    message:'',
                    type:'',
                    time:'',
                }],
            },{
                id:'3',
                user:{
                    id:'3',
                    profile:'../static/profile.jpg',
                    name:'YEN1',
                },
                lastmessage:'Hello World!',
                lasttime:'19:00',
                messagehistory:[{
                    message:'',
                    type:'',
                    time:'',
                },{
                    message:'',
                    type:'',
                    time:'',
                }],
            }];
        }


        return new chatsCtrl();

    }])}(angular))