require('dotenv').config();
const hre = require('hardhat');
const {ethers} = require('ethers');

const providerurl = new ethers.JsonRpcProvider(process.env.URL)
const private_key1 =hre.config.networks.sepolia.accounts[0];

const provider = new ethers.JsonRpcProvider(providerurl);
const wallet  = new ethers.Wallet(private_key1,provider);

const contractaddr = "Put_here_Caller_Contract Address";
const WinnerContrac = "Put_here_Winner_Contract Address";
const EOA = "Any EOA WithSome Balance For Testing";



async function triggerattempt(){
    const artifacts = await hre.artifacts.readArtifact('CallerContract');
    const contract =  new ethers.Contract(contractaddr,artifacts.abi , wallet);
   
    // Trigger Event
    try {
    //    const result = callAttemp
       await contract.callAttemp(WinnerContrac);
      
    //    console.log(result); 
    } catch (error) {
     
        console.log(error);
    }

     // Trigger Event Wit An EOA
     try {
        //    const result = callAttemp
           await contract.callAttemp(EOA);
          
        //    console.log(result); 
        } catch (error) {
            //Expect Error
           console.log(console.error());
        }
        
    
}

triggerattempt();