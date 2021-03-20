<p align="center">
  <img src="https://github.com/guidospadavecchia/DolarBot-Api/blob/master/design/logo_dolarbot_api.png" height="200px">
</p>

*** 

## Status
[![Version](https://img.shields.io/github/package-json/v/guidospadavecchia/DolarBot-Api?style=flat-square)](https://github.com/guidospadavecchia/DolarBot-Api/blob/master/package.json)
[![NPM](https://img.shields.io/npm/v/express?color=orange&style=flat-square)](https://github.com/guidospadavecchia/DolarBot-Api/blob/master/package.json) 
[![Heroku App Status](http://heroku-shields.herokuapp.com/dolarbot-api)](https://dolarbot-api.herokuapp.com)
  
## Descripción
**DolarBot-API** es la aplicación *backend* de [DolarBot](https://github.com/guidospadavecchia/DolarBot). Unifica las llamadas a los distintos orígenes de datos en un sólo lugar y bajo un formato estandarizado. Este proyecto es un *fork* de [Castrogiovanni20/api-dolar-argentina](https://github.com/Castrogiovanni20/api-dolar-argentina).  

*Nota: La API hosteada en https://dolarbot-api.herokuapp.com/ es una API privada, utilizada únicamente por [DolarBot](https://top.gg/bot/752669185053818941). Es por esto que al consultar cualquier endpoint devolverá un código `403`. Para utilizar **DolarBot-API** de forma pública es necesario deployar tu propia instancia y realizar la configuración según se explica continuación*.

## Configuración
1. Configurar el parámetro `requiresApiKey` dentro del archivo `package.json`. Si se desea utilizar la API de forma pública, se debe configurar `requiresApiKey = false`, de lo contrario, configurar `requiresApiKey = true` y crear la variable de entorno `DOLARBOT_APIKEY` en el servidor que aloja la aplicación. *Nota: La misma key debe ser enviada en el header de cada request o de lo contrario la API devolverá un código `403`.* 
2. Opcionalmente, crear la variable de entorno `PORT` con el puerto dónde estará escuchando la aplicación.
3. Deploy.

## Endpoints

### Cotizaciones del Dólar
| Método | Endpoint | Descripción |
| ------ | ------ | ------ |
| GET | /api/dolar/oficial | Cotización del dólar oficial |
| GET | /api/dolar/blue | Cotización dólar blue |
| GET | /api/dolar/ahorro | Cotización dólar ahorro |
| GET | /api/dolar/contadoliqui | Cotización dólar contado con liqui |
| GET | /api/dolar/promedio | Cotización dólar promedio |
| GET | /api/dolar/bolsa | Cotización dólar bolsa |
| GET | /api/dolar/bancos/bbva | Cotización del Banco BBVA |
| GET | /api/dolar/bancos/piano | Cotización del Banco Piano |
| GET | /api/dolar/bancos/hipotecario | Cotización del Banco Hipotecario |
| GET | /api/dolar/bancos/galicia | Cotización del Banco Galicia |
| GET | /api/dolar/bancos/santander | Cotización del Banco Santander |
| GET | /api/dolar/bancos/ciudad | Cotización del Banco Ciudad |
| GET | /api/dolar/bancos/supervielle | Cotización del Banco Supervielle |
| GET | /api/dolar/bancos/patagonia | Cotización del Banco Patagonia |
| GET | /api/dolar/bancos/comafi | Cotización del Banco Comafi |
| GET | /api/dolar/bancos/nacion | Cotización del Banco Nación |
| GET | /api/dolar/bancos/bind | Cotización del Banco Industrial |
| GET | /api/dolar/bancos/bancor | Cotización del Banco de Córdoba |
| GET | /api/dolar/bancos/chaco | Cotización del Nuevo Banco del Chaco |
| GET | /api/dolar/bancos/pampa | Cotización del Banco de La Pampa |

#### Respuestas

###### Genéricos
```javascript
{
    fecha: "2020/06/21 23:26:42",
    compra: "68.07",
    venta: "73.07"
}
```

###### Bancos
```javascript
{
    fecha: "2020/06/21 23:26:42",
    compra: "89.02",
    venta: "92.02",
    ventaAhorro: "156.78"
}
```

### Cotizaciones del Euro
| Método | Endpoint | Descripción |
| ------ | ------ | ------ |
| GET | /api/euro/bancos/nacion | Cotización del Euro del Banco Nación |
| GET | /api/euro/bancos/galicia | Cotización del Euro del Banco Galicia |
| GET | /api/euro/bancos/bbva | Cotización del Euro del Banco BBVA |
| GET | /api/euro/bancos/pampa | Cotización del Euro del Banco de La Pampa |
| GET | /api/euro/bancos/chaco | Cotización del Euro del Nuevo Banco del Chaco |
| GET | /api/euro/bancos/hipotecario | Cotización del Euro del Banco Hipotecario |

#### Respuestas

###### Bancos
```javascript
{
    fecha: "2020/06/21 23:26:42",
    compra: "126.45",
    venta: "134.67",
    ventaAhorro: "173.23"
}
```

### Cotizaciones del Real
| Método | Endpoint | Descripción |
| ------ | ------ | ------ |
| GET | /api/real/bancos/nacion | Cotización del Real del Banco Nación |
| GET | /api/real/bancos/bbva | Cotización del Real del Banco BBVA |
| GET | /api/real/bancos/chaco | Cotización del Real del Nuevo Banco del Chaco |

#### Respuestas

###### Bancos
```javascript
{
    fecha: "2020/06/21 23:26:42",
    compra: "13.18",
    venta: "14.96",
    ventaAhorro: "27.32"
}
```

### Metales
| Método | Endpoint | Descripción |
| ------ | ------ | ------ |
| GET | /api/metales/oro | Valor internacional del Oro |
| GET | /api/metales/plata | Valor internacional de la Plata |
| GET | /api/metales/cobre | Valor internacional del Cobre |

#### Respuestas

```javascript
{
    fecha: "2021/01/02 01:32:14",
    valor: "1893.40",
    unidad: "Onza",
    moneda: "USD"
}
```

### Crypto
| Método | Endpoint | Descripción |
| ------ | ------ | ------ |
| GET | /api/crypto/bitcoin | Valor del Bitcoin (BTC) |
| GET | /api/crypto/bitcoincash | Valor del Bitcoin Cash (BCH) |
| GET | /api/crypto/ethereum | Valor del Ethereum (ETH) |
| GET | /api/crypto/monero | Valor del Monero (XMR) |
| GET | /api/crypto/litecoin | Valor del Litecoin (LTC) |
| GET | /api/crypto/ripple | Valor del Ripple (XRP) |
| GET | /api/crypto/dash | Valor del DASH (DASH) |
| GET | /api/crypto/`<id>` | Valor de la criptomoneda especificada (debe ser un ID válido de [CoinGecko](https://api.coingecko.com/api/v3/coins/list)) |

#### Respuestas

```javascript
{
    name: "Bitcoin",
    code: "BTC",
    fecha: "2021/01/02 01:32:42",
    ars: "4467101.00",
    arsTaxed: "7370716.65",
    usd: "49817.00"
}
```

### Venezuela
| Método | Endpoint | Descripción |
| ------ | ------ | ------ |
| GET | /api/vzla/dolar | Cotizaciones del dólar en bolívares (VEF) |
| GET | /api/vzla/euro | Cotizaciones del Euro en bolívares (VEF) |

#### Respuestas

```javascript
{
    fecha: "2021/01/07 19:33:21",
    paralelo: "1446012.11",
    bancos: "1231206.11",
    cucuta: "87750.00",
    moneda: "USD"
}
```

### Indicadores BCRA
| Método | Endpoint | Descripción |
| ------ | ------ | ------ |
| GET | /api/bcra/riesgopais | Valor del Riesgo País |
| GET | /api/bcra/reservas | Reservas del BCRA en dólares |
| GET | /api/bcra/circulante | Total de pesos en circulación |

#### Respuestas

##### Riesgo país
```javascript
{
    fecha: "2020/11/22 19:58:37",
    valor: "1245"
}
```
##### Reservas y circulante
```javascript
{
    fecha: "2020/11/22 19:58:37",
    valor: "39120000000",
    moneda: "USD"
}
```

### Evolución histórica
| Método | Endpoint | Descripción |
| ------ | ------ | ------ |
| GET | /api/evolucion/dolar/oficial | Evolución mensual anualizada del Dólar oficial |
| GET | /api/evolucion/dolar/ahorro | Evolución mensual anualizada del Dólar ahorro |
| GET | /api/evolucion/dolar/blue | Evolución mensual anualizada del Dólar blue |
| GET | /api/evolucion/real/oficial | Evolución mensual anualizada del Real oficial |
| GET | /api/evolucion/real/ahorro | Evolución mensual anualizada del Real ahorro |
| GET | /api/evolucion/euro/oficial | Evolución mensual anualizada del Euro oficial |
| GET | /api/evolucion/euro/ahorro | Evolución mensual anualizada del Euro ahorro |

#### Respuestas
```javascript
{
    fecha: "2020/11/22 19:59:46",
    meses: [
        {
            anio: "2019",
            mes: "11",
            valor: "66.20"
        },
        {
            anio: "2019",
            mes: "12",
            valor: "69.71"
        },
        {
            anio: "2020",
            mes: "1",
            valor: "77.00"
        },

        ...

        {
            anio: "2020",
            mes: "9",
            valor: "136.80"
        },
        {
            anio: "2020",
            mes: "10",
            valor: "165.16"
        },
    ],
}
```

## Integraciones
- [DolarSí](https://www.dolarsi.com/api/dolarSiInfo.xml)
- [DolarToday](https://dolartoday.com/api/)
- [CoinGecko](https://www.coingecko.com/es/api)

## Agradecimientos
- [@Castrogiovanni20](https://github.com/Castrogiovanni20) - Por proveer el código del proyecto original y permitirme usar su API libremente.

## Licencia
**DolarBot-API** es *open-source*, libre y gratuita. Está licenciada bajo la [MIT License](https://github.com/guidospadavecchia/DolarBot-Api/blob/master/LICENSE).

## 
<p align="center">
  <img src="http://ForTheBadge.com/images/badges/built-with-love.svg">
</p>
