var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//rug schema
var RugSchema = new Schema({
    serialNumber: { type: String, required: true, unique: true },
    name:  { type: String, required: true},
    price: { type: String, required: true},
    description: { type: String, required: true},
    actualSize: { type: String, required: true},
    productType: { type: String, required: true},
    type: { type: String, required: true},
    construction: { type: String, required: true},
    style: { type: String, required: true},
    countryOfOrigin: { type: String, required: true},
    age: { type: String, required: true},
    period: { type: String, required: true},
    antique: { type: String, required: true},
    pileMaterial:{ type: String, required: true},
    production: { type: String, required: true},
    design: { type: String, required: true},
    pattern: { type: String, required: true},
    colourTags: { type: String, required: true}
});


module.exports = mongoose.model('Rug', RugSchema);