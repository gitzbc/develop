$(function(){
	//js获取项目根路径
	function getRootPath(){  
	    //获取当前网址，如： http://localhost:8083/uimcardprj/share/meun.jsp  
	    var curWwwPath=window.document.location.href;  
	    //获取主机地址之后的目录，如： uimcardprj/share/meun.jsp  
	    var pathName=window.document.location.pathname;  
	    var pos=curWwwPath.indexOf(pathName);  
	    //获取主机地址，如： http://localhost:8083  
	    var localhostPaht=curWwwPath.substring(0,pos);  
	    //获取带"/"的项目名，如：/uimcardprj  
	    var projectName=pathName.substring(0,pathName.substr(1).indexOf('/')+1);  
	    return(localhostPaht+projectName);  
	}
	
	$.ajax({
		type:'POST',
		url:getRootPath() + '/buyTicket/isLogin',
		success:function(message){
			if(message == 'no user'){
				$('#remindUserNotLoginModal').modal('show');
			}
			else{//登录才进行查找历史记录
				$.ajax({
					type:'POST',
					url:getRootPath() + '/buyTicket/buyTicketHistory',
					success:function(message){
						var str = '<table class="table table-striped table-bordered table-hover">';
						var str = str + '<tr>';
						var str = str + '<th>id</th>';
						var str = str + '<th>出发站点</th>';
						var str = str + '<th>到达站点</th>';
						var str = str + '<th>价格</th>';
						var str = str + '<th>购买日期</th>';
						var str = str + '<th>乘客id</th>';
						var str = str + '<th>出发时间</th>';
						var str = str + '<th>是否已经使用过</th>';
						var str = str + '<th>经过的线路</th>';
						var str = str + '<th>经过的站点数</th>';
						var str = str + '</tr>';
						for(var i in message){
							str = str + '<tr>';
							for(var j in message[i]){
								str = str + '<td>' + message[i][j] + '</td>';
							}
							str = str + '</tr>';
						}
						str = str + '</table>';
//						console.log(str);
						$('#show_buy_history').html(str);
					},
					error:function(){}
				});
			}
			
		},
		error:function(){}
	});
	
	//提醒用户没登录模态框点击确定
	$('#remind_user_not_login_ensure').click(function(){
		$('#remindUserNotLoginModal').modal('hide');
		$('#loginModal').modal('show');
	});
	//提醒用户没登录模态框点击取消
	$('#remind_user_not_login_cancel').click(function(){
		$('#remindUserNotLoginModal').modal('hide');
	});
});