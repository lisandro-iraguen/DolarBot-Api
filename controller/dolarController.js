const util = require("../util/util");
const config = require('../package.json');

class dolarController {
    constructor(dolarSiService, bluePyService) {
        this.dolarSiService = dolarSiService;
        this.bluePyService = bluePyService;
        this.util = new util();
    }

    /**
     * @description Obtener el valor del dolar oficial
     * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
     */
    getDolarOficial = async (_req, res) => {
        try {
            const data = await this.bluePyService.getDolarOficial();
            res.send(data);
        } catch (e) {
            console.log(e);
            res.sendStatus(500);
        }
    }

    /**
     * @description Obtener el valor del dolar ahorro
     * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
     */
    getDolarAhorro = async (_req, res) => {
        try {
            const data = await this.bluePyService.getDolarTurista();
            res.send(data);
        } catch (e) {
            console.log(e);
            res.sendStatus(500);
        }
    }

    /**
     * @description Obtener el valor del dolar tarjeta
     * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
     */
    getDolarTarjeta = async (_req, res) => {
        try {
            const data = await this.bluePyService.getDolarTurista();
            res.send(data);
        } catch (e) {
            console.log(e);
            res.sendStatus(500);
        }
    }

    /**
     * @description Obtener el valor del dolar qatar
     * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
     */
     getDolarQatar = async (_req, res) => {
        try {
            const data = await this.bluePyService.getDolarOficial();
            const taxPercent = parseInt(config.taxPercent.qatar);
            const valores = {
                fecha: this.util.getDateTime(),
                compra: this.util.formatCurrency(data.compra),
                venta: this.util.formatCurrency(data.venta, 2, taxPercent)
            }

            res.send(valores);
        } catch (e) {
            console.log(e);
            res.sendStatus(500);
        }
    }    


    /**
     * @description Obtener el valor del dolar blue
     * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
     */
    getDolarBlue = async (_req, res) => {
        try {
            const data = await this.bluePyService.getDolarBlue();
            res.send(data);
        } catch (e) {
            console.log(e);
            res.sendStatus(500);
        }
    }


    /**
     * @description Obtener el valor del dolar contado con liqui
     * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
     */
    getContadoConLiqui = async (_req, res) => {
        try {
            const data = await this.bluePyService.getDolarCcl();
            res.send(data);
        } catch (e) {
            console.log(e);
            res.sendStatus(500);
        }
    }


    /**
     * @description Obtener el valor del dolar promedio
     * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
     */
    getDolarPromedio = async (_req, res) => {
        try {
            const data = await this.dolarSiService.getInfoDolar();
            const valores = {
                fecha: this.util.getDateTime(),
                compra: this.util.formatCurrency(data.cotiza.cotizador.casa302.compra._text),
                venta: this.util.formatCurrency(data.cotiza.cotizador.casa302.venta._text)
            }

            res.send(valores);
        } catch (e) {
            res.sendStatus(500);
            console.log(e);
        }
    }


    /**
     * @description Obtener el valor del dolar bolsa
     * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
     */
    getDolarBolsa = async (_req, res) => {
        try {
            const data = await this.bluePyService.getDolarMep();
            res.send(data);
        } catch (e) {
            console.log(e);
            res.sendStatus(500);
        }
    }

    /**
     * @description Obtiene la evolución anual del valor del dolar oficial
     * @returns Un objeto con el valor promedio por mes, el mes y el año.
     */
    getEvolucionDolarOficial = async (_req, res) => {
        try {
            const data = await this.dolarSiService.getInfoDolar();
            const valores = this.util.getEvolucion(data.cotiza.evolucion_dolar.oficial.anio)

            res.send(valores);
        } catch (e) {
            res.sendStatus(500);
            console.log(e);
        }
    }

    /**
     * @description Obtiene la evolución anual del valor del dolar ahorro
     * @returns Un objeto con el valor promedio por mes, el mes y el año.
     */
    getEvolucionDolarAhorro = async (_req, res) => {
        try {
            const data = await this.dolarSiService.getInfoDolar();
            const taxPercent = parseInt(config.taxPercent.ahorro);
            const valores = this.util.getEvolucion(data.cotiza.evolucion_dolar.oficial.anio, taxPercent);

            res.send(valores);
        } catch (e) {
            res.sendStatus(500);
            console.log(e);
        }
    }

    /**
     * @description Obtiene la evolución anual del valor del dolar blue
     * @returns Un objeto con el valor promedio por mes, el mes y el año.
     */
    getEvolucionDolarBlue = async (_req, res) => {
        try {
            const data = await this.dolarSiService.getInfoDolar();
            const valores = this.util.getEvolucion(data.cotiza.evolucion_dolar.blue.anio)

            res.send(valores);
        } catch (e) {
            res.sendStatus(500);
            console.log(e);
        }
    }
}

module.exports = dolarController