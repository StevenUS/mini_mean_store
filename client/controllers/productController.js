app.controller("productController", function($scope, productFactory){
    $scope.index = function(){
        productFactory.show(function(data){
            $scope.products = data;
        })
    }
    $scope.index()
    $scope.create = function(){
        productFactory.create($scope.product, function(){
            $scope.product = ""
            $scope.index()
        })
    };
    
})
