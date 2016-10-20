app.factory("orderFactory", ["$http", "$location", function($http, $location){
    var factory = {};
    factory.create = function(order, callback){
        console.log("orderFactory" + order)
        $http.post("/order/create", order)
        .then(function(data){
            if(typeof(callback) == "function"){
                callback(data)
            }else{
                alert("front end factory error")
            }
        })
    };
    factory.show = function(callback){
        $http.get('/orders').then(function(returned_data){
            orders = returned_data.data;
            callback(orders);

        })
    };
    return factory;
}])
