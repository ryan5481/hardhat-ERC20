const { verify } = require("../helper-functions")
const { network } = require("hardhat")
//const { deploy } = require("hardhat-deploy")
const {
  developmentChains,
  INITIAL_SUPPLY,
} = require("../helper-hardhat-config")

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments
  const { deployer } = await getNamedAccounts()

  log("Deploying Sublime and waiting for confirmations . . .")
  const sublime = await deploy("Sublime", {
    from: deployer,
    args: [INITIAL_SUPPLY],
    log: true,
    waitConfirmations: network.config.blockConfirmations || 1,
  })

  log(`Sublime token deployed at ${sublime.address}`)

  if (
    !developmentChains.includes(network.name) &&
    process.env.ETHERSCAN_API_KEY
  ) {
    await verify(sublime.address, [INITIAL_SUPPLY])
  }
}

module.exports.tags = ["all", "sublime"]
