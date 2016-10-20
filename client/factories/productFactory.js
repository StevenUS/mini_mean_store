app.factory("productFactory", ["$http", "$location", function($http, $location){
    var factory = {};
    factory.show = function(callback){
        $http.get('/products').then(function(returned_data){
            products = returned_data.data;
            callback(products);

        })
    };
    factory.create = function(product, callback){
        $http.post("/product/create", product)
        .then(function(data){
            if(typeof(callback) == "function"){
                callback(data)
            }else{
                alert("front end factory error")
            }
        })
    };
    factory.update = function(product, callback){
        $http.put('/product/' + product._id, product)
        .then(function(returned_data){
            if (typeof(callback) == 'function'){
                callback(returned_data.data);
            }
        });
    };
    return factory;
}])
