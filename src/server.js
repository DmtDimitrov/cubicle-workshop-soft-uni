const express = require('express');
const path = require('path');

const routes = require('./config/routes');
const initHandlebars = require('./config/handlebars');

const app = express();

initHandlebars(app);

// require('./config/handlebars.js')(app);

app.use(express.static(path.resolve(__dirname, './static')));
app.use(routes);

app.listen(5000, console.log.bind(console, 'Application is running on http://localhost:5000'));