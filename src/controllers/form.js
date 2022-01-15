const formService = require("../services/form");
const asyncHandler = require('../utils/asyncHandler');
const moment = require('moment');
const Joi = require("joi");
const formScehma = require('../validations/form');
const { badRequest } = require("../utils/error");

const submit = async (req, res) => {

    const { error } = formScehma.submit.validate(req.body);
    if (error) throw badRequest('validation error')

    await formService.submit(req.body, req.file);

    res.status(200).json({
        code: "OK", statusCode: 200, message: "form is submitted successfully!", timestamp: moment().format()
    })

}
exports.submit = asyncHandler(submit);