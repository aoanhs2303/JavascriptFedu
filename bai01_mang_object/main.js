// // 3 CÁCH KHAI BÁO ARRAY

// // Cách 1:
// var hv1 = ['Nhi', 'Luc', 'Anh'];

// // Cach 2:
// var hv2 = [];
// hv2[0] = 'Luc';
// hv2[1] = 'Quynh';

// // Cach 3:
// var hv3 = new Array('Luc', 'Linh', 'Nga');

// // OBJECT

// var dongho = {
// 	hangsx: "casio",
// 	mau: "den",
// 	gia: 100,

// 	hienthingay: function () {
// 		console.log(dongho.hangsx);
// 	}
// }

// var hocvien = {
// 	ten: 'Luc',
// 	tuoi: 20,
// 	chieucao: 164,
// 	cannang: 54,

// 	show: function () {
// 		console.log(this.ten + this.tuoi);
// 	}
// }

// var person = {
// 	ten: 'luc',
// 	toan: 10,
// 	ly: 9,
// 	hoa: 10
// }

// for (var x in person) {
// 	console.log(person[x]);
// }


// //"use strict" --> vào chế độ nghiêm khắc vì vậy phải khai báo var x thay x


// STRING

// var x = "vị trí của chữ a";
// // var offset = x.indexOf(x, 'a');
// var search = x.search('của');
// var rep = x.replace('chữ', 'số');

// console.log(rep);

// var str = "a,b,c,d";
// var arr = str.split(',');

// console.log(arr);


// FUNCTION

// function total(x1, x2) {
// 	var tong = x1 + x2;
// 	console.log('Tong: ' + tong)
// }

// // anonymous function

// function tbc(x, y) {
// 	// dome something
// }


// var z = function(x, y) { // hàm này đéo có tên thường gán vô biến luôn
// 	return x + y;
// }

// console.log(z(2,3));


// // clousure function

// function chao() {
// 	var ten = "luc";
// 	return function() {
// 		console.log('caphe khong ' + ten);
// 	}
// }

// var z = chao(); // z là hàm anonymous

// z(); // chay hàm chao();


//Hàm dựng

// var monan = {
// 	ten: 'Thit',
// 	nguyenlieu: 'geo',
// 	gia: 200
// };

// var monan2 = monan; // 2 cái này chung vùng nhớ

// monan2.ten = 'cá';

// console.log(monan)
// console.log(monan2)

//khai bao constructor

// function MonAn(t, nl, g) {
// 	this.ten = t;
// 	this.nguyenlieu = nl;
// 	this.gia = g;
// }

// var mon1 = new MonAn('thit', 'a', 200);
// var mon2 = new MonAn('bbq', 'b', 221);

// console.log(mon2);

var x = "Lực";
var y = "20 tuổi";
console.log('Xin chào: ' + x + ' ! có phải bạn ' + y + ' không ?');

console.log(`Xin chào: ${x} ! có phải bạn ${y} không ?`);