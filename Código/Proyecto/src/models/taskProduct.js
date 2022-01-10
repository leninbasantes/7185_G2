const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = Schema({
    name: String,
    price: String,
    id: String
},
{
 collection: "productos"  
});

module.exports = mongoose.model('productos', TaskSchema);
