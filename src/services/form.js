const { notFound, badRequest } = require('../utils/error');

exports.submit = async (s1, s2) => {
    const result = await s1 + s2;
    if (result === 3) throw notFound('No user with this email')
    return result;

}