$(function(){
	$.ajax({ 
	    url:"../servlet/pingjian?a=3",
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
		 for(i=0;i<8;i++)
  	   {
			   html1='<p><a href="./sysx/pingjian0.html?tzgg='+i+'" title="'+data[i].title+'">'+data[i].title+'</a><span class="data">'+data[i].time+'</span></p>';
			   $('.notice .no_content').append('<li></li>');
				$('.notice .no_content li').eq(i).html(html1);	
  	   }   
	}
	$.ajax({ 
	    url:"../servlet/pingjian?a=2",
	    async:true,
	    type: "get",
	    dataType:'json', 
	    cache:'false',
	    error: erryFunction,
	    success: function (data){
	    	for(i=0;i<2;i++)
	   	   {
	 			   html1='<div class="item"><h3 class="title"><a href="./sysx/pingjian0.html?xwdt='+i+'" title="'+data[i].title+'">'+data[i].title+'</a></h3><div class="content1"><p style="text-indent:2em">'+data[i].jie+'</p></div></div>';
	 			   $('.news .content0').append('<li></li>');
	 				$('.news .content0 li').eq(i).html(html1);	
	   	   }   
	    }
	    });
})