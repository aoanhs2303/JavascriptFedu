document.addEventListener("DOMContentLoaded", function() {
	var state = "duoimenu";
	var state2 = "duoiside";
	window.addEventListener('scroll', function() {

		// xử lý phần menu
		var topmenu = document.querySelector('.tin2').offsetTop;
		var menu = document.querySelector('.menu');
		if(window.pageYOffset > topmenu) {
			if(state == "duoimenu") {
				menu.classList.add('doimau');
				state = "trenmenu";
			}
		}
		else if ((window.pageYOffset < topmenu) && (state == "trenmenu")) {
			menu.classList.remove('doimau');
			state = "duoimenu";
		}

		//xử lý phần sidebar

		var tinmoi = document.querySelector('.side2').offsetTop;
		var side = document.querySelector('.side2');
		if (window.pageYOffset > tinmoi && state2 == "duoiside") {
			side.classList.add('stick');
			state2 = "trenside";
		}
		else if (window.pageYOffset < tinmoi && state2 == "trenside") {
			side.classList.remove('stick');
			state2 = "duoiside";
		}
	})
}, false)