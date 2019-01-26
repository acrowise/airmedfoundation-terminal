/**
 * ursa-error.js
**/

module.exports = function ursaError() {

    var res, result;
    
    res = this.res;

    result = {
        status: 400,
        message: 'Error. The provided private key is not valid or invalid ipfs encrypted hash'
    };
  
    return res.status(400).json(result);
};
