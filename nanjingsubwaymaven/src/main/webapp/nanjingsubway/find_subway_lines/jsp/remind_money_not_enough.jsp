<%@page contentType="text/html; charset=UTF-8" %>
	<!-- 提醒用户余额不足模态框 -->
	<!-- 模态声明，show 表示显示 -->
	<div class="modal fade" tabindex="-1" id="remindMoneyNotEnoughModal" >
		<!-- 窗口声明 -->
		<div class="modal-dialog ">
				<!-- 内容声明 -->
			<div class="modal-content">
				<!-- 头部 -->
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal"><span>&times;</span></button>
					<img alt="用户不存在" src="nanjingsubway/index/img/warn.jpg" class="show_user_login_error_img">
					<span class="modal-title">您的余额不足</span>
				</div>
				<!-- 主体 -->
				<div class="modal-body">
					<div class="container-fluid">
						<div class="row">
									<strong>请您先进行充值再进行购买操作</strong>
						</div>
					</div>

				</div>
				<!-- 注脚 -->
				<div class="modal-footer">
					<button type="button" class="btn btn-default" id="remind_money_not_enough_ensure">确定</button>
					<button type="button" class="btn btn-primary" id="remind_money_not_enough_cancel">取消</button>
				</div>
			</div>
		</div>
	</div>