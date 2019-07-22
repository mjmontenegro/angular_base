// const mongoose = require('mongoose');

const pets = require('../controllers/pets');

module.exports = app => {
    app.get('/pets', pets.getAll);
    app.get('/pets/:id', pets.getOne);
    app.post('/pets', pets.create);
    app.put('/pets/:id', pets.update);
    app.delete('/pets/:id', pets.delete);
    app.get('/pets/name/:name', pets.checkName)
};
