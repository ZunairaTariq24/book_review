const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const generalRoutes = require('./routes/general');
const registeredRoutes = require('./routes/registered');

app.use(bodyParser.json());

app.use('/general', generalRoutes);
app.use('/registered', registeredRoutes);

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});