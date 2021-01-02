const util = require("../util/util")

/**
 * Envía los datos de la respuesta de forma estandarizada.
 * @returns Un objeto con el valor en pesos y dólares, y la fecha y hora de la consulta
 */
function sendResponseData(data, response, util) {
    if(data != null) {
        const valores = {
            fecha: util.getDateTime(),
            ars: util.formatNumber(data.ars.toString()),
            usd: util.formatNumber(data.usd.toString())
        }
        response.send(valores)
    }
}

class cryptoController {
    constructor(coinGeckoService) {
        this.coinGeckoService = coinGeckoService;
        this.util = new util();
    }

    /**
     * @description Obtener la cotizacion del Bitcoin
     * @returns Un objeto con el valor en pesos y dólares, y la fecha y hora de la consulta
     */
    getBitcoin = async (_req, res) => {
        try {
            const data = await this.coinGeckoService.getBitcoin();
            sendResponseData(data, res, this.util);
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
            sendResponseData(data, res, this.util);            
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
            sendResponseData(data, res, this.util);            
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
            sendResponseData(data, res, this.util);            
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
            sendResponseData(data, res, this.util);            
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
            sendResponseData(data, res, this.util);            
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
            sendResponseData(data, res, this.util);            
        } catch (e) {
            res.sendStatus(500)
            console.log(e)
        }
    }
}

module.exports = cryptoController
