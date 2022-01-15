const handler = (err, req, res, next) => {
    console.log('ERROR STACK ', err.stack)

    err.statusCode = err.statusCode || 500;
    err.code = err.code || 'INTERNAL_SERVER_ERROR';

    res.status(err.statusCode)
        .json({
            code: err.code,
            statusCode: err.statusCode,
            message: err.message,
            timestamp: new Date().toISOString(),
            //stack: err.stack 
        })
        .end();

};
exports.handle = handler;



