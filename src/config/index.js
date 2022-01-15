const env = process.env;

const envConfig = require(`./environment`);


module.exports = {
    variables: env,
    props: envConfig,
};