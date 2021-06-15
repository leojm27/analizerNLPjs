const express = require('express');
const router = express.Router();
const { analizerSentiment } = require('../services/analizerSentiment');
const { analizerToTags } = require('../services/analizerToTagsTwitter');

router.post('/', async function  (req, res) {

  const array = req.body;
  let data = [];

  await array.forEach(async (element) => {


    const sentimentAnalizer = await analizerSentiment(element.text);
    const analizerTag = await analizerToTags(element.text);
    let sentiment = '';
    let tag = '';

    if(analizerTag){
      const { utterance, classifications, intent } = analizerTag;
      
      tag = intent;
      console.log(`\nrespuesta ID ${element.id} : `);
      console.log("text: " + utterance);
      console.log("clasificacion: ", classifications);
      console.log("intent: " + intent);
    }

    if(sentimentAnalizer){
      const { classifications, intent } = sentimentAnalizer;
      sentiment = intent;
      console.log("Sentimiento: " , classifications);
      console.log("intent: " + intent);
    }

    data.push({
      id: element.id,
      text: element.text,
      sentiment,
      tag
    });

    console.log("data: ",data);

  })

  //console.log("data: ",data);

  /* respuesta status 200 para que no quede buscando el Postman */
  res.status(200).send("ok");

});

module.exports = router;
