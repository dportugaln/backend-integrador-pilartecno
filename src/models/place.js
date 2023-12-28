const database = require('../../config/database');
const Place = require('./schemas/place.schema');

const getPlaces = async () => {
  const db = await database();
  const place = new Place();
  try {
    const filter = {};
    let places = await Place.find(filter);
    db.close();
    return places;
  } catch (err) {
    console.log('err' + err);
    res.status(500).send(err);
  }
}

const getPlace = async (placeId) => {
  const db = await database();
  const place = new Place();
  try {
    const filter = { _id: placeId };
    let places = await Place.find(filter);
    db.close();
    return places;
  } catch (err) {
    console.log('err' + err);
    res.status(500).send(err);
  }
}

const insertPlace = async (name, address, latitude, longitude, URL_img, phone, email) => {
  const db = await database();

  const placeData = {
    name: name,
    address: address,
    location: {
      latitude: latitude,
      longitude: longitude
    },
    URL_img: URL_img,
    phone: phone,
    email: email,

  }

  const place = new Place(placeData);

  try {
    let result = await place.save();
    db.close()
    return result;
  } catch (err) {
    console.log('err' + err);
    res.status(500).send(err);
  }
};

const removePlace = async (placeId) => {
  const db = await database();
  const place = new Place();
  try {
    const filter = { _id: placeId };
    let places = await Place.remove(filter);
    db.close();
    return places;
  } catch (err) {
    console.log('err' + err);
    res.status(500).send(err);
  }
}

const updatePlace = async (placeId, name, address, latitude, longitude, URL_img, phone, email) => {
  const db = await database();

  try {
    let place = await Place.findByIdAndUpdate(placeId, { name, address, location: { latitude, longitude }, URL_img, phone, email }, { new: true });
    db.close();
    return place;
  } catch (err) {
    console.log('err', err);
    throw new Error(err.message); // Throw the error to be caught in the controller
  }
}

module.exports = { getPlaces, getPlace, insertPlace, updatePlace, removePlace }