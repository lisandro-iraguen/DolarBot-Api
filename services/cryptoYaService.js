const axios = require('axios')

const baseUrl = "https://criptoya.com/api/bancostodos";

class cryptoYaService {
    constructor(cache) {
        this.cache = cache;
    }

    _fetchData = async () => {
        const url = baseUrl;
        const cacheValue = this.cache.get(url);
        if (cacheValue !== undefined) {
            return cacheValue;
        }
        else {
            const response = await axios.get(url);
            this.cache.set(baseUrl, response.data);
            return response.data;
        }
    }

    /**
     * @description Obtener el valor del dólar del Banco Nación
     */
    getDolarNacion = async (_req, res) => {
        try {
            const values = await this._fetchData();
            return values.bna;
        } catch (e) {
            console.log(e);
            res.sendStatus(500);
        }
    }

    /**
     * @description Obtener el valor del dólar del Banco Rebanking
     */
     getDolarRebanking = async (_req, res) => {
        try {
            const values = await this._fetchData();
            return values.rebanking;
        } catch (e) {
            console.log(e);
            res.sendStatus(500);
        }
    }

    /**
     * @description Obtener el valor del dólar del Banco Santander
     */
     getDolarSantander = async (_req, res) => {
        try {
            const values = await this._fetchData();
            return values.santander;
        } catch (e) {
            console.log(e);
            res.sendStatus(500);
        }
    }
    
    /**
     * @description Obtener el valor del dólar del Banco Galicia
     */
     getDolarGalicia = async (_req, res) => {
        try {
            const values = await this._fetchData();
            return values.galicia;
        } catch (e) {
            console.log(e);
            res.sendStatus(500);
        }
    }
    
    /**
     * @description Obtener el valor del dólar del Banco BBVA
     */
     getDolarBBVA = async (_req, res) => {
        try {
            const values = await this._fetchData();
            return values.bbva;
        } catch (e) {
            console.log(e);
            res.sendStatus(500);
        }
    }

    /**
     * @description Obtener el valor del dólar del Banco Patagonia
     */
     getDolarPatagonia = async (_req, res) => {
        try {
            const values = await this._fetchData();
            return values.patagonia;
        } catch (e) {
            console.log(e);
            res.sendStatus(500);
        }
    }
    
    /**
     * @description Obtener el valor del dólar del Banco Macro
     */
     getDolarMacro = async (_req, res) => {
        try {
            const values = await this._fetchData();
            return values.macro;
        } catch (e) {
            console.log(e);
            res.sendStatus(500);
        }
    }

    /**
     * @description Obtener el valor del dólar del Banco HSBC
     */
     getDolarHSBC = async (_req, res) => {
        try {
            const values = await this._fetchData();
            return values.hsbc;
        } catch (e) {
            console.log(e);
            res.sendStatus(500);
        }
    }
    
    /**
     * @description Obtener el valor del dólar del Banco Provincia
     */
     getDolarProvincia = async (_req, res) => {
        try {
            const values = await this._fetchData();
            return values.bapro;
        } catch (e) {
            console.log(e);
            res.sendStatus(500);
        }
    }    

    /**
     * @description Obtener el valor del dólar del Banco Ciudad
     */
     getDolarCiudad = async (_req, res) => {
        try {
            const values = await this._fetchData();
            return values.ciudad;
        } catch (e) {
            console.log(e);
            res.sendStatus(500);
        }
    }     
    
    /**
     * @description Obtener el valor del dólar del Banco Brubank
     */
     getDolarBrubank = async (_req, res) => {
        try {
            const values = await this._fetchData();
            return values.brubank;
        } catch (e) {
            console.log(e);
            res.sendStatus(500);
        }
    }  
    
    /**
     * @description Obtener el valor del dólar del Banco Brubank
     */
     getDolarBrubank = async (_req, res) => {
        try {
            const values = await this._fetchData();
            return values.brubank;
        } catch (e) {
            console.log(e);
            res.sendStatus(500);
        }
    }

    /**
     * @description Obtener el valor del dólar del Banco Supervielle
     */
     getDolarSupervielle = async (_req, res) => {
        try {
            const values = await this._fetchData();
            return values.supervielle;
        } catch (e) {
            console.log(e);
            res.sendStatus(500);
        }
    }  
    
    /**
     * @description Obtener el valor del dólar del Banco ICBC
     */
     getDolarICBC = async (_req, res) => {
        try {
            const values = await this._fetchData();
            return values.icbc;
        } catch (e) {
            console.log(e);
            res.sendStatus(500);
        }
    }   
    
    /**
     * @description Obtener el valor del dólar del Banco Hipotecario
     */
     getDolarHipotecario = async (_req, res) => {
        try {
            const values = await this._fetchData();
            return values.hipotecario;
        } catch (e) {
            console.log(e);
            res.sendStatus(500);
        }
    }     
}

module.exports = cryptoYaService