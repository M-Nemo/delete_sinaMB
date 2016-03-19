var Event = function(element,event){
  var evt = document.createEvent( 'HTMLEvents' );
  evt.initEvent(event, true, true);  
  return !element.dispatchEvent(evt);
}
function del(){
	var menu = document.getElementsByClassName("screen_box")[0];
	var delList = document.getElementsByClassName("layer_menu_list");
	var list = delList[1].children;
	var btn = list[0].children[0].children[0];
	var e = document.getElementsByClassName("screen_box")[0].children[2].children[0].children[2].children[0];
	Event(menu.children[0],"click");
	Event(btn,"click")
	Event(e,"click");
}
setInterval(function(){
	del();
}
,1000);