var app = angular.module("app", ["ngRoute"]);
app.config(function($routeProvider){
    $routeProvider
    .when("/products", {
        templateUrl: "/partials/products.html",
        controller: "productController"
    })
    .when("/customers", {
        templateUrl: "/partials/customers.html",
        controller: "customerController"
    })
    .when("/orders", {
        templateUrl: "/partials/orders.html",
        controller: "orderController"
    })
    .otherwise({
        redirectTo: "/"
    })
})
.filter('range', function(){
    return function(n) {
        var res = [];
        for (var i = 0; i < n; i++) {
            res.push(i);
        }
        return res;
    };
});
