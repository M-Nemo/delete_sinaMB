var fEvent = function(element,event){
  var evt = document.createEvent( 'HTMLEvents' );
  evt.initEvent(event, true, true);  
  return !element.dispatchEvent(evt);
}
function del(){
	var menu = document.getElementsByClassName("screen_box")[0];
	fEvent(menu.children[0],"click");
	var delList = document.getElementsByClassName("layer_menu_list");
	var list = delList[1].children;
	var btn = list[0].children[0].children[0];
	fEvent(btn,"click")
	var e = document.getElementsByClassName("screen_box")[0].children[2].children[0].children[2].children[0];
	fEvent(e,"click");
}

setInterval(function(){
	del();
}
,1000);