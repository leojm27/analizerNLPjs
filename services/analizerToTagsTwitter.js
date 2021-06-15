const { NlpManager } = require('node-nlp');
const manager = new NlpManager({ languages: ['es'], forceNER: true });

const analizerToTags = async (text) => {

    manager.addDocument('es', 'bloqueo, inhabilitado, no puedo acceder, blanquear, clave erronea, no estar registrado', 'Tarjetas problemas técnicos');

    manager.addDocument('es', 'planes, adicionales, financiamiento, financiación, descuentos, tarjetas, servicios, pedidos, consultas, compras, visa, débito, crédito, mastercard, dar de baja, promociones, cuotas, reintegro, cabal', 'Tarjetas servicios');

    manager.addDocument('es', 'Acceso, homebanking, movil, banca internet,resumen, digital, chrome, navegador, transferencia, token, fuera de servicio, alias, cbu, clave, usuario, cuenta, acreditar, débito automático, web, caido', 'Banca Online'),

    manager.addDocument('es', 'app, instalar, aplicación móvil, resumen, digital, ', 'App Credicoop');

    manager.addDocument('es', 'teléfono, llamar, envío, emails, atender, demora, redes sociales, llamada en espera, mensajes, tiempo, hablar con un representante, derivar llamada, minutos, turnos, paciencia, mala, atención, opciones', 'Atención Canales');

    manager.addDocument('es', 'dinero, extracción, depósito, cajero, fuera de servicio, no funciona, no tiene plata, sobre, red link, banelco, cabal, billetes, cheques, blanqueo, claves', 'Cajeros automaticos');

    manager.addDocument('es', 'pymes, cooperativas, industriales, entidades argentinas, informativos, agricultores federales, gerente, emprendedor, presentar, videoconferencia, recaudación, comisión, directivos, comunidad, referentes', 'Influencer');

    manager.addDocument('es', 'sucursal, consulta, reclamo, estafa, burocracia, falta de pago', 'OtrasConsultas&Reclamos');

    manager.addDocument('es', 'RT.', 'OtrasOpiniones&RT');

    manager.addDocument('es', 'campaña, proyectos, asistencia técnica, fundación, universidades, entrevistas, conferencias, días festivos, saludos, instituciones, filial, afiliados, sindicatos, municipios, capacitaciones, denuncias, zoom, meeting, becas, tecnologías, convenio, acuerdos, donaciones', 'prensa');

    await manager.train();
    manager.save();
    const response = await manager.process('es', text);

    return response;
}

module.exports = { analizerToTags };