const { NlpManager } = require('node-nlp');
const managerTwitter = new NlpManager({ languages: ['es'], forceNER: true });

const setTagsTwitter = async () => {

  //Tarjeta problemas técnicos
  managerTwitter.addDocument('es', 'bloque, inhabilitad, acceder, blanq clave, erronea, registr, pin', 'Tarjetas problemas técnicos');

  managerTwitter.addDocument('es', 'activar tarjeta, tragar, cajero, plazo fijo, ticket, problema, atención al cliente', 'Tarjetas problemas técnicos');

  managerTwitter.addDocument('es', 'número, tarjeta, inválido, recuperar, cuenta, generar clave', 'Tarjetas problemas técnicos');

  //--------------------------------

  //Tarjetas Servicios
  managerTwitter.addDocument('es', 'planes, cabal, adicional, financia, descuentos, servicios, pedidos', 'Tarjetas servicios');

  managerTwitter.addDocument('es', 'consultas, compras, visa, débito, crédito, mastercard, baja', 'Tarjetas servicios');

  managerTwitter.addDocument('es', 'promociones, cuotas, reintegro, depósitos, haberes, %, Sipago, ventas', 'Tarjetas servicios');

  //-----------------------------

  //Banca online
  managerTwitter.addDocument('es', 'Acceso, homebanking, movil, banca, internet, online, resumen digital', 'Banca Online'),

    managerTwitter.addDocument('es', 'navegador, transferencia, token, fuera de servicio, alias, cbu, clave', 'Banca Online'),

    managerTwitter.addDocument('es', 'usuario, cuenta, acredit, débito automático, web, sistema caido, sin sistema', 'Banca Online'),

    //-------------------------------

    //App credicoop
    managerTwitter.addDocument('es', 'app, instalar, aplicación móvil, error, ingreso, usuario, incorrecto, clave, incorrecta, token, MODO, clave', 'App Credicoop');
  //---------------------------------

  //atención canales
  managerTwitter.addDocument('es', 'teléfono, llamar, envío, emails, atender, demora, redes sociales', 'Atención Canales');

  managerTwitter.addDocument('es', 'llamada en espera, mensajes, tiempo, hablar con un representante, derivar llamada, minutos', 'Atención Canales');

  managerTwitter.addDocument('es', 'turnos, paciencia, mala atención, opciones, asesoramiento, inconveniente', 'Atención Canales');

  //------------------------------

  //Cajeros automáticos
  managerTwitter.addDocument('es', 'dinero, extracción, depósito, cajero, fuera de servicio, bloqueado, no funciona', 'Cajeros automaticos');

  managerTwitter.addDocument('es', 'plata, sobre, red link, red banelco, cabal, billetes, cheques', 'Cajeros automaticos');

  managerTwitter.addDocument('es', 'blanq claves, pin, no me dio el ticket', 'Cajeros automaticos');
  //---------------------------------

  managerTwitter.addDocument('es', 'pymes, cooperativas, industriales, entidades argentinas, informativos, agricultores federales, gerente, emprendedor, presentar, videoconferencia, recaudación, comisión, directivos, comunidad, referentes', 'Influencer');

  //Consultas y reclamos
  managerTwitter.addDocument('es', 'sucursal, consulta, reclam, reintegro, hice la compra, no aparece, acoso', 'OtrasConsultas&Reclamos');

  managerTwitter.addDocument('es', 'estafa, burocracia, falta de pago, cancelar, quincena, no puede pedir crédito, crédito', 'OtrasConsultas&Reclamos');

  managerTwitter.addDocument('es', 'deuda, prestamos, cobra, turno, hijo de puta, acoso, sorete, ¿?,mierda, puta madre, concha de la lora, barat, culiado, venc, me cago', 'OtrasConsultas&Reclamos');

  managerTwitter.addDocument('es', 'diganme que debo hacer, no puedo sacar dinero, no puedo retirar dinero', 'OtrasConsultas&Reclamos');

  //-----------------------------

  //Otras Opiniones y RT

  managerTwitter.addDocument('es', 'emprendedor, presentar, videoconferencia, recaudación, comisión, directivos, comunidad', 'OtrasOpiniones&RT');

  managerTwitter.addDocument('es', 'referentes, me cambio, soreye, sorete, ¿, ?, labura, banco', 'OtrasOpiniones&RT');
  //------------------------

  //prensa
  managerTwitter.addDocument('es', 'campaña, proyectos, asistencia técnica, fundación, universidades, entrevistas, conferencias', 'prensa');

  managerTwitter.addDocument('es', 'días festivos, saludos, instituciones, filial, afiliados, sindicatos, municipios, ', 'prensa');

  managerTwitter.addDocument('es', 'capacitaciones, denuncias, zoom, meeting, becas, tecnologías, convenio, acuerdos, donaciones, ofrece', 'prensa');

  managerTwitter.addDocument('es', 'RT, pymes, cooperativas, industriales, entidades argentinas, informativ, agricultores federales, gerente', 'prensa');

  managerTwitter.addDocument('es', 'online, reunion, invita, dirig, capacitaciones', 'prensa');
  //-----------------------------

  await managerTwitter.train();

  managerTwitter.save();

}

const analizerTagTwitter = async (text) => {

  const response = await managerTwitter.process('es', text);

  return response;

}

module.exports = { setTagsTwitter, analizerTagTwitter };