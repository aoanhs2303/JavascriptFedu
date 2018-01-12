document.addEventListener("DOMContentLoaded", function() {
	var btn = document.getElementById('nut1');
	var state = "lan1";
	var khoi = document.querySelector('.card');
	btn.onclick = function() {
		if(state == "lan1") {
			khoi.classList.add("chieuso1");
			state = "lan2";
		} else {
			khoi.classList.remove("chieuso1");
			khoi.classList.add("chieuso2");
			state = "lan1";
		}
		return false;
	}
}, false)