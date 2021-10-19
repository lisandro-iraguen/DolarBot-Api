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
            const paralelo = data.USD.dolartoday * 1000000;
            const promedioBancos = data.USD.promedio_real * 1000000;
            const cucuta = data.USD.efectivo_cucuta * 1000000;
            const valores = {
                fecha: this.util.getDateTime(),
                paralelo: this.util.formatCurrency(paralelo.toString()),
                bancos: this.util.formatCurrency(promedioBancos.toString()),
                cucuta: this.util.formatCurrency(cucuta.toString()),
                moneda: 'USD',
            };

            res.send(valores)
        } catch (e) {
            res.sendStatus(500);
            console.log(e);
        }
    }

    /**
     * @description Obtener las cotizaciones del Euro en Venezuela.
     * @returns Un objeto con el valor de las reservas, la moneda y la fecha-hora de la consulta
     */
    getEuroVzla = async (_req, res) => {
        try {
            const data = await this.dolarTodayService.getInfoVzla();
            const paralelo = data.EUR.dolartoday * 1000000;
            const promedioBancos = data.EUR.promedio_real * 1000000;
            const cucuta = data.EUR.efectivo_cucuta * 1000000;
            const valores = {
                fecha: this.util.getDateTime(),
                paralelo: this.util.formatCurrency(paralelo.toString()),
                bancos: this.util.formatCurrency(promedioBancos.toString()),
                cucuta: this.util.formatCurrency(cucuta.toString()),
                moneda: 'EUR',
            };

            res.send(valores);
        } catch (e) {
            res.sendStatus(500);
            console.log(e);
        }
    }
}

module.exports = vzlaController