document.addEventListener("DOMContentLoaded", function() {
	var nut = document.querySelectorAll('.chuyenslide ul li');
	var slides = document.querySelectorAll('.cacslide ul li');

	var thoigian = setInterval(function() {
		//b1: Tính xem slide nào đang hiên thị
		var vitri = 0;
		var slidehientai = document.querySelector('.cacslide ul li.kichhoat');

		for (var vitri = 0; slidehientai = slidehientai.previousElementSibling; vitri++) {}

		if(vitri < slides.length - 1) {
			for (var i = 0; i < slides.length; i++) {
				slides[i].classList.remove('kichhoat');
				nut[i].classList.remove('active');
			}
			slides[vitri].nextElementSibling.classList.add('kichhoat');
			nut[vitri].nextElementSibling.classList.add('active');				
		} else {
			for (var i = 0; i < slides.length; i++) {
				slides[i].classList.remove('kichhoat');
				nut[i].classList.remove('active');
			}
			slides[0].classList.add('kichhoat');
			nut[0].classList.add('active');
		}


	}, 2000)


	for (var i = 0; i < nut.length; i++) {
		nut[i].onclick = function() {
			for (var k = 0; k < nut.length; k++) {
				nut[k].classList.remove('active');
			}
			this.classList.add('active');
			var nutkichhoat = this;

			var vitrinut = 0;
			for (var vitrinut = 0; nutkichhoat = nutkichhoat.previousElementSibling; vitrinut++) {}
			
			for (var i = 0; i < slides.length; i++) {
				for (var i = 0; i < slides.length; i++) {
						slides[i].classList.remove('kichhoat');
					}
				slides[vitrinut].classList.add('kichhoat');
					
				}

			clearInterval(thoigian);

		}
	}

	//hàm tự động chạy slide
	function autoSlide() {
		
	};

	autoSlide();

}, false)