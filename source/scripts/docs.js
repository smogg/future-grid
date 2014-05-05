(function(window, document) {
	hljs.initHighlightingOnLoad();

	var isFixed     = false;
	var nav          = document.getElementById('nav');
	var navOffset    = nav.offsetTop;

	window.onscroll = function() {
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

		if (scrollTop >= navOffset && isFixed === false) {
			nav.classList.add('fixed');
		} else {
			nav.classList.remove('fixed');
		}
	}

})(window, document);
