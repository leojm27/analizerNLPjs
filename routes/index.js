const express = require('express');
const { facebook, twitter } = require('../controllers/socialMedia');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {

  res.send('Project: poc-coden-tags');

});

/* POST */

router.post('/facebook', facebook );

router.post('/twitter', twitter );



module.exports = router;
