mongoose = require('mongoose');

var validate = require('mongoose-validator');

var nameValidator = [
    validate({
        validator: 'isLength',
        arguments: [2,6],
        message: 'Name should be between {ARGS[0]} and {ARGS[1]} characters',
    }),
    validate({
        validator: 'isAlphanumeric',
        passIfEmpty: true,
        message: 'Name should contain alpha-numeric characters only',
    }),
]

const RatingSchema = new mongoose.Schema({
    numOfStars: { type: Number },
    comment: { type: String },
})

const CakeSchema = new mongoose.Schema({
    bakerName: { type: String},
    imageURL: { type: String},
    ratings: [RatingSchema],
},
{ timestamps: true },
)

mongoose.model('Cake', CakeSchema);
// mongoose.model('Rating', RatingSchema);
