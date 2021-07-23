const util = require("../util/util")

class currencyController {
    constructor(exchangeRateHostService) {
        this.exchangeRateHostService = exchangeRateHostService;
        this.util = new util();
    }

    /**
     * @description Obtiene la lista de monedas soportadas
     * @returns Una colección de objetos con el código ISO de la moneda su nombre
     */
    getCurrencyList = async (_req, res) => {
        try {
            const data = await this.exchangeRateHostService.getCurrencyList();
            if(typeof data === 'number') {
                res.sendStatus(data);
            } else {
                if(data != null) {
                    const valores = data.map(x => ({ code: x.code, name: x.description, }));
                    res.send(valores);
                } else {
                    res.sendStatus(500);
                }
            }
        } catch (e) {
            res.sendStatus(500);
            console.log(e);
        }
    }

    /**
     * @description Obtiene el valor de la moneda especificada
     * @returns Un objeto con el valor de la moneda y la fecha y hora de la consulta
     */
     getCurrencyValue = async (req, res) => {
        try {
            const currencyCode = req.params.code.toLowerCase();
            if(currencyCode != null && currencyCode != '') {
                const data = await this.exchangeRateHostService.getCurrencyValue(currencyCode);
                if(typeof data === 'number') {
                    res.sendStatus(data);
                } else {
                    if(data != null) {
                        const valores = {
                            fecha: this.util.getDateTime(),
                            valor: this.util.formatCurrency(data.rates.ARS.toString()),
                        }
                        res.send(valores);
                    } else {
                        res.sendStatus(500);
                    }
                }
            } else {
                res.sendStatus(400);
            }
        } catch (e) {
            res.sendStatus(500);
            console.log(e);
        }
    }

    /**
     * @description Obtiene los valores diarios históricos de la moneda especificada.
     * @returns Una colección de objetos con el día y su valor.
     */
     getHistoricalValues = async (req, res) => {
        try {
            const currencyCode = req.params.code.toLowerCase();
            if(currencyCode != null && currencyCode != '') {
                const data = await this.exchangeRateHostService.getHistoricalValues(currencyCode);
                if(typeof data === 'number') {
                    res.sendStatus(data);
                } else {
                    if(data != null) {
                        res.send(data);
                    } else {
                        res.sendStatus(500);
                    }
                }
            } else {
                res.sendStatus(400);
            }
        } catch (e) {
            res.sendStatus(500);
            console.log(e);
        }
    }
}

module.exports = currencyController