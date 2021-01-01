const express = require('express')
const helmet = require('helmet')
const bodyParser = require('body-parser')
const config = require('./package.json')
const router = require('./routes/router')
const PORT = process.env.PORT || 7070
const app = express();

const auth = require('./util/auth')
const authorization = new auth();

app.get('/', async (req, res) => {
    try {
        res.send(`
            <head>
                <title>DolarBot API - v${config.version}</title>
            <head>
            <body>
                <a href=\"${config.gitRepo}\">DolarBot API</a> - v<b>${config.version}</b>.
            </body>
        `)
    } catch(e) {
        console.log(e)
        res.send(500);
    }
})

// Settings
app.set('port', PORT);
app.use('/favicon.ico', express.static('favicon.ico'))
app.use(helmet())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(authorization.validateApiKey);
app.use('/', router)

// CORS
app.use('*',function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    res.header('Access-Control-Allow-Headers', 'Content-Type')
    next();
});

// Starting the server
app.listen(app.get('port'), () => {
    console.log('Server running on port ' + PORT)
});