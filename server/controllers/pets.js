const mongoose = require("mongoose");
const Pets = mongoose.model("Pet");
// const bcrypt = require("bcrypt");
// const moment = require("moment");

module.exports = {
    getAll: (req, res) => {
        Pets.find({}, null, { sort: {type: 1}})
            .then( data => res.json({data: data}))
            .catch( err => res.json({error: err}));
    },
    getOne: (req, res) => {
        Pets.findOne({ _id: req.params.id })
            .then( data => res.json({data: data }))
            .catch(err => res.json({error:err}));
    },
    checkName: (req, res) => {
        Pets.findOne( { name: req.params.name })
        .then( data => res.json({data: data }))
        .catch(err => res.json({error:err}));
    },
    create: (req, res) => {
        const pets = new Pets(req.body);
        pets.save()
            .then( data => res.json({data: data}))
            .catch( err => res.json({error: err}));
    },
    update: (req, res) => {
        Pets.updateOne({ _id: req.params.id }, { $set: req.body }, { runValidators: true, context: 'query' })
            .then(data => res.json({ message: "Success", data: data }))
            .catch(err => res.json({ message: "Error", error: err }));
    },
    delete: (req, res) => {
        Pets.deleteOne({ _id: req.params.id })
            .then( data => res.json({ data: data}))
            .catch( err => res.json({error: err}));
    },
};