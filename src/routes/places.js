const express = require('express');
const Router = express.Router();

const placesController = require('../controllers/placesController');

Router.get('/', placesController.listPlaces);

Router.get('/:id', placesController.getPlaceById);

Router.post('/', placesController.validatePlace, placesController.createPlace);

Router.delete('/:id', placesController.deletePlace);

Router.patch('/:id', placesController.validatePlace, placesController.editPlace);

module.exports = Router;
