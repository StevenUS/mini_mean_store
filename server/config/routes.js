var path = require("path");
var pc = require("./../controllers/productsController.js")
var cc = require("./../controllers/customersController.js")
var oc = require("./../controllers/ordersController.js")

module.exports=function(app){
    //products
    app.post("/product/create", pc.create);
    app.get("/products", pc.show);
    app.put("/product/:id", pc.update);
    //customers
    app.post("/customer/create", cc.create);
    app.get("/customers", cc.show);
    app.delete("/customer/:id", cc.delete);
    //orders
    app.post("/order/create", oc.create);
    app.get("/orders", oc.show);
}
