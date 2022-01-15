const app = require('./app');
const config = require('./config/index');

app.listen('7000', () => console.log(`Server is up and running on port ${config.props.PORT}`))


