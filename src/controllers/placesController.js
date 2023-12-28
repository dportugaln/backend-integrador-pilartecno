const { getPlaces, getPlace, insertPlace, updatePlace, removePlace } = require('../models/place');
const validatePlace = require('../middleware/placeValidation');

const listPlaces = async (req, res, next) => {
  const places = await getPlaces();

  const response = {
    statusCode: res.statusCode,
    status: 'ok',
    data: places
  }
  res.json(response);
}

const getPlaceById = async (req, res, next) => {
  const placeId = req.params.id;
  try {
    const place = await getPlace(placeId);

    const response = {
      statusCode: res.statusCode,
      status: 'ok',
      data: place[0] ? place[0] : {}
    }
    res.json(response);
  } catch (err) {
    res.json({
      statusCode: res.statusCode,
      status: 'bad_request',
      message: err.details[0].message
    });
  }
}

const createPlace = async (req, res, next) => {
  const { name, address, latitude, longitude, URL_img, phone, email } = req.body;
  try {
    const result = await insertPlace(name, address, latitude, longitude, URL_img, phone, email);
    const response = {
      statusCode: res.statusCode,
      status: 'ok',
      message: 'Sitio agregado correctamente',
      data: result,
    };
    res.json(response);
  } catch (err) {
    res.json({
      statusCode: res.statusCode,
      code: 'bad_request',
      message: err.message,
    });
  }
};


const deletePlace = async (req, res, next) => {
  try {
    const placeId = req.params.id;
    const result = await removePlace(placeId);

    const response = {
      statusCode: res.statusCode,
      status: 'ok',
      message: 'Sitio eliminado correctamente',
      data: result
    }
    res.json(response);
  } catch (err) {
    res.json({
      statusCode: res.statusCode,
      code: 'bad_request',
      message: err.details[0].message
    });
  }
}

const editPlace = async (req, res, next) => {

  const placeId = req.params.id;
  const { name, address, latitude, longitude, URL_img, phone, email } = req.body;

  try {
    const result = await updatePlace(placeId, name, address, latitude, longitude, URL_img, phone, email);
    const response = {
      statusCode: res.statusCode,
      status: 'ok',
      message: 'Sitio actualizado correctamente',
      data: result,
    };
    res.json(response);
  } catch (err) {
    res.json({
      statusCode: res.statusCode,
      code: 'bad_request',
      message: err.message,
    });
  }
};

module.exports = { listPlaces, getPlaceById, createPlace, deletePlace, editPlace, validatePlace }