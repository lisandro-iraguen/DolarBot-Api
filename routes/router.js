const express = require('express');
const config = require('../package.json');
const NodeCache = require('node-cache');
const router = express.Router();

//Caches
const defaultCacheSeconds = !isNaN(config.cacheTTLSeconds.default) && config.cacheTTLSeconds.default > 0 ? config.cacheTTLSeconds.default : 0;
const cryptoCacheSeconds = !isNaN(config.cacheTTLSeconds.crypto) && config.cacheTTLSeconds.crypto > 0 ? config.cacheTTLSeconds.crypto : 0;
const exchangeRateHostSeconds = !isNaN(config.cacheTTLSeconds.exchangeRateHost) && config.cacheTTLSeconds.exchangeRateHost > 0 ? config.cacheTTLSeconds.exchangeRateHost : 0;
const defaultCache = new NodeCache({ stdTTL: defaultCacheSeconds, checkperiod: defaultCacheSeconds * 0.2, useClones: false });
const cryptoCache = new NodeCache({ stdTTL: cryptoCacheSeconds, checkperiod: cryptoCacheSeconds * 0.2, useClones: false });
const exchangeRateHostCache = new NodeCache({ stdTTL: exchangeRateHostSeconds, checkperiod: exchangeRateHostSeconds * 0.2, useClones: false });

//Services
const dolarSi = require('../services/dolarSiService');
const bluePy = require('../services/bluePyService');
const cryptoYa = require('../services/cryptoYaService');
const coinGecko = require('../services/coinGeckoService');
const exchangeRateHost = require('../services/exchangeRateHostService');

const dolarSiService = new dolarSi(defaultCache);
const bluePyService = new bluePy(defaultCache);
const cryptoYaService = new cryptoYa(defaultCache);
const coinGeckoService = new coinGecko(cryptoCache);
const exchangeRateHostService = new exchangeRateHost(exchangeRateHostCache);

//Controllers
const dolarController = require('../controller/dolarController');
const bancoDolarController = require('../controller/bancosDolarController');
const bancoEuroController = require('../controller/bancosEuroController');
const bancoRealController = require('../controller/bancosRealController');
const riesgoController = require('../controller/riesgoController');
const euroController = require('../controller/euroController');
const realController = require('../controller/realController');
const bcraController = require('../controller/bcraController');
const metalesController = require('../controller/metalesController');
const vzlaController = require('../controller/vzlaController');
const cryptoController = require('../controller/cryptoController');
const currencyController = require('../controller/currencyController');

const dolarInstance = new dolarController(dolarSiService, bluePyService);
const euroInstance = new euroController(dolarSiService, bluePyService);
const realInstance = new realController(dolarSiService, bluePyService);
const bancoDolarInstance = new bancoDolarController(dolarSiService, cryptoYaService);
const bancoEuroInstance = new bancoEuroController(dolarSiService);
const bancoRealInstance = new bancoRealController(dolarSiService);
const riesgoInstance = new riesgoController(dolarSiService);
const bcraInstance = new bcraController(dolarSiService);
const metalesInstance = new metalesController(dolarSiService);
const vzlaInstance = new vzlaController(bluePyService);
const cryptoInstance = new cryptoController(coinGeckoService);
const currencyInstance = new currencyController(exchangeRateHostService);

/**
 * @description Status
 */
router.get('/api/status', async (_req, res) => res.sendStatus(200));

/**
 * @description Rutas dolar
 */
router.get('/api/dolar/oficial', dolarInstance.getDolarOficial);
router.get('/api/dolar/ahorro', dolarInstance.getDolarAhorro);
router.get('/api/dolar/tarjeta', dolarInstance.getDolarTarjeta);
router.get('/api/dolar/qatar', dolarInstance.getDolarQatar);
router.get('/api/dolar/blue', dolarInstance.getDolarBlue);
router.get('/api/dolar/contadoliqui', dolarInstance.getContadoConLiqui);
router.get('/api/dolar/promedio', dolarInstance.getDolarPromedio);
router.get('/api/dolar/bolsa', dolarInstance.getDolarBolsa);
router.get('/api/dolar/bancos/all', bancoDolarInstance.getAll);
router.get('/api/dolar/bancos/bbva', bancoDolarInstance.getDolarBBVA);
router.get('/api/dolar/bancos/piano', bancoDolarInstance.getDolarPiano);
router.get('/api/dolar/bancos/hipotecario', bancoDolarInstance.getDolarHipotecario);
router.get('/api/dolar/bancos/hsbc', bancoDolarInstance.getDolarHSBC);
router.get('/api/dolar/bancos/galicia', bancoDolarInstance.getDolarGalicia);
router.get('/api/dolar/bancos/santander', bancoDolarInstance.getDolarSantander);
router.get('/api/dolar/bancos/ciudad', bancoDolarInstance.getDolarCiudad);
router.get('/api/dolar/bancos/supervielle', bancoDolarInstance.getDolarSupervielle);
router.get('/api/dolar/bancos/macro', bancoDolarInstance.getDolarMacro);
router.get('/api/dolar/bancos/patagonia', bancoDolarInstance.getDolarPatagonia);
router.get('/api/dolar/bancos/comafi', bancoDolarInstance.getDolarComafi);
router.get('/api/dolar/bancos/nacion', bancoDolarInstance.getDolarNacion);
router.get('/api/dolar/bancos/chaco', bancoDolarInstance.getDolarChaco);
router.get('/api/dolar/bancos/pampa', bancoDolarInstance.getDolarPampa);
router.get('/api/dolar/bancos/bancor', bancoDolarInstance.getDolarBancor);
router.get('/api/dolar/bancos/provincia', bancoDolarInstance.getDolarProvincia);
router.get('/api/dolar/bancos/icbc', bancoDolarInstance.getDolarICBC);
router.get('/api/dolar/bancos/brubank', bancoDolarInstance.getDolarBrubank);
router.get('/api/dolar/bancos/reba', bancoDolarInstance.getDolarRebanking);
router.get('/api/dolar/bancos/roela', bancoDolarInstance.getDolarRoela);

/**
 * @description Rutas euro
 */
router.get('/api/euro/oficial', euroInstance.getEuroOficial);
router.get('/api/euro/ahorro', euroInstance.getEuroAhorro);
router.get('/api/euro/tarjeta', euroInstance.getEuroTarjeta);
router.get('/api/euro/qatar', euroInstance.getEuroQatar);
router.get('/api/euro/blue', euroInstance.getEuroBlue);
router.get('/api/euro/bancos/all', bancoEuroInstance.getAll);
router.get('/api/euro/bancos/nacion', bancoEuroInstance.getEuroNacion);
router.get('/api/euro/bancos/galicia', bancoEuroInstance.getEuroGalicia);
router.get('/api/euro/bancos/bbva', bancoEuroInstance.getEuroBBVA);
router.get('/api/euro/bancos/pampa', bancoEuroInstance.getEuroPampa);
router.get('/api/euro/bancos/chaco', bancoEuroInstance.getEuroChaco);
router.get('/api/euro/bancos/hipotecario', bancoEuroInstance.getEuroHipotecario);
router.get('/api/euro/bancos/piano', bancoEuroInstance.getEuroPiano);
router.get('/api/euro/bancos/santander', bancoEuroInstance.getEuroSantander);
router.get('/api/euro/bancos/ciudad', bancoEuroInstance.getEuroCiudad);
router.get('/api/euro/bancos/supervielle', bancoEuroInstance.getEuroSupervielle);
router.get('/api/euro/bancos/patagonia', bancoEuroInstance.getEuroPatagonia);
router.get('/api/euro/bancos/comafi', bancoEuroInstance.getEuroComafi);
router.get('/api/euro/bancos/reba', bancoEuroInstance.getEuroRebanking);
router.get('/api/euro/bancos/roela', bancoEuroInstance.getEuroRoela);

/**
 * @description Rutas real
 */
router.get('/api/real/oficial', realInstance.getRealOficial);
router.get('/api/real/ahorro', realInstance.getRealAhorro);
router.get('/api/real/tarjeta', realInstance.getRealTarjeta);
router.get('/api/real/qatar', realInstance.getRealQatar);
router.get('/api/real/blue', realInstance.getRealBlue);
router.get('/api/real/bancos/all', bancoRealInstance.getAll);
router.get('/api/real/bancos/nacion', bancoRealInstance.getRealNacion);
router.get('/api/real/bancos/bbva', bancoRealInstance.getRealBBVA);
router.get('/api/real/bancos/chaco', bancoRealInstance.getRealChaco);
router.get('/api/real/bancos/piano', bancoRealInstance.getRealPiano);
router.get('/api/real/bancos/ciudad', bancoRealInstance.getRealCiudad);
router.get('/api/real/bancos/supervielle', bancoRealInstance.getRealSupervielle);

/**
 * @description Rutas otras monedas del mundo
 */
router.get('/api/monedas/lista', currencyInstance.getCurrencyList)
router.get('/api/monedas/valor/:code', currencyInstance.getCurrencyValue);
router.get('/api/monedas/historico/:code', currencyInstance.getHistoricalValues);

/**
 * @description Rutas Reservas y Circulante
 */
router.get('/api/bcra/riesgopais', riesgoInstance.getRiesgoPais);
router.get('/api/bcra/reservas', bcraInstance.getReservas);
router.get('/api/bcra/circulante', bcraInstance.getCirculante);

/**
 * @description Rutas evolución mensual
 */
router.get('/api/evolucion/dolar/oficial', dolarInstance.getEvolucionDolarOficial);
router.get('/api/evolucion/dolar/blue', dolarInstance.getEvolucionDolarBlue);
router.get('/api/evolucion/dolar/ahorro', dolarInstance.getEvolucionDolarAhorro);
router.get('/api/evolucion/real/oficial', realInstance.getEvolucionReal);
router.get('/api/evolucion/real/ahorro', realInstance.getEvolucionRealAhorro);
router.get('/api/evolucion/euro/oficial', euroInstance.getEvolucionEuro);
router.get('/api/evolucion/euro/ahorro', euroInstance.getEvolucionEuroAhorro);

/**
 * @description Rutas metales
 */
router.get('/api/metales/oro', metalesInstance.getOro);
router.get('/api/metales/plata', metalesInstance.getPlata);
router.get('/api/metales/cobre', metalesInstance.getCobre);

/**
 * @description Rutas Cryptomonedas
 */
router.get('/api/crypto/list', cryptoInstance.getCoinList)
router.get('/api/crypto/bitcoin', cryptoInstance.getBitcoin);
router.get('/api/crypto/ethereum', cryptoInstance.getEthereum);
router.get('/api/crypto/bitcoincash', cryptoInstance.getBitcoinCash);
router.get('/api/crypto/monero', cryptoInstance.getMonero);
router.get('/api/crypto/litecoin', cryptoInstance.getLitecoin);
router.get('/api/crypto/ripple', cryptoInstance.getRipple);
router.get('/api/crypto/dash', cryptoInstance.getDash);
router.get('/api/crypto/:coinId', cryptoInstance.getCoin);

/**
 * @description Rutas Venezuela
 */
router.get('/api/vzla/dolar', vzlaInstance.getDolarVzla)

module.exports = router