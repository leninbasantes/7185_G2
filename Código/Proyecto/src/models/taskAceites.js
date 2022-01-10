const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = Schema({
    name: String,
    price: String,
    id: String
},
{
 collection: "aceites"  
});

module.exports = mongoose.model('aceites', TaskSchema);
