
const { NlpManager } = require('node-nlp');
const managerFacebook = new NlpManager({ languages: ['es'], forceNER: true });


const setTagsFacebook = async (text) => {

    //Tarjeta problemas técnicos
    managerFacebook.addDocument('es', 'bloque, inhabilitad, acceder, blanq clave, erronea, registr, pin', 'Tarjetas problemas técnicos');

    managerFacebook.addDocument('es', 'activar tarjeta, tragar, cajero, plazo fijo, ticket, problema, atención al cliente', 'Tarjetas problemas técnicos');

    managerFacebook.addDocument('es', 'número, tarjeta, inválido, recuperar, cuenta, generar clave', 'Tarjetas problemas técnicos');

    //--------------------------------
  
    //Tarjetas Servicios
    managerFacebook.addDocument('es', 'planes, cabal, adicional, financia, descuentos, servicios, pedidos', 'Tarjetas servicios');

    managerFacebook.addDocument('es', 'consultas, compras, visa, débito, crédito, mastercard, baja', 'Tarjetas servicios');

    managerFacebook.addDocument('es', 'promociones, cuotas, reintegro, depósitos, haberes, %, Sipago, ventas', 'Tarjetas servicios');

    //-----------------------------
  
    //Banca onlina
    managerFacebook.addDocument('es', 'Acceso, homebanking, movil, banca, internet, online, resumen digital', 'Banca Online'),

    managerFacebook.addDocument('es', 'navegador, transferencia, token, fuera de servicio, alias, cbu, clave', 'Banca Online'),

    managerFacebook.addDocument('es', 'usuario, cuenta, acredit, débito automático, web, sistema caido, sin sistema', 'Banca Online'),

    //-------------------------------
  
    //App credicoop
    managerFacebook.addDocument('es', 'app, instalar, aplicación móvil, error, ingreso, usuario, incorrecto, clave, incorrecta, token, MODO, clave', 'App Credicoop');
    //---------------------------------

    //atención canales
    managerFacebook.addDocument('es', 'teléfono, llamar, envío, emails, atender, demora, redes sociales', 'Atención Canales');

    managerFacebook.addDocument('es', 'llamada en espera, mensajes, tiempo, hablar con un representante, derivar llamada, minutos', 'Atención Canales');

    managerFacebook.addDocument('es', 'turnos, paciencia, mala atención, opciones, asesoramiento, inconveniente', 'Atención Canales');

    //------------------------------

    //Cajeros automáticos
    managerFacebook.addDocument('es', 'dinero, extracción, depósito, cajero, fuera de servicio, bloqueado, no funciona', 'Cajeros automaticos');

    managerFacebook.addDocument('es', 'plata, sobre, red link, red banelco, cabal, billetes, cheques', 'Cajeros automaticos');

    managerFacebook.addDocument('es', 'blanq claves, pin, no me dio el ticket', 'Cajeros automaticos');
    //---------------------------------
  
    
    //Otras Opiniones
    managerFacebook.addDocument('es', 'pymes, cooperativas, industriales, entidades argentinas, informativ, agricultores federales, gerente', 'Otras Opiniones');

    managerFacebook.addDocument('es', 'emprendedor, presentar, videoconferencia, recaudación, comisión, directivos, comunidad', 'Otras Opiniones');

    managerFacebook.addDocument('es', 'referentes, me cambio, sorete, ¿?, banco, capacitaciones, virtu, reuni, online, dirigi, fest, ocupar, asumir', 'Otras Opiniones');
    //------------------------
  
    //Consultas y reclamos
    managerFacebook.addDocument('es', 'sucursal, consulta, reclam, reintegro, hice la compra, no aparece, acoso', 'OtrasConsultas&Reclamos');

    managerFacebook.addDocument('es', 'estafa, burocracia, falta de pago, cancelar, quincena, no puede pedir crédito, crédito', 'OtrasConsultas&Reclamos');

    managerFacebook.addDocument('es', 'deuda, prestamos, cobra, turno, hijo de puta, acoso, sorete, ¿?,mierda, puta madre, concha de la lora, barat, culiado, venc, me cago', 'OtrasConsultas&Reclamos');

    managerFacebook.addDocument('es', 'diganme que debo hacer, no puedo sacar dinero, no puedo retirar dinero', 'OtrasConsultas&Reclamos');

    //-----------------------------
  
    managerFacebook.addDocument('es', 'lamentamos, ayudarte, comentame, estamos con por mensaje privado, cont, disposición, infor, respon, estamos, recordá, pago, indicarte como proceder ', 'RespuestasCredicoop');
  
  
    await managerFacebook.train();

    managerFacebook.save();

  }

  
  const analizerTagFacebook = async (text) => {

    const response = await managerFacebook.process('es', text);
  
    return response;
    
  }

  module.exports = { setTagsFacebook, analizerTagFacebook }