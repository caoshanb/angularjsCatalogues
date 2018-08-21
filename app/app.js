module=angular.module("routerApp",["ngRoute","ui.bootstrap"]);
module.config(['$routeProvider', function($routeProvider){
    $routeProvider
    // .when('/page_b/:playerId',{
    //     	templateUrl:"view/templet/list.html",
    //     	controller:"plan",
    //     })
    .when('/aa/page_a',{
        	templateUrl:"view/templet/add.html",
        	controller:"plan",
        })
    .when('/edit/:playerId',{
    	templateUrl:"view/templet/hm.html",
    	controller:"index",
    })
    .when('/view/:playerId',{
    	templateUrl:"view/templet/view.html",
    	controller:"taskZong",
    })
    .when('/taskDetails/:id',{
        templateUrl:"view/templet/taskDetails.html",
        controller:"taskDetails",
    })
    .when('/myMissionPlan/:id',{
        templateUrl:"view/templet/myMissionPlan.html",
        controller:"myMissionPlan",
    })
    .otherwise({redirectTo:'/aa/page_a'});	
}]);

// var routerApp = angular.module('routerApp', [
//  'ngRoute'
// ]);
// routerApp.config(function ($routeProvider) {
//  $routeProvider.when('/page_a', {
//  templateUrl: 'view/templet/list.html',
//  }).when('/page_b', {
//  templateUrl: 'view/templet/add.html',
//  }).otherwise({
//  redirectTo: '/page_a'
//  })
// })
// //路由配置
// angular.module("myWeb").config(["$routeProvider", function($routeProvider) {
// 	$routeProvider.when("/page_a", {
// 		templateUrl: "view/templet/add.html",
// 		controller: plan
// 	}).when("/player/view/:playerId", {
// 		templateUrl: "tmpl/player/view.html",
// 		controller: playerViewCtrl
// 	}).when("/player/view/:playerId/:playerName", {
// 		templateUrl: "tmpl/player/view.html",
// 		controller: playerViewCtrl
// 	}).when("/player/add", {
// 		templateUrl: "tmpl/player/add.html",
// 		controller: playerAddCtrl
// 	}).when("/player/edit/:playerId", {
// 		templateUrl: "tmpl/player/edit.html",
// 		controller: playerEditCtrl
// 	}).otherwise({
// 		redirectTo: "/templet/add"
// 	});
// }]);

