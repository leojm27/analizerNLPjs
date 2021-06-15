const express = require('express');
const router = express.Router();
const { analizerSentiment } = require('../services/analizerSentiment');
const { analizerToTags } = require('../services/analizerToTags');

router.post('/', function(req, res) {

  const array = req.body;

  array.forEach(async (element) => {

    const sentiment = await analizerSentiment(element.text);
    const resp = await analizerToTags(element.text);

    if(resp){
      const { utterance, classifications, intent } = resp;
      console.log(`\nrespuesta ID ${element.id} : `);
      console.log("text: " + utterance);
      console.log("clasificacion: ", classifications);
      console.log("intent: " + intent);
    }

    if(sentiment){
      const { classifications, intent } = sentiment;
      console.log("Sentimiento: " , classifications);
      console.log("intent: " + intent);
    }

  });

  res.status(200).send("ok");
  
});


module.exports = router;
