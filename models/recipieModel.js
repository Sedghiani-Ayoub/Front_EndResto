
const mongoose = require('mongoose');


const Schema = mongoose.Schema;

let recipieSchema = new Schema({

        name: String,
        cuisine: String,
        servings: Number,
        steps: String},{ versionKey: false });


let RecipieModel = mongoose.model("Recipies", recipieSchema);




module.exports = RecipieModel;
