var nCount=0;
function showPercentage(selector, timeInterval, callback) {
	if (100 >= nCount) {
		$(selector).html(nCount + '%');
		nCount += 1;
		setTimeout(function() {showPercentage(selector, timeInterval, callback)}, timeInterval);
	} else if (100 < nCount) {
		nCount = 0;
		callback();
	}
}

function showText(selector, text, timeInterval, callback) {
	if (text.length > nCount) {
		$(selector).append(text[nCount]);
		++nCount;
		setTimeout(function() {showText(selector, text, timeInterval, callback)}, timeInterval);
	} else if (text.length <= nCount) {
		nCount=0;
		callback();
	}
}

function showStartupScreen(callback) {
	$.get('xml/startupScreen.xml', function(data) {
		var $xml=$(data);
		var htmlDoc=$xml.find('html').text();
		$('body').append(htmlDoc);
		
		$('._davies_start').html('\
			<div class="rights">\
				Davies Windows [Version 3.1.7601]<br/>\
				Copyright <c> 2016 Ideal Corporation.&nbsp&nbspAll rights reserved.\
			</div>\
			<div class="output">\
				++++ Welcome to the Davies website! ++++<br/>\
				<br/>\
				----The page is being loaded for you\
			</div>\
		');
		setTimeout(function() {
			showText('._davies_start>.output', ' . . . . . .', 100, callback1);
		}, 1000);
	});
	window.callback1=function() {
		$('._davies_start>.output').append('<br/><br/>');
		showText('._davies_start>.output', '> request page content from web server .......... ', 2, callback2);
	}
	window.callback2=function() {
		$('._davies_start>.output').append('<span id="_davies_start_output_span"></span>');
		showPercentage('#_davies_start_output_span',10, callback3);
	}
	window.callback3=function() {
		$('#_davies_start_output_span').remove();
		$('._davies_start>.output').append('100%<br/>');
		showText('._davies_start>.output', '> parsing downloaded data .......... ', 2, callback4);			
	}
	window.callback4=function() {
		$('._davies_start>.output').append('<span id="_davies_start_output_span"></span>');
		showPercentage('#_davies_start_output_span',10, callback5);		
	}
	window.callback5=function() {
		$('#_davies_start_output_span').remove();
		$('._davies_start>.output').append('100%<br/>');
		showText('._davies_start>.output', '> download javaScript script .......... ', 2, callback6);		
	}
	window.callback6=function() {
		$('._davies_start>.output').append('<span id="_davies_start_output_span"></span>');
		showPercentage('#_davies_start_output_span',10, callback7);			
	}
	window.callback7=function() {
		$('#_davies_start_output_span').remove();
		$('._davies_start>.output').append('100%<br/>');
		showText('._davies_start>.output', '> download Cascading Style Sheets .......... ', 2, callback8);			
	}
	window.callback8=function() {
		$('._davies_start>.output').append('<span id="_davies_start_output_span"></span>');
		showPercentage('#_davies_start_output_span',10, callback9);				
	}
	window.callback9=function() {
		$('#_davies_start_output_span').remove();
		$('._davies_start>.output').append('100%<br/>');
		showText('._davies_start>.output', '> download website image .......... ', 2, callback10);			
	}
	window.callback10=function() {
		$('._davies_start>.output').append('<span id="_davies_start_output_span"></span>');
		showPercentage('#_davies_start_output_span',10, callback11);				
	}
	window.callback11=function() {
		$('#_davies_start_output_span').remove();
		$('._davies_start>.output').append('100%<br/>');
		showText('._davies_start>.output', '> initialize web page .......... ', 2, callback12);			
	}
	window.callback12=function() {
		$('._davies_start>.output').append('<span id="_davies_start_output_span"></span>');
		showPercentage('#_davies_start_output_span',10, function(){
			setTimeout(function(){
				$('._davies_desktop').remove();
				$('._davies_empty').remove();
				$('._davies_start').remove();
			}, 2000);
			callback();
		});	
	}
}