var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var CustomerSchema = new Schema({
    _order: {type: Schema.Types.ObjectId, ref: "Order"},
    name: {type: String, required: true },
}, {timestamps: true });

mongoose.model("Customer", CustomerSchema);
