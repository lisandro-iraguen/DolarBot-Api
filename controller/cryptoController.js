const util = require("../util/util")

/**
 * Envía los datos de la respuesta de forma estandarizada.
 * @returns Un objeto con el valor en pesos y dólares, y la fecha y hora de la consulta
 */
function _sendResponseData(data, response, util) {
    const decimalPlaces = data.usd < 1 ? 8 : 2;
    const valores = {
        name: data.name,
        code: data.code,
        fecha: util.getDateTime(),
        ars: util.formatCurrency(data.ars.toString(), decimalPlaces),
        arsTaxed: util.formatCurrencyWithTaxes(data.ars.toString(), decimalPlaces),
        usd: util.formatCurrency(data.usd.toString(), decimalPlaces),
    }
    response.send(valores);
}

class cryptoController {
    constructor(coinGeckoService) {
        this.coinGeckoService = coinGeckoService;
        this.util = new util();
    }

    getCoinList = async (_req, res) => {
        try {
            const coinList = await this.coinGeckoService.getCoinList();
            res.send(coinList);
        } catch (e) {
            res.sendStatus(500);
            console.log(e);
        }
    }

    /**
     * @description Obtener la cotizacion de la moneda especificada. El código debe ser un ID válido de CoinGecko (https://www.coingecko.com/en/api#explore-api).
     * @returns Un objeto con el valor en pesos y dólares, y la fecha y hora de la consulta
     */
    getCoin = async (req, res) => {
        try {
            const coinId = req.params.coinId.toLowerCase();
            if (coinId != null && coinId != '') {
                const data = await this.coinGeckoService.getCoin(coinId);
                if (data != null) {
                    _sendResponseData(data, res, this.util);
                }
                else {
                    res.sendStatus(500);
                }
            }
            else {
                res.sendStatus(400);
            }
        } catch (e) {
            res.sendStatus(500);
            console.log(e);
        }
    }

    /**
     * @description Obtener la cotizacion del Bitcoin (BTC)
     * @returns Un objeto con el valor en pesos y dólares, y la fecha y hora de la consulta
     */
    getBitcoin = async (_req, res) => {
        try {
            let data = await this.coinGeckoService.getBitcoin();
            if (data != null) {
                data = {
                    name: 'Bitcoin',
                    code: 'BTC',
                    ...data,
                };
                _sendResponseData(data, res, this.util);
            }
            else {
                res.sendStatus(500);
            }
        } catch (e) {
            res.sendStatus(500);
            console.log(e);
        }
    }

    /**
     * @description Obtener la cotizacion del Ethereum (ETH)
     * @returns Un objeto con el valor en pesos y dólares, y la fecha y hora de la consulta
     */
    getEthereum = async (_req, res) => {
        try {
            let data = await this.coinGeckoService.getEthereum();
            if (data != null) {
                data = {
                    name: 'Ethereum',
                    code: 'ETH',
                    ...data,
                };
                _sendResponseData(data, res, this.util);
            }
            else {
                res.sendStatus(500);
            }
        } catch (e) {
            res.sendStatus(500);
            console.log(e);
        }
    }

    /**
     * @description Obtener la cotizacion del Litecoin (LTC)
     * @returns Un objeto con el valor en pesos y dólares, y la fecha y hora de la consulta
     */
    getLitecoin = async (_req, res) => {
        try {
            let data = await this.coinGeckoService.getLitecoin();
            if (data != null) {
                data = {
                    name: 'Litecoin',
                    code: 'LTC',
                    ...data,
                };
                _sendResponseData(data, res, this.util);
            }
            else {
                res.sendStatus(500);
            }
        } catch (e) {
            res.sendStatus(500);
            console.log(e);
        }
    }

    /**
     * @description Obtener la cotizacion del Bitcoin Cash (BCH)
     * @returns Un objeto con el valor en pesos y dólares, y la fecha y hora de la consulta
     */
    getBitcoinCash = async (_req, res) => {
        try {
            let data = await this.coinGeckoService.getBitcoinCash();
            if (data != null) {
                data = {
                    name: 'Bitcoin Cash',
                    code: 'BCH',
                    ...data,
                };
                _sendResponseData(data, res, this.util);
            }
            else {
                res.sendStatus(500);
            }
        } catch (e) {
            res.sendStatus(500);
            console.log(e);
        }
    }

    /**
     * @description Obtener la cotizacion del Monero (XMR)
     * @returns Un objeto con el valor en pesos y dólares, y la fecha y hora de la consulta
     */
    getMonero = async (_req, res) => {
        try {
            let data = await this.coinGeckoService.getMonero();
            if (data != null) {
                data = {
                    name: 'Monero',
                    code: 'XMR',
                    ...data,
                };
                _sendResponseData(data, res, this.util);
            }
            else {
                res.sendStatus(500);
            }
        } catch (e) {
            res.sendStatus(500);
            console.log(e);
        }
    }

    /**
     * @description Obtener la cotizacion del Ripple (XRP)
     * @returns Un objeto con el valor en pesos y dólares, y la fecha y hora de la consulta
     */
    getRipple = async (_req, res) => {
        try {
            let data = await this.coinGeckoService.getRipple();
            if (data != null) {
                data = {
                    name: 'Ripple',
                    code: 'XRP',
                    ...data,
                };
                _sendResponseData(data, res, this.util);
            }
            else {
                res.sendStatus(500);
            }
        } catch (e) {
            res.sendStatus(500);
            console.log(e);
        }
    }

    /**
     * @description Obtener la cotizacion del DASH
     * @returns Un objeto con el valor en pesos y dólares, y la fecha y hora de la consulta
     */
    getDash = async (_req, res) => {
        try {
            let data = await this.coinGeckoService.getDash();
            if (data != null) {
                data = {
                    name: 'DASH',
                    code: 'DASH',
                    ...data,
                };
                _sendResponseData(data, res, this.util);
            }
            else {
                res.sendStatus(500);
            }
        } catch (e) {
            res.sendStatus(500);
            console.log(e);
        }
    }
}

module.exports = cryptoController
