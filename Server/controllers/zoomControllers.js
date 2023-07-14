const asyncHandler = require("express-async-handler");
const {
  thirdPartyAPICall,
  } = require("../api/zoomAPI");


const ThirdPartyAPICall = asyncHandler(async (req, res) => {

    const thirdPartyAPI = thirdPartyAPICall();

    if (thirdPartyAPICall === undefined) {
        res.status(400);
        throw new Error("No API Call found");
      } else {
        res.status(201).json({ thirdPartyAPI });
      }
  });

  module.exports = {
    ThirdPartyAPICall,
  };