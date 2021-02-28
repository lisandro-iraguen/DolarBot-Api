const axios = require('axios')

const baseUrl = "https://s3.amazonaws.com/dolartoday/data.json";

class dolarTodayService {
    constructor(cache) {
        this.cache = cache;
    }

    /**
     * @description Obtener un json parseado con los valores de DolarToday
     */
    getInfoVzla = async (_req, res) => {        
        try {
            const cacheValue = this.cache.get(baseUrl);
            if(cacheValue !== undefined) {
                return cacheValue;
            }
            else {
                const response = await axios.get(baseUrl);
                this.cache.set(baseUrl, response.data);
                return response.data;
            }
        } catch(e) {
            console.log(e)
            res.sendStatus(500)
        }
    }
}

module.exports = dolarTodayService