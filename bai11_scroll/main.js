document.addEventListener("DOMContentLoaded", function() {

	//để kiểm tra ko bị lặp lại
	var state = 'duoi300';

	window.addEventListener('scroll', function() {
		var y = window.pageYOffset;
		if(y > 300) {
			console.log(y);
			if(state == 'duoi300') {
				//console.log('đã đến 300 ko lặp lại');
				state == 'tren300';
			}
		}
	})
}, false)