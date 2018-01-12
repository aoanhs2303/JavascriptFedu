// var phantu = document.createElement('h1');
// phantu.innerHTML = "đây là nội dung bên trong";
// document.getElementById('caccm').appendChild(phantu);


// Bài khác

var mangdl = [
	{
		id: 2,
		anh: 'http://kenh14cdn.com/zoom/260_260/2018/photo1515383406406-1515383406406.jpg',
		ten: 'Nguyên Giáp',
		noidungcm: 'Lạc trôi chúng ta ko thuộc về nhau. Lạc trôi chúng ta ko thuộc về nhau. Lạc trôi chúng ta ko thuộc về nhau.Lạc trôi chúng ta ko thuộc về nhau.'
	},
	{
		id: 3,
		anh: 'http://kenh14cdn.com/zoom/280_175/2018/photo1515269866558-1515269866558.jpg',
		ten: 'Sơn Tùng',
		noidungcm: 'Em quên anh đi. Lorem ipsum dolor sit amet, consectetur adipisicing elit a debitis consequatur officia dolores fugit doloremque, necessitatibus asperiores error dicta eveniet maiores.'		
	},
	{
		id: 4,
		anh: 'http://kenh14cdn.com/zoom/327_205/2018/photo1515083944351-1515083944353.jpg',
		ten: 'Hoàng Sơn',
		noidungcm: 'Everynight alone. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, est tenetur possimus alias quaerat cupiditate molestias neque deleniti non explicabo itaque id fugit culpa praesentium necessitatibus, voluptate numquam debitis. Debitis.'		
	}
]

for (var i = 0; i < mangdl.length; i++) {
	var cm = `
	<div class="kcm kcm-${mangdl[i].id}">
		<img src="${mangdl[i].anh}" alt="" class="float-left pr-1">
		<b>${mangdl[i].ten}</b>
		<span>${mangdl[i].noidungcm}</span>
	</div>
	`;

	//tao phan tu html
	var ele = document.createElement('div');
	ele.innerHTML = cm;
	document.getElementById('caccm').append(ele);
}

