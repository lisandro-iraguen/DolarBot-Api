const CoinGecko = require('coingecko-api');
let coinList = [];

loadCoinList = async (apiClient, cache) => {
    console.log('Loading CoinGecko currency list...');
    const cacheValue = cache.get(`coingeckolist`);
    if (cacheValue !== undefined) {
        coinList = cacheValue;
    }
    else {
        const value = await apiClient.coins.list();
        if (value.success && value.data.length > 0) {
            coinList = value.data;
            console.log(`Loaded ${coinList.length} cryptocurrencies...`);
        }
        else {
            console.log(`Failed to load cryptocurrencies...`);
            console.log(value.message);
        }
    }
}

/**
 * Obtiene el valor de la criptomoneda especificada en la API de CoinGecko, validando que el ID sea un parámetro válido.
 */
fetchFromCoinList = async (coinId, apiClient, cache) => {
    try {
        if (coinList != null && coinList.length > 0) {
            const coin = coinList.find(x => x.id === coinId);
            if (coin && coin != null) {
                const data = await fetchData(coinId, apiClient, cache);
                return {
                    id: coin.id,
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

        if (cacheValue !== undefined) {
            return cacheValue;
        }
        else {
            const value = await apiClient.simple.price({
                ids: [coinId],
                vs_currencies: ['ars', 'usd']
            });

            if (value.success) {
                cache.set(`coingecko:${coinId}`, value.data[coinId]);
                return value.data[coinId];
            }
            else {
                console.log(value.message);
                return null;
            }
        }
    }
    catch (e) {
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
        if (coinList != null) {
            return coinList.filter(x => x.id != null && x.id != '').map(x => ({ id: x.id, code: x.symbol, name: x.name, }));
        }
        else {
            return [];
        }
    }

    /**
     * @description Obtiene la cotización la moneda especificada contra peso y dólar
     */
    getCoin = async (coinId) => {
        const data = await fetchFromCoinList(coinId, this.coinGeckoClient, this.cache);
        if (data != null) {
            return data;
        }
        else {
            return null;
        }
    }
}

module.exports = coinGeckoService