// document.querySelector('.abc').classList.add('extraClass');
// var x = document.querySelectorAll('.btn');
// for (var i = 0; i < x.length; i++) {
// 	x[i].classList.add('btn-block')
// 	if (i == 2) {
// 		x[i].classList.remove('btn')
// 	}
// 	if (i == 3) {
// 		x[i].classList.toggle('btn-block');
// 	}
// }

document.addEventListener('DOMContentLoaded', function() { // == hàm ready trong jquery
	var btn = document.querySelector('.nut1');
	btn.onclick = function() {
		console.log('ban da click');
	}

}, false);