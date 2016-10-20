var app = angular.module("app", ["ngRoute", "angular-humanize"]);
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
    .when("/dashboard", {
        templateUrl: "/partials/dashboard.html",
        controller: "dashController"
    })
    .otherwise({
        redirectTo: "/"
    })
})

//filter for quantity drop down on orders
.filter('range', function(){
    return function(n) {
        var res = [];
        for (var i = 0; i < n; i++) {
            res.push(i);
        }
        return res;
    };
});
