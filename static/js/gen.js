/* Controllers */

function SocketIOGenCtrl($scope, $http) {
/* This stays on the Angular side */
    $scope.num = 125;
/* Starts with an empty list */
    $scope.result = [];

    var query = new io.connect('http://' + window.location.host);
    // Establish event handlers
    query.on('disconnect', function() {
        query.socket.reconnect();
    });

    // Query
    query.on('response', function(data) {
        $scope.$apply(function () {
            $scope.result.push(data);
        });
    });

    $scope.submit = function() {
        query.emit('query', $scope.num);
        
        $scope.sending = 'Sent ' + $scope.num + '...';
        $scope.num += 1;
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



    $scope.change_row_status_and_color = function (row) {
        // $scope.selectedRow = row;
        // $scope.doctor_list=$scope.doctors[row];
        // $scope.doctor_list.call_status="answered";
        // $scope.message_maintain= " ";
        $scope.selectedRow = row;
        $scope.doctor_list=$scope.result[0][row];
        $scope.doctor_list.call_status="answered";
        $scope.message_maintain= " ";
        // alert($scope.doctor_list);


    };
}
