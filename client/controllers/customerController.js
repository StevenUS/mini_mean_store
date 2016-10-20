app.controller("customerController", function($scope, customerFactory){
    $scope.index = function(){
        customerFactory.show(function(data){
            $scope.customers = data;
        });
    };
    $scope.index();

    $scope.create = function(){
        for(var x in $scope.customers){
            if($scope.customer.name == $scope.customers[x].name){
                alert("Name has been taken");
                return;
            }
        }
        customerFactory.create($scope.customer, function(){
            console.log($scope.customer)
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
