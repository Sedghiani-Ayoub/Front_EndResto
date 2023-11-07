const Recipie = require('../models/recipieModel')


exports.getRecipies = (req, res) => {
    Recipie.find({}, (err, results) => {
        err ? res.send(err) : res.send(results)} )

}

exports.getRecipieById = (req, res) => {
    Recipie.find({ _id: req.params.id }, (err, result) => {
        if (!err) {
            res.send(result);
        }
    });
}

exports.addRecipie = async (req, res) => {
    let newRecipie = new Recipie(req.body);
    try {
        await newRecipie.save();
        res.status(200).send({ message: `${newRecipie.name} is succussffully added` });
    }
    catch (err) {
        res.status(400).send({ error: `error adding newRecipie ${err}` })
    }
}

exports.deleteRecipie = async (req, res) => {
    try {
        const recipie = await Recipie.findByIdAndDelete(req.params.id);
        res.status(200).send({ message: `${recipie.name} is succussffully deleted` });
    }
    catch (err) {
        res.status(400).send({ error: `error deleting recipie ${err}` })
    }
}


