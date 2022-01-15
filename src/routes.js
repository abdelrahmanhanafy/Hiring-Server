const express = require('express');


const formController = require('./controllers/form');
const multer = require('./middlewares/uploadFile');
const formValidator = require('./validations/form');

const router = express.Router();

router
    .route('/health')
    .get((req, res) => res.send('<h1><center>Server is up and running on port 7000</center></h1>'));


router
    .route('/submit-form')
    .post(
        multer.upload,
        formController.submit
    );

module.exports = router;


