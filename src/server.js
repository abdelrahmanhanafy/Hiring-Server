const app = require('./app');
const config = require('./config/index');

app.listen(config.props.PORT, () => console.log(`Server is up and running on port ${config.props.PORT}`))


