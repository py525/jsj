$(function () {
    $('.E-a').hide();
   function GetRequest() {
   var url = location.search; //获取url中"?"符后的字串
   if (url.indexOf("?") != -1) {    //判断是否有参数
   var str = url.substr(1); //从第一个字符开始 因为第0个是?号 获取所有除问号的所有符串
   strs = str.split("=");   //用等号进行分隔 （因为知道只有一个参数 所以直接用等号进分隔 如果有多个参数 要用&号分隔 再用等号进行分隔）     
   $('.E-a').eq(strs[0]).show();
   var title=['实验实训','科研设施','实验室','实习基地','学生实训室','科研|实验|实训活动'];
   var title1=['学生工作','学工概况','资助贷款','学习社团','就业指导','科技创新','团学活动'];
   $("#changing").text(title[strs[0]]);
   $("#changing1").text(title1[strs[0]]);
   if(strs==6)
   {
    $('.s_body .s_tz').eq(0).show().siblings().hide();
    $('.E-a .sw_tz').find('a').click(function(){
       var swidx = $(this).index();
       $('.s_body .s_tz').eq(swidx).show().siblings().hide();
    })
   }
}
}
GetRequest();
// 实验实训主导航  学生工作

    

   

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
            play();
            //轮播图

 
  /*导航栏*/   
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
}); 








/*领导切换*/
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
});



/*测导航颜色特效*/
$('.c_rp_menu li').hover(function(){
    $(this).find('a').css({'border-left':'5px solid #5876a2' });
    $(this).find('a').css({'text-decoration':'underline'});
},function(){
    $(this).find('a').css({'border-left':'' });
    $(this).find('a').css({'text-decoration':'none'});
})

//教务教学切换
$('.jw_nei').hide();
$('.jw_nei').eq(0).show();
$('.jw_nei_c ul li').click(function(){
    var j_idx=$(this).index();
   // console.log(j_idx);
    $('.jw_nei').eq(j_idx).show().siblings().hide();
});

//教务教学字体切换
$('.size').find('a').click(function(){
    var size=$(this).index();
    var sizea=size*2+14;
    $('.jw_cont p').css({'font-size':sizea});
})

//科学教研
$('.r_content').eq(0).show().siblings().hide();

$('.c_p').find('.c_kd').mouseenter(function(){
    $(this).addClass('c_kh').siblings().removeClass('c_kh');
    $(this).click(function(){
         var ridx=$(this).index()-6;
    $('.r_content').eq(ridx).show().siblings().hide();
    })
});


    






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