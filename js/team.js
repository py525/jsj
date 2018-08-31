$(function(){
var url = location.search; //获取url中"?"符后的字串
if (url.indexOf("?") != -1)
{    //判断是否有参数
	var str = url.substr(1); 
	str1=str.substr(5,5);
$.ajax({ 
    url:"../../servlet/shizi",
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
	document.title = '教师风采—'+data[str1].name;
	html1='<img src="./images/'+data[str1].photo+'" width="200" height="200" border="0"><span>'+data[str1].name+'</span>'
	$('.te_name_tp ').html(html1);	
	console.log(data);
	html2='<tr><td>性别：'+data[str1].xingbie+'</td><td>民族:'+data[str1].minzu+'</td><td>出生地：'+data[str1].chusheng+'</td></tr><tr><td>学位：硕士</td><td>职务：'+data[str1].zhifu+'</td><td>所在单位：'+data[str1].danwei+'</td></tr>';
	$('.te_js2_1body table').append('<tbody></tbody>');
	$('.te_js2_1body table tbody').html(html2);
	html3=data[str1].jianjie;
	$('.te_js2_1body p').html(html3);
}
}
})