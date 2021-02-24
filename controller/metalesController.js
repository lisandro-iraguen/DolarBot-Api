const util = require("../util/util")

class metalesController {
    constructor(dolarSiService) {
        this.dolarSiService = dolarSiService
        this.util = new util()
    }

    /**
     * @description Obtener el valor en dólares del oro internacional por onza
     * @returns Un objeto con el valor, la moneda, la unidad, y la fecha y hora de la consulta
     */
    getOro = async (_req, res) => {
        try {
            const data = await this.dolarSiService.getInfoDolar()
            const valores = {
                fecha: this.util.getDateTime(),
                valor: this.util.formatCurrency(data.cotiza.Metales.casa301.compra._text),
                unidad: 'Onza',
                moneda: 'USD'
            }

            res.send(valores)
        } catch (e) {
            res.sendStatus(500)
            console.log(e)
        }
    }

    /**
     * @description Obtener el valor en dólares de la plata por onza
     * @returns Un objeto con el valor, la moneda, la unidad, y la fecha y hora de la consulta
     */
    getPlata = async (_req, res) => {
        try {
            const data = await this.dolarSiService.getInfoDolar()
            const valores = {
                fecha: this.util.getDateTime(),
                valor: this.util.formatCurrency(data.cotiza.Metales.casa299.compra._text),
                unidad: 'Onza',
                moneda: 'USD'
            }

            res.send(valores)
        } catch (e) {
            res.sendStatus(500)
            console.log(e)
        }
    }

    /**
     * @description Obtener el valor en dólares del cobre por tonelada
     * @returns Un objeto con el valor, la moneda, la unidad, y la fecha y hora de la consulta
     */
    getCobre = async (_req, res) => {
        try {
            const data = await this.dolarSiService.getInfoDolar()
            const valores = {
                fecha: this.util.getDateTime(),
                valor: this.util.formatCurrency(data.cotiza.Metales.casa300.compra._text),
                unidad: 'Tonelada',
                moneda: 'USD'
            }

            res.send(valores)
        } catch (e) {
            res.sendStatus(500)
            console.log(e)
        }
    }
}

module.exports = metalesController