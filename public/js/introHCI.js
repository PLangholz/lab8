'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('.likeBtn').each(function() {
		$(this).click(function() {
			ga('send', 'event', 'like', 'click');
			return true;
		});
	});
	// your code here
}