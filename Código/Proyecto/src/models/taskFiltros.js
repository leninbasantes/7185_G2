const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = Schema({
    name: String,
    price: String,
    id: String
},
{
 collection: "filtros"  
});

module.exports = mongoose.model('filtros', TaskSchema);
