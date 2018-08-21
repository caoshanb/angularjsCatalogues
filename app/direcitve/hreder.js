module.directive('pane',function(){
    return{
        restrict:"AEDM",
        replace:true,
        templateUrl:'view/directiveTemplet/fixUser.html'
    }
});
module.directive('datepicker', function(){
    		return {
    			restrict: 'EAC',
    			controller: 'DatePickerCtl',
    			templateUrl: 'view/directiveTemplet/getTimeOut.html',
    			scope: {
    				'value': '='
    			},
    			link: function(scope){
 
    			}
    		};
    	});
