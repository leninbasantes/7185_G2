const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = Schema({
    name: String,
    price: String,
    id: String
},
{
 collection: "ventiladores"  
});

module.exports = mongoose.model('ventiladores', TaskSchema);
