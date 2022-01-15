const express = require('express');
const formController = require('./controllers/form');
const { notFound } = require('./utils/error');
const multer = require('./middlewares/uploadFile');
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

// handle undefined Routes
router.use('*', (req, res, next) => next(notFound('undefined route')));






module.exports = router;


