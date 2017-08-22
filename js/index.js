
(function($){
    // 版权鼠标移入微信图标
    $(document).on("mouseover","[data-Evse=bquan]",function () {
       var imags = $(".home7_img");
       $this = $(this);
        imags.addClass("home7_img_a");
    });
    $(document).on("mouseout","[data-Evse=bquan]",function () {
        var imags = $(".home7_img");
        $this = $(this);
        imags.removeClass("home7_img_a");
    });

    $(document).on("click","[data-Evse=tzym]",function () {
        $this = $(this);
        window.location.href = "http://agent.xiaofeiwangguo.com";

    });


    
	//  $(".product_span_a").on("mouseover",function () {
	//      if($(".product_span_a").attr("bz") == "false"){
	// 	     $(".product_span_a").css("color","#fa2828");
	//      }
	//  });
	//
	// $(".product_span_a").on("mouseout",function () {
     //    if($(".product_span_a").attr("bz") == "false"){
     //        $(".product_span_a").css("color","#333");
     //    }else {
	//         $(".product_span_a").css("color","#fff");
     //    }
	// });
	//
	//
	//
	// $(".product_span_b").on("mouseover",function () {
	// 	if($(".product_span_b").attr("bz") == "false"){
	// 		$(".product_span_b").css("color","#fa2828");
	// 	}
	// });
	//
	// $(".product_span_b").on("mouseout",function () {
	// 	if($(".product_span_b").attr("bz") == "false"){
	// 		$(".product_span_b").css("color","#333");
	// 	}else {
	// 		$(".product_span_b").css("color","#fff");
	// 	}
	// });
	//
	//
	// function dces(obj,obj1,obj3) {
	//
	// 	$("#product_tele").html("消费者的最终选择")
	// 	$(obj1).attr("bz","true");
	// 	$(obj).attr("bz","false");
     //    $(obj).css("color","#333");
     //    $(obj1).css("color","#fff");
     //    $(obj3).animate({
     //        marginLeft:"-135px"
     //    },function () {
	//
	//
     //        //alert("该功能研发中")
     //    });
	// }
	// function dcess(obj,obj1,obj3) {
	// 	$("#product_tele").html("品牌联营&nbsp;&nbsp;汇通全球")
	// 	$(obj1).attr("bz","true");
	// 	$(obj).attr("bz","false");
	// 	$(obj).css("color","#333");
	// 	$(obj1).css("color","#fff");
	// 	$(obj3).animate({
	// 		marginLeft:"0px"
	// 	},function () {
	//
	// 	});
	// }
	
	
	$(".download_a").click(function () {
		
		//window.location.href = "安卓下载";
		alert("安卓app功能研发中")
		//dces(".p  roduct_span_b",".product_span_a",".product_div_span_a");
		
	});
	
	$(".download_p").click(function () {
		
		//window.location.href = "苹果下载";
		alert("苹果app能研发中")
		
		//dcess(".product_span_a",".product_span_b",".product_div_span_a");
	
	});
	
	
 
 
 
 
	
})(jQuery); 








