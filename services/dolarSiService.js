const convert = require('xml-js')
const axios = require('axios')

const baseUrl = "https://www.dolarsi.com/api/dolarSiInfo.xml";

class dolarSiService {
    constructor(cache) {
        this.cache = cache;
    }

    /**
     * @description Obtener un json parseado con los valores de DolarSí
     */
    getInfoDolar = async (_req, res) => {
        try {
            const cacheValue = this.cache.get(baseUrl);
            if(cacheValue !== undefined) {
                return cacheValue;
            }
            else {
                const dataDolar = await axios.get(baseUrl);
                const json = convert.xml2json(dataDolar.data, {compact: true, spaces: 4});
                const jsonParsed = JSON.parse(json);
                
                this.cache.set(baseUrl, jsonParsed);
                return jsonParsed;
            }
        } catch(e) {
            res.sendStatus(500)
            console.log(e)
        }
    }
    
}

module.exports = dolarSiService