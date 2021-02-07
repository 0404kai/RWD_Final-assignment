$(document).ready(function () {
    $('.burger').click(function (e) { 
        e.preventDefault();
        $('body').toggleClass('burger');
    });

    //滑動到一定位置再顯示 top 鍵
    var $pc = $(window);    
    $pc.scroll(function (){
        if ($pc.scrollTop() > 100){    
            $(".top").css('opacity','100');
        }   else{
            $(".top").css('opacity','0')
        };
    });

    //回到頂部
    $('.top').click(function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        },1000);
    });
});
