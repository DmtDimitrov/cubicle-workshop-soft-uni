const express = require('express');
const path = require('path');

const initHandlebars = require('./config/handlebars.js');

const app = express();

initHandlebars(app);

// require('./config/handlebars.js')(app);

app.use(express.static(path.resolve(__dirname, './static')));

app.all('/', (req, res) => {
    res.render('index');
});

app.listen(5000, console.log.bind(console, 'Application is running on http://localhost:5000'));