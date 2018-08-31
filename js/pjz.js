 $(function(){
  var url = location.search; //获取url中"?"符后的字串
  if (url.indexOf("?") != -1)
  {    //判断是否有参数
   var str = url.substr(1); //从第一个字符开始 因为第0个是?号 获取所有除问号的所有符串
   strs1 = str.substr(5,1); 
   if(strs1!=0){
	   url1='../servlet/pingjian?a='+strs1;
	   $.ajax({ 
		    url:url1,
		    async:true,
		    type: "get",
		    dataType:'json', 
		    cache:'false',
		    error: erryFunction,
		    success: succFunction
		    });
	   }
    else{
    	var c=0,d;
    	pj(1,'0','pjgz');
    	pj(2,c,'xwdt');
    	pj(3,c,'tzgg');
    }
  }
  
  function pj(url,d,lei){
	  $.ajax({ 
		   url:'../servlet/pingjian?a='+url,
	       async:false,
	       type: "get",
	       dataType:'json', 
	       cache:'false',
	       error: erryFunction,
	       success:function(data){
	    	   for(var i in data)
	    	   {
	    		   html2='<td><a href="./sysx/pingjian0.html?'+lei+'='+i+'" title="'+data[i].title+'">'+data[i].title+'</a></td><td><span>'+data[i].time+'</span></td> ';
	               $('.pj_table tbody').append('<tr></tr>');
	              var q=parseInt(i) + parseInt(d);
	              
	               $('.pj_table tbody tr').eq(q).html(html2);
	           } 
	    	  c = c+data.length;
	    
	       }
	   })
  }
		  
		    	
 
	function erryFunction() {
	    console.log("请求错误");
	}
	function succFunction(data) {
		 var i;
		 pjgzqh = Math.ceil(data.length/6);
		 if(data.length>6){
			 for(j=1;j <= pjgzqh;j++)
			 {
				 $('.pjgz_tz p').append('<a href="##">'+j+'</a>');	 
			 }
			 
		 } 
		for(i in data){	
			if(strs1==3){
				$('.E-a .c_top').text('通知公告');
				$('.c_right #changing2').text('通知公告');
				html3='<span  class="spana">您的当前位置：</span><span class="spanb"></span><i>/</i><a href="./home.html">湖南工程学院计算机与通信学院</a><i>/</i><a href="./pingjian.html?0&a=x0">评建专栏</a><i>/</i><a href="####">通知公告</a>';
				$('.E-a .c_p').html(html3);
				html1='<p class="s_p">'+'<a href="./sysx/pingjian0.html?tzgg='+i+'" title="'+data[i].title+'">'+data[i].title+'</a></p><p><span>'+data[i].time+'</span></p><p>'+data[i].jie+'...</p>';
				$('.pj_tz1').append('<li></li>');
				$('.pj_tz1 li').eq(i).html(html1);	
			}
			if(strs1==2){
				$('.E-a .c_top').text('新闻动态');
				$('.c_right #changing2').text('新闻动态');
				html3='<span  class="spana">您的当前位置：</span><span class="spanb"></span><i>/</i><a href="./home.html">湖南工程学院计算机与通信学院</a><i>/</i><a href="./pingjian.html?0&a=x0">评建专栏</a><i>/</i><a href="####">新闻动态</a>';
				$('.E-a .c_p').html(html3);
				html1='<p class="s_p">'+'<a href="./sysx/pingjian0.html?xwdt='+i+'" title="'+data[i].title+'">'+data[i].title+'</a></p><p><span>'+data[i].time+'</span></p><p>'+data[i].jie+'...</p>';
				$('.pj_tz1').append('<li></li>');
				$('.pj_tz1 li').eq(i).html(html1);
				
			}
			if(strs1==1){
				$('.E-a .c_top').text('评建工作');
				$('.c_right #changing2').text('评建工作');
				html3='<span  class="spana">您的当前位置：</span><span class="spanb"></span><i>/</i><a href="./home.html">湖南工程学院计算机与通信学院</a><i>/</i><a href="./pingjian.html?0&a=x0">评建专栏</a><i>/</i><a href="####">评建工作</a>';
				$('.E-a .c_p').html(html3);
				html1='<p class="s_p">'+'<a href="./sysx/pingjian0.html?pjgz='+i+'" title="'+data[i].title+'">'+data[i].title+'</a></p><p><span>'+data[i].time+'</span></p><p>'+data[i].jie+'...</p>';
				$('.pj_tz1').append('<li></li>');
				$('.pj_tz1 li').eq(i).html(html1);	 
			}	
		}
		$('.pj_tz1 li').hide();
			 $('.pj_tz1 li').eq(0).show()&$('.pj_tz1 li').eq(1).show()&$('.pj_tz1 li').eq(2).show()&$('.pj_tz1 li').eq(3).show()&$('.pj_tz1 li').eq(4).show()&$('.pj_tz1 li').eq(5).show();
		    	$('.pjgz_tz p').find('a').click(function(){
		    		var pjidx=$(this).index();
		    		 $('.pj_tz1 li').hide();
		    		 $('.pj_tz1 li').eq(pjidx*6+0).show()&$('.pj_tz1 li').eq(pjidx*6+1).show()&$('.pj_tz1 li').eq(pjidx*6+2).show()&$('.pj_tz1 li').eq(pjidx*6+3).show()&$('.pj_tz1 li').eq(pjidx*6+4).show()&$('.pj_tz1 li').eq(pjidx*6+5).show();
		    	});
	}
	 
  })//评建工作 