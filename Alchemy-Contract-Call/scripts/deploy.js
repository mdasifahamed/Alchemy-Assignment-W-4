require('dotenv').config()
const hre = require("hardhat");
const {ethers} = require("ethers");





async function deploy1() {

 
  const private_key1 =  hre.config.networks.sepolia.accounts[0];
  const provider = new ethers.JsonRpcProvider(process.env.URL)
  const wallet = new ethers.Wallet(private_key1,provider);

  try {
    let artifacts = await hre.artifacts.readArtifact('CallerContract');

    const contract =  new ethers.ContractFactory(artifacts.abi, artifacts.bytecode,  wallet)


    // Deploy the contract without value
    await contract.deploy();

    console.log('contract addr');
    console.log(await contract.address);
  } catch (error) {
    console.log('====================================');
    console.log(error);
    console.log('====================================');
  }
  
}





// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
deploy1().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

