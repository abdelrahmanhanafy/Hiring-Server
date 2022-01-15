const express = require('express');
const router = require('./routes');
const error = require('./middlewares/handleError');
const { notFound } = require('./utils/error');
const dotenv = require('dotenv');
dotenv.config();


const app = express();
app.use(express.json())
app.use('/api', router);

// handle undefined Routes
router.use('*', (req, res, next) => next(notFound('undefined route')));

app.use(error.handle)

module.exports = app;