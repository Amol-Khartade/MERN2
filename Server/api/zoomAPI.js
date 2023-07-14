const thirdPartyAPICall = () => {
    try {

        // Make API Call Here 
      return "Third Party API Call";
    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
  };

  module.exports = {
    thirdPartyAPICall,
  };