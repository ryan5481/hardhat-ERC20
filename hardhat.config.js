require("@nomiclabs/hardhat-waffle")
require("@nomiclabs/hardhat-etherscan")
require("hardhat-deploy")
require("solidity-coverage")
require("hardhat-gas-reporter")
require("hardhat-contract-sizer")
require("dotenv").config()

const PRIVATE_KEY = process.env.PRIVATE_KEY
const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL
const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY
const REPORT_GAS = process.env.REPORT_GAS

module.exports = {
  solidity: {
    compilers: [{ version: "0.8.7" }, { version: "0.6.6" }],
  },
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 31337,
    },
    localhost: {
      chainId: 31337,
    },

    goerli: {
      url: GOERLI_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 5,
      saveDeployments: true,
    },
  },

  etherscan: {
    apiKey: {
      goerli: ETHERSCAN_API_KEY,
    },
  },

  gasReporter: {
    enabled: true,
    currrency: "USD",
    outputFile: "Gas-report.txt",
  },

  contractSizer: {
    runOnCompile: false,
    only: ["Sublime"],
  },

  namedAccounts: {
    deployer: {
      default: 0,
      1: 0,
    },
    user1: {
      default: 1,
    },
  },

  mocha: {
    timeOut: 2000000,
  },
}
