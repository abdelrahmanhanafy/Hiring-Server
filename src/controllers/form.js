const formService = require("../services/form");
const asyncHandler = require('../utils/asyncHandler');

const submit = async (req, res) => {
    const { position, experienceYears, uniquenessReason, choosingReason, careerDescirpiton } = req.body;
   // const result = await formService.submit(first, second);
    res.status(200).json({ body: req.body, file: req.file })

}
exports.submit = asyncHandler(submit);