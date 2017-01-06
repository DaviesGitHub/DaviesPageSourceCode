function showLogoWelcome() {
	$.get('xml/logoWelcome.xml', function(data) {
		var $xml=$(data);
		var htmlDoc=$xml.find('html').text();
		$('body').append(htmlDoc);
		setTimeout(function() {
			$('._davies_logo_welcome').addClass('_welcome_animation_up')
		}, 2000);
	});
}