app.controller("dashController", function($scope, customerFactory, productFactory, orderFactory){
    var date = new Date();
    //order limits
    $scope.orderLimit = 3;
    $scope.increaseOrderLimit = function(){
        if($scope.orderLimit < $scope.orders.length)
            $scope.orderLimit += 1;
        return;
    }
    $scope.decreaseOrderLimit = function(){
        if($scope.orderLimit > 1)
            $scope.orderLimit -= 1;
        return;
    }
    //product limits
    $scope.productLimit = 5;
    $scope.increaseProductLimit = function(){
        if($scope.productLimit < $scope.products.length)
            $scope.productLimit += 1;
        return;
    }
    $scope.decreaseProductLimit = function(){
        if($scope.productLimit > 1)
            $scope.productLimit -= 1;
        return;
    }
    //customer limits
    $scope.customerLimit = 3;
    $scope.increaseCustomerLimit = function(){
        if($scope.customerLimit < $scope.customers.length)
            $scope.customerLimit += 1;
        return;
    }
    $scope.decreaseCustomerLimit = function(){
        if($scope.customerLimit > 1)
            $scope.customerLimit -= 1;
        return;
    }
    //not needed in this application. This generates the epoch time in seconds
    //$scope.timenow = Math.floor(new Date().getTime()/1000);

    $scope.toEpoch = function(date){
        var orderDate = Math.floor(new Date(date).getTime()/1000);
        return orderDate
    }

    $scope.showCustomers = function(){
        customerFactory.show(function(data){
            $scope.customers = data;
        })
    }
    $scope.showProducts = function(){
        productFactory.show(function(data){
            $scope.products = data;
        })
    }
    $scope.showOrders = function(){
        orderFactory.show(function(data){
            $scope.orders = data;
        })
    }
    $scope.showCustomers();
    $scope.showProducts();
    $scope.showOrders();
})
