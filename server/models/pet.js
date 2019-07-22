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

// const SkillSchema = new mongoose.Schema({
//     detail: {type: String},
// })

const PetSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Name must be provided"], minlength: [3, "Name must be at least 3 characters long."]},
    type: {type: String, required: [true, "Type must be provided"], minlength: [3, "Type must be at least 3 characters long."]},
    desc: {type: String, required: [true, "Description must be provided"], minlength: [3, "Description must be at least 3 characters long."]},
    skill1: {type: String},
    skill2: {type: String},
    skill3: {type: String},
    likes: {type: Number},
    },
    {timestamps: true});



mongoose.model('Pet',  PetSchema);
