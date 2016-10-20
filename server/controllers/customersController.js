var mongoose = require("mongoose");
var Customer = mongoose.model("Customer");

module.exports = (function(){
    return{
        show: function(req, res){
            Customer.find({}, function(err, customers){
                if(err){
                    return res.json(err);
                }
                res.json(customers)
            })
        },
        create: function(req, res){
            Customer.create(req.body, function(err, result){
                if(err){
                    return res.json(err);
                }
                res.json(result);
            })
        },
        delete: function(req,res){
            Customer.remove({_id: req.params.id}, function(err){
                if(err){
                    return res.json(err)
                }
                res.json({message: "Customer deleted"})
            })
        }
    }
})()
