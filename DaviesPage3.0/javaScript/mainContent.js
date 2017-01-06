function showMainContent() {
	$('._background_image.display_none').removeClass('display_none');
	$.get('xml/mainContent.xml', function(data) {
		var $xml=$(data);
		var htmlDoc=$xml.find('html').text();
		$('body').append(htmlDoc);
	});
}