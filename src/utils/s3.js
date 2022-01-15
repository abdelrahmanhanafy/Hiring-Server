const AWS = require('aws-sdk');

const s3 = new AWS.S3({
    accessKeyId: "AKIA36M346PBXWNICQEB",
    secretAccessKey: "dG3YrbyePvYu0UVdDS1q4V8h1l/8qUhaG8AvCJlo"
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