function _davies_notice(noticeText) {
	var noticeHTML="<div id=\"_davies_notice_div\" class=\"_davies_notice_div\">\
						<div class=\"_davies_notice_div_background\"/>\
						<div class=\"_davies_notice_div_content_div\">\
							<div class=\"_davies_notice_div_content_close\"><span class=\"_davies_notice_div_content_close_span\"></span></div>\
							<div class=\"_davies_notice_div_content_animation\">\
								<div class=\"_davies_notice_div_content _notice_danger\">"
								+noticeText+
								"</div>\
							</div>\
						</div>\
					</div>";
	$("body").append(noticeHTML);
	$("._davies_notice_div_content_close_span").click(function() {
		$("#_davies_notice_div").remove();
	});
}

function _davies_test_notice() {
	_davies_notice('notice:<br/><br/>sorry! this page just for test! thanks for you can visit my web site!<br/> &nbsp&nbsp&nbsp&nbsp:-)');
}