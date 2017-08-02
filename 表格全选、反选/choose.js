// js文件

$(function(){
	//获取对象
	var $getAll = $("#getAll");
	var $tb = $("tbody");
	var $cbs = $tb.find(":checkbox");

	// 全选事件
	$getAll.click(function(){
		$cbs = $tb.find(":checkbox");
		if($(this).prop("checked") === true){
			$cbs.prop("checked", true);
		}else{
			$cbs.prop("checked", false)
		}
	});

	//当所有项目都被选择时，全选按钮自动勾选
	$cbs.click(function(){
		$cbs = $tb.find(":checkbox");
		$cbs.length === $tb.find(":checkbox:checked").length ? 
			$getAll.prop("checked", true) :
			$getAll.prop("checked", false);
	});

	//学会了就把它去掉
	$("tbody a").click(function(){
		$(this).parent("td").parent("tr").remove();
	});

	//点击 学会了！ 按钮
	$(".btn>input").eq(0).click(function(){
		var checkedLen = $tb.find(":checkbox:checked").length;
		if( checkedLen <= 0){
			alert("请选择学会的内容！");
			return;
		}
		$tb.find(":checkbox:checked").parent("td").parent("tr").remove();
		$getAll.prop("checked", false);
	});

	//打开添加数据窗口
	$(".btn>input").eq(1).click(function(){
		$(".mask").show();
		$(".addData").show();
	});

	//关闭添加数据窗口
	$(".addData-title>span").click(function(){
		$(".mask").hide();
		$(".addData").hide();
	});

	//向表格添加数据
	$(".addData-btn>input").click(function(){
		var name = $(".addData-content-name>input").val();
		var teacher = $(".addData-content-teacher>input").val();
		if( name && teacher){
			var trHtml = "<tr>"
						+	"<td><input type='checkbox'></td>"
						+	"<td>" + name + "</td>"
						+	"<td>" + teacher + "</td>"
						+	"<td><a href='javascript:void(0)'>YES</a></td>"
						+"</tr>";
			$("tbody").append(trHtml);
			$(".mask").hide();
			$(".addData").hide();
		}
		else{
			alert("请输入学习内容和授课老师！");
		}
	});
})