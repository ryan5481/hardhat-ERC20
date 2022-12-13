# **ERC20 token**

## Requirements
### [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
Run ```git --version``` to check if you installed it right.
### [Nodejs](https://nodejs.org/en/)
Run ```node --version``` to check if you installed it right.
### [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable) instead of ```npm```
Run ```yarn --version``` to check if you installed it right.
You might need to install it with npm.

## Quickstart
```
git clone https://github.com/PatrickAlphaC/hardhat-erc20-fcc
cd hardhat-erc20-fcc
yarn
```

## Usage
### Compile:
```
yarn hardhat compile
```

### Deploy:
```
yarn hardhat deploy
```

## Deployment to a testnet or mainnet
### Setup environment variables
You'll want to set your GOERLI_RPC_URL and PRIVATE_KEY as environment variables. You can add them to a .env file, similar to what you see in .env.example.

### PRIVATE_KEY: 
The private key of your account (like from metamask). NOTE: FOR DEVELOPMENT, PLEASE USE A KEY THAT DOESN'T HAVE ANY REAL FUNDS ASSOCIATED WITH IT.
You can learn how to export it here.
### GOERLI_RPC_URL: 
This is url of the goerli testnet node you're working with. You can get setup with one for free from Alchemy
### Get testnet ETH
Head over to faucets.chain.link and get some tesnet ETH. You should see the ETH show up in your metamask.

## Deploy
```
yarn hardhat deploy --network GOERLI_RPC_URL
```

## Verify on Etherscan
Contracts deployed on a testnet or a mainnet can be verified by getting an [API Key](https://etherscan.io/login?cmd=last) and setting it as an environment variable  named ```ETHERSCAN_API_KEY```. A new file called ```.env``` should be created to store the keys including ```ETHERSCAN_API_KEY```.

However, verification can also be done manually:
```
yarn hardhat verify --constructor-args arguments DEPLOYED_CONTRACT_ADDRESS
```

