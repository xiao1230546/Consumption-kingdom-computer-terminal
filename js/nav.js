"use strict";

function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null)
        return unescape(r[2]);
    return null;
}
$(function(){

    // 声明变量
    var fl_w=$(".find_nav_list").width();
    var flb_w=$(".find_nav_left").width();
    var index=getQueryString("index");
    var li =$(".find_nav_list li").eq(index);
    var nav_w=$(li).width();
    $(".sideline").width(nav_w);
    var fnl_x = parseInt($(li).position().left);
    $(".sideline").css("left",fnl_x+"px");
	
	///////////////////////////
	
	var prevTop = 0,currTop = 0;
	if ($(window).scrollTop() >=110) {
		$("#naver").animate({
			height:'hide'
		})
	}
	if ($(window).scrollTop() <42) {
		$("#naver").animate({
			height:'show'
		})
	}
	var ass = null;
	$(window).scroll(function () {
		currTop = $(window).scrollTop();
		clearInterval(ass); //清楚定时器
		ass = setTimeout(function(){
			if (currTop < prevTop) { //判断小于则为向上滚动
				setTimeout(function(){
					$("#naver").animate({
						height:'show'
					})
				},100);
				
			} else {
				if ($(window).scrollTop() <42) {
					$("#naver").animate({
						height:'show'
					})
					
				}
				if ($(window).scrollTop() >=110) {
					$("#naver").animate({
						height:'hide'
					})
				}
			}
			setTimeout(function(){
				prevTop = currTop
				
			},0);
			
		},100)
		
		
  
		
	});
	
    
    
    
    
    
    
    
    
    
    // var nav=$(".nav"); //得到导航对象
    //
    // var win=$(window); //得到窗口对象
    //
    // var sc=$(document);//得到document文档对象。
    // var initTop = 0;
    //
    // var p=0,t=0;
    // var tr=true;
    // $(window).scroll(function(e){
    //
    //     if(tr==false){
    //         return;
    //     }
    //     tr=false;
    //     p = $(this).scrollTop();
    //
    //     if(t<p){//下滚
    //         if (sc.scrollTop() > 200) {
    //             $("#naver").animate({
    //                 height:'hide'
    //             })
    //         }else {
    //             $("#naver").animate({
    //                 height:'show'
    //             })
    //         }
    //     } else{//上滚
    //         $("#naver").animate({
    //             height:'show'
    //         })
    //         if (sc.scrollTop() <= 200) {
    //             $("#naver").animate({
    //                 height:'show'
    //             })
    //         }
    //
    //     }
    //
    //     console.log(t+'....'+p)
    //     // if(){
    //     //
    //     // }
    //     t = p;
    //     setTimeout(function(){t = p; tr=true},500);
    // });



// 鼠标移入导航栏
    $(".find_nav_list li").on('mouseover',function () {
        nav_w=$(this).width();
        $(".sideline").stop(true);
        $(".sideline").animate({left:$(this).position().left},300);
        $(".sideline").animate({width:nav_w});
        li.eq(index).addClass("find_nav_cur").siblings().removeClass("find_nav_cur");
        var fn_w = ($(".find_nav").width() - nav_w) / 2;
        var fnl_l;
        var fnl_x = parseInt($(this).position().left);
        if (fnl_x <= fn_w) {
            fnl_l = 0;
        } else if (fn_w - fnl_x <= flb_w - fl_w) {
            fnl_l = flb_w - fl_w;
        } else {
            fnl_l = fn_w - fnl_x;
        }
        $(".find_nav_list").animate({
            "left" : fnl_l
        }, 300);
        sessionStorage.left=fnl_l;
        var c_nav=$(this).find("a").text();
    });

    // 自定义
    $(".find_nav_list").on('touchmove', function (e) {
        var touch2 = e.originalEvent.targetTouches[0];
        var x2 = touch2.pageX;
        var y2 = touch2.pageY;
        if(ty_left + x2 - x1>=0){
            $(this).css("left", 0);
        }else if(ty_left + x2 - x1<=flb_w-fl_w){
            $(this).css("left", flb_w-fl_w);
        }else{
            $(this).css("left", ty_left + x2 - x1);
        }
        if(Math.abs(y2-y1)>0){
            e.preventDefault();
        }
    });

// 鼠标移出
    $(".find_nav_list li").on('mouseout', function(){
        if(index != $(this).index()){
            // console.log("回去")
            var nav_hq = $(".find_nav_list li").eq(index).position().left;
            var nav_wid =$(".find_nav_list li").eq(index).width();

            var nav_wcls = $(".find_nav_list li").eq(index)
            nav_w=nav_wid;
            $(".sideline").animate({left:nav_hq},300);

            $(".sideline").animate({width:nav_w});
            li.eq(index).addClass("find_nav_cur").siblings().removeClass("find_nav_cur");

        }else{
            // console.log("停下")
        }



    });


// 判断跳转
    if(index==null || index.length==0)
    {
        index = 0;
    }

    switch (index) {
        case 0:
            sessionStorage.pagecount = "首页";
            break;
        case 1:
            sessionStorage.pagecount = "产品下载";
            break;
        case 2:
            sessionStorage.pagecount = "公司资讯";
            break;
        case 3:
            sessionStorage.pagecount = "代理加盟";
            break;
        case 4:
            sessionStorage.pagecount = "联盟商家入口";
            break;
        case 5:
            sessionStorage.pagecount = "联系我们";
            break;
    }

    // 鼠标点击事件
    $(".find_nav_list li").on('click', function(){
        var c_nav=$(this).find("a").text();

        navName(c_nav);

    });



// 跳转
    function navName(c_nav) {
        switch (c_nav) {
            case "首页":
                window.location.href = "index.html?index=0";

                break;
            case "产品下载":
                 window.location.href="product.html?index=1";
                break;
            case "公司资讯":
                window.location.href = "Company.html?index=2";



                break;
            case "代理加盟":
                window.location.href = "agent.html?index=3";
                break;
            case "联盟商家入口":
                // window.location.href="Company.html?index=4";
                break;
            case "联系我们":

                window.location.href = "contactus.html?index=5";
                break;

        }
    }

});

