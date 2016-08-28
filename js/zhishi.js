function test() {
	var btn=document.getElementsByTagName('a');
	var picWrap=document.getElementById('pic');
	var pic=picWrap.getElementsByTagName('img');
	for (var i = 0; i < btn.length; i++) {
		btn[i].index=i;
		btn[i].onclick=function () {
			var num= "img/"+(this.index+1)+".jpg";
			pic[0].setAttribute('src', num);
		}
	}
	
}


addOnLoad(test)