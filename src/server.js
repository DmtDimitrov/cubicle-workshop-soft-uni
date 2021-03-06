const express = require('express');
const path = require('path');
const initDb = require('./config/db.js');

const routes = require('./config/routes');
const config = require('./config/config.json')[process.env.NODE_ENV || 'development'];
const initHandlebars = require('./config/handlebars');

const app = express();

app.use(express.urlencoded({ extended: true }));

initHandlebars(app);

// require('./config/handlebars.js')(app);

app.use(express.static(path.resolve(__dirname, './static')));
app.use(routes);


initDb(config.DB_CONNECTION_STRING)
    .then(() => {
        app.listen(config.PORT, console.log.bind(console, `Application is running on http://localhost:${config.PORT}`));
    })
    .catch(err => {
        console.log('Application init failed: ', err);
    })
