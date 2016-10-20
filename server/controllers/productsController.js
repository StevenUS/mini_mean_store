var mongoose = require("mongoose");
var Product = mongoose.model("Product");

module.exports = (function(){
    return{
        show: function(req, res){
            Product.find({}, function(err, products){
                if(err){
                    return res.json(err);
                }
                res.json(products)
            })
        },
        create: function(req, res){
            Product.create(req.body, function(err, result){
                if(err){
                    return res.json(err);
                }res.json(result);
            })
        },
        update : function(req,res){
            Product.findOne({_id: req.params.id}, function(err, product){
                if(err){
                    res.json(err);
                }else{
                    product.qty -= req.body.qty;
                    product.save(function(err, product){
                        if(err){
                            return res.json(err)
                        }res.json(product);
                    })
                }
            })
        }
    }
})()
