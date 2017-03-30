
window.onload=function(){

	// 切换 ---商品横排竖排切换
	var sort=document.getElementById('sort');
	
	var switchSection=document.getElementsByClassName('shop-item-block');
	var Onoff=true;
	
	sort.onclick=function () {
		if (Onoff) {
			this.className="sorts-change";
			switchSection[0].style.display="none";
			switchSection[1].style.display="block";
			Onoff=false;
			
		}else{
			this.className="sorts";
			switchSection[1].style.display="none";
			switchSection[0].style.display="block";
			Onoff=true;
		}
		
	}
	

}