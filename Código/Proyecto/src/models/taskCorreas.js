const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = Schema({
    name: String,
    price: String,
    id: String
},
{
 collection: "correas"  
});

module.exports = mongoose.model('correas', TaskSchema);
