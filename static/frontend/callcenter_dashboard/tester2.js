<!DOCTYPE html>
<html lang="en" ng-app="call_queue">
<head>
	
	<!-- start: Meta -->
	<meta charset="utf-8">
	<title>Front-end Test</title>
	<meta name="description" content="Call Center test">
	<meta name="author" content="NL Ross">
	<!-- end: Meta -->

        <!--Angular-->
        <script src='http://ajax.googleapis.com/ajax/libs/angularjs/1.0.3/angular.js'></script>
        <!--End Angular-->
	<!--jQuery-->
        <script src="http://code.jquery.com/jquery-1.9.1.min.js"></script>   
        <script src="call_color_changing_function.js"></script>     
        <!--end jQuery-->

	<!-- start: Mobile Specific -->
<!--	<meta name="viewport" content="width=device-width, initial-scale=1">-->
	<!-- end: Mobile Specific -->
	
	<!-- start: CSS -->
	<link id="bootstrap-style" href="css/bootstrap.min.css" rel="stylesheet">
<!--	<link href="css/bootstrap-responsive.min.css" rel="stylesheet">-->
	<link id="base-style" href="css/style.css" rel="stylesheet">
<!--	<link id="base-style-responsive" href="css/style-responsive.css" rel="stylesheet">-->
	
	<!--[if lt IE 7 ]>
	<link id="ie-style" href="css/style-ie.css" rel="stylesheet">
	<![endif]-->
	<!--[if IE 8 ]>
	<link id="ie-style" href="css/style-ie.css" rel="stylesheet">
	<![endif]-->
	<!--[if IE 9 ]>
	<![endif]-->
	
	<!-- end: CSS -->
	

	<!-- The HTML5 shim, for IE6-8 support of HTML5 elements -->
	<!--[if lt IE 9]>
	  <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
	<![endif]-->
	<!-- start: Favicon -->
	<link rel="shortcut icon" href="img/favicon.ico">
	<!-- end: Favicon -->
	
		
		
		
</head>

<body>
	
								
	<!-- Header -->
	<div id="cc_header">
		<div class="navbar-inner">
			<div class="container">
			 
						<div id="header_logo" class="span3">
							<span class="header_hl1">L</span><span class="header_e">e</span><span class="header_hl2">Futur</span><span class="break"></span>
						</div>
						<div id="user_bar" class="span6">

							<h1>Logged In</h1><p id="user_id"><script type="text/javascript">
document.write ('<p><h4>Current time is:</h4> <span id="date-time">', new Date().toLocaleString(), '<\/span>.<\/p>')
if (document.getElementById) onload = function () {
	setInterval ("document.getElementById ('date-time').firstChild.data = new Date().toLocaleString()", 50)
}
</script>
<h4>Operator:</h4> Nathan L Ross <h4>Login:</h4>   <script language="javascript">
 <!--
 var today = new Date();
 document.write(today);
 //-->
 </script></p>
						</div>
						<div id="login_bar" class="span2 offset2">
							<button class="btn btn-danger">Log Out
							</button>
							</div>
						</div>
					</div>
				</div>
			
	
	<!-- end Header-->
	
		<div class="container">
			<div class="row-fluid">
				
		
				<div id="content" class="span12">
				<!-- start: Content -->
				
					<div class="row">
								<div class="box leftcol">
									<div class="box-header">
										<h2><i class="icon-user"></i>
										<span class="break"></span>
										Call Queue</h2>
									</div>
									 <div class="box-content h_300" ng-controller='doctor_info_controller'>
										<div id="call_queue">
								<!--				table header						-->
											<div id="queue_header" class="queue_row">
											<div class="queue_col1"><p>Caller/Business Name</p></div>
												<div class="queue_col2"><p>ACCT</p></div>
												<div class="queue_col3"><p>TK#</p></div>
												<div class="queue_col4"><p>DUR</p></div>
												<div class="queue_col5"><p>Status</p></div>				
											</div>
										
											<div class="queue_row" ng-repeat='doctor in doctors'| orderBy:"duration_of_call" >
												<div class="queue_col1" id="row_{{$index + 1}}" ng-click="change_row_status_and_color()"><p>{{doctor.doctors_name}}</p></div>
												<div class="queue_col2" id="row_{{$index + 1}}" ng-click="change_row_status_and_color()"><p>{{doctor.acct_number}}</p></div>
												<div class="queue_col3" id="row_{{$index + 1}}" ng-click="change_row_status_and_color()"><p>{{doctor.ticket_number}}</p></div>
												<div class="queue_col4" id="row_{{$index + 1}}" ng-click="change_row_status_and_color()"><p>{{doctor.duration_of_call}}</p></div>
												<div class="queue_col5" id="row_{{$index + 1}}" ng-click="test()"><input ng-model="doctor.call_status"></input></div>				
											</div>
										<!--	<div class="queue_row ended_call">
												<div class="queue_col1"><p>Layman PCS Services</p></div>
												<div class="queue_col2"><p>8202</p></div>
												<div class="queue_col3"><p>3</p></div>
												<div class="queue_col4"><p>4</p></div>
												<div class="queue_col5"><p>disconnected</p></div>				
											</div>
											<div class="queue_row selected_call">
												<div class="queue_col1"><p>Dr Chang Exchange</p></div>
												<div class="queue_col2"><p>8202</p></div>
												<div class="queue_col3"><p>3</p></div>
												<div class="queue_col4"><p>4</p></div>
												<div class="queue_col5"><p>ringing</p></div>				
											</div>
											<div class="queue_row">
												<div class="queue_col1"><p>Dr Chang Exchange</p></div>
												<div class="queue_col2"><p>8202</p></div>
												<div class="queue_col3"><p>3</p></div>
												<div class="queue_col4"><p>4</p></div>
												<div class="queue_col5"><p>ringing</p></div>				
											</div>
											<div class="queue_row">
												<div class="queue_col1"><p>Dr Chang Exchange</p></div>
	
												<div class="queue_col2"><p>8202</p></div>
												<div class="queue_col3"><p>3</p></div>
												<div class="queue_col4"><p>4</p></div>
												<div class="queue_col5"><p>ringing</p></div>				
											</div>
											<div class="queue_row">
												<div class="queue_col1"><p>Dr Chang Exchange</p></div>
												<div class="queue_col2"><p>8202</p></div>
												<div class="queue_col3"><p>3</p></div>
												<div class="queue_col4"><p>4</p></div>
												<div class="queue_col5"><p>ringing</p></div>				
											</div>
											<div class="queue_row">
												<div class="queue_col1"><p>Dr Chang Exchange</p></div>
												<div class="queue_col2"><p>8202</p></div>
												<div class="queue_col3"><p>3</p></div>
												<div class="queue_col4"><p>4</p></div>
												<div class="queue_col5"><p>ringing</p></div>				
											</div>
											<div class="queue_row">
												<div class="queue_col1"><p>Dr Chang Exchange</p></div>
												<div class="queue_col2"><p>8202</p></div>
												<div class="queue_col3"><p>3</p></div>
												<div class="queue_col4"><p>4</p></div>
												<div class="queue_col5"><p>ringing</p></div>				
											</div> -->
										</div>
								</div>
							</div>
						
						<div class="box rightcol">
							<div class="box-header">
								<h2>Account Information</h2>
								<div class="box-icon"><button class="btn btn-small btn-primary">Attachment</button></div>
							</div>
							
							<div class="box-content h_300" id="account_wrap" ng-controller="selected_info_controller">
								<div id="account_head">
										<div class="acct_row selected_call">
											<div id="acct_name"><h4>{{calls.doctors_name}}</h4></div>
											<div id="acct_number"><h4>{{calls.acct_number}}</h4></div>
										</div>
									</div>
									
									<div id="account_notes">
	
											<textarea name="account_info" id="account_info" readonly="yes">
											HOME {{calls.notes.home}} 
											CELL {{calls.notes.cell}}
											
											{{calls.notes.other_doctors}}
											
											Hrs:{{calls.notes.hours}} 												
											</textarea>
										</div>
										<form method="post" action="">
											<fieldset>
											<div class="acct_row" id="acct_opt">
											<div class="acct_col"> <label class="checkbox inline">
											<input type="checkbox">Ans</label></div>
											<div class="acct_col"><label class="checkbox inline">
											<input type="checkbox">Fax</label></div>
											<div class="acct_col"><label class="checkbox inline">
											<input type="checkbox">Mail</label></div>
											<div class="acct_col"><label class="checkbox inline">
											<input type="checkbox">Msg</label></div>
											<div class="acct_col"><label class="checkbox inline">
											<input type="checkbox">V/O</label></div>
											<div class="acct_col"><label class="checkbox inline">
											<input type="checkbox">Web</label></div>
										</div>
										
									</div>
							</div>
									
					</div>
					
					

					
				<hr>
				
				<div class="row">
						
							<div class="box fulcol">
								<div class="box-header">
								<h2>Message Maintain</h2>
								</div>
								<div class="box-content h_200">
									<div id="msg_maintain" class="span10">
										<div class="msg_row">
											<div class="msg_element"><label>Account Number: <input type="text" name="acct_number" value="8202" /></label></div>
											</div>
											
											<div class="msg_row">
											<div class="msg_element"><label>Message Date & Time: <input type="text" name="date_time" value="05/25/2013 11:25AM" /></label></div>
												<div class="msg_element"><label class="inline">
												<input type="checkbox">Pass: <input type="text" name="pass" id="msg_pass" /></label>
												</div>
												<div class="msg_element"><label class="inline">
												<input type="checkbox">Patch: <input type="text" name="patch" id="msg_patch" /></label>
												</div>
											</div>
											
										<div class="msg_row">
											<div class="msg_element"><label>Caller Name: <input type="text" name="caller_name" value="" /></label></div>
											<div class="msg_element"><label>Call Back #: <input type="text" size="11" name="callback_number" value="" /><input type="text" name="callback_ext" id="msg_ext" value="" size="6"  placeholder="Ext."/></label></div>
											<div class="msg_element"><label>Check # <input type="text" name="check_number" id="msg_check" value="" /></label></div>
											</div>
											
											<div class="msg_row">
												<div class="msg_element"><label class="inline">Content: <textarea id="msg_content"></textarea></label>
												</div>
											</div>
										
									</div>
									<div id="msg_buttons" class="span2 control-group">
										<div class="controls">
										<button class="btn btn-danger">Exit</button>
										<br /><br />
										<button class="btn">Top Msg</button>
										<br /><br />
										<button class="btn btn-info">Save</button>
										<button class="btn">Cancel</button>
									</div>
								</div>
								
								
							</div>
					
					</div>
				</div>
				
				<hr>
				
					<div class="row"> 
											<div class="box leftcol">
												<div class="box-header">
													<h2>Message List</h2>
												</div>
												 <div class="box-content h_300">
													<div id="msg_list">
											<!--				table header						-->
														<div id="msglist_header" class="msglist_row">
														<div class="msg_col1"><p>&nbsp;</p></div>
															<div class="msg_col2"><p>Date/Time</p></div>
															<div class="msg_col3"><p>Caller Name</p></div>
															<div class="msg_col4"><p>From</p></div>
															<div class="msg_col5"><p>Call Back No.</p></div>		
															<div class="msg_col6"><p>PA</p></div>		
															<div class="msg_col7"><p>PT</p></div>				
														</div>
														
													<div class="msglist_row">
													<div class="msg_col1"><p><i class="fa-icon-arrow-right"></i></p></div>
														<div class="msg_col2"><p>8/26/11 3:13PM</p></div>
														<div class="msg_col3"><p>Captain James T. Kirk</p></div>
														<div class="msg_col4"><p>Starship Enterprise</p></div>
														<div class="msg_col5"><p>622-1701</p></div>		
														<div class="msg_col6"><p><input type="checkbox" name="msg_pt" /></p></div>		
														<div class="msg_col7"><p><input type="checkbox" name="msg_pa" /></p></div>				
													</div>
													
													<div class="msglist_row">
													<div class="msg_col1"><p>&nbsp;</p></div>
														<div class="msg_col2"><p>&nbsp;</p></div>
														<div class="msg_col3"><p>&nbsp;</p></div>
														<div class="msg_col4"><p>&nbsp;</p></div>
														<div class="msg_col5"><p>&nbsp;</p></div>		
														<div class="msg_col6"><p><input type="checkbox" name="msg_pt" /></p></div>		
														<div class="msg_col7"><p><input type="checkbox" name="msg_pa" /></p></div>				
													</div>
													
													<div class="msglist_row">
													<div class="msg_col1"><p>&nbsp;</p></div>
														<div class="msg_col2"><p>&nbsp;</p></div>
														<div class="msg_col3"><p>&nbsp;</p></div>
														<div class="msg_col4"><p>&nbsp;</p></div>
														<div class="msg_col5"><p>&nbsp;</p></div>		
														<div class="msg_col6"><p><input type="checkbox" name="msg_pt" /></p></div>		
														<div class="msg_col7"><p><input type="checkbox" name="msg_pa" /></p></div>				
													</div>
													
													<div class="msglist_row">
													<div class="msg_col1"><p>&nbsp;</p></div>
														<div class="msg_col2"><p>&nbsp;</p></div>
														<div class="msg_col3"><p>&nbsp;</p></div>
														<div class="msg_col4"><p>&nbsp;</p></div>
														<div class="msg_col5"><p>&nbsp;</p></div>		
														<div class="msg_col6"><p><input type="checkbox" name="msg_pt" /></p></div>		
														<div class="msg_col7"><p><input type="checkbox" name="msg_pa" /></p></div>				
													</div>
													
													<div class="msglist_row">
													<div class="msg_col1"><p>&nbsp;</p></div>
														<div class="msg_col2"><p>&nbsp;</p></div>
														<div class="msg_col3"><p>&nbsp;</p></div>
														<div class="msg_col4"><p>&nbsp;</p></div>
														<div class="msg_col5"><p>&nbsp;</p></div>		
														<div class="msg_col6"><p><input type="checkbox" name="msg_pt" /></p></div>		
														<div class="msg_col7"><p><input type="checkbox" name="msg_pa" /></p></div>				
													</div>
													
													<div class="msglist_row">
													<div class="msg_col1"><p>&nbsp;</p></div>
														<div class="msg_col2"><p>&nbsp;</p></div>
														<div class="msg_col3"><p>&nbsp;</p></div>
														<div class="msg_col4"><p>&nbsp;</p></div>
														<div class="msg_col5"><p>&nbsp;</p></div>		
														<div class="msg_col6"><p><input type="checkbox" name="msg_pt" /></p></div>		
														<div class="msg_col7"><p><input type="checkbox" name="msg_pa" /></p></div>				
													</div>
													
													<div class="msglist_row">
													<div class="msg_col1"><p>&nbsp;</p></div>
														<div class="msg_col2"><p>&nbsp;</p></div>
														<div class="msg_col3"><p>&nbsp;</p></div>
														<div class="msg_col4"><p>&nbsp;</p></div>
														<div class="msg_col5"><p>&nbsp;</p></div>		
														<div class="msg_col6"><p><input type="checkbox" name="msg_pt" /></p></div>		
														<div class="msg_col7"><p><input type="checkbox" name="msg_pa" /></p></div>				
													</div>
													
													<div class="msglist_row">
													<div class="msg_col1"><p>&nbsp;</p></div>
														<div class="msg_col2"><p>&nbsp;</p></div>
														<div class="msg_col3"><p>&nbsp;</p></div>
														<div class="msg_col4"><p>&nbsp;</p></div>
														<div class="msg_col5"><p>&nbsp;</p></div>		
														<div class="msg_col6"><p><input type="checkbox" name="msg_pt" /></p></div>		
														<div class="msg_col7"><p><input type="checkbox" name="msg_pa" /></p></div>				
													</div>
														
													</div>
											</div>
										</div>
				
											<div class="box rightcol">
												<div class="box-header">
													<h2>Special Notes</h2>
													
												</div>
												
												<div class="box-content h_300" id="account_wrap">
																	<div id="special_notes">
									
																		<textarea name="special_info" id="special_info">
																		
																		</textarea>
																	</div>
																</div>
														</div>
												</div>
				
					</div>
				</fieldset>
			</form>
			
		
			<!-- end: Content -->
			</div><!--/#content.span10-->
		</div><!--/fluid-row-->
				
		
		
		<div class="clearfix"></div>
		
<!--		<footer>
			<p>
				<span style="text-align:left;float:left">&copy; <a href="http://clabs.co" target="_blank">creativeLabs</a> 2013</span>
				<span style="text-align:right;float:right">Powered by: <a href="#">Perfectum Dashboard</a></span>
			</p>

		</footer>-->
				
	</div><!--/.fluid-container-->

	<!-- start: JavaScript-->

		<script src="js/jquery-1.9.1.min.js"></script>
	<script src="js/jquery-migrate-1.0.0.min.js"></script>
	
		<script src="js/jquery-ui-1.10.0.custom.min.js"></script>
	
		<script src="js/jquery.ui.touch-punch.js"></script>
	
		<script src="js/bootstrap.min.js"></script>
	
		<script src="js/jquery.cookie.js"></script>
	
		<script src='js/fullcalendar.min.js'></script>
	
		<script src='js/jquery.dataTables.min.js'></script>

		<script src="js/excanvas.js"></script>
	<script src="js/jquery.flot.min.js"></script>
	<script src="js/jquery.flot.pie.min.js"></script>
	<script src="js/jquery.flot.stack.js"></script>
	<script src="js/jquery.flot.resize.min.js"></script>
	
		<script src="js/jquery.chosen.min.js"></script>
	
		<script src="js/jquery.uniform.min.js"></script>
		
		<script src="js/jquery.cleditor.min.js"></script>
	
		<script src="js/jquery.noty.js"></script>
	
		<script src="js/jquery.elfinder.min.js"></script>
	
		<script src="js/jquery.raty.min.js"></script>
	
		<script src="js/jquery.iphone.toggle.js"></script>
	
		<script src="js/jquery.uploadify-3.1.min.js"></script>
	
		<script src="js/jquery.gritter.min.js"></script>
	
		<script src="js/jquery.imagesloaded.js"></script>
	
		<script src="js/jquery.masonry.min.js"></script>
	
		<script src="js/jquery.knob.js"></script>
	
		<script src="js/jquery.sparkline.min.js"></script>

		<script src="js/custom.js"></script>

		<!-- end: JavaScript-->
	
</body>
</html>

