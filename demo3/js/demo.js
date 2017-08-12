function $(id){
			return typeof id==="string"?document.getElementById(id):id;
}
function addLoadEvent(func){
	var oldonload = window.onload;
	if(typeof window.onload!='function'){
		window.onload=func;
	}else{
		window.onload=function(){
			oldonload();
			func();
		}
	}
}
//第一个tab切换
function firsttab(){
	var titles=$('banner-link').getElementsByTagName('a');
	var ban=$('banner').getElementsByTagName("a");
	tabchange(titles,ban);
}
//第二个tab切换
function twotab(){
	var titles2=$("contant-left").getElementsByTagName("li");
	var ban2=$("banner-content").getElementsByTagName("a");

	var timer=null;
	var timer2=null;
	var index=0;
	//自动切换定时器
	timer2=setInterval(function(){
		index++;
		if(index>5){
			index=0;
		}
		for(var i=0;i<titles2.length;i++){
			ban2[i].style.display="none";
			titles2[i].className="";
		}
		titles2[index].className="hover";
		ban2[index].style.display="block";
	},2000);
	//
	for(var i=0;i<titles2.length;i++){
		titles2[i].id=i;
		titles2[i].onmouseover=function(){
			clearInterval(timer2);
			titles2[index].className="";
			var that=this;
			if(timer){
				clearTimeout(timer);
				timer=null;
			}
			timer=setTimeout(function(){
				for(var j=0;j<titles2.length;j++){
					ban2[j].style.display="none";
				}
				ban2[that.id].style.display="block";
				titles2[that.id].className="hover";
			},500);
		}
		titles2[i].onmouseout=function(){
			index=this.id;
			if(timer){
				clearTimeout(timer);
				timer=null;
			}
			timer=setInterval(function(){
		index++;
		if(index>5){
			index=0;
		}
		for(var i=0;i<titles2.length;i++){
			ban2[i].style.display="none";
			titles2[i].className="";
		}
		titles2[index].className="hover";
		ban2[index].style.display="block";
	},2000);
		}
	}
}
addLoadEvent(firsttab);
addLoadEvent(twotab);
// function autoTab(){
// 	var index=0;
// 	var timer=null;
// 	var titles2=$("contant-left").getElementsByTagName("li");
// 	var ban2=$("banner-content").getElementsByTagName("a");
// 	timer=setInterval(function(){
// 		index++;
// 		if(index>5){
// 			index=0;
// 		}
// 		for(var i=0;i<titles2.length;i++){
// 			ban2[i].style.display="none";
// 			titles2[i].className="";
// 		}
// 		titles2[index].className="hover";
// 		ban2[index].style.display="block";
// 	},2000);
// }
// addLoadEvent(autoTab);
function tabchange(tit,ban){
	var timer=null;
	for(var i=0;i<tit.length;i++){
		tit[i].id=i;
		tit[i].onmouseover=function(){
			var that=this;
			if(timer){
				clearTimeout(timer);
				timer=null;
			}
			timer=setTimeout(function(){
				for(var j=0;j<tit.length;j++){
					ban[j].style.display="none";
					ban[that.id].style.display="block";
				}
			},500)
		}
	}
}