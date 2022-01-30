const tx = require('ethereumjs-tx');
const Web3 = require('web3');
const web3 = new Web3();
const axios = require("axios");
const https = require('https');
const agent = new https.Agent({  
  rejectUnauthorized: false
});
let options = {
  method: 'GET',
  headers: {Accept: 'application/json', 'X-API-KEY': '5bec8ae0372044cab1bef0d866c98618'},
  httpsAgent: agent
};

function getListings(contractAddress) {
  const url = `https://testnets-api.opensea.io/api/v1/assets?order_direction=desc&asset_contract_address=${contractAddress}&offset=700&limit=50`;
  options.url = url;
  
  axios.request(options)
  .then(response => console.log(response.data.assets))
  .catch(function (error) {
    console.error(error);
  });
}
/*TO DO: GET OS API KEY*/
getListings('0x7470ea065e50e3862cd9b8fb7c77712165da80e5');
