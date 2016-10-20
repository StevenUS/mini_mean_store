app.controller("customerController", function($scope, customerFactory){
    $scope.index = function(){
        customerFactory.show(function(data){
        $scope.customers = data;
        });
    };
    $scope.index();

    $scope.create = function(){
        customerFactory.create($scope.customer, function(){
            $scope.customer="";
            $scope.index();
            })
    };
    $scope.delete = function(id){
        customerFactory.delete(id, function(){
            $scope.index();
        });
    };

})
