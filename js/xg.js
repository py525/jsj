var url = location.search; //获取url中"?"符后的字串
if (url.indexOf("?") != -1)
{    //判断是否有参数
	var str = url.substr(1); //从第一个字符开始 因为第0个是?号 获取所有除问号的所有符串
    if(str.substr(0,4)=='xxst')
    {
    	url1='../../servlet/student?a=3';
    }
    if(str.substr(0,4)=='zzdq')
    {
	    url1='../../servlet/student?a=2';
    }
    if(str.substr(0,4)=='xggk')
    {
	    url1='../../servlet/student?a=1'; 
	}
    if(str.substr(0,4)=='txhd')
    {
    	url1='../../servlet/student?a=6';
    }
    if(str.substr(0,4)=='kjcx')
    {
	    url1='../../servlet/student?a=5';
    }
    if(str.substr(0,4)=='jyzd')
    {
	    url1='../../servlet/student?a=4'; 
	}
   
   $.ajax({ 
	   url:url1,
	   async:true,
	   type: "get",
	   dataType:'json', 
	   cache:'false',
	   error: erryFunction,
	   success: succFunction
	   });
   function erryFunction() { 
	   alert("请求错误");
	   }
   function succFunction(data) {
				 tzstr=str.charAt(5);
				 if(str.substr(0,4)=='xggk'){
					 var pjc_p='<span  class="spana">您的当前位置：</span>'+'<span class="spanb"></span><i>/</i>'
					 +'<a href="../home.html">湖南工程学院计算机与通信学院</a><i>/</i>'+'<a href="../studentwork.html?0&a=x0">学生工作</a>'
					 +'<i>/</i><a href="../studentwork.html?1&a=x1">学工概况</a><i>/</i>'
					 +'<a href="####">'+data[tzstr].title+'</a>';
				 }
				 if(str.substr(0,4)=='zzdq')
					 {
					 var pjc_p='<span  class="spana">您的当前位置：</span>'+'<span class="spanb"></span><i>/</i>'
					 +'<a href="../home.html">湖南工程学院计算机与通信学院</a><i>/</i>'+'<a href="../studentwork.html?0&a=x0">学生工作</a>'
					 +'<i>/</i><a href="../studentwork.html?1&a=x2">资助贷勤</a><i>/</i>'
					 +'<a href="####">'+data[tzstr].title+'</a>';
					 }
				 if(str.substr(0,4)=='xxst')
				 {
				 var pjc_p='<span  class="spana">您的当前位置：</span>'+'<span class="spanb"></span><i>/</i>'
				 +'<a href="../home.html">湖南工程学院计算机与通信学院</a><i>/</i>'+'<a href="../studentwork.html?0&a=x0">学生工作</a>'
				 +'<i>/</i><a href="../studentwork.html?1&a=x3">学习社团</a><i>/</i>'
				 +'<a href="####">'+data[tzstr].title+'</a>';
				 }
				 if(str.substr(0,4)=='jyzd'){
					 var pjc_p='<span  class="spana">您的当前位置：</span>'+'<span class="spanb"></span><i>/</i>'
					 +'<a href="../home.html">湖南工程学院计算机与通信学院</a><i>/</i>'+'<a href="../studentwork.html?0&a=x0">学生工作</a>'
					 +'<i>/</i><a href="../studentwork.html?1&a=x4">就业指导</a><i>/</i>'
					 +'<a href="####">'+data[tzstr].title+'</a>';
				 }
				 if(str.substr(0,4)=='kjcx')
					 {
					 var pjc_p='<span  class="spana">您的当前位置：</span>'+'<span class="spanb"></span><i>/</i>'
					 +'<a href="../home.html">湖南工程学院计算机与通信学院</a><i>/</i>'+'<a href="../studentwork.html?0&a=x0">学生工作</a>'
					 +'<i>/</i><a href="../studentwork.html?1&a=x5">科技创新</a><i>/</i>'
					 +'<a href="####">'+data[tzstr].title+'</a>';
					 }
				 if(str.substr(0,4)=='txhd')
				 {
				 var pjc_p='<span  class="spana">您的当前位置：</span>'+'<span class="spanb"></span><i>/</i>'
				 +'<a href="../home.html">湖南工程学院计算机与通信学院</a><i>/</i>'+'<a href="../studentwork.html?0&a=x0">学生工作</a>'
				 +'<i>/</i><a href="../studentwork.html?1&a=x6">团学活动</a><i>/</i>'
				 +'<a href="####">'+data[tzstr].title+'</a>';
				 }
				 
				 $('.c_left .c_p ').html(pjc_p);
				 $('.c_content h3').html(data[tzstr].title);
				 var pj_jwtop='<p><span >发布时间：'+data[tzstr].time+' </span><span>作者： 信息发布员 </span><span>来源：未知 </span><span>点击：155 </span>'+'<span class="size" >字号：<a href="##">大</a><a href="##">中</a><a href="##">小</a></span></p>';
				 $('.jw_top').html(pj_jwtop);
				 $('.jw_cont .jw_neir').html('<pre class="pjpre">'+data[tzstr].neirong+'</pre>');			
		    	/*console.log(data);*/
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
		   for(i=0;i<6;i++)
    	   {
			   html1='<p><a href="./pingjian0.html?tzgg='+i+'" title="'+data[i].title+'">'+data[i].title+'</a></p>';
			   $('#notice').append('<li></li>');
				$('#notice li').eq(i).html(html1);	
    	   }   
	   }
	   });
		}