require('dotenv').config()

/** @type import('hardhat/config').HardhatUserConfig */
const url = process.env.URL
const private_key1 =process.env.PRIVATE_KEY1
const private_key2 = process.env.PRIVATE_KEY2
module.exports = {
  solidity: "0.8.9",
  networks:{
    sepolia:{
      url:url,
      accounts:[private_key1,private_key2],
    }
  }
};
