const mongoose = require('mongoose'),

    cakes = require('../controllers/cakes.js');

module.exports = function(app) {

    app.get('/cakes', function (req, res) {
        cakes.show_all(req, res);
    });
    
    app.get('/cakes/:id', function (req, res) {
        cakes.show_one(req, res);
    });

    app.post('/cakes', function (req, res) {
        cakes.create(req, res);
    });
    
    app.put('/cakes/:id', function (req, res) {
        cakes.update(req, res);
    });
    
    app.delete('/cakes/:id', function (req, res) {
        cakes.destroy(req, res);
    });

    app.put('/cakes/:id/rate', function (req, res) {
        cakes.rate(req, res);
    });







}