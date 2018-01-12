document.addEventListener("DOMContentLoaded", function() {
	var nutphai = document.querySelector('.nuts b.phai');
	var nuttrai = document.querySelector('.nuts b.trai');
	var slides = document.querySelectorAll('.slides ul li')
	var chiSoHienTai = 0;
	var soLuongSlide = slides.length;
	var stateCD = "dungyen";
	var stateprev = "dungyen";
	var dicchuyen = function() {
		if(stateCD == "chuyendong") {
			return false;
		}

		stateCD = "chuyendong";
		sate2CD = 0;

		var cur = slides[chiSoHienTai];
		if(chiSoHienTai < soLuongSlide - 1) {
			chiSoHienTai++;
		} else {
			chiSoHienTai = 0;
		}
		for (var i = 0; i < slides.length; i++) {
			slides[i].classList.remove('active');
		}

		var next = slides[chiSoHienTai];
		next.classList.add('divao');
		next.classList.add('active');
		cur.classList.add('bienmat');

		cur.addEventListener('webkitAnimationEnd', function() {
			this.classList.remove('bienmat');
			sate2CD++;
			if(sate2CD == 2) {
				stateCD = "dungyen";
			}
		})

		next.addEventListener('webkitAnimationEnd', function() {
			this.classList.remove('divao');	
			sate2CD++;
			if(sate2CD == 2) {
				stateCD = "dungyen";
			}
		})
	}
	nutphai.addEventListener('click', function() {
		dicchuyen();
	})

	var dichchuyen2 = function() {
		if(stateprev == "chuyendong") {
			return false;
		}

		chuyendong = "chuyendong";
		var cur = slides[chiSoHienTai];

		if (chiSoHienTai > 0) {
			chiSoHienTai--;
		} else {
			chiSoHienTai = slides.length-1;
		}
		var prev = slides[chiSoHienTai];
		for (var i = 0; i < slides.length; i++) {
			slides[i].classList.remove('active');
		}
		cur.classList.add('bienmat');
		prev.classList.add('divao');
		prev.classList.add('active');

		var prevSTT = 0;
		cur.addEventListener('webkitAnimationEnd', function() {
			this.classList.remove('bienmat');
			prevSTT++;
			if(prevSTT == 2) {
				stateprev == "dungyen";
			}
		})
		prev.addEventListener('webkitAnimationEnd', function() {
			this.classList.remove('divao');
			prevSTT++;
			if(prevSTT == 2) {
				stateprev == "dungyen";
			}		
		})
		
	}

	nuttrai.addEventListener('click', function() {
		dichchuyen2();
	})
}, false)