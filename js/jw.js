var url = location.search; //获取url中"?"符后的字串
if (url.indexOf("?") != -1)
{    //判断是否有参数
	var str = url.substr(1); 
    str1=str.substr(3,1);
    $.ajax({ 
	   url:'../../servlet/jiaowu',
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
	   html1='<span  class="spana">您的当前位置：</span><span class="spanb"></span><i>/</i><a href="../home.html">湖南工程学院计算机与通信学院</a><i>/</i><a href="../jiaowu.html">教务教学</a><i>/</i><a href="##">'+data[str1].title+'</a>'
       $('.c_left .c_p').html(html1);
	   $('.c_content h3').text(data[str1].title);
	   $('.jw_top p').html('<span style="width:150px;">发布时间：'+data[str1].time+' </span><span style="width:120px;">作者： '+data[str1].people+' </span><span style="width:160px;">来源：计算机与通信学院 </span><span style="width:70px;" >点击：280 </span><span class="size" style="width:114px;">字号：<a href="##">大</a><a href="##">中</a><a href="##">小</a></span>');
       $('.jw_cont').html('<pre class="pjpre">'+data[str1].neirong+'</pre>');
   }
   $.ajax({ 
	   url:'../../servlet/pingjian?a=2',
	   async:true,
	   type: "get",
	   dataType:'json', 
	   cache:'false',
	   error: erryFunction,
	   success: function (data){
		   for(i=0;i<=5;i++)
    	   {
			   html1='<p><a href="./pingjian0.html?xwdt='+i+'" title="'+data[i].title+'">'+data[i].title+'</a></p>';
			   $('#news').append('<li></li>');
				$('#news li').eq(i).html(html1);	
    	   }   
	   }
	   });
   $.ajax({ 
	   url:'../../servlet/pingjian?a=3',
	   async:true,
	   type: "get",
	   dataType:'json', 
	   cache:'false',
	   error: erryFunction,
	   success: function (data){
		   for(i=0;i<=5;i++)
    	   {
			   html1='<p><a href="./pingjian0.html?tzgg='+i+'" title="'+data[i].title+'">'+data[i].title+'</a></p>';
			   $('#notice').append('<li></li>');
				$('#notice li').eq(i).html(html1);	
    	   }   
	   }
	   });
}