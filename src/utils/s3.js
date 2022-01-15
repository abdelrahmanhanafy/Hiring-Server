const AWS = require('aws-sdk');
const config = require('../config/index')

const s3 = new AWS.S3({
    accessKeyId: config.props.ACCESSKEYID,
    secretAccessKey: config.props.SECRETACCESSKEY
});

const upload = async (data) => {
    const params = {
        Bucket: 'hiringcvsbucket', // pass your bucket name
        Key: new Date().getTime() + '_' + data.originalname,   //file will be saved as testBucket/contacts.csv
        Body: JSON.stringify(data.buffer, null, 2)
    }

    return await s3.upload(params).promise();
}


exports.upload = upload;