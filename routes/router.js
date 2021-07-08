const express = require('express');
const config = require('../package.json');
const NodeCache = require('node-cache');
const router = express.Router();

//Caches
const defaultCacheSeconds = !isNaN(config.cacheTTLSeconds.default) && config.cacheTTLSeconds.default > 0 ? config.cacheTTLSeconds.default : 0;
const cryptoCacheSeconds = !isNaN(config.cacheTTLSeconds.crypto) && config.cacheTTLSeconds.crypto > 0 ? config.cacheTTLSeconds.crypto : 0;
const defaultCache = new NodeCache({ stdTTL: defaultCacheSeconds, checkperiod: defaultCacheSeconds * 0.2, useClones: false });
const cryptoCache = new NodeCache({ stdTTL: cryptoCacheSeconds, checkperiod: cryptoCacheSeconds * 0.2, useClones: false });

//Services
const dolarSiService = require('../services/dolarSiService');
const dolarTodayService = require('../services/dolarTodayService');
const bluePyService = require('../services/bluePyService');
const coinGeckoService = require('../services/coinGeckoService');

const dolarSiServiceInstance = new dolarSiService(defaultCache);
const dolarTodayServiceInstance = new dolarTodayService(defaultCache);
const bluePyServiceInstance = new bluePyService(defaultCache);
const coinGeckoInstance = new coinGeckoService(cryptoCache);

//Controllers
const dolarController = require('../controller/dolarController');
const bancoController = require('../controller/bancosController');
const riesgoController = require('../controller/riesgoController');
const euroController = require('../controller/euroController');
const realController = require('../controller/realController');
const bcraController = require('../controller/bcraController');
const metalesController = require('../controller/metalesController');
const vzlaController = require('../controller/vzlaController');
const cryptoController = require('../controller/cryptoController');

const dolarInstance = new dolarController(dolarSiServiceInstance, bluePyServiceInstance);
const euroInstance = new euroController(dolarSiServiceInstance, bluePyServiceInstance);
const realInstance = new realController(dolarSiServiceInstance, bluePyServiceInstance);
const bancoInstance = new bancoController(dolarSiServiceInstance);
const riesgoInstance = new riesgoController(dolarSiServiceInstance);
const bcraInstance = new bcraController(dolarSiServiceInstance);
const metalesInstance = new metalesController(dolarSiServiceInstance);
const vzlaInstance = new vzlaController(dolarTodayServiceInstance);
const cryptoInstance = new cryptoController(coinGeckoInstance);

/**
 * @description Status
 */
router.get('/api/status', async (_req, res, _next) => res.sendStatus(200));

/**
 * @description Rutas dolar
 */
router.get('/api/dolar/oficial', dolarInstance.getDolarOficial);
router.get('/api/dolar/ahorro', dolarInstance.getDolarAhorro);
router.get('/api/dolar/blue', dolarInstance.getDolarBlue);
router.get('/api/dolar/contadoliqui', dolarInstance.getContadoConLiqui);
router.get('/api/dolar/promedio', dolarInstance.getDolarPromedio);
router.get('/api/dolar/bolsa', dolarInstance.getDolarBolsa);
router.get('/api/dolar/bancos/bbva', bancoInstance.getDolarBBVA);
router.get('/api/dolar/bancos/piano', bancoInstance.getDolarPiano);
router.get('/api/dolar/bancos/hipotecario', bancoInstance.getDolarHipotecario);
router.get('/api/dolar/bancos/galicia', bancoInstance.getDolarGalicia);
router.get('/api/dolar/bancos/santander', bancoInstance.getDolarSantander);
router.get('/api/dolar/bancos/ciudad', bancoInstance.getDolarCiudad);
router.get('/api/dolar/bancos/supervielle', bancoInstance.getDolarSupervielle);
router.get('/api/dolar/bancos/patagonia', bancoInstance.getDolarPatagonia);
router.get('/api/dolar/bancos/comafi', bancoInstance.getDolarComafi);
router.get('/api/dolar/bancos/nacion', bancoInstance.getDolarNacion);
router.get('/api/dolar/bancos/chaco', bancoInstance.getDolarChaco);
router.get('/api/dolar/bancos/pampa', bancoInstance.getDolarPampa);
router.get('/api/dolar/bancos/bancor', bancoInstance.getDolarBancor);
router.get('/api/dolar/bancos/provincia', bancoInstance.getDolarProvincia);
router.get('/api/dolar/bancos/icbc', bancoInstance.getDolarICBC);
router.get('/api/dolar/bancos/reba', bancoInstance.getDolarRebanking);
router.get('/api/dolar/bancos/roela', bancoInstance.getDolarRoela);

/**
 * @description Rutas euro
 */
router.get('/api/euro/oficial', euroInstance.getEuroOficial);
router.get('/api/euro/ahorro', euroInstance.getEuroAhorro);
router.get('/api/euro/blue', euroInstance.getEuroBlue);
router.get('/api/euro/bancos/nacion', euroInstance.getEuroNacion);
router.get('/api/euro/bancos/galicia', euroInstance.getEuroGalicia);
router.get('/api/euro/bancos/bbva', euroInstance.getEuroBBVA);
router.get('/api/euro/bancos/pampa', euroInstance.getEuroPampa);
router.get('/api/euro/bancos/chaco', euroInstance.getEuroChaco);
router.get('/api/euro/bancos/hipotecario', euroInstance.getEuroHipotecario);
router.get('/api/euro/bancos/piano', euroInstance.getEuroPiano);
router.get('/api/euro/bancos/santander', euroInstance.getEuroSantander);
router.get('/api/euro/bancos/ciudad', euroInstance.getEuroCiudad);
router.get('/api/euro/bancos/supervielle', euroInstance.getEuroSupervielle);
router.get('/api/euro/bancos/patagonia', euroInstance.getEuroPatagonia);
router.get('/api/euro/bancos/comafi', euroInstance.getEuroComafi);
router.get('/api/euro/bancos/reba', euroInstance.getEuroRebanking);
router.get('/api/euro/bancos/roela', euroInstance.getEuroRoela);

/**
 * @description Rutas real
 */
 router.get('/api/real/oficial', realInstance.getRealOficial);
 router.get('/api/real/ahorro', realInstance.getRealAhorro);
 router.get('/api/real/blue', realInstance.getRealBlue);
router.get('/api/real/bancos/nacion', realInstance.getRealNacion);
router.get('/api/real/bancos/bbva', realInstance.getRealBBVA);
router.get('/api/real/bancos/chaco', realInstance.getRealChaco);
router.get('/api/real/bancos/piano', realInstance.getRealPiano);
router.get('/api/real/bancos/ciudad', realInstance.getRealCiudad);
router.get('/api/real/bancos/supervielle', realInstance.getRealSupervielle);

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
router.get('/api/vzla/euro', vzlaInstance.getEuroVzla)

module.exports = router