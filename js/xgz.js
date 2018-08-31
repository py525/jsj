$(function(){
  var url = location.search; //获取url中"?"符后的字串
  if (url.indexOf("?") != -1)
  {    //判断是否有参数
   var str = url.substr(1); //从第一个字符开始 因为第0个是?号 获取所有除问号的所有符串
   strs1 = str.substr(5,1); 
   if(strs1!=0){
	   url1='../servlet/student?a='+strs1;
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
    	pj(1,'0','xggk');
    	pj(2,c,'zzdq');
    	pj(3,c,'xsst');
    	pj(4,c,'jyzd');
    	pj(5,c,'kjcx');
    	pj(6,c,'txhd');
    }
  }
  
  function pj(url,d,lei){
	  $.ajax({ 
		   url:'../servlet/student?a='+url,
	       async:false,
	       type: "get",
	       dataType:'json', 
	       cache:'false',
	       error: erryFunction,
	       success:function(data){
	    	   for(var i in data)
	    	   {
	    		   html2='<td><a href="./sysx/sw0.html?'+lei+'='+i+'" title="'+data[i].title+'">'+data[i].title+'</a></td><td><span>'+data[i].time+'</span></td> ';
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
				$('.E-a .c_top').text('学习社团');
				$('.c_right #changing1').text('学习社团');
				html3='<span  class="spana">您的当前位置：</span><span class="spanb"></span><i>/</i><a href="./home.html">湖南工程学院计算机与通信学院</a><i>/</i><a href="./studentwork.html?0&a=x0">学生工作</a><i>/</i><a href="####">学习社团</a>';
				$('.E-a .c_p').html(html3);
				html1='<p class="s_p">'+'<a href="./sysx/sw0.html?xxst='+i+'" title="'+data[i].title+'">'+data[i].title+'</a></p><p><span>'+data[i].time+'</span></p><p>'+data[i].jie+'...</p>';
				$('.pj_tz1').append('<li></li>');
				$('.pj_tz1 li').eq(i).html(html1);	
			}
			if(strs1==2){
				$('.E-a .c_top').text('资助贷勤');
				$('.c_right #changing1').text('资助贷勤');
				html3='<span  class="spana">您的当前位置：</span><span class="spanb"></span><i>/</i><a href="./home.html">湖南工程学院计算机与通信学院</a><i>/</i><a href="./studentwork.html?0&a=x0">学生工作</a><i>/</i><a href="####">资助贷勤</a>';
				$('.E-a .c_p').html(html3);
				html1='<p class="s_p">'+'<a href="./sysx/sw0.html?zzdq='+i+'" title="'+data[i].title+'">'+data[i].title+'</a></p><p><span>'+data[i].time+'</span></p><p>'+data[i].jie+'...</p>';
				$('.pj_tz1').append('<li></li>');
				$('.pj_tz1 li').eq(i).html(html1);
				
			}
			if(strs1==1){
				$('.E-a .c_top').text('学工概况');
				$('.c_right #changing1').text('学工概况');
				html3='<span  class="spana">您的当前位置：</span><span class="spanb"></span><i>/</i><a href="./home.html">湖南工程学院计算机与通信学院</a><i>/</i><a href="./studentwork.html?0&a=x0">学生工作</a><i>/</i><a href="####">学工概况</a>';
				$('.E-a .c_p').html(html3);
				html1='<p class="s_p">'+'<a href="./sysx/sw0.html?xggk='+i+'" title="'+data[i].title+'">'+data[i].title+'</a></p><p><span>'+data[i].time+'</span></p><p>'+data[i].jie+'...</p>';
				$('.pj_tz1').append('<li></li>');
				$('.pj_tz1 li').eq(i).html(html1);	 
				
			}	
			if(strs1==6){
				$('.E-a .c_top').text('团学活动');
				$('.c_right #changing1').text('团学活动');
				html3='<span  class="spana">您的当前位置：</span><span class="spanb"></span><i>/</i><a href="./home.html">湖南工程学院计算机与通信学院</a><i>/</i><a href="./studentwork.html?0&a=x0">学生工作</a><i>/</i><a href="####">团学活动</a>';
				$('.E-a .c_p').html(html3);
				html1='<p class="s_p">'+'<a href="./sysx/sw0.html?txhd='+i+'" title="'+data[i].title+'">'+data[i].title+'</a></p><p><span>'+data[i].time+'</span></p><p>'+data[i].jie+'...</p>';
				$('.pj_tz1').append('<li></li>');
				$('.pj_tz1 li').eq(i).html(html1);	
			}
			if(strs1==5){
				$('.E-a .c_top').text('科技创新');
				$('.c_right #changing1').text('科技创新');
				html3='<span  class="spana">您的当前位置：</span><span class="spanb"></span><i>/</i><a href="./home.html">湖南工程学院计算机与通信学院</a><i>/</i><a href="./studentwork.html?0&a=x0">学生工作</a><i>/</i><a href="####">科技创新</a>';
				$('.E-a .c_p').html(html3);
				html1='<p class="s_p">'+'<a href="./sysx/sw0.html?kjcx='+i+'" title="'+data[i].title+'">'+data[i].title+'</a></p><p><span>'+data[i].time+'</span></p><p>'+data[i].jie+'...</p>';
				$('.pj_tz1').append('<li></li>');
				$('.pj_tz1 li').eq(i).html(html1);
				
			}
			if(strs1==4){
				$('.E-a .c_top').text('就业指导');
				$('.c_right #changing1').text('就业指导');
				html3='<span  class="spana">您的当前位置：</span><span class="spanb"></span><i>/</i><a href="./home.html">湖南工程学院计算机与通信学院</a><i>/</i><a href="./studentwork.html?0&a=x0">学生工作</a><i>/</i><a href="####">就业指导</a>';
				$('.E-a .c_p').html(html3);
				html1='<p class="s_p">'+'<a href="./sysx/sw0.html?jyzd='+i+'" title="'+data[i].title+'">'+data[i].title+'</a></p><p><span>'+data[i].time+'</span></p><p>'+data[i].jie+'...</p>';
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
	 
  })//学生工作