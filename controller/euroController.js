const util = require("../util/util");
const config = require('../package.json');

class euroController {
    constructor(dolarSiService, bluePyService) {
        this.dolarSiService = dolarSiService;
        this.bluePyService = bluePyService;
        this.util = new util();
    }

    /**
     * @description Obtener el valor del euro oficial
     * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
     */
    getEuroOficial = async (_req, res) => {
        try {
            const data = await this.bluePyService.getEuroOficial();
            const valores = {
                fecha: this.util.getDateTime(),
                compra: data.compra,
                venta: data.venta,
            }
            res.send(valores);
        } catch (e) {
            console.log(e);
            res.sendStatus(500);
        }
    }

    /**
     * @description Obtener el valor del euro ahorro
     * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
     */
    getEuroAhorro = async (_req, res) => {
        try {
            const data = await this.bluePyService.getEuroTarjeta();
            const valores = {
                fecha: this.util.getDateTime(),
                compra: data.compra,
                venta: data.venta,
            }
            res.send(valores);
        } catch (e) {
            console.log(e);
            res.sendStatus(500);
        }
    }

    /**
     * @description Obtener el valor del euro tarjeta
     * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
     */
    getEuroTarjeta = async (_req, res) => {
        try {
            const data = await this.bluePyService.getEuroTarjeta();
            const valores = {
                fecha: this.util.getDateTime(),
                compra: data.compra,
                venta: data.venta,
            }
            res.send(valores);
        } catch (e) {
            console.log(e);
            res.sendStatus(500);
        }
    }

    /**
     * @description Obtener el valor del euro qatar
     * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
     */
     getEuroQatar = async (_req, res) => {
        try {
            const data = await this.bluePyService.getEuroOficial();
            const taxPercent = parseInt(config.taxPercent.qatar);
            const valores = {
                fecha: this.util.getDateTime(),
                compra: data.compra,
                venta: this.util.formatCurrency(data.venta.toString(), 2, taxPercent),
            }
            res.send(valores);
        } catch (e) {
            console.log(e);
            res.sendStatus(500);
        }
    }    

    /**
     * @description Obtener el valor del euro blue
     * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
     */
    getEuroBlue = async (_req, res) => {
        try {
            const data = await this.bluePyService.getEuroBlue();
            const valores = {
                fecha: this.util.getDateTime(),
                compra: data.compra,
                venta: data.venta,
            }
            res.send(valores);
        } catch (e) {
            console.log(e);
            res.sendStatus(500);
        }
    }

    /**
     * @description Obtiene la evolución anual del valor del euro oficial
     * @returns Un objeto con el valor promedio por mes, el mes y el año.
     */
    getEvolucionEuro = async (_req, res) => {
        try {
            const data = await this.dolarSiService.getInfoDolar();
            const valores = this.util.getEvolucion(data.cotiza.evolucion_dolar.euro.anio);

            res.send(valores);
        } catch (e) {
            res.sendStatus(500);
            console.log(e);
        }
    }

    /**
 * @description Obtiene la evolución anual del valor del euro ahorro
 * @returns Un objeto con el valor promedio por mes, el mes y el año.
 */
    getEvolucionEuroAhorro = async (_req, res) => {
        try {
            const data = await this.dolarSiService.getInfoDolar();
            const taxPercent = parseInt(config.taxPercent.ahorro);
            const valores = this.util.getEvolucion(data.cotiza.evolucion_dolar.euro.anio, taxPercent);

            res.send(valores);
        } catch (e) {
            res.sendStatus(500);
            console.log(e);
        }
    }
}

module.exports = euroController