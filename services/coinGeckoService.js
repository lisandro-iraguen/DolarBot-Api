const CoinGecko = require('coingecko-api');
let coinList = [];

loadCoinList = async (apiClient, cache) => {
    console.log('Loading CoinGecko currency list...');
    const cacheValue = cache.get(`coingeckolist`);
    if(cacheValue !== undefined) {
        coinList = cacheValue;
    }
    else {
        let value = await apiClient.coins.list();
        if(value.success && value.data.length > 0) {
            coinList = value.data;
            console.log(`Loaded ${coinList.length} cryptocurrencies...`);
        }
        else{
            console.log(`Failed to load cryptocurrencies...`);
            console.log(value.message);            
        }
    }
}

/**
 * Obtiene el valor de la criptomoneda especificada en la API de CoinGecko, validando que el ID sea un parámetro válido.
 */
fetchFromCoinList = async (coinId, apiClient, cache) => {
    try{
        if(coinList != null && coinList.length > 0)
        {
            let coin = coinList.find(x => x.id === coinId);
            if(coin && coin != null) {                
                let data = await fetchData(coinId, apiClient, cache);
                return {
                    name: coin.name,
                    code: coin.symbol.toUpperCase(),
                    ...data,
                };
            }
        }
        
        return null;
    }
    catch (e) {
        return null;
    }
}

/**
 * Obtiene el valor de la criptomoneda especificada en la API de CoinGecko
 */
fetchData = async (coinId, apiClient, cache) => {
    const cacheValue = cache.get(`coingecko:${coinId}`);
    try {

        if(cacheValue !== undefined) {
            return cacheValue;
        }
        else {
            const value = await apiClient.simple.price({
                ids: [coinId],
                vs_currencies: ['ars', 'usd']
            });
            
            if(value.success){
                cache.set(`coingecko:${coinId}`, value.data[coinId]);
                return value.data[coinId];
            }
            else{
                console.log(value.message);
                return null;
            }
        }
    }
    catch(e) {
        return null;
    }
}

/**
 * https://www.coingecko.com/api/
 */
class coinGeckoService {

    constructor(cache) {
        this.coinGeckoClient = new CoinGecko();
        this.cache = cache;
        loadCoinList(this.coinGeckoClient, this.cache);
    }

    /**
     * @description Obtiene la lista de cryptomonedas soportadas
     */
    getCoinList = async () => {
        if(coinList != null) {
            return coinList.filter(x => x.id != null && x.id != '').map(x => ({ code: x.id, name: x.name, }));
        }
        else{
            return [];
        }
    }

    /**
     * @description Obtiene la cotización la moneda especificada contra peso y dólar
     */
    getCoin = async (coinId) => {
        let data = await fetchFromCoinList(coinId, this.coinGeckoClient, this.cache);
        if(data != null) {
            return data;
        }
        else{
            return null;
        }
    }
        

    /**
     * @description Obtiene la cotización del Bitcoin (BTC) contra peso y dólar
     */
    getBitcoin = async (res) => {
        let data = await fetchData('bitcoin', this.coinGeckoClient, this.cache);
        if(data != null) {
            return data;
        }
        else{
            res.sendStatus(500);
        }
    };

    /**
     * @description Obtiene la cotización del Bitcoin Cash (BCH) contra peso y dólar
     */
    getBitcoinCash = async (res) => {
        let data = await fetchData('bitcoin-cash', this.coinGeckoClient, this.cache);
        if(data != null) {
            return data;
        }
        else{
            res.sendStatus(500);
        }
    }

    /**
     * @description Obtiene la cotización del Ethereum (ETC) contra peso y dólar
     */
    getEthereum = async (res) => {
        let data = await fetchData('ethereum', this.coinGeckoClient, this.cache);
        if(data != null) {
            return data;
        }
        else{
            res.sendStatus(500);
        }
    }

    /**
     * @description Obtiene la cotización del Litecoin (LTC) contra peso y dólar
     */
    getLitecoin = async (res) => {
        let data = await fetchData('litecoin', this.coinGeckoClient, this.cache);
        if(data != null) {
            return data;
        }
        else{
            res.sendStatus(500);
        }
    }

    /**
     * @description Obtiene la cotización del Monero (XMR) contra peso y dólar
     */
    getMonero = async (res) => {
        let data = await fetchData('monero', this.coinGeckoClient, this.cache);
        if(data != null) {
            return data;
        }
        else{
            res.sendStatus(500);
        }
    }

    /**
     * @description Obtiene la cotización del Ripple (XRP) contra peso y dólar
     */
    getRipple = async (res) => {
        let data = await fetchData('ripple', this.coinGeckoClient, this.cache);
        if(data != null) {
            return data;
        }
        else{
            res.sendStatus(500);
        }
    }

    /**
     * @description Obtiene la cotización del DASH contra peso y dólar
     */
    getDash = async (res) => {
        let data = await fetchData('dash', this.coinGeckoClient, this.cache);
        if(data != null) {
            return data;
        }
        else{
            res.sendStatus(500);
        }
    }
}

module.exports = coinGeckoService