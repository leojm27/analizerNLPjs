const { response } = require('express');
const { analizerSentiment } = require('../services/dataSentiments');
const { analizerTagTwitter } = require('../services/dataTagsTwitter');
const { analizerTagFacebook } = require('../services/dataTagsFacebook');
const utils = require('../utils/utils');


const twitter = async (req, res) => {
    const array = req.body;
    let data = [];

    if (array.length > 0) {

        for await (const element of array) {
            let sentimentAnalizer = 0;
            let tagAnalizer = '';
            let text = '';

            if (element.text && element.id) {

                text = utils.cleanText(element.text);
                await analizerSentiment(text)
                    .then(async (response) => {
                        if (response) {

                            sentimentAnalizer = response.classifications[0].intent;
                            await analizerTagTwitter(text)
                                .then((response) => {
                                    if (response) {
                                        tagAnalizer = response.classifications[0].intent;
                                        data.push({
                                            id: element.id,
                                            text,
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
                console.log("there is not text");
            }
        }

        if (data.length > 0) {

            console.log(data);
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
}


const facebook = async (req, res) => {
    const array = req.body;
    let data = [];

    if (array.length > 0) {

        for await (const element of array) {
            let sentimentAnalizer = 0;
            let tagAnalizer = '';
            let text = '';

            if (element.text && element.id) {

                text = utils.cleanText(element.text);
                await analizerSentiment(text)
                    .then(async (response) => {

                        if (response) {
                            sentimentAnalizer = response.classifications[0].intent;
                            await analizerTagFacebook(text)
                                .then((response) => {
                                    if (response) {
                                        tagAnalizer = response.classifications[0].intent;
                                        data.push({
                                            id: element.id,
                                            text,
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
                console.log("there is not text");
            }
        }

        if (data.length > 0) {

            console.log(data);
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
}


module.exports = {
    twitter,
    facebook
}