angular.module('myApp.controllers', ["language.services"])

.controller('tab1Controller', function($scope,getLanguage) {

        $scope.title='tab1Controller';

        $scope.getShowLanguageApp=function(){

            getLanguage.getShowLanguage();
        };



 })
    .controller('tab2Controller', function($scope) {

        $scope.title='tab2Controller';

    })
    .controller('tab3Controller', function($scope) {

        $scope.title='tab3Controller';

    })

    .controller('content1Controller', function($scope,$stateParams) {

        $scope.title='content1Controller';


        console.log($stateParams);

    })



