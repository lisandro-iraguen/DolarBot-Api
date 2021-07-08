const util = require("../util/util")

class realController {
    constructor(dolarSiService, bluePyService) {
        this.dolarSiService = dolarSiService;
        this.bluePyService = bluePyService;
        this.util = new util();
    }

    /**
     * @description Obtener el valor del real oficial
     * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
     */
     getRealOficial = async (_req, res) => {
        try 
        {
            const data = await this.bluePyService.getRealOficial();
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
     * @description Obtener el valor del real ahorro
     * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
     */
     getRealAhorro = async (_req, res) => {
        try 
        {
            const data = await this.bluePyService.getRealOficial();
            const valores = {
                fecha: this.util.getDateTime(),
                compra: data.compra,
                venta: this.util.formatCurrencyWithTaxes(data.venta.toString()),
            }
            res.send(valores);
        } catch (e) {
            console.log(e);
            res.sendStatus(500);
        }
    }

    /**
     * @description Obtener el valor del real blue
     * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
     */
     getRealBlue = async (_req, res) => {
        try 
        {
            const data = await this.bluePyService.getRealBlue();
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
     * @description Obtener el valor del real del Banco Nación
     * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
     */
    getRealNacion = async (_req, res) => {
        try {
            const data = await this.dolarSiService.getInfoDolar()
            const valores = {
                fecha: this.util.getDateTime(),
                compra: this.util.formatCurrency(data.cotiza.Real.casa230.compra._text),
                venta: this.util.formatCurrency(data.cotiza.Real.casa230.venta._text),
                ventaAhorro: this.util.formatCurrencyWithTaxes(data.cotiza.Real.casa230.venta._text),
            }
            res.send(valores)
        } catch (e) {
            console.log(e)
            res.sendStatus(500)
        }
    }

    /**
     * @description Obtener el valor del real del Banco BBVA
     * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
     */
    getRealBBVA = async (_req, res) => {
        try {
            const data = await this.dolarSiService.getInfoDolar()
            const valores = {
                fecha: this.util.getDateTime(),
                compra: this.util.formatCurrency(data.cotiza.Real.casa365.compra._text),
                venta: this.util.formatCurrency(data.cotiza.Real.casa365.venta._text),
                ventaAhorro: this.util.formatCurrencyWithTaxes(data.cotiza.Real.casa365.venta._text),
            }
            res.send(valores)
        } catch (e) {
            console.log(e)
            res.sendStatus(500)
        }
    }

    /**
     * @description Obtener el valor del real del Nuevo Banco del Chaco
     * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
     */
    getRealChaco = async (_req, res) => {
        try {
            const data = await this.dolarSiService.getInfoDolar()
            const valores = {
                fecha: this.util.getDateTime(),
                compra: this.util.formatCurrency(data.cotiza.Real.casa366.compra._text),
                venta: this.util.formatCurrency(data.cotiza.Real.casa366.venta._text),
                ventaAhorro: this.util.formatCurrencyWithTaxes(data.cotiza.Real.casa366.venta._text),
            }
            res.send(valores)
        } catch (e) {
            console.log(e)
            res.sendStatus(500)
        }
    }

    /**
     * @description Obtener el valor del real del Banco Piano
     * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
     */
     getRealPiano = async (_req, res) => {
        try {
            const data = await this.dolarSiService.getInfoDolar()
            const valores = {
                fecha: this.util.getDateTime(),
                compra: this.util.formatCurrency(data.cotiza.Real.casa445.compra._text),
                venta: this.util.formatCurrency(data.cotiza.Real.casa445.venta._text),
                ventaAhorro: this.util.formatCurrencyWithTaxes(data.cotiza.Real.casa445.venta._text),
            }
            res.send(valores)
        } catch (e) {
            console.log(e)
            res.sendStatus(500)
        }
    }

    /**
     * @description Obtener el valor del real del Banco Ciudad
     * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
     */
     getRealCiudad = async (_req, res) => {
        try {
            const data = await this.dolarSiService.getInfoDolar()
            const valores = {
                fecha: this.util.getDateTime(),
                compra: this.util.formatCurrency(data.cotiza.Real.casa449.compra._text),
                venta: this.util.formatCurrency(data.cotiza.Real.casa449.venta._text),
                ventaAhorro: this.util.formatCurrencyWithTaxes(data.cotiza.Real.casa449.venta._text),
            }
            res.send(valores)
        } catch (e) {
            console.log(e)
            res.sendStatus(500)
        }
    }

    /**
     * @description Obtener el valor del real del Banco Supervielle
     * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
     */
     getRealSupervielle = async (_req, res) => {
        try {
            const data = await this.dolarSiService.getInfoDolar()
            const valores = {
                fecha: this.util.getDateTime(),
                compra: this.util.formatCurrency(data.cotiza.Real.casa453.compra._text),
                venta: this.util.formatCurrency(data.cotiza.Real.casa453.venta._text),
                ventaAhorro: this.util.formatCurrencyWithTaxes(data.cotiza.Real.casa453.venta._text),
            }
            res.send(valores)
        } catch (e) {
            console.log(e)
            res.sendStatus(500)
        }
    }

    /**
     * @description Obtiene la evolución anual del valor del real oficial
     * @returns Un objeto con el valor promedio por mes, el mes y el año.
     */
    getEvolucionReal = async (_req, res) => {
        try {
            const data = await this.dolarSiService.getInfoDolar()
            const valores = this.util.getEvolucion(data.cotiza.evolucion_dolar.real.anio)

            res.send(valores)
        } catch (e) {
            res.sendStatus(500)
            console.log(e)
        }
    }

        /**
     * @description Obtiene la evolución anual del valor del real ahorro
     * @returns Un objeto con el valor promedio por mes, el mes y el año.
     */
    getEvolucionRealAhorro = async (_req, res) => {
        try {
            const data = await this.dolarSiService.getInfoDolar()
            const valores = this.util.getEvolucionWithTaxes(data.cotiza.evolucion_dolar.real.anio)

            res.send(valores)
        } catch (e) {
            res.sendStatus(500)
            console.log(e)
        }
    }
}

module.exports = realController