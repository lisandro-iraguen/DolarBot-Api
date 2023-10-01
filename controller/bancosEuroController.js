const util = require("../util/util");
const config = require('../package.json');

class bancosEuroController {
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
     * @description Obtener el valor del euro del Banco Nación
     * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
     */
    getEuroNacion = async (_req, res) => res.send(await this._getEuroNacion());
    _getEuroNacion = async () => {
        const data = await this.dolarSiService.getInfoDolar();
        const taxPercent = parseInt(config.taxPercent.ahorro);
        return {
            nombre: 'Nación',
            descripcion: 'Banco Nación',
            fecha: this.util.getDateTime(),
            compra: this.util.formatCurrency(data.cotiza.Euro.casa176.compra._text),
            venta: this.util.formatCurrency(data.cotiza.Euro.casa176.venta._text),
            ventaAhorro: this.util.formatCurrency(data.cotiza.Euro.casa176.venta._text, 2, taxPercent),
        };
    }

    /**
     * @description Obtener el valor del euro del Banco Galicia
     * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
     */
    getEuroGalicia = async (_req, res) => res.send(await this._getEuroGalicia());
    _getEuroGalicia = async () => {
        const data = await this.dolarSiService.getInfoDolar();
        const taxPercent = parseInt(config.taxPercent.ahorro);
        return {
            nombre: 'Galicia',
            descripcion: 'Banco Galicia',
            fecha: this.util.getDateTime(),
            compra: this.util.formatCurrency(data.cotiza.Euro.casa356.compra._text),
            venta: this.util.formatCurrency(data.cotiza.Euro.casa356.venta._text),
            ventaAhorro: this.util.formatCurrency(data.cotiza.Euro.casa356.venta._text, 2, taxPercent),
        };
    }

    /**
     * @description Obtener el valor del euro del Banco BBVA
     * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
     */
    getEuroBBVA = async (_req, res) => res.send(await this._getEuroBBVA());
    _getEuroBBVA = async () => {
        const data = await this.dolarSiService.getInfoDolar();
        const taxPercent = parseInt(config.taxPercent.ahorro);
        return {
            nombre: 'BBVA',
            descripcion: 'Banco BBVA',
            fecha: this.util.getDateTime(),
            compra: this.util.formatCurrency(data.cotiza.Euro.casa358.compra._text),
            venta: this.util.formatCurrency(data.cotiza.Euro.casa358.venta._text),
            ventaAhorro: this.util.formatCurrency(data.cotiza.Euro.casa358.venta._text, 2, taxPercent),
        };
    }

    /**
     * @description Obtener el valor del euro del Banco de la Pampa
     * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
     */
    getEuroPampa = async (_req, res) => res.send(await this._getEuroPampa());
    _getEuroPampa = async () => {
        const data = await this.dolarSiService.getInfoDolar();
        const taxPercent = parseInt(config.taxPercent.ahorro);
        return {
            nombre: 'Pampa',
            descripcion: 'Banco de La Pampa',
            fecha: this.util.getDateTime(),
            compra: this.util.formatCurrency(data.cotiza.Euro.casa359.compra._text),
            venta: this.util.formatCurrency(data.cotiza.Euro.casa359.venta._text),
            ventaAhorro: this.util.formatCurrency(data.cotiza.Euro.casa359.venta._text, 2, taxPercent),
        };
    }

    /**
     * @description Obtener el valor del euro del Nuevo Banco del Chaco
     * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
     */
    getEuroChaco = async (_req, res) => res.send(await this._getEuroChaco());
    _getEuroChaco = async () => {
        const data = await this.dolarSiService.getInfoDolar();
        const taxPercent = parseInt(config.taxPercent.ahorro);
        return {
            nombre: 'NBCH',
            descripcion: 'Nuevo Banco del Chaco',
            fecha: this.util.getDateTime(),
            compra: this.util.formatCurrency(data.cotiza.Euro.casa360.compra._text),
            venta: this.util.formatCurrency(data.cotiza.Euro.casa360.venta._text),
            ventaAhorro: this.util.formatCurrency(data.cotiza.Euro.casa360.venta._text, 2, taxPercent),
        };
    }

    /**
     * @description Obtener el valor del euro del Banco Hipotecario
     * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
     */
    getEuroHipotecario = async (_req, res) => res.send(await this._getEuroHipotecario());
    _getEuroHipotecario = async () => {
        const data = await this.dolarSiService.getInfoDolar();
        const taxPercent = parseInt(config.taxPercent.ahorro);
        return {
            nombre: 'Hipotecario',
            descripcion: 'Banco Hipotecario',
            fecha: this.util.getDateTime(),
            compra: this.util.formatCurrency(data.cotiza.Euro.casa361.compra._text),
            venta: this.util.formatCurrency(data.cotiza.Euro.casa361.venta._text),
            ventaAhorro: this.util.formatCurrency(data.cotiza.Euro.casa361.venta._text, 2, taxPercent),
        };
    }

    /**
     * @description Obtener el valor del euro del Banco Piano
     * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
     */
    getEuroPiano = async (_req, res) => res.send(await this._getEuroPiano());
    _getEuroPiano = async () => {
        const data = await this.dolarSiService.getInfoDolar();
        const taxPercent = parseInt(config.taxPercent.ahorro);
        return {
            nombre: 'Piano',
            descripcion: 'Banco Piano',
            fecha: this.util.getDateTime(),
            compra: this.util.formatCurrency(data.cotiza.Euro.casa443.compra._text),
            venta: this.util.formatCurrency(data.cotiza.Euro.casa443.venta._text),
            ventaAhorro: this.util.formatCurrency(data.cotiza.Euro.casa443.venta._text, 2, taxPercent),
        };
    }

    /**
     * @description Obtener el valor del euro del Banco Santander
     * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
     */
    getEuroSantander = async (_req, res) => res.send(await this._getEuroSantander());
    _getEuroSantander = async () => {
        const data = await this.dolarSiService.getInfoDolar();
        const taxPercent = parseInt(config.taxPercent.ahorro);
        return {
            nombre: 'Santander',
            descripcion: 'Banco Santander',
            fecha: this.util.getDateTime(),
            compra: this.util.formatCurrency(data.cotiza.Euro.casa447.compra._text),
            venta: this.util.formatCurrency(data.cotiza.Euro.casa447.venta._text),
            ventaAhorro: this.util.formatCurrency(data.cotiza.Euro.casa447.venta._text, 2, taxPercent),
        };
    }

    /**
     * @description Obtener el valor del euro del Banco Ciudad
     * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
     */
    getEuroCiudad = async (_req, res) => res.send(await this._getEuroCiudad());
    _getEuroCiudad = async () => {
        const data = await this.dolarSiService.getInfoDolar();
        const taxPercent = parseInt(config.taxPercent.ahorro);
        return {
            nombre: 'Ciudad',
            descripcion: 'Banco Ciudad',
            fecha: this.util.getDateTime(),
            compra: this.util.formatCurrency(data.cotiza.Euro.casa448.compra._text),
            venta: this.util.formatCurrency(data.cotiza.Euro.casa448.venta._text),
            ventaAhorro: this.util.formatCurrency(data.cotiza.Euro.casa448.venta._text, 2, taxPercent),
        };
    }

    /**
     * @description Obtener el valor del euro del Banco Supervielle
     * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
     */
    getEuroSupervielle = async (_req, res) => res.send(await this._getEuroSupervielle());
    _getEuroSupervielle = async () => {
        const data = await this.dolarSiService.getInfoDolar();
        const taxPercent = parseInt(config.taxPercent.ahorro);
        return {
            nombre: 'Supervielle',
            descripcion: 'Banco Supervielle',
            fecha: this.util.getDateTime(),
            compra: this.util.formatCurrency(data.cotiza.Euro.casa450.compra._text),
            venta: this.util.formatCurrency(data.cotiza.Euro.casa450.venta._text),
            ventaAhorro: this.util.formatCurrency(data.cotiza.Euro.casa450.venta._text, 2, taxPercent),
        };
    }

    /**
     * @description Obtener el valor del euro del Banco Patagonia
     * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
     */
    getEuroPatagonia = async (_req, res) => res.send(await this._getEuroPatagonia());
    _getEuroPatagonia = async () => {
        const data = await this.dolarSiService.getInfoDolar();
        const taxPercent = parseInt(config.taxPercent.ahorro);
        return {
            nombre: 'Patagonia',
            descripcion: 'Banco Patagonia',
            fecha: this.util.getDateTime(),
            compra: this.util.formatCurrency(data.cotiza.Euro.casa454.compra._text),
            venta: this.util.formatCurrency(data.cotiza.Euro.casa454.venta._text),
            ventaAhorro: this.util.formatCurrency(data.cotiza.Euro.casa454.venta._text, 2, taxPercent),
        };
    }

    /**
     * @description Obtener el valor del euro del Banco Comafi
     * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
     */
    getEuroComafi = async (_req, res) => res.send(await this._getEuroComafi());
    _getEuroComafi = async () => {
        const data = await this.dolarSiService.getInfoDolar();
        const taxPercent = parseInt(config.taxPercent.ahorro);
        return {
            nombre: 'Comafi',
            descripcion: 'Banco Comafi',
            fecha: this.util.getDateTime(),
            compra: this.util.formatCurrency(data.cotiza.Euro.casa455.compra._text),
            venta: this.util.formatCurrency(data.cotiza.Euro.casa455.venta._text),
            ventaAhorro: this.util.formatCurrency(data.cotiza.Euro.casa455.venta._text, 2, taxPercent),
        };
    }

    /**
     * @description Obtener el valor del euro de Rebanking
     * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
     */
    getEuroRebanking = async (_req, res) => res.send(await this._getEuroRebanking());
    _getEuroRebanking = async () => {
        const data = await this.dolarSiService.getInfoDolar();
        const taxPercent = parseInt(config.taxPercent.ahorro);
        return {
            nombre: 'Reba',
            descripcion: 'Rebanking',
            fecha: this.util.getDateTime(),
            compra: this.util.formatCurrency(data.cotiza.Euro.casa456.compra._text),
            venta: this.util.formatCurrency(data.cotiza.Euro.casa456.venta._text),
            ventaAhorro: this.util.formatCurrency(data.cotiza.Euro.casa456.venta._text, 2, taxPercent),
        };
    }

    /**
     * @description Obtener el valor del euro del Banco Roela
     * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
     */
    getEuroRoela = async (_req, res) => res.send(await this._getEuroRoela());
    _getEuroRoela = async () => {
        const data = await this.dolarSiService.getInfoDolar();
        const taxPercent = parseInt(config.taxPercent.ahorro);
        return {
            nombre: 'Roela',
            descripcion: 'Banco Roela',
            fecha: this.util.getDateTime(),
            compra: this.util.formatCurrency(data.cotiza.Euro.casa357.compra._text),
            venta: this.util.formatCurrency(data.cotiza.Euro.casa357.venta._text),
            ventaAhorro: this.util.formatCurrency(data.cotiza.Euro.casa357.venta._text, 2, taxPercent),
        };
    }
}

module.exports = bancosEuroController