document.addEventListener("DOMContentLoaded",function() {
	var btn = document.getElementById('nut1');
	var card = document.querySelector('.card')
	btn.onclick = function() {
		card.classList.toggle('move');

		return false;
	}
}, false)


