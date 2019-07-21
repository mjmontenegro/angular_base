// const mongoose = require('mongoose');

const products = require('../controllers/products');

// module.exports = function(app) {

//     app.get('/cakes', function (req, res) {
//         cakes.show_all(req, res);
//     });
    
//     app.get('/cakes/:id', function (req, res) {
//         cakes.show_one(req, res);
//     });

//     app.post('/cakes', function (req, res) {
//         cakes.create(req, res);
//     });
    
//     app.put('/cakes/:id', function (req, res) {
//         cakes.update(req, res);
//     });
    
//     app.delete('/cakes/:id', function (req, res) {
//         cakes.destroy(req, res);
//     });

//     app.put('/cakes/:id/rate', function (req, res) {
//         cakes.rate(req, res);
//     });

module.exports = app => {
    app.get('/products', products.getAll);
    app.get('/products/:id', products.getOne);
    app.post('/products', products.create);
    app.put("/products:id", products.update);
    app.delete("/products/:id", products.delete);
};