$(function(){
	$.ajax({ 
	    url:"../servlet/shizi",
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
		for(i in data){
			html='<td ><a href="./leader/t_1.html?szdw='+i+'" title="'+data[i].name+'" target="_blank" >'+data[i].name+'</a></td><td>'+data[i].zhifu+'</td><td>1499776522@qq.com</td>'
			 $('.t_table tbody').append('<tr id="line_'+i+'" class="t_tr_box"></tr>');
             $('.t_table tbody tr').eq(i).html(html);	
		}
	}
	
})