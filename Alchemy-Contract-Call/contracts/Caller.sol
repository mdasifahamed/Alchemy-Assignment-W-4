// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

// interface EventContract{
//     event Winner(address);
//     function attempt() external;
// }


interface Contract {
    function attempt() external;
}


contract CallerContract {
    bool public isCalled;
    
    address caller;


    function callAttemp(address _winnercontractaddr)  public  payable {
        Contract winner = Contract(_winnercontractaddr);
        winner.attempt();
        isCalled = true;
        
    }

   
}
