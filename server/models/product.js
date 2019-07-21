mongoose = require('mongoose');

// var validate = require('mongoose-validator');

// var nameValidator = [
//     validate({
//         validator: 'isLength',
//         arguments: [2,6],
//         message: 'Name should be between {ARGS[0]} and {ARGS[1]} characters',
//     }),
//     validate({
//         validator: 'isAlphanumeric',
//         passIfEmpty: true,
//         message: 'Name should contain alpha-numeric characters only',
//     }),
// ]

// const RatingSchema = new mongoose.Schema({
//     numOfStars: { type: Number },
//     comment: { type: String },
// })

// const CakeSchema = new mongoose.Schema({
//     bakerName: { type: String},
//     imageURL: { type: String},
//     ratings: [RatingSchema],
// },
// { timestamps: true },
// )

const ProductSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Name must be provided"], minlength: [4, "Name must be at least 4 characters long."]},
    price: {type: Number, required: [true, "Price must be provided"]},
    img: {type: String, required: [true, "Image URL must be provided"]},
    },
    {timestamps: true});



mongoose.model('Product',  ProductSchema);
