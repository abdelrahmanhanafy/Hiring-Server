const express = require('express');
const router = require('./routes');
const error = require('./middlewares/handleError');


const app = express();
app.use(express.json())
app.use('/api', router);


app.use(error.handle)

module.exports = app;