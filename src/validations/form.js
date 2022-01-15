const Joi = require("joi");
module.exports = {
    submit: Joi.object({
        position: Joi.string().min(0).max(50).required(),
        experienceYears: Joi.number().integer().min(0).max(100).required(),
        uniquenessReason: Joi.string().min(0).max(100).required(),
        choosingReason: Joi.string().min(0).max(100).required(),
        careerDescirpiton: Joi.string().max(200).required(),

    })
}