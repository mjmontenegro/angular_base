const mongoose = require("mongoose");
const Product = mongoose.model("Product");
// const bcrypt = require("bcrypt");
// const moment = require("moment");

module.exports = {
    getAll: (req, res) => {
        Product.find({})
            .then( data => res.json({data: data}))
            .catch( err => res.json({error: err}));
    },
    getOne: (req, res) => {
        Product.findOne({ _id: req.params.id })
            .then( data => res.json({data: data }))
            .catch(err => res.json({error:err}));
    },
    create: (req, res) => {
        const product = new Product(req.body);
        product.save()
            .then( data => res.json({data: data}))
            .catch( err => res.json({error: err}));
    },
    update: (req, res) => {
        Product.updateOne({ _id: req.params.id }, { $set: req.body })
            .then(data => res.json({ message: "Success", data: data }))
            .catch(err => res.json({ message: "Error", error: err }));
    },
    delete: (req, res) => {
        Product.deleteOne({ _id: req.params.id })
            .then( data => res.json({ data: data}))
            .catch( err => res.json({error: err}));
    },
};