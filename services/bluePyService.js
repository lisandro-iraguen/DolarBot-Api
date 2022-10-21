const axios = require('axios')

const baseUrl = "https://bluepy.vercel.app/";

const DOLAR_OFICIAL = '/api/dolar/oficial';
const DOLAR_BLUE = '/api/dolar/blue';
const EURO_OFICIAL = '/api/euro/oficial';
const EURO_BLUE = '/api/euro/blue';
const REAL_OFICIAL = '/api/real/oficial';
const REAL_BLUE = '/api/real/blue';

class bluePyService {
    constructor(cache) {
        this.cache = cache;
    }

    _fetchData = async (endpoint) => {
        const url = baseUrl + endpoint;
        const cacheValue = this.cache.get(url);
        if (cacheValue !== undefined) {
            return cacheValue;
        }
        else {
            const response = await axios.get(url);
            this.cache.set(baseUrl, response.data);
            return response.data;
        }
    }

    /**
     * @description Obtener el valor del Dólar oficial
     */
    getDolarOficial = async (_req, res) => {
        try {
            return this._fetchData(DOLAR_OFICIAL);
        } catch (e) {
            console.log(e);
            res.sendStatus(500);
        }
    }

    /**
     * @description Obtener el valor del Dólar blue
     */
    getDolarBlue = async (_req, res) => {
        try {
            return this._fetchData(DOLAR_BLUE);
        } catch (e) {
            console.log(e);
            res.sendStatus(500);
        }
    }

    /**
     * @description Obtener el valor del Euro oficial
     */
    getEuroOficial = async (_req, res) => {
        try {
            return this._fetchData(EURO_OFICIAL);
        } catch (e) {
            console.log(e);
            res.sendStatus(500);
        }
    }

    /**
     * @description Obtener el valor del Euro blue
     */
    getEuroBlue = async (_req, res) => {
        try {
            return this._fetchData(EURO_BLUE);
        } catch (e) {
            console.log(e);
            res.sendStatus(500);
        }
    }

    /**
     * @description Obtener el valor del Real oficial
     */
    getRealOficial = async (_req, res) => {
        try {
            return this._fetchData(REAL_OFICIAL);
        } catch (e) {
            console.log(e);
            res.sendStatus(500);
        }
    }

    /**
     * @description Obtener el valor del Real blue
     */
    getRealBlue = async (_req, res) => {
        try {
            return this._fetchData(REAL_BLUE);
        } catch (e) {
            console.log(e);
            res.sendStatus(500);
        }
    }
}

module.exports = bluePyService