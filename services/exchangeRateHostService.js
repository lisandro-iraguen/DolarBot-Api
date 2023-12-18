const axios = require('axios')
const util = require("../util/util")

const BASE_URL = 'http://api.exchangerate.host';
const API_KEY_ENV_VAR = "DOLARBOT_API_EXCHANGERATEHOST_API_KEY";
const ENDPOINT_LATEST = '/live';
const ENDPOINT_HISTORICAL = '/historical';
const ENDPOINT_SYMBOLS = '/list';
const BASE_CURRENCY = 'ARS';
const EXCLUDED_CURRENCIES = ['ARS', 'BTC', 'XAG', 'XAU', 'XDR', 'XPD', 'XPT']
const ERROR_INVALID_CODE = 'Error: Unsupported currency code';

class exchangeRateHostService {
    constructor(cache) {
        this.cache = cache;
        this.util = new util();
    }

    _appendUrlParams = (url, params) => {
        url += '?';
        if (params && params.length > 0) {
            params.forEach(x => {
                url += x.key + '=' + encodeURIComponent(x.value) + '&';
            });
            //url = url.slice(0, url.length - 1);
        }

        url += "access_key" + '=' + process.env[API_KEY_ENV_VAR] ?? '';
        return url;
    }

    _fetchData = async (endpoint, params) => {
        const url = this._appendUrlParams(BASE_URL + endpoint, params);
        const cacheValue = this.cache.get(url);
        if (cacheValue !== undefined) {
            return cacheValue;
        }
        else {
            const response = await axios.get(url);
            this.cache.set(url, response.data);
            return response.data;
        }
    }

    /**
     * @description Obtiene la lista de códigos de monedas soportados.
     */
    getCurrencyList = async () => {
        try {
            const response = await this._fetchData(ENDPOINT_SYMBOLS);
            if (response.success) {
                return Object.entries(response.currencies).map(([key, value]) => ({ code: key, name: value, })).filter(x => !EXCLUDED_CURRENCIES.includes(x.code));    
            } else {
                return null;
            }
        } catch (e) {
            console.log(e);
            return null;
        }
    }

    /**
     * @description Obtiene el valor de la moneda especificada
     */
    getCurrencyValue = async (currencyCode) => {
        try {
            if (!EXCLUDED_CURRENCIES.includes(currencyCode.toUpperCase())) {
                const response = await this._fetchData(ENDPOINT_LATEST,
                    [
                        { key: 'source', value: currencyCode },
                        { key: 'currencies', value: BASE_CURRENCY }
                    ]);
                if (response.success) {
                    return response;
                }
            } else {
                console.log(ERROR_INVALID_CODE);
                return 400;
            }
            return null;
        } catch (e) {
            console.log(e);
            return null;
        }
    }

    getHistoricalValue = async (currencyCode, date) => {
        try {
            if (!EXCLUDED_CURRENCIES.includes(currencyCode.toUpperCase())) {
                const response = await this._fetchData(ENDPOINT_HISTORICAL,
                [
                    { key: 'source', value: currencyCode },
                    { key: 'currencies', value: BASE_CURRENCY },
                    { key: 'date', value: date },
                ]);
                if (response.success) {
                    const rate = Object.values(response.quotes)[0];
                    return {
                        fecha: this.util.replaceAll(date, '-', '/'),
                        valor: this.util.formatCurrency(rate.toString()),
                    };
                }
            } else {
                console.log(ERROR_INVALID_CODE);
                return 400;
            }
            return null;
        } catch (e) {
            console.log(e);
            return null;
        }
    }
}

module.exports = exchangeRateHostService