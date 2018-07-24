$(function () {
    $('.E-a').hide();
   function GetRequest() {
   var url = location.search; //获取url中"?"符后的字串
   if (url.indexOf("?") != -1) {    //判断是否有参数
   var str = url.substr(1); //从第一个字符开始 因为第0个是?号 获取所有除问号的所有符串
   strs = str.split("=");   //用等号进行分隔 （因为知道只有一个参数 所以直接用等号进分隔 如果有多个参数 要用&号分隔 再用等号进行分隔）     
   $('.E-a').eq(strs[0]).show();
   var title=['实验实训','科研设施','实验室','实习基地','学生实训室','科研|实验|实训活动'];
   $("#changing").text(title[strs[0]]);
}
}
GetRequest();
// 实验实训主导航

    $('.c_rp_menu li').find('a').click(function(){
        idx=$(this).parent().parent().index();
        $('.E-a').eq(idx).show();
        $('.E-a').not($('.E-a').eq(idx)).hide();
        var title=['实验实训','科研设施','实验室','实习基地','学生实训室','科研|实验|实训活动'];
        $("#changing").text(title[idx]);
   
})  /*侧导航栏-实验实训*/
   

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