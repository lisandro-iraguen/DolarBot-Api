const util = require("../util/util")

class vzlaController {
    constructor(dolarTodayService) {
        this.dolarTodayService = dolarTodayService;
        this.util = new util();
    }

    /**
     * @description Obtener las cotizaciones del dólar en Venezuela.
     * @returns Un objeto con el valor de las reservas, la moneda y la fecha-hora de la consulta
     */
    getDolarVzla = async (_req, res) => {
        try {
            const data = await this.dolarTodayService.getInfoVzla();
            const valores = {
                fecha: this.util.getDateTime(),
                paralelo: this.util.formatNumber(data.USD.dolartoday.toString()),
                bancos: this.util.formatNumber(data.USD.promedio_real.toString()),
                cucuta: this.util.formatNumber(data.USD.efectivo_cucuta.toString()),
            }

            res.send(valores)
        } catch (e) {
            res.sendStatus(500)
            console.log(e)
        }
    }

    /**
     * @description Obtener las cotizaciones del Euro en Venezuela.
     * @returns Un objeto con el valor de las reservas, la moneda y la fecha-hora de la consulta
     */
    getEuroVzla = async (_req, res) => {
        try {
            const data = await this.dolarTodayService.getInfoVzla();
            const valores = {
                fecha: this.util.getDateTime(),
                paralelo: this.util.formatNumber(data.EUR.dolartoday.toString()),
                bancos: this.util.formatNumber(data.EUR.promedio_real.toString()),
                cucuta: this.util.formatNumber(data.EUR.efectivo_cucuta.toString()),
            }

            res.send(valores)
        } catch (e) {
            res.sendStatus(500)
            console.log(e)
        }
    }
}

module.exports = vzlaController