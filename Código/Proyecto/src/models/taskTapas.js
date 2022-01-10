const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = Schema({
    name: String,
    price: String,
    id: String
},
{
 collection: "tapas"  
});

module.exports = mongoose.model('tapas', TaskSchema);
