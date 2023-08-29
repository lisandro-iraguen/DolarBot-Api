const util = require("../util/util")

class vzlaController {
    constructor(bluePyService) {
        this.bluePyService = bluePyService;
        this.util = new util();
    }

    /**
     * @description Obtener las cotizaciones del dólar en Venezuela.
     * @returns Un objeto con el valor de las reservas, la moneda y la fecha-hora de la consulta
     */
    getDolarVzla = async (_req, res) => {
        try {
            const dataOficial = await this.bluePyService.getVzlaDolarOficial();
            const dataParalelo = await this.bluePyService.getVzlaDolarParalelo();
            const valores = {
                fecha: this.util.getDateTime(),
                paralelo: this.util.formatCurrency(dataParalelo.valor.toString()),
                bancos: this.util.formatCurrency(dataOficial.valor.toString()),
                moneda: 'USD',
            };

            res.send(valores)
        } catch (e) {
            res.sendStatus(500);
            console.log(e);
        }
    }
}

module.exports = vzlaController