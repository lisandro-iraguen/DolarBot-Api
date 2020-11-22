class euroController {
    constructor(dolarSiService, util) {
        this.dolarSiService = dolarSiService
        this.util = util
    }

    /**
     * @description Obtener el valor del euro del Banco Nación
     * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
     */
    getEuroNacion = async (req, res) => {
        try {
            const data = await this.dolarSiService.getInfoDolar()
            const valores = {
                fecha: this.util.getDateTime(),
                compra: parseFloat(data.cotiza.Euro.casa176.compra._text.replace(',', '.')).toFixed(2),
                venta: parseFloat(data.cotiza.Euro.casa176.venta._text.replace(',', '.')).toFixed(2)
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
    getEuroGalicia = async (req, res) => {
        try {
            const data = await this.dolarSiService.getInfoDolar()
            const valores = {
                fecha: this.util.getDateTime(),
                compra: parseFloat(data.cotiza.Euro.casa356.compra._text.replace(',', '.')).toFixed(2),
                venta: parseFloat(data.cotiza.Euro.casa356.venta._text.replace(',', '.')).toFixed(2)
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
    getEuroBBVA = async (req, res) => {
        try {
            const data = await this.dolarSiService.getInfoDolar()
            const valores = {
                fecha: this.util.getDateTime(),
                compra: parseFloat(data.cotiza.Euro.casa358.compra._text.replace(',', '.')).toFixed(2),
                venta: parseFloat(data.cotiza.Euro.casa358.venta._text.replace(',', '.')).toFixed(2)
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
    getEuroPampa = async (req, res) => {
        try {
            const data = await this.dolarSiService.getInfoDolar()
            const valores = {
                fecha: this.util.getDateTime(),
                compra: parseFloat(data.cotiza.Euro.casa359.compra._text.replace(',', '.')).toFixed(2),
                venta: parseFloat(data.cotiza.Euro.casa359.venta._text.replace(',', '.')).toFixed(2)
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
    getEuroChaco = async (req, res) => {
        try {
            const data = await this.dolarSiService.getInfoDolar()
            const valores = {
                fecha: this.util.getDateTime(),
                compra: parseFloat(data.cotiza.Euro.casa360.compra._text.replace(',', '.')).toFixed(2),
                venta: parseFloat(data.cotiza.Euro.casa360.venta._text.replace(',', '.')).toFixed(2)
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
    getEuroHipotecario = async (req, res) => {
        try {
            const data = await this.dolarSiService.getInfoDolar()
            const valores = {
                fecha: this.util.getDateTime(),
                compra: parseFloat(data.cotiza.Euro.casa361.compra._text.replace(',', '.')).toFixed(2),
                venta: parseFloat(data.cotiza.Euro.casa361.venta._text.replace(',', '.')).toFixed(2)
            }
            res.send(valores)
        } catch (e) {
            console.log(e)
            res.sendStatus(500)
        }
    }
}

module.exports = euroController