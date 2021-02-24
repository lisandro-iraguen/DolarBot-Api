const util = require("../util/util")

class realController {
    constructor(dolarSiService) {
        this.dolarSiService = dolarSiService
        this.util = new util()
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