const mongoose = require('mongoose')

const uriAtlas = "mongodb+srv://Sedghiani:azerty@cluster0.yukbyux.mongodb.net/MyLittleRestaurant?retryWrites=true&w=majority"
const uriCompass = "mongodb://127.0.0.1:27017/MyLittleRestaurant"

mongoose.connect(uriAtlas)
    .then(() =>
        console.log("Successful connexion DB..."))
    .catch((err) =>
        console.log(err))


module.exports = mongoose