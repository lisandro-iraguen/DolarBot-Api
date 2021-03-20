const express = require('express');
const config = require('../package.json');
const NodeCache = require('node-cache');
const router = express.Router();

//Cache
const cacheTimeToLive = !isNaN(config.cacheTTLSeconds) && config.cacheTTLSeconds > 0 ? config.cacheTTLSeconds : 0;
const cache = new NodeCache({ stdTTL: cacheTimeToLive, checkperiod: cacheTimeToLive * 0.2, useClones: false });

//Services
const dolarSiService = require('../services/dolarSiService');
const dolarTodayService = require('../services/dolarTodayService');
const coinGeckoService = require('../services/coinGeckoService');

const dolarSiServiceInstance = new dolarSiService(cache);
const dolarTodayServiceInstance = new dolarTodayService(cache);
const coinGeckoInstance = new coinGeckoService(cache);

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

const dolarInstance = new dolarController(dolarSiServiceInstance);
const bancoInstance = new bancoController(dolarSiServiceInstance);
const riesgoInstance = new riesgoController(dolarSiServiceInstance);
const euroInstance = new euroController(dolarSiServiceInstance);
const realInstance = new realController(dolarSiServiceInstance);
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

/**
 * @description Rutas bancos
 */
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
router.get('/api/dolar/bancos/bind', bancoInstance.getDolarBIND);
router.get('/api/dolar/bancos/chaco', bancoInstance.getDolarChaco);
router.get('/api/dolar/bancos/pampa', bancoInstance.getDolarPampa);
router.get('/api/dolar/bancos/bancor', bancoInstance.getDolarBancor);

/**
 * @description Rutas euro
 */
router.get('/api/euro/bancos/nacion', euroInstance.getEuroNacion);
router.get('/api/euro/bancos/galicia', euroInstance.getEuroGalicia);
router.get('/api/euro/bancos/bbva', euroInstance.getEuroBBVA);
router.get('/api/euro/bancos/pampa', euroInstance.getEuroPampa);
router.get('/api/euro/bancos/chaco', euroInstance.getEuroChaco);
router.get('/api/euro/bancos/hipotecario', euroInstance.getEuroHipotecario);

/**
 * @description Rutas real
 */
router.get('/api/real/bancos/nacion', realInstance.getRealNacion);
router.get('/api/real/bancos/bbva', realInstance.getRealBBVA);
router.get('/api/real/bancos/chaco', realInstance.getRealChaco);

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