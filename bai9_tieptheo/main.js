document.addEventListener("DOMContentLoaded", function() {
	var nut = document.querySelectorAll('.clickme');
	var nd = document.querySelectorAll('.danhsach')
	for (var i = 0; i < nut.length; i++) {
		nut[i].onclick = function() {

			if(this.classList[1] == "mautrang") { // click lại cái đó
				this.classList.remove('mautrang');
				var ndhienra = this.getAttribute('data-hienlen');
				document.querySelector(ndhienra).classList.remove('show');		
			}
			else {
				for (var k = 0; k < nut.length; k++) {
					nut[k].classList.remove('mautrang');
				}
				this.classList.toggle('mautrang');
				var ndhienra = this.getAttribute('data-hienlen');
				for (var i = 0; i < nd.length; i++) {
					nd[i].classList.remove('show')
				}
				document.querySelector(ndhienra).classList.toggle('show');				
			}

		}

		// var nd = document.querySelector('.danhsach')
	}
}, false)