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

    // 头部美食菜单点击事件
    var $list_food=$_food.children("li");
    var index_food;
    var $list_first=$(".content_right_first_li");
    $list_food.click(function(){
        index_food=$list_food.index(this);
        sessionStorage.setItem("skip_header_menu","page_header");
        sessionStorage.setItem("click_index",index_food);
    });
    // 头部美食菜单点击事件结束

    // 头部结束

    //内容开始

    // 内容分开效果
    var $left=$("#content .content_left");
    var $middle=$("#content .content_middle");
    $left.animate({left:"10"},1000);
    $middle.animate({left:"305px"},1000);
    // 内容分开效果结束

    //内容结束






// 尾部开始

    //如何点餐
    var $pic_footer_order=$("#footer .footer_nav_order");
    $pic_footer_order.click(function(){
        sessionStorage.setItem("skip_footer_order","page");
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