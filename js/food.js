$(function(){
    // 头部开始

    // 头部导航二级菜单
    var $food=$("#header_nav_food");
    var $_food=$(".header_nav_food");
    $food.hover(function(){
        $_food.css("display","block");
    },function(){
        $_food.css("display","none");
    }).trigger("mouseleave");
    // 头部导航二级菜单结束

    var $list_food=$_food.children("li");
    var $list_first=$(".content_right_first_li");
    var $list_a=$list_first.children("a");

    // 内容右侧菜单效果  因为头部菜单要用click事件
    var $container=$("#content").find(".content_right_container");
    var $list_pic=$container.find("li:not(.content_right_slide_li)");
    var $content_left=$("#content .content_left");
    var $pic=$content_left.children().children("li:not(:first)");
    var flag=true,index;
    $list_a.click(function(){
        $(this).parent().siblings().children("a").css("color","#7DC854");
        $(this).parent().siblings().children(".content_right_hidden").slideUp();
        $(this).parent().children(".content_right_hidden").slideToggle();
        if($(this).css("color")=="rgb(52, 154, 72)"){
            if($(this).siblings().is("ul")){
                $(this).css("color","#7DC854");
            }
        }else {
            if ($(this).css("color") == "rgb(125, 200, 84)") {
                $(this).css("color", "#349A48");
            }
        }
    });
    $list_pic.click(function(){
        index=$list_pic.index(this);
        var $content_left_first=$(".content_left_first");
        $content_left_first.hide();
        $pic.eq(index).show().siblings().hide();
        $(this).children("a").addClass("select").parent().siblings().children("a").removeClass("select");
        // alert($content_left.children().children("li:last").is(":visible"));
        if($content_left.children().children("li:last").is(":visible")) {
            $index_order.eq(0).click();
        }
    });
    // 内容右侧菜单效果结束


    // 头部美食菜单点击事件
    var index_food;
    var skip_header_menu=sessionStorage.getItem("skip_header_menu");
    var skip_index=sessionStorage.getItem("click_index");
    if(skip_header_menu=='page_header'){
        clickMenu(skip_index);
        sessionStorage.setItem("skip_header_menu","");
    }
    $list_food.click(function(){
        index_food=$list_food.index(this);
        if($("title").html()=="美食与营养"){
            clickMenu(index_food);
        }
    });
    function clickMenu(index){
        if($list_first.eq(index).children().is("ul")){
            $list_first.eq(index).children("a").click();
            $list_first.eq(index).children("ul").children(":first").click();
        }else{
            $list_first.eq(index).children("a").click();
        }
    }
    // 头部美食菜单点击事件结束
    // 头部结束

    // 内容开始

    // 如何点餐效果
    var $pic_order = $(".content_left_container_last_div_pic");
    var $list_order = $pic_order.children().children("li");
    // alert($list_order.length);
    var $index_order = $(".content_left_container_last_div_index").find("a");
    // alert($index_order.length);
    var $next_order = $(".content_left_container_last_div_next");
    var $prev_order = $(".content_left_container_last_div_prev");
    var index_order;
    $index_order.click(function () {
        index_order = $index_order.index(this);
        startMove(index_order);
        next();
        prev();
    }).eq(0).click();
    $next_order.click(function () {
        prev();
        if (index_order == $list_order.length - 1) {
            $(this).css("display", "none");
        } else {
            index_order++;
            startMove(index_order);
        }
    });
    $prev_order.click(function () {
        next();
        if (index_order == 0) {
            $(this).css("display", "none");
        } else {
            index_order--;
            startMove(index_order);
        }

    });

    function next() {
        if (index_order == 6) {
            $next_order.css("display", "none");
        } else {
            $next_order.css("display", "block");
        }
    }

    function prev() {
        if (index_order == 0) {
            $prev_order.css("display", "none");
        } else {
            $prev_order.css("display", "block");
        }
    }

    function startMove(index) {
        $list_order.eq(index).show().siblings().hide();
    }
    // 如何点餐效果结束

    // 内容结束

    // 尾部开始

    //如何点餐
    var $pic_footer_order=$("#footer .footer_nav_order");
    var skip_footer_order= sessionStorage.getItem("skip_footer_order");
    if(skip_footer_order=='page'){
        $list_a.eq($list_a.length-1).click();
        sessionStorage.setItem("skip_footer_order","");
    }
    $pic_footer_order.click(function(event){
        event=event||window.event;
        if($("title").html()=="美食与营养"){
            event.preventDefault();
            $list_a.eq($list_a.length-1).click();
        }
    });
    // 如何点餐结束

    //促销活动
    var $pic_activity=$("#footer .footer_nav_activity");
    $pic_activity.click(function(){
        $(this).find("img").click();
    });
    //促销活动结束

    // 微信图片
    var $pic_code=$("#footer .footer_nav_code");
    var $pic_weixin=$("#footer .footer_nav_weixin");
    $pic_weixin.hover(function(){
        $pic_code.show();
    },function(){
        $pic_code.hide();
    }).triggerHandler("mouseleave");
    // 微信图片结束

    // 尾部结束
});