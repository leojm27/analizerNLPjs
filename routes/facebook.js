const express = require('express');
const router = express.Router();
const { analizerSentiment } = require('../services/analizerSentiment');
const { analizerToTags } = require('../services/analizerToTags');

router.post('/', async function (req, res) {

  const array = req.body;
  let data = [];

  if (array.length > 0) {

    for await (const element of array) {
      let sentimentAnalizer = 0;
      let tagAnalizer = '';

      if (element.text && element.id) {
        await analizerSentiment(element.text)
          .then(async (response) => {

            if (response) {
              sentimentAnalizer = response.classifications[0].intent;
              await analizerToTags(element.text)
                .then((response) => {
                  if (response) {
                    tagAnalizer = response.classifications[0].intent;
                    data.push({
                      id: element.id,
                      text: element.text,
                      sentiment: parseInt(sentimentAnalizer),
                      tag: tagAnalizer
                    });
                  }
                })
                .catch((err) => {
                  console.log(err);
                })
            }

          })
          .catch((err) => {
            console.log(err);
          })
      } else {
        console.log("no existe text");
      }
    }

    if (data.length > 0) {
      res.status(200).json(data);
    } else {
      res.status(500).json({
        code: "internal_server_error",
        message: "The json sent is badly structured"
      });
    }

  } else {

    res.status(500).json({
      code: "internal_server_error",
      message: "A json was expected"
    });

  }

});

module.exports = router;
