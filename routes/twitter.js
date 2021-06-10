const express = require('express');
const router = express.Router();
const { NlpManager } = require('node-nlp');
const manager = new NlpManager({ languages: ['es'], forceNER: true });

/* GET users listing. */
router.post('/', function (req, res, next) {

  const array = req.body;

  array.forEach( async (element) => {

    console.log("ID: " + element.id);
    const resp = await analizeSentiment(element.text)
      
    console.log(resp);

  });


  //console.log(req.body);
  res.status(200).send("oki");

  //analizeSentiment();

});

const analizeSentiment = async (text) => {

  manager.addDocument('es', 'tarjeta problemas', 'Tarjetas problemas técnicos');
  manager.addDocument('es', 'tarjeta', 'Tarjetas servicios');
  manager.addDocument('es', 'Financiamiento de hasta 12 cuotas sin interés mediante la utilización de tarjetas de crédito del Banco Macro S.A. y Banco Credicoop con un reintegro del 20', 'Tarjetas servicios');
  manager.addDocument('es', 'estoy por comprar una máquina con tarjeta de crédito cabal del banco Credicoop mi tarjeta', 'Tarjetas servicios');
  manager.addDocument('es', 'Por favor acepten la tarjeta CABAL ya que es una TARJETA Nacional y el BANCO CREDICOOP NECESITA apoyarlo', 'Tarjetas servicios');
  manager.addDocument('es', '20% DE AHORRO CON TARJETAS DE CRÉDITO/DÉBITO DE BANCO CREDICOOP: PROMOCIÓN VÁLIDA PARA LOS MARTES DE SEPTIEMBRE 2020', 'Tarjetas servicios');
  manager.addDocument('es', 'Acceder a home banking y a mi credicoop movil y cuando pongo la contraseña me dice operador no habilitado para operar', 'Banca Online');
  manager.addDocument('es', 'Credicoop una transferencia', 'Banca Online');
  manager.addDocument('es', 'Se cayó el @FBCredicoop? No puedo ni desde la app ni desde la página web A alguien más le pasó? #Credicoop', 'Banca Online');
  manager.addDocument('es', 'poco práctico la banca x internet  la móvil de terror', 'Banca Online');
  manager.addDocument('es', 'estoy usando el home banking del banco credicoop', 'Banca Online');
  manager.addDocument('es', 'Alguien sabe cómo puedo sacar turno en el banco Credicoop', 'Atención Canales');
  manager.addDocument('es', '@BancoCredicoop Necesito realizar una consulta operativa y el 0800 nadie atiende', 'Atención Canales');
  manager.addDocument('es', '@BancoCredicoop recién llame atención al cliente Tel 48588573 atendió una mujer que no entendí su nombre , le ped? https://t.co/t4OfkLQY5m', 'Atención Canales');
  manager.addDocument('es', 'RT. En plena cuarentena dejan a los jubilados sin tarjeta de débito y no dan turnos.', 'Atención Canales');
  manager.addDocument('es', '', 'OtrasConsultas&Reclamos');
  manager.addDocument('es', 'Me bloquearon la clave token para la aplicacion movil', 'APP Credicoop');
  manager.addDocument('es', 'aplicacion de credicoop no soy operador habilitado', 'APP Credicoop');
  manager.addDocument('es', 'RT.', 'OtrasOpiniones&RT');
  manager.addDocument('es', 'El problema es que los cajeros están sin dinero', 'Cajeros automaticos');
  manager.addDocument('es', 'Nación, provincia y Credicoop te larga billetes de mil y de quinientos. Los privados todos billetes de cien.', 'Cajeros automaticos');
  manager.addDocument('es', 'En ningún banco provincia de Quilmes, Berazategui o Varela o los Credicoop q adhieren a red link están?', 'Cajeros automaticos');
  manager.addDocument('es', 'Me bloquearon la clave token para la aplicacion movil', 'APP Credicoop');
  manager.addDocument('es', 'aplicacion de credicoop no soy operador habilitado', 'APP Credicoop');
  manager.addDocument('es', 'RT.', 'OtrasOpiniones&RT');

  (async () => {
    await manager.train();
    manager.save();
    const response = await manager.process('es', text);

    //console.log(response);
    return response;
  })();
}

module.exports = router;
