const util = require("../util/util")

/**
 * Envía los datos de la respuesta de forma estandarizada.
 * @returns Un objeto con el valor en pesos y dólares, y la fecha y hora de la consulta
 */
function _sendResponseData(data, response, util) {
    if(data != null) {
        const valores = {
            fecha: util.getDateTime(),
            ars: util.formatCurrency(data.ars.toString()),
            arsTaxed: util.formatCurrencyWithTaxes(data.ars.toString()),
            usd: util.formatCurrency(data.usd.toString()),
            code: data.code,
        }
        response.send(valores);
    }
}

class cryptoController {
    constructor(coinGeckoService) {
        this.coinGeckoService = coinGeckoService;
        this.util = new util();
    }

    /**
     * @description Obtener la cotizacion del Bitcoin (BTC)
     * @returns Un objeto con el valor en pesos y dólares, y la fecha y hora de la consulta
     */
    getBitcoin = async (_req, res) => {
        try {
            const data = await this.coinGeckoService.getBitcoin();
            data.code = 'BTC';
            _sendResponseData(data, res, this.util);
        } catch (e) {
            res.sendStatus(500)
            console.log(e)
        }
    }

    /**
     * @description Obtener la cotizacion del Ethereum (ETH)
     * @returns Un objeto con el valor en pesos y dólares, y la fecha y hora de la consulta
     */
    getEthereum = async (_req, res) => {
        try {
            const data = await this.coinGeckoService.getEthereum();
            data.code = 'ETH';
            _sendResponseData(data, res, this.util);            
        } catch (e) {
            res.sendStatus(500)
            console.log(e)
        }
    }

    /**
     * @description Obtener la cotizacion del Litecoin (LTC)
     * @returns Un objeto con el valor en pesos y dólares, y la fecha y hora de la consulta
     */
    getLitecoin = async (_req, res) => {
        try {
            const data = await this.coinGeckoService.getLitecoin();
            data.code = 'LTC';
            _sendResponseData(data, res, this.util);            
        } catch (e) {
            res.sendStatus(500)
            console.log(e)
        }
    }

    /**
     * @description Obtener la cotizacion del Bitcoin Cash (BCH)
     * @returns Un objeto con el valor en pesos y dólares, y la fecha y hora de la consulta
     */
    getBitcoinCash = async (_req, res) => {
        try {
            const data = await this.coinGeckoService.getBitcoinCash();
            data.code = 'BCH';
            _sendResponseData(data, res, this.util);            
        } catch (e) {
            res.sendStatus(500)
            console.log(e)
        }
    }

    /**
     * @description Obtener la cotizacion del Monero (XMR)
     * @returns Un objeto con el valor en pesos y dólares, y la fecha y hora de la consulta
     */
    getMonero = async (_req, res) => {
        try {
            const data = await this.coinGeckoService.getMonero();
            data.code = 'XMR';
            _sendResponseData(data, res, this.util);            
        } catch (e) {
            res.sendStatus(500)
            console.log(e)
        }
    }

    /**
     * @description Obtener la cotizacion del Ripple (XRP)
     * @returns Un objeto con el valor en pesos y dólares, y la fecha y hora de la consulta
     */
    getRipple = async (_req, res) => {
        try {
            const data = await this.coinGeckoService.getRipple();
            data.code = 'XRP';
            _sendResponseData(data, res, this.util);            
        } catch (e) {
            res.sendStatus(500)
            console.log(e)
        }
    }

    /**
     * @description Obtener la cotizacion del DASH
     * @returns Un objeto con el valor en pesos y dólares, y la fecha y hora de la consulta
     */
    getDash = async (_req, res) => {
        try {
            const data = await this.coinGeckoService.getDash();
            data.code = 'DASH';
            _sendResponseData(data, res, this.util);            
        } catch (e) {
            res.sendStatus(500)
            console.log(e)
        }
    }
}

module.exports = cryptoController
