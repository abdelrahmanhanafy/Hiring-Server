const { badRequest } = require('../utils/error');
const uuid = require('../utils/uuid');
const googleSheet = require('../utils/googleSheet');
const s3 = require('../utils/s3');
const moment = require('moment')

exports.submit = async (data, file) => {
    const rows = {
        ID: uuid.generate(),
        time: moment().format(),
        ...data
    };

    await googleSheet.store(rows);
    if (!file) throw badRequest('please upload a cv.');
    s3.upload(file);

    return;

}