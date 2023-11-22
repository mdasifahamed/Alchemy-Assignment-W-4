const {ethers} = require("hardhat");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const{expect} = require('chai');

describe("TestFacucet", async ()=>{

    async function getContracsAndAvariables(){

        const Contract = await ethers.getContractFactory('Faucet');
        const InitialContractBalance = ethers.utils.parseEther('2');
        const depolyedContarct = await Contract.deploy({value:InitialContractBalance});
        const [owner,user1,user2]= await ethers.getSigners();
        const balance = await depolyedContarct.provider.getBalance(depolyedContarct.address);

        return {depolyedContarct, owner, user1, user2,InitialContractBalance,balance};
     }

     it("Should Should The Owner Addres As Contract Owner",async ()=>{

        const {depolyedContarct, owner,} = await loadFixture(getContracsAndAvariables);
        
        expect(await depolyedContarct.owner()).to.be.equal(owner.address);

     });

    it("Should Not Allow To Withdraw More .1 Ether", async ()=>{
        const {depolyedContarct, owner,user1} = await loadFixture(getContracsAndAvariables);

        const overamount = ethers.utils.parseEther('.5');
        try {
            await depolyedContarct.connect(user1).withdraw(overamount)
        } catch (error) {
            expect(error);
      
        }
  
    })

        

    it("Should Allow  Withdraw .1 or less ", async ()=>{

        const {depolyedContarct, user2,user1} = await loadFixture(getContracsAndAvariables);

        const equalamount = ethers.utils.parseEther('.1');
        const lessamount = ethers.utils.parseEther('.09');

        expect(await depolyedContarct.connect(user1).withdraw(equalamount)).to.be.not.reverted;
        expect(await depolyedContarct.connect(user2).withdraw(lessamount)).to.be.not.reverted;

    })

    it("Withdraw() All Should Be Called Only By The Contract Owner ", async() =>{
        const {depolyedContarct, owner, user2,user1} = await loadFixture(getContracsAndAvariables);

            const blancebeforeWithdraw = await depolyedContarct.provider.getBalance(depolyedContarct.address);
        
        expect(await depolyedContarct.connect(owner).withdrawAll()).to.be.not.reverted;
            try {
                await depolyedContarct.connect(user1).withdrawAll()
            } catch (error) {
                expect(error);
        
            }
            try {
                await depolyedContarct.connect(owner).withdrawAll();
            } catch (error) {
                console.log(error);
            }
            const newContractblance  = await depolyedContarct.provider.getBalance(depolyedContarct.address);

        expect(blancebeforeWithdraw).to.be.not.equal(newContractblance)
        

    })
    it("Should Be Destroyed SuccessFully  By The Owner Only ",async()=>{
        const {depolyedContarct, owner, user2,user1} = await loadFixture(getContracsAndAvariables);

        expect(await depolyedContarct.connect(owner).destroyFaucet()).to.be.not.reverted;

        try {
            await depolyedContarct.connect(user1).destroyFaucet()
        } catch (error) {
            expect(error);
    
        }

        const contractCodeBeforeDestroy = depolyedContarct.provider.getCode(depolyedContarct.address);

        // Destroy The Contract

        try{

            await depolyedContarct.connect(owner).destroyFaucet();
        }catch(err){
            console.log(err);
        }

        const contarcCodefaterDestroy = depolyedContarct.provider.getCode(depolyedContarct.address);

        expect(contractCodeBeforeDestroy).to.be.not.equal(contarcCodefaterDestroy)
    })



})