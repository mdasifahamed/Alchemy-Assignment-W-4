const hre = require("hardhat");
const {ethers} = require("ethers");


async function deployWinner(){

    const private_key =  hre.config.networks.sepolia.accounts[1];
    const providerurl =  hre.config.networks.sepolia.url;

    const provider = new ethers.JsonRpcProvider(providerurl);
    const wallet = new ethers.Wallet(private_key,provider)
    let artifacts = await hre.artifacts.readArtifact('WinnerContract');
    const contract =  new ethers.ContractFactory(artifacts.abi, artifacts.bytecode,  wallet)

    await contract.deploy();

    console.log(await contract.address)


}

deployWinner();