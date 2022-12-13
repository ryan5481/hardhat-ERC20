// these functions use hardhat library, hence, can't be in 'helper-hardhat-config'

const { run } = require("hardhat")
const verify = async (contractAddress, args) => {
  console.log("Verifying contract . . .")
  try {
    await run("verify:verify", {
      address: contractAddress,
      constructionArguements: args,
    })
  } catch (e) {
    if (e.message.toLowerCase().includes("already verified")) {
      console.log("Already verified contract!")
    } else {
      console.log(e)
    }
  }
}

module.exports = {
  verify,
}
