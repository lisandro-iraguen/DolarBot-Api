const util = require("../util/util");
const config = require('../package.json');

class bancosRealController {
    constructor(dolarSiService) {
        this.dolarSiService = dolarSiService;
        this.util = new util();
    }

    /**
     * @description Obtiene todas las cotizaciones bancarias
     * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
     */
    getAll = async (_req, res) => {
        const results = [];
        var functions = Object.values(this)
        .filter(value => typeof value === 'function')
        .filter(value => value.name.startsWith('_'));
        for (let i = 0; i < functions.length; i++) {
            const result = await functions[i]();
            results.push(result);
        }
        res.set({ 'content-type': 'application/json; charset=utf-8' });
        res.send(results);
    }

    /**
     * @description Obtener el valor del real del Banco Nación
     * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
     */
     getRealNacion = async (_req, res) => res.send(await this._getRealNacion());
     _getRealNacion = async () => {
        const data = await this.dolarSiService.getInfoDolar();
        const taxPercent = parseInt(config.taxPercent.ahorro);
        return {
            nombre: 'Nación',
            descripcion: 'Banco Nación',
            fecha: this.util.getDateTime(),
            compra: this.util.formatCurrency(data.cotiza.Real.casa230.compra._text),
            venta: this.util.formatCurrency(data.cotiza.Real.casa230.venta._text),
            ventaAhorro: this.util.formatCurrency(data.cotiza.Real.casa230.venta._text, 2, taxPercent),
        };
    }

    /**
     * @description Obtener el valor del real del Banco BBVA
     * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
     */
    getRealBBVA = async (_req, res) => res.send(await this._getRealBBVA());
    _getRealBBVA = async () => {
        const data = await this.dolarSiService.getInfoDolar();
        const taxPercent = parseInt(config.taxPercent.ahorro);
        return {
            nombre: 'BBVA',
            descripcion: 'Banco BBVA',
            fecha: this.util.getDateTime(),
            compra: this.util.formatCurrency(data.cotiza.Real.casa365.compra._text),
            venta: this.util.formatCurrency(data.cotiza.Real.casa365.venta._text),
            ventaAhorro: this.util.formatCurrency(data.cotiza.Real.casa365.venta._text, 2, taxPercent),
        };
    }

    /**
     * @description Obtener el valor del real del Nuevo Banco del Chaco
     * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
     */
    getRealChaco = async (_req, res) => res.send(await this._getRealChaco());
    _getRealChaco = async () => {
        const data = await this.dolarSiService.getInfoDolar();
        const taxPercent = parseInt(config.taxPercent.ahorro);
        return {
            nombre: 'NBCH',
            descripcion: 'Nuevo Banco del Chaco',
            fecha: this.util.getDateTime(),
            compra: this.util.formatCurrency(data.cotiza.Real.casa366.compra._text),
            venta: this.util.formatCurrency(data.cotiza.Real.casa366.venta._text),
            ventaAhorro: this.util.formatCurrency(data.cotiza.Real.casa366.venta._text, 2, taxPercent),
        };
    }

    /**
     * @description Obtener el valor del real del Banco Piano
     * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
     */
    getRealPiano = async (_req, res) => res.send(await this._getRealPiano());
    _getRealPiano = async () => {
        const data = await this.dolarSiService.getInfoDolar();
        const taxPercent = parseInt(config.taxPercent.ahorro);
        return {
            nombre: 'Piano',
            descripcion: 'Banco Piano',
            fecha: this.util.getDateTime(),
            compra: this.util.formatCurrency(data.cotiza.Real.casa445.compra._text),
            venta: this.util.formatCurrency(data.cotiza.Real.casa445.venta._text),
            ventaAhorro: this.util.formatCurrency(data.cotiza.Real.casa445.venta._text, 2, taxPercent),
        };
    }

    /**
     * @description Obtener el valor del real del Banco Ciudad
     * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
     */
    getRealCiudad = async (_req, res) => res.send(await this._getRealCiudad());
    _getRealCiudad = async () => {
        const data = await this.dolarSiService.getInfoDolar();
        const taxPercent = parseInt(config.taxPercent.ahorro);
        return {
            nombre: 'Ciudad',
            descripcion: 'Banco Ciudad',
            fecha: this.util.getDateTime(),
            compra: this.util.formatCurrency(data.cotiza.Real.casa449.compra._text),
            venta: this.util.formatCurrency(data.cotiza.Real.casa449.venta._text),
            ventaAhorro: this.util.formatCurrency(data.cotiza.Real.casa449.venta._text, 2, taxPercent),
        };
    }

    /**
     * @description Obtener el valor del real del Banco Supervielle
     * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
     */
    getRealSupervielle = async (_req, res) => res.send(await this._getRealSupervielle());
    _getRealSupervielle = async () => {
        const data = await this.dolarSiService.getInfoDolar();
        const taxPercent = parseInt(config.taxPercent.ahorro);
        return {
            nombre: 'Supervielle',
            descripcion: 'Banco Supervielle',
            fecha: this.util.getDateTime(),
            compra: this.util.formatCurrency(data.cotiza.Real.casa453.compra._text),
            venta: this.util.formatCurrency(data.cotiza.Real.casa453.venta._text),
            ventaAhorro: this.util.formatCurrency(data.cotiza.Real.casa453.venta._text, 2, taxPercent),
        };
    }
}

module.exports = bancosRealController