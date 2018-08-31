$(function(){
	$.ajax({ 
	    url:"../servlet/jiaowu",
	    async:true,
	    type: "get",
	    dataType:'json', 
	    cache:'false',
	    error: erryFunction,
	    success: succFunction
	    });
	function erryFunction() {
	    console.log("请求错误");
	}
	function succFunction(data) {
		 var i;
		 jwz = Math.ceil(data.length/6);
		 if(data.length>6){
			 for(j=1;j <= jwz;j++)
			 {
				 $('.jw_nei_c ul').append('<li><a href="##">'+j+'</a></li>');	 
			 } 
		 } 
		for(i in data){	
			html1='<p><a href="./sysx/jw0.html?jw='+i+'" title="'+data[i].title+'">'+data[i].title+'</a></p><p><span>'+data[i].time+'</span></p><p>'+data[i].jie+'...</p>'
		    $('.jw_nei ul').append('<li></li>');
			$('.jw_nei ul li').eq(i).html(html1);
		}
	}
	
})