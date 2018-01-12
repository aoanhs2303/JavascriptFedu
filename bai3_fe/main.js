var x1 = document.getElementsByTagName('h2');
console.log(x1);

var a = document.getElementsByTagName('h4');

for (var i = 0; i < a.length; i++) {
	a[i].innerHTML = `<a href="" class="btn btn-info">Lực</a>`;
}


var b = document.querySelectorAll('[data-select]');