(function (angular) {
    'use strict';

    angular.module('familyTree.common', ['ngRoute'])
        .component('ftreeHeader', {
            controller: ftreeHeaderComponent,
            templateUrl: ftreeHeaderTemplateUrl
        });


    function ftreeHeaderComponent(breadcrumbs) {
        var that = this;
        that.title=breadcrumbs.title;
    }


    function ftreeHeaderTemplateUrl() {
        return 'component/header/ftreeheader.html';
    }

    ftreeHeaderTemplateUrl.$inject = ['breadcrumbs'];
}(angular));

