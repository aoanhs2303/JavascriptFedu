document.addEventListener("DOMContentLoaded", function() {
	// var btn = document.getElementById('nut1');
	// btn.onclick = function() {
	// 	var mk = this.getAttribute('data-matkhau');
	// 	console.log(mk)
	// }

	var nut = document.querySelectorAll('.btn');
	for (var i = 0; i < nut.length; i++) {
		nut[i].onclick = function() {
			var x = this.getAttribute('data-matkhau');
			console.log(x);
		
		}
	}
}, false)