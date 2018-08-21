// var module=angular.module("routerApp",[]);
module.controller("hreders", ["$scope","util","$http","$location", function($scope,util,$http,$location){
		console.log(111)

	$scope.fixUser=function(c){
		$scope.foumus=true;
		$scope.user=true;
	}
	$scope.close=function(){
		$scope.foumus=false;
		$scope.user=false;
	}
	$scope.moyPwd=function(){
		
		setTimeout(function(){
			$scope.$apply(function(){
				$scope.user=false;
			});
		},1)
		$scope.show=true;
	}

	$scope.fixPasKeyi=function(){
		$scope.foumus=false;
		$scope.show=false;
	}
}]);
module.controller("plan", ["$scope","util","$http","$location", function($scope,util,$http,$location){
	$scope.name="thsank";

	$http({
		method:"get",
		url:"data/uin.json"
	}).then(function(sc){
		console.log(sc)
	},function(error){
		console.log(error)
	});

	$scope.onclicks=function(){
		$location.path("/edit/0");
	}

}]);

module.controller("index", ["$scope","util","$http","$location","$routeParams", function($scope,util,$http,$location,$routeParams){
	setTimeout(function(){
		var a=$routeParams.playerId;
		console.log(a)
		if(a){
			angular.element($(".nias .navList>ul>li")).eq(a).addClass("nav-active");
		}else{
			angular.element($(".nias .navList>ul>li")).eq(0).addClass("nav-active");
		}
	},100)
	var sendDate={};
	 util.httpRequest("data.uin.json","post",sendDate,true)
	 .then(function(datas){
	 	console.log(datas)
	 })
$http({
		method:"get",
		url:"data/getGeneralTaskList.json"
	}).success(function(response){
        $scope.myTasks=response.data;
    });
}]);
module.controller("taskZong", ["$scope","util","$http","$location","$routeParams", function($scope,util,$http,$location,$routeParams){
	setTimeout(function(){
		var a=$routeParams.playerId;
		console.log(a)
		if(a){
			angular.element($(".nias .navList>ul>li")).eq(a).addClass("nav-active");
		}else{
			angular.element($(".nias .navList>ul>li")).eq(0).addClass("nav-active");
		}
	},100)
	$http({
			method:"get",
			url:"data/getGeneralTaskList.json"
		}).success(function(response){
	        $scope.myTasks=response.data;
	});
}]);
module.controller("taskDetails", ["$scope","util","$http","$location","$routeParams", function($scope,util,$http,$location,$routeParams){
	setTimeout(function(){
		var a=$routeParams.id;
		console.log(a)
		if(a){
			angular.element($(".nias .navList>ul>li")).eq(a).addClass("nav-active");
		}else{
			angular.element($(".nias .navList>ul>li")).eq(0).addClass("nav-active");
		}
	},100)
$http({
		method:"get",
		url:"data/getGeneralTaskList.json"
	}).success(function(response){
        $scope.myTasks=response.data;
        console.log( $scope.myTasks)
    });
}]);
module.controller("myMissionPlan", ["$scope","util","$http","$location","$routeParams", function($scope,util,$http,$location,$routeParams){
	setTimeout(function(){
		var a=$routeParams.id;
		console.log(a)
		if(a){
			angular.element($(".nias .navList>ul>li")).eq(a).addClass("nav-active");
		}else{
			angular.element($(".nias .navList>ul>li")).eq(0).addClass("nav-active");
		}
	},100)
$http({
		method:"get",
		url:"data/getGeneralTaskList.json"
	}).success(function(response){
        $scope.myTasks=response.data;
    });

}]);


