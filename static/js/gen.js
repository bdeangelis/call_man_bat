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
    $scope.change_row_status_and_color = function (row) {
        // $scope.selectedRow = row;
        // $scope.doctor_list=$scope.doctors[row];
        // $scope.doctor_list.call_status="answered";
        // $scope.message_maintain= " ";
        $scope.selectedRow = row;
        $scope.doctor_list=$scope.result[0][row];
        // alert($scope.doctor_list);


    };
}
