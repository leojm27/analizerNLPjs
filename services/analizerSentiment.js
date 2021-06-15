
const { NlpManager } = require('node-nlp');
const manager = new NlpManager({ languages: ['es'], forceNER: true });


const analizerSentiment = async (text) => {

    manager.addDocument('es', 'buen, gracias, amigable, especial, genial, estupendo, espectacular, muy, amable, gran, promo, beneficios, sorte, descuentos, ', '1');
  
    manager.addDocument('es', 'estoy al horno', '0');
  
    manager.addDocument('es', 'no, dar de baja, baja, mierda, pésim, bosta, cagad, cagó, puto, porquería, verga, retroceso, desastre, puteada, inservible, amenaza, basura, odio, burocracia, mala atención, suplicio, tristeza, concha de la lora, la puta madre, lpm, inoperante, pelotud, mal, te pelan mal, robo, estafas, pleito, pelea, ladron, culiado, pedorro, peor, droga, fumando, comela, para variar, sinverguenza, larvas, lacras, poronga, cerrar cuenta, lento, acoso', '-1');
    
  
    await manager.train();
    manager.save();
    const response = await manager.process('es', text);
  
    return response;
  }

module.exports = { analizerSentiment }