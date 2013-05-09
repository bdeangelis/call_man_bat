//This initiates the call_queue name space
var call_queue = angular.module('call_queue', []); 

//Referneces the call_queue namespace and adds the controller
call_queue.controller('doctor_info_controller',          
function ($scope, $http) {
//make tabs work
	$scope.selectedTab = 1;
//using http to get the json file info and pass it to the view as doctors
    $http.get('../test.json').success(function(data, status, headers, config){
        $scope.doctors = data;});
//changing the class to selected_row using ng-class in the view and calling this function with ng-click
    $scope.change_row_status_and_color = function (row) {
        $scope.selectedRow = row;
        $scope.doctor_list=$scope.doctors[row];
        $scope.doctor_list.call_status="answered";
        $scope.message_maintain= " ";


    };
//adding a new note
    $scope.add_message = function () {
        $scope.doctor_list.messages.push({"date_and_time": $scope.message_date_and_time,
                "caller_name": $scope.message_caller_name,
                "from": $scope.message_from,
                "call_back_number": $scope.message_call_back_number,
                "message_pass": $scope.message_pass,
                "msg_pa": $scope.msg_pa,
                "message_patch": $scope.message_patch,
                "msg_pt": $scope.msg_pt,
   		        "call_back_ext": $scope.message_call_back_ext,
   		        "check_number":$scope.message_check_number,
                "content": $scope.message_content

	});
        $scope.message_date_and_time=" ";
        $scope.message_caller_name=" ";
        $scope.message_from=" ";
        $scope.message_pass="";
        $scope.message_patch="";
        $scope.message_call_back_number=" ";
        $scope.message_check_number=" ";
        $scope.message_call_back_ext=" ";
   	    $scope.message_check_number=" ";
        $scope.message_content=" ";

    };


//changing the selected row to status on hold when the row is double clicked
    $scope.on_hold = function (row) {
        $scope.doctor_list.call_status="on hold";

    };

//select message list item and display in message maintain area
    $scope.show_row= function(message_row){
        $scope.selected_message_row=(message_row);
        var selected_message = $scope.selected_message_row
        $scope.message_maintain=$scope.doctor_list.messages[selected_message];
    };
//display index0 of message list
    $scope.display_index0_message = function(){
        $scope.message_maintain=$scope.doctor_list.messages[0];
        $scope.selected_message_row=[0];
    };
   $scope.exit= function(){
       alert("exiting");
   }
   $scope.message_cancel= function(){
       var clear_form_info;
       clear_form_info=confirm("Are you sure you want to cancel?");
       if (clear_form_info==true){
        $scope.message_date_and_time=" ";
        $scope.message_caller_name=" ";
        $scope.message_from=" ";
        $scope.message_pass="";
        $scope.message_patch="";
        $scope.message_call_back_number=" ";
        $scope.message_check_number=" ";
        $scope.message_call_back_ext=" ";
   	    $scope.message_check_number=" ";
        $scope.message_content=" ";
        };   };


});


