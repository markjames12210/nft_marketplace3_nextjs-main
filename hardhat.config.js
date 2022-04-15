require("@nomiclabs/hardhat-waffle");
const fs = require('fs');
const privateKey = fs.readFileSync(".secret").toString().trim() || "01234567890123456789";
const infuraId = fs.readFileSync(".infuraid").toString().trim() || "";
// const fs = require('fs');
// const privateKey = ""; //private key of ropsten network address

module.exports = {
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  networks: {
    hardhat:{
      chainId:1337
    },
    ropsten: {
      url: `https://ropsten.infura.io/v3/${infuraId}`, //https://ropsten.infura.io/v3/... infura project link <= ENDPOINTS = ROPSTEN
      accounts: [`0x${privateKey}`]
    },
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${infuraId}`, //https://ropsten.infura.io/v3/... infura project link <= ENDPOINTS = ROPSTEN
      accounts: [`0x${privateKey}`]
    }
  }
};

