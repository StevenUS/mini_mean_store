var mongoose = require("mongoose");
var Order = mongoose.model("Order");

module.exports = (function(){
    return{
        create: function(req, res){
            Order.create(req.body, function(err, result){
                if(err){
                    return res.json(err);
                }
                res.json(result);
            })
        },
        // show: function(req, res){
        //     Order.find({}, function(err, orders){
        //         if(err){
        //             return res.json(err);
        //         }
        //         res.json(orders)
        //     })
        // },
        show: function(req, res){
            Order.find()
            .populate("_products")
            .populate("_customer")
            .exec(function(err, products){
                if(err){
                    return res.json(err);
                }res.json(products)
            })
        }
    }
})()
