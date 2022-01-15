const dotenv = require('dotenv');
dotenv.config();
const env = process.env;

const envConfig = require(`./environment`);


module.exports = {
    variables: env,
    props: envConfig,
};