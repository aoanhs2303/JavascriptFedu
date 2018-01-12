document.addEventListener("DOMContentLoaded", function() {
	window.addEventListener('scroll', function() {
		var offset = window.pageYOffset;
		var state = 'duoi400';
		var menu = document.querySelector('nav.navbar');

		if(offset > 400) {
			if(state == 'duoi400') {
				state = 'tren400';
				menu.classList.add('nholai');
			}
		}
		else if(offset < 400) {
			if(state != 'tren400') {
				state = 'duoi400';
				menu.classList.remove('nholai');
			}
		}
	})
}, false)	