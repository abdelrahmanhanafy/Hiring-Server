class APIError extends Error {
    constructor(statusCode, code, message) {
        super(message);
        this.statusCode = statusCode;
        this.code = code;
        this.message = message;
    }
}

const badRequest = (message, code) => new APIError(400, code || 'BAD_REQUEST', message || 'Bad Request')
const notFound = (message, code) => new APIError(404, code || 'NOT_FOUND', message || 'Not Found')



module.exports = {
    badRequest, notFound
}
