
const Category = require('../models/categoryModel');


exports.home = (req, res) => { res.send('Hello server ...'); }


exports.getCategories = getDeparts = (req, res) => {
    Category.find({}, (err, results) => {
        err ? res.send(err) : res.send(results)
    });
}

exports.getCategoryById = (req, res) => {
    Category.find({ _id: req.params.id }, (err, result) => {
        if (!err) {
            res.send(result);
        }
    });
}

exports.addCategory = async (req, res) => {
    let newCategory = new Category(req.body);
    try {
        await newCategory.save();
        res.status(200).send({ message: `${newCategory.name} is succussffully added` });
    }
    catch (err) {
        res.status(400).send({ error: `error adding newCategory ${err}` })
    }
}

exports.deleteCategory = async (req, res) => {
    try {
        const category = await Category.findByIdAndDelete(req.params.id);
        res.status(200).send({ message: `${category.name} is succussffully deleted` });
    }
    catch (err) {
        res.status(400).send({ error: `error deleting category ${err}` })
    }
}

exports.updateCategory = async (req, res) => {
    try {
        const category = await Category.findByIdAndUpdate(req.params.id, req.body);
        await category.save()
        res.status(200).send({ message: `${category.name} is succussffully updated` });
    }
    catch (err) {
        res.status(400).send({ error: `error updating department ${err}` })
    }
}

    exports.getCategoryByName = async (req, res) => {
        try {
            const category = await Category.find({ name: req.params.name });
            res.status(200).send(category);
        }
        catch (err) {
            res.status(400).send({ error: `error getting department ${err}` })
        }
    }





