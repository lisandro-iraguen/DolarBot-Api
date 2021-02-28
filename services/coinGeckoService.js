const CoinGecko = require('coingecko-api')

/**
 * Obtiene el valor de la criptomoneda especificada en la API de CoinGecko
 */
fetchData = async (coinId, apiClient, response) => {
    const value = await apiClient.simple.price({
        ids: [coinId],
        vs_currencies: ['ars', 'usd']
    });

    if(value.success){
        return value.data[coinId];
    }
    else{
        response.sendStatus(500);
        console.log(value.message);
        return null;
    }
}

/**
 * https://www.coingecko.com/api/
 */
class coinGeckoService {

    constructor() {
        this.coinGeckoClient = new CoinGecko();
    }

    /**
     * @description Obtiene la cotización del Bitcoin (BTC) contra peso y dólar
     */
    getBitcoin = async (_req, res) => await fetchData('bitcoin', this.coinGeckoClient, res);

    /**
     * @description Obtiene la cotización del Bitcoin Cash (BCH) contra peso y dólar
     */
    getBitcoinCash = async (_req, res) => await fetchData('bitcoin-cash', this.coinGeckoClient, res);

    /**
     * @description Obtiene la cotización del Ethereum (ETC) contra peso y dólar
     */
    getEthereum = async (_req, res) => await fetchData('ethereum', this.coinGeckoClient, res);

    /**
     * @description Obtiene la cotización del Litecoin (LTC) contra peso y dólar
     */
    getLitecoin = async (_req, res) => await fetchData('litecoin', this.coinGeckoClient, res);

    /**
     * @description Obtiene la cotización del Monero (XMR) contra peso y dólar
     */
    getMonero = async (_req, res) => await fetchData('monero', this.coinGeckoClient, res);

    /**
     * @description Obtiene la cotización del Ripple (XRP) contra peso y dólar
     */
    getRipple = async (_req, res) => await fetchData('ripple', this.coinGeckoClient, res);

    /**
     * @description Obtiene la cotización del DASH contra peso y dólar
     */
    getDash = async (_req, res) => await fetchData('dash', this.coinGeckoClient, res);
}

module.exports = coinGeckoService