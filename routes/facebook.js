const express = require('express');
const router = express.Router();
const { NlpManager } = require('node-nlp');
const manager = new NlpManager({ languages: ['es'], forceNER: true });

router.post('/', function(req, res, next) {

  const array = req.body;

  array.forEach(async (element) => {

    const resp = await analizerToTags(element.text)

    if(resp){
      const { utterance, classifications, intent } = resp;
      console.log(`\nrespuesta ID ${element.id} : `);
      console.log("text: " + utterance);
      console.log("clasificacion: ", classifications);
      console.log("intent: " + intent);
    }


  });

  /* respuesta status 200 para que no quede buscando el Postman */
  res.status(200).send("ok");
  
});

const analizerToTags = async (text) => {

  manager.addDocument('es', 'bloqueo, inhabilitado, no puedo acceder, blanquear, clave erronea, no estar registrado, pin, activar tarjeta, tragar tarjeta cajero, plazo fijo sin ticket, problema, atención al cliente, necesito, número de tarjeta inválido, recuperar cuenta', 'Tarjetas problemas técnicos');
  manager.addDocument('es', 'planes, cabal, adicionales, financiamiento, financiación, descuentos, tarjetas, servicios, pedidos, consultas, compras, visa, débito, crédito, mastercard, dar de baja, promociones, cuotas, reintegro, depósitos, haberes, %', 'Tarjetas servicios');
  manager.addDocument('es', 'Acceso, homebanking, movil, banca internet, online, resumen, digital, chrome, navegador, transferencia, token, fuera de servicio, alias, cbu, clave, usuario, cuenta, acreditar, débito automático, web, caido', 'Banca Online'),
  manager.addDocument('es', 'app, instalar, aplicación móvil, resumen, digital, error de ingreso, usuario incorrecto, clave incorrecta, token, MODO, clave', 'App Credicoop');
  manager.addDocument('es', 'teléfono, llamar, envío, emails, atender, demora, redes sociales, llamada en espera, mensajes, tiempo, hablar con un representante, derivar llamada, minutos, turnos, paciencia, mala, atención, opciones, asesoramiento, inconveniente', 'Atención Canales');
  manager.addDocument('es', 'dinero, extracción, depósito, cajero, fuera de servicio, bloqueado, no funciona, no tiene plata, sobre, red link, banelco, cabal, billetes, cheques, blanqueo, claves', 'Cajeros automaticos');
  manager.addDocument('es', 'pymes, cooperativas, industriales, entidades argentinas, informativos, agricultores federales, gerente, emprendedor, presentar, videoconferencia, recaudación, comisión, directivos, comunidad, referentes', 'Otras Opiniones');
  manager.addDocument('es', 'sucursal, consulta, reclamo, estafa, burocracia, falta de pago, cancelar, deuda, prestamos', 'OtrasConsultas&Reclamos');
  manager.addDocument('es', 'contanos, lamentamos, ayudarte, comentame, mensaje, privado, contestamos, disposición, informamos, respondimos, estamos', 'RespuestasCredicoop');
  

  await manager.train();
  manager.save();
  const response = await manager.process('es', text);

  return response;
}


module.exports = router;
