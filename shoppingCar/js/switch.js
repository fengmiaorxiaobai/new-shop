
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
	var Selced=document.getElementById('selced');
	var sec1=document.getElementById('sec1');
	var SelcedA=Selced.getElementsByTagName('a');
	var onOff=true;
	for (var i = 0; i < SelcedA.length; i++) {
		var topTriangle=document.getElementsByClassName('top-triangle')[0];
		var bottomTriangle=document.getElementsByClassName('bottom-triangle')[0];
		SelcedA[i].index=i;

		SelcedA[i].onclick=function () {
			
			for (var i = 0; i < SelcedA.length; i++) {
				SelcedA[i].className="";
			}	
				
			this.className="active-col";
			topTriangle.className="top-triangle";
			bottomTriangle.className="bottom-triangle";
			if (this.index==1) {
				if (onOff) {
					topTriangle.className="top-triangle-change";
					onOff=false;
				}else{
					bottomTriangle.className="bottom-triangle-change";
					onOff=true;
				}
				
			}
			if (this.index==0||this.index==2) {
				onOff=true;
			}	
		}
	}
	 $(window).scroll(function(){
  	var ling = $(document).scrollTop();
    if (ling>=Selced.offsetTop) {
    	
      Selced.style.cssText="position:fixed;top:0";
     $('.shop-item-block').css({
          "margin-top":"2.4rem"
        })
    } 
    if(ling<=sec1.offsetTop) {
         Selced.style.cssText="position:static;";
         $('.shop-item-block').css({
          "margin-top":"0"
        })
      }
  })

}