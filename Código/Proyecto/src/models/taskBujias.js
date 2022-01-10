const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = Schema({
    name: String,
    price: String,
    id: String
},
{
 collection: "bujias"  
});

module.exports = mongoose.model('bujias', TaskSchema);
