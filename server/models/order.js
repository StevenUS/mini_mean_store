var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var OrderSchema = new Schema({
    _products: {type: Schema.Types.ObjectId, ref: "Product"},
    _customer: {type: Schema.Types.ObjectId, ref: "Customer"},
    qty: {type: Number, required: true}
}, {timestamps: true });

mongoose.model("Order", OrderSchema);
