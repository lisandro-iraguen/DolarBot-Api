const express = require('express');
const helmet = require('helmet');
const router = require('./routes/router');
const PORT = process.env.PORT || 7070;
const app = express();

const auth = require('./util/auth');
const authInstance = new auth();

const util = require('./util/util');
const utilInstance = new util();

app.get('/', utilInstance.getHome);

// Settings
app.set('port', PORT);
app.use('/favicon.ico', express.static('favicon.ico'));
app.use(helmet());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(authInstance.validateApiKey);
app.use('/', router);

// CORS
app.use('*', utilInstance.setCorsHeaders);

// Starting the server
app.listen(app.get('port'), () => {
    console.log('Server running on port ' + PORT)
});