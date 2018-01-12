document.addEventListener("DOMContentLoaded", function() {
	var btn = document.querySelector('.nut');
	var den = document.querySelector('.den');
	var menu = document.querySelector('.menutrai');
	btn.onclick = function() {
		den.classList.add('hienra');
		menu.classList.add('sangphai');
	}

	den.onclick = function() {
		den.classList.remove('hienra');
		menu.classList.remove('sangphai');
	}
}, false)