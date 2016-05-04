myApp.directive('siteHeader', function (){
	return {
		restrict: 'E',
		templateUrl: 'views/header.html',
		link : function(scope, element, attr){
			$('.user-profile .user-btn,.notification .noti').focus(function(){
        		$(this).next('ul').fadeIn('fast');
    		});
			$('.user-profile .user-btn,.notification .noti').focusout(function(){
				$(this).next('ul').fadeOut('fast');
			});
		}
	}
});
