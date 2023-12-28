const Joi = require('joi');

const schema = Joi.object({
  id: Joi.string()
      .alphanum(),
  name: Joi.string()
            .required(),
  address: Joi.string()
            .required(),
  latitude: Joi.number()
            .required(),
  longitude: Joi.number()
            .required(),
  URL_img: Joi.array(),
  phone: Joi.string(),
  email: Joi.string().email()
});

function validatePlace(req, res, next) {
  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({
      statusCode: res.statusCode,
      code: 'bad_request',
      message: error.details[0].message,
    });
  }
  next();
}

module.exports = validatePlace;