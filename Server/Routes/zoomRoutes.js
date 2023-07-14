const express = require('express');
const router = express.Router();
const {

    ThirdPartyAPICall,

  } = require("../controllers/zoomControllers.js");

router.route('/').post();

// Get routes Test with Postman
router.route("/thirdparty").get(ThirdPartyAPICall);

module.exports = router