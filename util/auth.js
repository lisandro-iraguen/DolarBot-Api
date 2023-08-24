const config = require('../package.json')
const apiKeyName = 'dolarbot_apikey';
const debugModeName = 'DOLARBOT_API_DEBUG';

class auth {

    /**
     * Valida que el request actual esté autorizado en base a la configuración de la API KEY, y devuelve un código HTTP 403 si no lo está.
     * @param {any} req Request actual.
     * @param {any} res Respuesta HTTP.
     * @param {any} next Función a ejecutar luego de la verificación.
     */
    validateApiKey = function (req, res, next) {
        const isLocal = process.env[debugModeName] === 'true';
        if(req.path !== '/' && !isLocal && config.requiresApiKey && req.headers[apiKeyName] !== process.env.DOLARBOT_APIKEY){
            res.sendStatus(403)
        }
        else{
            next();
        }
    } 
}

module.exports = auth