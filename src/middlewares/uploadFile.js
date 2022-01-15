const multer = require('multer');
const { badRequest } = require('../utils/error');

const storage = multer.memoryStorage();
const limits = { fileSize: 1024 * 1024 }; //1MB
const fileFilter = (req, file, cb) => {
    if (!file.originalname.match(/\.(pdf|docx)$/))
        return cb(badRequest('Please upload a cv'));
    cb(undefined, true);
}

const upload = multer({ storage, limits, fileFilter }).single('CV');



module.exports.upload = (req, res, next) => {
    upload(req, res, err => {
        if (err)
            next(badRequest(err.message, err.code))
        next();

    })
}