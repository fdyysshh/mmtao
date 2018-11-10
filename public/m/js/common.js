$(function(){
    var gallery = mui('.mui-slider');
    gallery.slider({
      interval:1000//自动轮播周期，若为0则不自动播放，默认为0；
    });
    
    mui('.footer').on('tap','a',function(){
      mui.openWindow({url:this.href})
  });
    
 
});

function getParamsByUrl(url, name) {

	var params = url.substr(url.indexOf('?')+1);
    // console.log(params);
	var param = params.split('&');
	// console.log(param);
	for(var i=0;i<param.length;i++){

		var current = param[i].split('=');
		// console.log(current);
		if(current[0] == name){
			// console.log(current[1]);
			return current[1]

		}

	}

	return null;

}
