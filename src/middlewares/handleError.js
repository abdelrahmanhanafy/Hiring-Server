const moment = require('moment');
const handler = (err, req, res, next) => {

    err.statusCode = err.statusCode || 500;
    err.code = err.code || 'INTERNAL_SERVER_ERROR';

    res.status(err.statusCode)
        .json({
            code: err.code,
            statusCode: err.statusCode,
            message: err.message,
            timestamp: moment().format(),
            //stack: err.stack 
        })
        .end();

};
exports.handle = handler;



