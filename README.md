## Full stack NFT marketplace built with Ropsten, Solidity, IPFS, & Next.js
https://nft-marketplace.jaylee923.repl.co

#### Local setup

To run this project locally, follow these steps.

1. Clone the project locally, change into the directory, and install the dependencies:

```sh
git clone https://github.com/jaylee923/nft_marketplace3_nextjs.git

cd nft_marketplace3_nextjs

# install using NPM or Yarn
npm install

# or

yarn
```

2. Start the local Hardhat node

```sh
npx hardhat node
```

3. With the network running, deploy the contracts to the local network in a separate terminal window

```sh
npx hardhat run scripts/deploy.js --network ropsten
```
It's created config.js
```sh
  export const nftmarketaddress = "${nftMarket.address}"
  export const nftaddress = "${nft.address}"
  export const rpcEndpoint = "https://ropsten.infura.io/v3/${infuraId}"
```

4. Start the app

```
npm run dev
```

### Configuration

To deploy to Ropsten test networks, update the configurations located in __hardhat.config.js__ to use a private key and, optionally, deploy to a private RPC like Infura.
URL: 
```javascript
require("@nomiclabs/hardhat-waffle");
const fs = require('fs');
const privateKey = fs.readFileSync(".secret").toString().trim() || "01234567890123456789";

// infuraId is optional if you are using Infura RPC
const infuraId = fs.readFileSync(".infuraid").toString().trim() || "";

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
      url: `https://ropsten.infura.io/v3/${infuraId}`, 
      accounts: [`0x${privateKey}`]
    }
  }
};
```

If using Infura, update __.infuraid__ with your [Infura](https://infura.io/) project ID.

