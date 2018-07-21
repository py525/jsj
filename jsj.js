$(function () {
            var container = $('#container');
            var list = $('#list');
            var prev = $('.prev');
            var next = $('.next');
            var index = 1;
            var len = 3;
            var interval = 3600;
            var timer;
            container.mouseover(function(){
               prev.css({'opacity':1,'fiflt':'alpha(opacity=100)'});
               next.css({'opacity':1,'fiflt':'alpha(opacity=100)'});
            });
              container.mouseout(function(){
               prev.css({'opacity':0,'fiflt':'alpha(opacity=100)'});
               next.css({'opacity':0,'fiflt':'alpha(opacity=100)'});
            });
            function animate (offset) {
                var left = parseInt(list.css('left')) + offset;
                if (offset>0) {
                    offset = '+=' + offset;
                }
                else {
                    offset = '-=' + Math.abs(offset);
                }
                list.animate({'left': offset}, 560, function () {
                    if(left > -200){
                        list.css('left', -1120 * len);
                    }
                    if(left < (-1120 * len)) {
                        list.css('left', -1120);
                    }
                });
            }

            function play() {
                timer = setTimeout(function () {
                    next.trigger('click');
                    play();
                }, interval);
            }
            function stop() {
                clearTimeout(timer);
            }

            next.bind('click', function () {
                if (list.is(':animated')) {
                    return;
                }
                if (index == 3) {
                    index = 1;
                }
                else {
                    index += 1;
                }
                animate(-1120);
            });

            prev.bind('click', function () {
                if (list.is(':animated')) {
                    return;
                }
                if (index == 1) {
                    index = 3;
                }
                else {
                    index -= 1;
                }
                animate(1120);
            });
            container.hover(stop, play);
            play();//轮播图

    
  $('#ul1 li').hover(function(){
    $(this).children(0).css({'background-color':'#5876a2'});
    $('#ul1 li').not($(this)).css({'background-color':''});
    $(this).find('ol').stop(true,false).slideDown('slow');
    $(this).find('ol').slideDown("slow");

},function(){ 
    $(this).children(0).css({'background-color':''});
    $('#ul1 li').not($('.active')).css({'background-color':''});
    $(this).find('ol').stop(true,true).slideUp('slow');
    $(this).find('ol').slideUp('slow');
}); /*导航栏*/









$('.l_name_w').click(function(){
   
  $('.ld_wb').show();
});
$('.l_name_wjw').click(function(){ 
   $('.ld_wb1').show();
});
$('.ld_wb_a').click(function(){
  
   $('.ld_wb').hide()&$('.ld_wb1').hide()&$('.ld_wb2').hide()&$('.ld_wb3').hide()&$('.ld_wb4').hide();

});
$('.l_name_tzh').click(function(){
   $('.ld_wb2').show();
});

$('.l_name_zzq').click(function(){
   $('.ld_wb3').show();
});
$('.l_name_hh').click(function(){
   $('.ld_wb4').show();
});/*领导切换*/








$('.c_rp_menu li').hover(function(){
    $(this).find('a').css({'border-left':'5px solid #5876a2' });
    $(this).find('a').css({'text-decoration':'underline'});
},function(){
    $(this).find('a').css({'border-left':'' });
    $(this).find('a').css({'text-decoration':'none'});
})/*测导航*/

page();/*跳页*/
function page(){
 var pageSize = 10;    //每页显示的记录条数
             var curPage=0;        //当前页
             var lastPage;        //最后页
             var direct=0;        //方向
            var len;            //总行数
            var page;            //总页数
            var begin;
            var end;    
            $(document).ready(function display(){   
                len =$(".t_table tr").length ;    // 求这个表的总行数，剔除第一行介绍
                page=len % pageSize==0 ? len/pageSize : Math.floor(len/pageSize)+1;//根据记录条数，计算页数
                // alert("page==="+page);
                curPage=1;    // 设置当前为第一页
                displayPage(1);//显示第一页

                document.getElementById("btn0").innerHTML="共29条  " + curPage + "/" + page + " 页 ";    // 显示当前多少页
           $("#first").click(function firstPage(){    // 首页
                    curPage=1;
                    direct = 0;
                    displayPage();
                });
                $(".t_prev").click(function frontPage(){    // 上一页
                    direct=-1;
                    displayPage();
                });
                $(".t_next").click(function nextPage(){    // 下一页
                    direct=1;
                    displayPage();
                });
                $(".last").click(function lastPage(){    // 尾页
                    curPage=page;
                    direct = 0;
                    displayPage();
                });
                $("#gotopagebut").click(function changePage(){    // 转页
                    curPage=document.getElementById("gopage").value * 1;
                    if (!/^[1-9]\d*$/.test(curPage)) {
                        alert("请输入正整数");
                        return ;
                    }
                    if (curPage > page) {
                        alert("超出数据页面");
                        return ;
                    }
                    direct = 0;
                    displayPage();
                });
            });
            function displayPage(){
                if(curPage <=1 && direct==-1){
                    direct=0;
                    alert("已经是第一页了");
                    return;
                } else if (curPage >= page && direct==1) {
                    direct=0;
                    alert("已经是最后一页了");
                    return ;
                }
                lastPage = curPage;

                // 修复当len=1时，curPage计算得0的bug
                if (len > pageSize) {
                    curPage = ((curPage + direct + len) % len);
                } else {
                    curPage = 1;
                }    
                document.getElementById("btn0").innerHTML="共29条 " + curPage + "/" + page + " 页    每页 ";        // 显示当前多少页
                begin=(curPage-1)*pageSize + 1;// 起始记录号
                end = begin + 1*pageSize - 1;    // 末尾记录号     
                if(end > len ) end=len;
                $(".t_table tr").hide();    // 首先，设置这行为隐藏
                $(".t_table tr").each(function(i){    // 然后，通过条件判断决定本行是否恢复显示
                    if((i>=begin && i<=end) || i==0 )//显示begin<=x<=end的记录
                        $(this).show();
                });
             }
}




function fun_ssgn(){
        var ssnr=$("#ssnr").val();
        var ssfs="web";
        if($("#ssfs_people").attr("checked")){
            ssfs="people";
        }
        if(ssnr!="" && ssnr!="请输入您要查询的关键字"){
            //window.location.href="http://www.hnie.edu.cn:80/website/sousuo.jsp?ssfs="+ssfs+"&ssnr="+ssnr;
            window.location.href="http://www.hnie.edu.cn:80/website/sousuo.jsp?ssnr="+ssnr;
        }
    }
    
    function fu_keyup(e){
        if(e && e.keyCode==13){ // enter 键
            fun_ssnr();
        }
    }

        });