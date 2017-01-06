$(window).on("load", function() {
	showStartupScreen(function(){
		showLogoWelcome()
		setTimeout(showMainContent, 2000);
		setTimeout(function() {
			$("._davies_logo_welcome._welcome_animation_up").remove();
		}, 3000);
	});
})