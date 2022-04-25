$(function () {
    $(".slider").slick({
        arrows:true,
        prevArrow:'<img src="img/top/top-voice/voice_prev.svg" class="prev-arrow">',
        nextArrow:'<img src="img/top/top-voice/voice_next.svg" class="next-arrow">',
        slidesTOShow:3,
        slidesToScroll:1,
        centerMode:true,
        centerPadding:"15%",
        variableWidth:true,
    });
    $(".slider2").slick({
        arrows:true,
        prevArrow:'<img src=img/page-course/tab/tab-jr/slider/mission_prev.svg class="prev-arrow">',
        nextArrow:'<img src=img/page-course/tab/tab-jr/slider/mission_next.svg class="next-arrow">',
        slidesTOShow:3,
        slidesToScroll:1,
        centerMode:true,
        centerPadding:"15%",
        variableWidth:true,
        autoplay:true,
        speed:2000,
        pauseOnHover:true,
    });
    $(".accordion .content").hide();
    $(".menu").on("click",function(){
        $(this).next().slideToggle();
    });
    var headerheight=$("header").outerHeight();
    var urlHash=location.hash;
    if(urlHash) {
        $('body,html').stop().scrollTop(0);
        setTimeout(function(){
            var target = $(urlHash);
            var position = target.offset().top - headerheight;
            $('body,html').stop().animate({scrollTop:position}, 500);
            }, 100);
    }
    $('a[href*="#"]').click(function () {
        var speed = 400;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? "html" : href);
        var position = target.offset().top -headerheight;
        $("body,html").animate({ scrollTop: position }, speed, "swing");
        return false;
    });
    $(function(){
        $('.tab-item').click(function(){
            $('.active').removeClass('active');
            $(this).addClass('active');
            $('.show').removeClass('show');
            const index=$(this).index();
            $('.tab-content').eq(index).addClass('show');
        })
    });
    $('.sp-head .right').on('click',function(){
        $('.sp-head-content').toggleClass('active');
        $('.menu-bg').toggleClass('active');
    });
    $('.sp-head-content .button').on('click',function(){
        $('.sp-head-content').toggleClass('active');
        $('.menu-bg').toggleClass('active');
    });
  });