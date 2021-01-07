const axios = require('axios')

const baseUrl = "https://s3.amazonaws.com/dolartoday/data.json";

class dolarTodayService {

    /**
     * @description Obtener un json parseado con los valores de DolarToday
     */
    getInfoVzla = async (_req, res) => {
        try {
            const response = await axios.get(baseUrl);
            return response.data;
        } catch(e) {
            console.log(e)
            res.sendStatus(500)
        }
    }
}

module.exports = dolarTodayService