
const { NlpManager } = require('node-nlp');
const manager = new NlpManager({ languages: ['es'], forceNER: true });


const analizerSentiment = async (text) => {

 //positivo  
 manager.addDocument('es', 'buen, gracias, amigable, especial, genial, estupendo, espectacular', '1');

 manager.addDocument('es', 'muy, amable, gran, promo, beneficios, sorte, descuentos, campaña, ofrecer', '1');
 //------------------------
 
 //Neutro
 manager.addDocument('es', 'estoy al horno, no me dió, todavía, sigo esperando, fundación, credicoop, capacitación', '0');

 manager.addDocument('es', 'programa, cooperativa, convenio, proyecto, financia, línea de crédito, reunión, campaña, emprende, ofrecer, dirig, invit, particip', '0');

 manager.addDocument('es', 'informativ, online, potencia, ventas, comercio, plataforma, asumir, envi', '0');

 manager.addDocument('es', 'desafío, ocupar, solucio, sin tener, necesito respuesta, estamos con vos por mensaje privado, espero respuesta', '0');

 manager.addDocument('es', 'bienvenidos, hola, bien, como estas, activar, activación, quería saber, quiero', '0');

 manager.addDocument('es', 'quisiera saber, debería, tal vez, podamos ayudarte, envianos, qué, solicité, necesito', '0');

 manager.addDocument('es', 'tienen que resolver, que debo hacer, me dan, qué pasó, sugerimos', '0');

 manager.addDocument('es', 'quedamos a tu disposición, consulta, reintegro, cuanto, saldo, asesoren, sacar turno ', '0');

 manager.addDocument('es', 'qopción, ayudarte de manera personalizada, podamos ayudarte, llama, reintegro', '0');

 //-------------------------

 //negativo
 manager.addDocument('es', 'no, no pued, dar de baja, baja, mierda, pésim, bosta','-1');

 manager.addDocument('es', 'cagad, cagó, puto, porquería, verga, retroceso, desastre','-1');

 manager.addDocument('es', 'puteada, inservible, amenaza, basura, odio, burocracia, mala atención,','-1');

 manager.addDocument('es', 'suplicio, tristeza, concha de la lora, la puta madre, lpm, inoperante, pelotud','-1');

 manager.addDocument('es', 'mal, te pelan mal, robo, estafas, pleito, pelea, ladron','-1');

 manager.addDocument('es', 'culiado, pedorro, peor, el peor banco, me cambio, droga, fumando','-1');

 manager.addDocument('es', ', comela, para variar, sinverguenza, larvas, lacras, poronga, cerrar cuenta, lento, acoso','-1');

 manager.addDocument('es', 'son una verguenza, denegado, denegada, empatía, tarjeta denegada','-1');

 manager.addDocument('es', 'practicidad, espera, imposible, expliquen mejor','-1');

 manager.addDocument('es', 'error, malisimo, da siempre ocupado','-1');
 
  await manager.train();
  manager.save();
  const response = await manager.process('es', text);

  return response;
}

module.exports = { analizerSentiment }