
const { NlpManager } = require('node-nlp');
const manager = new NlpManager({ languages: ['es'], forceNER: true });


const analizerToTags = async (text) => {

    manager.addDocument('es', 'bloque, inhabilitad, acceder, blanq clave, erronea, registr, pin, activar tarjeta, tragar, cajero, plazo fijo, ticket, problema, atención al cliente, número, tarjeta, inválido, recuperar, cuenta, generar clave, pin', 'Tarjetas problemas técnicos');
  
    manager.addDocument('es', 'planes, cabal, adicional, financia, descuentos, servicios, pedidos, consultas, compras, visa, débito, crédito, mastercard, baja, promociones, cuotas, reintegro, depósitos, haberes, %', 'Tarjetas servicios');
  
    manager.addDocument('es', 'Acceso, homebanking, movil, banca, internet, online, resumen digital, navegador, transferencia, token, fuera de servicio, alias, cbu, clave, usuario, cuenta, acredit, débito automático, web, sistema caido, sin sistema', 'Banca Online'),
  
    manager.addDocument('es', 'app, instalar, aplicación móvil, error, ingreso, usuario, incorrecto, clave, incorrecta, token, MODO, clave', 'App Credicoop');
  
    manager.addDocument('es', 'teléfono, llamar, envío, emails, atender, demora, redes sociales, llamada en espera, mensajes, tiempo, hablar con un representante, derivar llamada, minutos, turnos, paciencia, mala atención, opciones, asesoramiento, inconveniente', 'Atención Canales');
  
    manager.addDocument('es', 'dinero, extracción, depósito, cajero, fuera de servicio, bloqueado, no funciona, plata, sobre, red link, red banelco, cabal, billetes, cheques, blanq claves, pin, no me dio el ticket', 'Cajeros automaticos');
  
    manager.addDocument('es', 'pymes, cooperativas, industriales, entidades argentinas, informativos, agricultores federales, gerente, emprendedor, presentar, videoconferencia, recaudación, comisión, directivos, comunidad, referentes', 'Otras Opiniones');
  
    manager.addDocument('es', 'sucursal, consulta, reclamo, acoso, estafa, burocracia, falta de pago, cancelar deuda, prestamos', 'OtrasConsultas&Reclamos');
  
    manager.addDocument('es', 'lamentamos, ayudarte, comentame, mensaje privado, cont, disposición, infor, respon, estamos', 'RespuestasCredicoop');
  
    await manager.train();
    manager.save();
    const response = await manager.process('es', text);
  
    return response;
  }

  module.exports = { analizerToTags }