
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const categorySchema = new Schema({
    code: Number,
    name:String,
    type:String 
  }, { versionKey: false });

let Category= mongoose.model('categories', categorySchema);

module.exports = Category

