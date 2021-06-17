
const { NlpManager } = require('node-nlp');
const manager = new NlpManager({ languages: ['es'], forceNER: true });


const analizerToTags = async (text) => {

    //Tarjeta problemas técnicos
    manager.addDocument('es', 'bloque, inhabilitad, acceder, blanq clave, erronea, registr, pin', 'Tarjetas problemas técnicos');

    manager.addDocument('es', 'activar tarjeta, tragar, cajero, plazo fijo, ticket, problema, atención al cliente', 'Tarjetas problemas técnicos');

    manager.addDocument('es', 'número, tarjeta, inválido, recuperar, cuenta, generar clave', 'Tarjetas problemas técnicos');

    //--------------------------------
  
    //Tarjetas Servicios
    manager.addDocument('es', 'planes, cabal, adicional, financia, descuentos, servicios, pedidos', 'Tarjetas servicios');

    manager.addDocument('es', 'consultas, compras, visa, débito, crédito, mastercard, baja', 'Tarjetas servicios');

    manager.addDocument('es', 'promociones, cuotas, reintegro, depósitos, haberes, %, Sipago, ventas', 'Tarjetas servicios');

    //-----------------------------
  
    //Banca onlina
    manager.addDocument('es', 'Acceso, homebanking, movil, banca, internet, online, resumen digital', 'Banca Online'),

    manager.addDocument('es', 'navegador, transferencia, token, fuera de servicio, alias, cbu, clave', 'Banca Online'),

    manager.addDocument('es', 'usuario, cuenta, acredit, débito automático, web, sistema caido, sin sistema', 'Banca Online'),

    //-------------------------------
  
    //App credicoop
    manager.addDocument('es', 'app, instalar, aplicación móvil, error, ingreso, usuario, incorrecto, clave, incorrecta, token, MODO, clave', 'App Credicoop');
    //---------------------------------

    //atención canales
    manager.addDocument('es', 'teléfono, llamar, envío, emails, atender, demora, redes sociales', 'Atención Canales');

    manager.addDocument('es', 'llamada en espera, mensajes, tiempo, hablar con un representante, derivar llamada, minutos', 'Atención Canales');

    manager.addDocument('es', 'turnos, paciencia, mala atención, opciones, asesoramiento, inconveniente', 'Atención Canales');

    //------------------------------

    //Cajeros automáticos
    manager.addDocument('es', 'dinero, extracción, depósito, cajero, fuera de servicio, bloqueado, no funciona', 'Cajeros automaticos');

    manager.addDocument('es', 'plata, sobre, red link, red banelco, cabal, billetes, cheques', 'Cajeros automaticos');

    manager.addDocument('es', 'blanq claves, pin, no me dio el ticket', 'Cajeros automaticos');
    //---------------------------------
  
    
    //Otras Opiniones
    manager.addDocument('es', 'pymes, cooperativas, industriales, entidades argentinas, informativ, agricultores federales, gerente', 'Otras Opiniones');

    manager.addDocument('es', 'emprendedor, presentar, videoconferencia, recaudación, comisión, directivos, comunidad', 'Otras Opiniones');

    manager.addDocument('es', 'referentes, me cambio, sorete, ¿?, banco, capacitaciones, virtu, reuni, online, dirigi, fest, ocupar, asumir', 'Otras Opiniones');
    //------------------------
  
    //Consultas y reclamos
    manager.addDocument('es', 'sucursal, consulta, reclam, reintegro, hice la compra, no aparece, acoso', 'OtrasConsultas&Reclamos');

    manager.addDocument('es', 'estafa, burocracia, falta de pago, cancelar, quincena, no puede pedir crédito, crédito', 'OtrasConsultas&Reclamos');

    manager.addDocument('es', 'deuda, prestamos, cobra, turno, hijo de puta, acoso, sorete, ¿?,mierda, puta madre, concha de la lora, barat, culiado, venc, me cago', 'OtrasConsultas&Reclamos');

    manager.addDocument('es', 'diganme que debo hacer, no puedo sacar dinero, no puedo retirar dinero', 'OtrasConsultas&Reclamos');

    //-----------------------------
  
    manager.addDocument('es', 'lamentamos, ayudarte, comentame, estamos con por mensaje privado, cont, disposición, infor, respon, estamos, recordá, pago, indicarte como proceder ', 'RespuestasCredicoop');
  
  
    await manager.train();
    manager.save();
    const response = await manager.process('es', text);
  
    return response;
  }

  module.exports = { analizerToTags }