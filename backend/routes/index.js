const payApi = require('./payment');
const configureRoutes = app =>{
    payApi(app);
};

module.exports = configureRoutes;