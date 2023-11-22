# Alchemy Week 4 Testing Contract With Hardhat

It was asked to test a contract named **Faucet.sol** using Hardhat ,Chai, Mocha, Ethereum-Waffle.

---

## Units Test Cases

- Is contract sets the owner address while deplying the contract ?

- Is the contract let any one widthdraw less than or equal .1 ether ?


- Is the contract transaction reverted if any one try to widthdraw more than .1 ether ?

- Is the contract owner withdraw all the amount succesfully ?
 
- Is anyone other than the owner able to widthdraw all the amount ?

- Is the owner able to destory the contract successfully ?
  
- Is anyone other than the owner able to destory the contract?  

**All the cases were tested successfully using the tools asked to use.**
---

## To Check The Cases Locally Follow Th Steps

- Clone this repo `git clone https://github.com/mdasifahamed/Alchemy-Assignment-W-4.git`
- Then cd into `cd /Alchemy\ Harhat\ Test\ Assignment `
- Then from the root of the directory type ` npm install` to install the deoendencis.
- Then type ` npx hardhat test `.

---


# Alchemy Week 4 Call A Contarct Not Using EOA

It was asked to call function of a deployed contract which triggers an event but this call to that function
has to be done without using an EOA (Externally Owned Address) 

---

## Solution

It can be imlemented by using a Contract Address. For a new contract has to be created with initialization deplpoyed cotract 
with the deployed contract address.

**Steps taken to implement this are:**

- Created A **Contarct** named **CallerContract** 
- Initiated An Object of **Winner** Contract In A Fucntion of  **CallerContract** named **callAttemp**
- From The **callAttemp** Function An Object of **Winner** Contract Call The **attemp** function of the
  **Winner** That Call Successfully Trigger The Winning Event.
- After The Setup Deployed The Caller Contract && Call The **callAttemp** function wich succesfully
 trigger **Winner** Contract  **attemp** fucntion and the event will be triggered.


---

## To Use The Repo Locally Follow The Steps

- Clone this repo `git clone https://github.com/mdasifahamed/Alchemy-Assignment-W-4.git `
- Then cd into `cd Alchemy-Contract-Call`
- Then from the root of the directory type ` npm install` to install the deoendencis & 'touch .env' to create a '.evn' file.
- Isndie the **.env** create three vaibables `PRIVATE_KEY1=Put_Here_Your_Private_key1`, `PRIVATE_KEY2=Put_Here_Your_Private_key2` & `URL=Put_Here_Your_Private_key`

- The setup your network configuration in harhat config file 
- first deploy the winner contract 
- Get winner conract address
- Then Deploy CallerContract
- Then Call The **CallAttemp**  function  of the **CallerContract** passing **WinnerContract** **Address** as function parameter  


---

## Language And Tools Used

- **Solidity** For Contract.
- **Hardhat** For Development Environment.
- **Chai**, **Ethereum-Waffle**, **Mocha** For Testing
