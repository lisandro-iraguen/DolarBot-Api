const util = require("../util/util")

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
        try 
        {
            const data = await this.dolarSiService.getInfoDolar();
            const valores = {
                fecha: this.util.getDateTime(),
                compra: this.util.formatCurrency(data.cotiza.Dolar.casa344.compra._text),
                venta: this.util.formatCurrency(data.cotiza.Dolar.casa344.venta._text),
            }
            res.send(valores);
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
        try 
        {
            const data = await this.dolarSiService.getInfoDolar();
            const valores = {
                fecha: this.util.getDateTime(),
                compra: this.util.formatCurrency(data.cotiza.Dolar.casa344.compra._text),
                venta: this.util.formatCurrencyWithTaxes(data.cotiza.Dolar.casa344.venta._text)
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
        try 
        {
            const data = await this.dolarSiService.getInfoDolar();
            const valores = {
                fecha: this.util.getDateTime(),
                compra: this.util.formatCurrency(data.cotiza.Dolar.casa380.compra._text),
                venta: this.util.formatCurrency(data.cotiza.Dolar.casa380.venta._text)
            }

            res.send(valores);
        } catch (e) {
            res.sendStatus(500);
            console.log(e);
        }
    }


    /**
     * @description Obtener el valor del dolar contado con liqui
     * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
     */
    getContadoConLiqui = async (_req, res) => {
        try 
        {
            const data = await this.dolarSiService.getInfoDolar();
            const valores = {
                fecha: this.util.getDateTime(),
                compra: this.util.formatCurrency(data.cotiza.valores_principales.casa312.compra._text),
                venta: this.util.formatCurrency(data.cotiza.valores_principales.casa312.venta._text)
            }

            res.send(valores);
        } catch (e) {
            res.sendStatus(500);
            console.log(e);
        }
    }


    /**
     * @description Obtener el valor del dolar promedio
     * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
     */
    getDolarPromedio = async (_req, res) => {
        try 
        {
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
        try 
        {
            const data = await this.dolarSiService.getInfoDolar();
            const valores = {
                fecha: this.util.getDateTime(),
                compra: this.util.formatCurrency(data.cotiza.valores_principales.casa313.compra._text),
                venta: this.util.formatCurrency(data.cotiza.valores_principales.casa313.venta._text)
            }

            res.send(valores);
        } catch (e) {
            res.sendStatus(500);
            console.log(e);
        }
    }

    /**
     * @description Obtiene la evolución anual del valor del dolar oficial
     * @returns Un objeto con el valor promedio por mes, el mes y el año.
     */
    getEvolucionDolarOficial = async (_req, res) => {
        try 
        {
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
        try 
        {
            const data = await this.dolarSiService.getInfoDolar();
            const valores = this.util.getEvolucionWithTaxes(data.cotiza.evolucion_dolar.oficial.anio)

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
        try 
        {
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