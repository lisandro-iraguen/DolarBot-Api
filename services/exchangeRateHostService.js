const axios = require('axios')
const util = require("../util/util")

const BASE_URL = 'https://api.exchangerate.host';
const ENDPOINT_LATEST = '/latest';
const ENDPOINT_TIMESERIES = '/timeseries';
const ENDPOINT_SYMBOLS = '/symbols';
const BASE_CURRENCY = 'ARS';
const EXCLUDED_CURRENCIES = ['ARS', 'BTC', 'XAG', 'XAU', 'XDR', 'XPD', 'XPT']
const TIMESERIES_MIN_YEAR = 2006;
const ERROR_INVALID_CODE = 'Error: Unsupported currency code';

class exchangeRateHostService {
    constructor(cache) {
        this.cache = cache;
        this.util = new util();
    }

    _appendUrlParams = (url, params) => {
        if (params && params.length > 0) {
            url += '?';
            params.forEach(x => {
                url += x.key + '=' + encodeURIComponent(x.value) + '&';
            });
            url = url.slice(0, url.length - 1);
        }
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
                return Object.values(response.symbols).filter(x => !EXCLUDED_CURRENCIES.includes(x.code));
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
                        { key: 'base', value: currencyCode },
                        { key: 'symbols', value: BASE_CURRENCY }
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

    getHistoricalValues = async (currencyCode) => {
        try {
            if (!EXCLUDED_CURRENCIES.includes(currencyCode.toUpperCase())) {
                const startYear = TIMESERIES_MIN_YEAR;
                const endYear = parseInt(this.util.getDate().split('/')[0]);

                let parallelTasks = [];
                for (let currentYear = startYear; currentYear <= endYear; currentYear++) {
                    const startDate = currentYear.toString() + '-01-01';
                    const endDate = currentYear == endYear ? this.util.replaceAll(this.util.getDate(), '/', '-') : currentYear.toString() + '-12-31';
                    const fetchTask = this._fetchData(ENDPOINT_TIMESERIES,
                        [
                            { key: 'base', value: currencyCode },
                            { key: 'symbols', value: BASE_CURRENCY },
                            { key: 'start_date', value: startDate },
                            { key: 'end_date', value: endDate },
                        ]);
                    parallelTasks.push(fetchTask);
                }

                let data = [];
                for (let i = 0; i < parallelTasks.length; i++) {
                    const task = parallelTasks[i];
                    const response = await task;
                    if (response.success) {
                        const rates = Object.entries(response.rates);
                        const filteredRates = rates.filter(x => typeof x[1].ARS !== 'undefined').map(x => (
                            {
                                fecha: this.util.replaceAll(x[0], '-', '/'),
                                valor: this.util.formatCurrency(x[1].ARS.toString()),
                            }
                        ));
                        data.push(...filteredRates);
                    }
                }

                if (data.length > 0) {
                    return data.sort((a, b) => a.fecha > b.fecha);
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