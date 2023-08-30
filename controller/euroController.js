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
     * @description Obtener el valor del euro del Banco Nación
     * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
     */
    getEuroNacion = async (_req, res) => {
        try {
            const data = await this.dolarSiService.getInfoDolar();
            const taxPercent = parseInt(config.taxPercent.ahorro);
            const valores = {
                fecha: this.util.getDateTime(),
                compra: this.util.formatCurrency(data.cotiza.Euro.casa176.compra._text),
                venta: this.util.formatCurrency(data.cotiza.Euro.casa176.venta._text),
                ventaAhorro: this.util.formatCurrency(data.cotiza.Euro.casa176.venta._text, 2, taxPercent),
            }
            res.send(valores)
        } catch (e) {
            console.log(e)
            res.sendStatus(500)
        }
    }

    /**
     * @description Obtener el valor del euro del Banco Galicia
     * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
     */
    getEuroGalicia = async (_req, res) => {
        try {
            const data = await this.dolarSiService.getInfoDolar();
            const taxPercent = parseInt(config.taxPercent.ahorro);
            const valores = {
                fecha: this.util.getDateTime(),
                compra: this.util.formatCurrency(data.cotiza.Euro.casa356.compra._text),
                venta: this.util.formatCurrency(data.cotiza.Euro.casa356.venta._text),
                ventaAhorro: this.util.formatCurrency(data.cotiza.Euro.casa356.venta._text, 2, taxPercent),
            }
            res.send(valores)
        } catch (e) {
            console.log(e)
            res.sendStatus(500)
        }
    }

    /**
     * @description Obtener el valor del euro del Banco BBVA
     * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
     */
    getEuroBBVA = async (_req, res) => {
        try {
            const data = await this.dolarSiService.getInfoDolar();
            const taxPercent = parseInt(config.taxPercent.ahorro);
            const valores = {
                fecha: this.util.getDateTime(),
                compra: this.util.formatCurrency(data.cotiza.Euro.casa358.compra._text),
                venta: this.util.formatCurrency(data.cotiza.Euro.casa358.venta._text),
                ventaAhorro: this.util.formatCurrency(data.cotiza.Euro.casa358.venta._text, 2, taxPercent),
            }
            res.send(valores)
        } catch (e) {
            console.log(e)
            res.sendStatus(500)
        }
    }

    /**
     * @description Obtener el valor del euro del Banco de la Pampa
     * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
     */
    getEuroPampa = async (_req, res) => {
        try {
            const data = await this.dolarSiService.getInfoDolar();
            const taxPercent = parseInt(config.taxPercent.ahorro);
            const valores = {
                fecha: this.util.getDateTime(),
                compra: this.util.formatCurrency(data.cotiza.Euro.casa359.compra._text),
                venta: this.util.formatCurrency(data.cotiza.Euro.casa359.venta._text),
                ventaAhorro: this.util.formatCurrency(data.cotiza.Euro.casa359.venta._text, 2, taxPercent),
            }
            res.send(valores)
        } catch (e) {
            console.log(e)
            res.sendStatus(500)
        }
    }

    /**
     * @description Obtener el valor del euro del Nuevo Banco del Chaco
     * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
     */
    getEuroChaco = async (_req, res) => {
        try {
            const data = await this.dolarSiService.getInfoDolar();
            const taxPercent = parseInt(config.taxPercent.ahorro);
            const valores = {
                fecha: this.util.getDateTime(),
                compra: this.util.formatCurrency(data.cotiza.Euro.casa360.compra._text),
                venta: this.util.formatCurrency(data.cotiza.Euro.casa360.venta._text),
                ventaAhorro: this.util.formatCurrency(data.cotiza.Euro.casa360.venta._text, 2, taxPercent),
            }
            res.send(valores)
        } catch (e) {
            console.log(e)
            res.sendStatus(500)
        }
    }

    /**
     * @description Obtener el valor del euro del Banco Hipotecario
     * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
     */
    getEuroHipotecario = async (_req, res) => {
        try {
            const data = await this.dolarSiService.getInfoDolar();
            const taxPercent = parseInt(config.taxPercent.ahorro);
            const valores = {
                fecha: this.util.getDateTime(),
                compra: this.util.formatCurrency(data.cotiza.Euro.casa361.compra._text),
                venta: this.util.formatCurrency(data.cotiza.Euro.casa361.venta._text),
                ventaAhorro: this.util.formatCurrency(data.cotiza.Euro.casa361.venta._text, 2, taxPercent),
            }
            res.send(valores)
        } catch (e) {
            console.log(e)
            res.sendStatus(500)
        }
    }

    /**
     * @description Obtener el valor del euro del Banco Piano
     * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
     */
    getEuroPiano = async (_req, res) => {
        try {
            const data = await this.dolarSiService.getInfoDolar();
            const taxPercent = parseInt(config.taxPercent.ahorro);
            const valores = {
                fecha: this.util.getDateTime(),
                compra: this.util.formatCurrency(data.cotiza.Euro.casa443.compra._text),
                venta: this.util.formatCurrency(data.cotiza.Euro.casa443.venta._text),
                ventaAhorro: this.util.formatCurrency(data.cotiza.Euro.casa443.venta._text, 2, taxPercent),
            }
            res.send(valores)
        } catch (e) {
            console.log(e)
            res.sendStatus(500)
        }
    }

    /**
     * @description Obtener el valor del euro del Banco Santander
     * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
     */
    getEuroSantander = async (_req, res) => {
        try {
            const data = await this.dolarSiService.getInfoDolar();
            const taxPercent = parseInt(config.taxPercent.ahorro);
            const valores = {
                fecha: this.util.getDateTime(),
                compra: this.util.formatCurrency(data.cotiza.Euro.casa447.compra._text),
                venta: this.util.formatCurrency(data.cotiza.Euro.casa447.venta._text),
                ventaAhorro: this.util.formatCurrency(data.cotiza.Euro.casa447.venta._text, 2, taxPercent),
            }
            res.send(valores)
        } catch (e) {
            console.log(e)
            res.sendStatus(500)
        }
    }

    /**
     * @description Obtener el valor del euro del Banco Ciudad
     * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
     */
    getEuroCiudad = async (_req, res) => {
        try {
            const data = await this.dolarSiService.getInfoDolar();
            const taxPercent = parseInt(config.taxPercent.ahorro);
            const valores = {
                fecha: this.util.getDateTime(),
                compra: this.util.formatCurrency(data.cotiza.Euro.casa448.compra._text),
                venta: this.util.formatCurrency(data.cotiza.Euro.casa448.venta._text),
                ventaAhorro: this.util.formatCurrency(data.cotiza.Euro.casa448.venta._text, 2, taxPercent),
            }
            res.send(valores)
        } catch (e) {
            console.log(e)
            res.sendStatus(500)
        }
    }

    /**
     * @description Obtener el valor del euro del Banco Supervielle
     * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
     */
    getEuroSupervielle = async (_req, res) => {
        try {
            const data = await this.dolarSiService.getInfoDolar();
            const taxPercent = parseInt(config.taxPercent.ahorro);
            const valores = {
                fecha: this.util.getDateTime(),
                compra: this.util.formatCurrency(data.cotiza.Euro.casa450.compra._text),
                venta: this.util.formatCurrency(data.cotiza.Euro.casa450.venta._text),
                ventaAhorro: this.util.formatCurrency(data.cotiza.Euro.casa450.venta._text, 2, taxPercent),
            }
            res.send(valores)
        } catch (e) {
            console.log(e)
            res.sendStatus(500)
        }
    }

    /**
     * @description Obtener el valor del euro del Banco Patagonia
     * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
     */
    getEuroPatagonia = async (_req, res) => {
        try {
            const data = await this.dolarSiService.getInfoDolar();
            const taxPercent = parseInt(config.taxPercent.ahorro);
            const valores = {
                fecha: this.util.getDateTime(),
                compra: this.util.formatCurrency(data.cotiza.Euro.casa454.compra._text),
                venta: this.util.formatCurrency(data.cotiza.Euro.casa454.venta._text),
                ventaAhorro: this.util.formatCurrency(data.cotiza.Euro.casa454.venta._text, 2, taxPercent),
            }
            res.send(valores)
        } catch (e) {
            console.log(e)
            res.sendStatus(500)
        }
    }

    /**
     * @description Obtener el valor del euro del Banco Comafi
     * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
     */
    getEuroComafi = async (_req, res) => {
        try {
            const data = await this.dolarSiService.getInfoDolar();
            const taxPercent = parseInt(config.taxPercent.ahorro);
            const valores = {
                fecha: this.util.getDateTime(),
                compra: this.util.formatCurrency(data.cotiza.Euro.casa455.compra._text),
                venta: this.util.formatCurrency(data.cotiza.Euro.casa455.venta._text),
                ventaAhorro: this.util.formatCurrency(data.cotiza.Euro.casa455.venta._text, 2, taxPercent),
            }
            res.send(valores)
        } catch (e) {
            console.log(e)
            res.sendStatus(500)
        }
    }

    /**
     * @description Obtener el valor del euro de Rebanking
     * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
     */
    getEuroRebanking = async (_req, res) => {
        try {
            const data = await this.dolarSiService.getInfoDolar();
            const taxPercent = parseInt(config.taxPercent.ahorro);
            const valores = {
                fecha: this.util.getDateTime(),
                compra: this.util.formatCurrency(data.cotiza.Euro.casa456.compra._text),
                venta: this.util.formatCurrency(data.cotiza.Euro.casa456.venta._text),
                ventaAhorro: this.util.formatCurrency(data.cotiza.Euro.casa456.venta._text, 2, taxPercent),
            }
            res.send(valores)
        } catch (e) {
            console.log(e)
            res.sendStatus(500)
        }
    }

    /**
     * @description Obtener el valor del euro del Banco Roela
     * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
     */
    getEuroRoela = async (_req, res) => {
        try {
            const data = await this.dolarSiService.getInfoDolar();
            const taxPercent = parseInt(config.taxPercent.ahorro);
            const valores = {
                fecha: this.util.getDateTime(),
                compra: this.util.formatCurrency(data.cotiza.Euro.casa357.compra._text),
                venta: this.util.formatCurrency(data.cotiza.Euro.casa357.venta._text),
                ventaAhorro: this.util.formatCurrency(data.cotiza.Euro.casa357.venta._text, 2, taxPercent),
            }
            res.send(valores)
        } catch (e) {
            console.log(e)
            res.sendStatus(500)
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