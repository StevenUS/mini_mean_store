app.factory("customerFactory", ["$http", "$location", function($http, $location){
    var factory = {};
    factory.show = function(callback){
        $http.get('/customers').then(function(returned_data){
            customers = returned_data.data;
            callback(customers);

        })
    };
    factory.create = function(customer, callback){
        $http.post("/customer/create", customer)
        .then(function(data){
            if(typeof(callback) == "function"){
                callback(data)
            }else{
                alert("front end factory error")
            }
        })
    };
    factory.delete = function(id, callback){
        $http.delete('/customer/' + id).then(function(returned_data){
            if (typeof(callback) == 'function'){
                callback(returned_data.data);
          }
        });
    };
    return factory;
}])
