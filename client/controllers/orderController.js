app.controller("orderController", function($scope, customerFactory, productFactory, orderFactory){
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

    //create an order
    $scope.create = function(){
        var order = {
            _products: $scope.product._id,
            _customer: $scope.customer,
            qty: $scope.product.qty
        }
        orderFactory.create(order, function(){
            productFactory.update($scope.product, function(){
                $scope.showCustomers();
                $scope.showProducts();
                $scope.showOrders();
                $scope.customer="";
                $scope.product="";
                $scope.product.qty="";
            })
        })
    }
    //update product qty

    $scope.prodQty = function(product){
        $scope.quantity = product.qty;
    }

})
