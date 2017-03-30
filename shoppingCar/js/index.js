function getStyle(obj,attr){
	return obj.currentStyle? obj.currentStyle[attr] : getComputedStyle(obj)[attr];
};
function addZero(n){
    return n < 10 ? "0"+n : n;
}
window.onload=function(){
//选项卡切换 ---按钮           
	var checkedList=document.getElementById('checked-list');
	var icoMark=document.getElementById('ico-mark');
	

	var checkedMark=checkedList.getElementsByTagName('strong');
	var checkedInput=document.getElementsByClassName('checks');
	var num=0;
	var onOff=true;
	for (var i = 0; i < checkedInput.length; i++) {
		
		checkedInput[i].index=i;

		checkedInput[i].onclick=function () {			
			if (this.checked) {
				num++;
				console.log(num);
				if (num== checkedInput.length) {
					icoMark.className="ico-check1";
					onOff=false;
				}
				
				checkedMark[this.index].className="ico-check";
				
			}else{
				num--;
				console.log(num);
				onOff=true;
				icoMark.className="ico-mark";
				checkedMark[this.index].className="shopico-mark";
			}		
		};
	}
	icoMark.onclick=function () {
		if (onOff) {
			for (var i = 0; i < checkedMark.length; i++) {
				checkedInput[i].checked=true;
				
				if (num== checkedInput.length) {
					checkedMark[i].className="shopico-mark";
				}
				this.className="ico-check1";
				checkedMark[i].className="ico-check";
			}
			onOff=false;
			num=checkedInput.length;
		}else{
			for (var i = 0; i < checkedMark.length; i++) {
				checkedInput[i].checked=false;
				
				this.className="ico-mark";
				checkedMark[i].className="shopico-mark";
			}
			onOff=true;
			num=0;
		}
		
	};
//编辑完成切换  
	var editBtn=document.getElementById('edit');
	var paymentSwitch=document.getElementsByClassName('fix-warp');
	var onOff1=true;

	editBtn.onclick=function () {
		if (onOff1) {
			this.innerHTML="完成";
			paymentSwitch[0].style.display="none";
			paymentSwitch[1].style.display="block";
			onOff1=false;
		}else{
			this.innerHTML="编辑";
			paymentSwitch[0].style.display="block";
			paymentSwitch[1].style.display="none";
			onOff1=true;
		}
		
	}

//提示框(点击删除 收藏)动画
	var move=document.getElementById('move');
	var collectMove=document.getElementById('collect');
	var show=document.getElementById('show');
	var cancles=document.getElementById('cancles');
	var mark=document.getElementsByClassName('mark')[0];
	var preCol=document.getElementsByClassName('pre-col')[0];
	
	move.onclick=function () {
		
		mark.style.display="block";
      	show.className="alert-choice showway";
      	preCol.innerHTML="确认要将1种商品删除？";
      
		 event.stopPropagation();
	}
	collectMove.onclick=function () {
		
		mark.style.display="block";
      	show.className="alert-choice showway";
      	preCol.innerHTML="确认要将1种商品移入我的收藏？";
		 event.stopPropagation();
	}
	cancles.onclick=function () {
		show.className="alert-choice";
		mark.style.display="none";

		 event.stopPropagation();
	}

	mark.onclick=function () {
		show.className="alert-choice";
		shopWarp.style.display="none";
		mark.style.display="none";
	}
	
//点击领券
	var useBtn=document.getElementById('use-btn');
	var Tcoupon=document.getElementById('T-coupon');
	var useBtna=useBtn.getElementsByTagName('a');
	var useBtnst=useBtn.getElementsByTagName('strong');
	var couponLeft=document.getElementsByClassName('coupon-left');
	var shopWarp=document.getElementsByClassName('shop-packet-warp')[0];
	var closeBtn=document.getElementsByClassName('packet-close')[0];

	for (var i = 0; i < useBtna.length; i++) {
		useBtna[i].index=i;
		useBtna[i].onclick=function () {
		
				useBtnst[this.index].innerHTML="已领取";
				useBtnst[this.index].style.cssText="background:#b0b0b0";
				couponLeft[this.index].className="coupon-left coupon-btn";		
		}
	}
	Tcoupon.onclick=function () {
		shopWarp.style.display="block";
		mark.style.display="block";
		 event.stopPropagation();

	}
	closeBtn.onclick=function () {
		shopWarp.style.display="none";
		mark.style.display="none";
		 event.stopPropagation();

	}
	//文字无缝滚动
	var rolling=document.getElementById('rolling');
	var aSpan = rolling.getElementsByTagName('em');
	var speed = -1;
  	var timer = null;
  	rolling.innerHTML += rolling.innerHTML;
  	
  	rolling.style.width = aSpan[0].offsetWidth * aSpan.length + 'px';

	timer = setInterval(function(){
	    rolling.style.left = rolling.offsetLeft +speed+'px';
	    
	    if(rolling.offsetLeft <= - rolling.offsetWidth / 2){
	    	
	      rolling.style.left = '0';
	    }else if(rolling.offsetLeft > 0){
	      rolling.style.left = - rolling.offsetWidth / 2 + 'px';
	    }
	},30);
	//小喇叭循环
	var hornBox=document.getElementById('horn-box');
	var aEm = hornBox.getElementsByTagName('em')[0];
	var Num=0;
	setInterval(function(){
	    Num++;
	     aEm.className="horn";
	    if (Num==1) {
	    	aEm.className="horn1";
	    }
	    if (Num==2) {
	    	aEm.className="horn2";
	    	Num=-1;
	    }

	},1000);

};