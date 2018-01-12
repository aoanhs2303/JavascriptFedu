document.addEventListener("DOMContentLoaded", function() {
	document.querySelector('.tamgiac').onclick = function() {
		this.classList.toggle('tamgiactrang');
		document.querySelector('.danhsach').classList.toggle('show');
	}
}, false)