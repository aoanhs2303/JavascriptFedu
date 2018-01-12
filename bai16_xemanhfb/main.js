document.addEventListener("DOMContentLoaded", function() {
	var images = document.querySelectorAll('.cacanh img');
	var nenden = document.querySelector('.nenden');
	var donglai = document.querySelector('.donglai');
	var thongtin = document.querySelector('.thongtinanh');
	var khoicacanhLI = document.querySelectorAll('.khoicacanh ul li');
	var CS = 0;

	// donglai.addEventListener('click', function() {
	// 	nenden.classList.remove('hiennenden');
	// 	thongtin.classList.remove('hiennenden');
	// }) // Không cần thì thằng nền đen đã bao gồm nó
	nenden.addEventListener('click', function() {
		nenden.classList.remove('hiennenden');
		thongtin.classList.remove('hiennenden');
		document.querySelector('.khoicacanh ul li.active').classList.remove('active');
	})


	for (var i = 0; i < images.length; i++) {
		images[i].addEventListener('click', function() {
			nenden.classList.add('hiennenden');
			thongtin.classList.add('hiennenden');
			var anhduocClick = this;
			var chiso = 0;
			
			for (chiso = 0; anhduocClick = anhduocClick.previousElementSibling; chiso++) {}
			CS = chiso; // Dung CS để xác dịnh slide đang active
			khoicacanhLI[chiso].classList.add('active');

		})
	}

	// XỬ LÝ SLIDE ANH
	var nuttrai = document.querySelector('.khoicacnut b.trai');
	var nutphai = document.querySelector('.khoicacnut b.phai');
	var imgActive = document.querySelector('.khoicacanh ul li.active');



	nutphai.addEventListener('click', function() {
		var cur = khoicacanhLI[CS];
		(CS < khoicacanhLI.length - 1) ? CS = CS + 1 : CS = 0;
		var next = khoicacanhLI[CS];
		for (var i = 0; i < khoicacanhLI.length; i++) {
			khoicacanhLI[i].classList.remove('active');
		}
		next.classList.add('active');
	})
	nuttrai.addEventListener('click', function() {
		var cur = khoicacanhLI[CS];
		(CS > 0) ? CS = CS - 1: CS = khoicacanhLI.length - 1;
		var next = khoicacanhLI[CS];
		for (var i = 0; i < khoicacanhLI.length; i++) {
			khoicacanhLI[i].classList.remove('active');
		}
		next.classList.add('active');
	})
 


}, false)