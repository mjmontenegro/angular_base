const mongoose = require("mongoose");
const Cake = mongoose.model("Cake");
const bcrypt = require("bcrypt");
const moment = require("moment");

module.exports = {

    show_all: (req, res) => {
        Cake.find({})
            .then( data => res.json({data: data}))
            .catch( err => res.json({error: err}));
    },

    create: (req, res) => {
        const cake = new Cake(req.body);
        cake.save()
            .then( data => res.json({data: data}))
            .catch( err => res.json({error: err}));
    },

    destroy: (req, res) => {
        Cake.deleteOne({ _id: req.params.id })
            .then( data => res.json({ data: data}))
            .catch( err => res.json({error: err}));
    },


    show_one: (req, res) => {
        Cake.findOne({ _id: req.params.id })
            .then( data => res.json({data: data }))
            .catch(err => res.json({error:err}));
    },

    update: (req, res) => {
        Cake.updateOne({ _id: req.params.id }, { $set: req.body })
            .then(data => res.json({ message: "Success", data: data }))
            .catch(err => res.json({ message: "Error", error: err }));
    },

    rate: (req, res) => {
        Cake.updateOne({ _id: req.params.id }, { $push: {ratings: req.body} })
            .then(data => res.json({ message: "Success", data: data }))
            .catch(err => res.json({ message: "Error", error: err }));
    },
};