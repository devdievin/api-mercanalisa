const express = require('express');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 4321;

const indexRoute = require('./src/routes/indexRoute');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', indexRoute);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});