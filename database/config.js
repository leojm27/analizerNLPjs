const { setSentiment } = require("../services/dataSentiments");
const { setTagsFacebook } = require("../services/dataTagsFacebook");
const { setTagsTwitter } = require("../services/dataTagsTwitter");

const init = async () => {

    try {

        await setSentiment();
        await setTagsTwitter();
        await setTagsFacebook();
        console.log('managers are ready.');

    } catch (error) {

        console.log(error);
        throw new Error('error trying to load managers.');

    }

}



module.exports = { init }