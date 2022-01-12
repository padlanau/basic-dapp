# basic-dapp

# peopleTruffleProject

## A simply Dapp to demonstrate connecting Web page to a decentralize network.

Requirements : 
> - Python 3 for running the web server
> - Connect Ganache to Metamask. Create an account by copying the Private Key of the first account from Ganache.
> - D:\blockchain> mkdir basic-dapp
> - D:\blockchain> cd .\basic-dapp\
> - D:\blockchain\basic-dapp> code .
> - create main.js
> - create abi.js 
```
after migrating (migrate --reset) the people project:
 - get its abi from D:\blockchain\basic-dapp\Peopleproject\build\contracts\People.json
 - get the contact address and paste it in main.js with code:
    contractInstance = new web3.eth.Contract(window.abi, "< paste contract address here >"
```
> - create web3.min.js 
> - create simple index.html. Import both main.js and abi.js


To run the Dapp: 
> - Ganache is up and running
> - Contract is deployed (migrate --reset)
> - Metamask is connected to Ganache node and account has a balance
> - run the Server (be sure you are in the main project folder)  
> - PS D:\blockchain\basic-dapp> python -m http.server  
> - from your browser, opne http://localhost:8000/




Given Test Case1: 
```
  require(age < 150)
  we send age = 200

  Script:     
  it("should not create a person with age over 150 years", async function(){
      let instance = await People.deployed();
      await truffleAssert.fails(instance.createPerson("Jojo", 200, 190, {value: web3.utils.toWei("1", "ether")}));
  });  


  Results Case1: 
      Contract: People
      √ should not create a person with age over 150 years (1058ms)

  In my own words, we are expecting the parameters we passed into fails() that it MUST fail !!!    
```
Given Test Case2: 
```
    Now try to change "require(age < 150)" to "require(age > 150)"
    - truffle(development) > migrate --reset
    - truffle(development) > test or truffle test

    Results Case2:
        AssertionError: Did not fail 

        So what this means is that "truffleAssert.fails" did not fail because the age we are sending is 200
        which satisfies the condition "require(age > 150)" 
        The contract did not fail but the test failed. It means, something wrong in the contract's logic.


        To see what specific type of error the test is throwing, add error type. In this case, I added REVERT:
            await truffleAssert.fails(instance.createPerson("Jojo", 200, 190, {value: web3.utils.toWei("1", "ether")}), truffleAssert.ErrorType.REVERT);

        when you add the error type and run it again, you will get same result as "Results Case1" because it has REVERTed(satisfies the type) it instead of getting the error from "Results Case2"
            - truffle(development) > migrate --reset
            - truffle(development) > test or truffle test       
```

Migrate (run from the terminal and make sure your Ganache is open) :
> - D:\blockchain\peopleTruffleProject> truffle console (only if you are not in the console yet)
> - truffle(development)> migrate --reset (only use migrate if this is your first time) 
 

      Compiling your contracts...
      ===========================
      > Compiling .\contracts\Migrations.sol
      > Compiling .\contracts\Ownable.sol
      > Compiling .\contracts\People.sol
      > Artifacts written to D:\blockchain\peopleTruffleProject\build\contracts
      > Compiled successfully using:
         - solc: 0.8.10+commit.fc410830.Emscripten.clang

      Starting migrations...
      ======================
      > Network name:    'development'
      > Network id:      5777
      > Block gas limit: 6721975 (0x6691b7)


      1_initial_migration.js
      ======================

         Replacing 'Migrations'
         ----------------------
         > transaction hash:    0x86366af067fe088640de81041e8f42f9885301c5b5b8a2cd9651545b314b89a5
         > Blocks: 0            Seconds: 0
         > contract address:    0x4C07AFe23EC80cD45E9Fddc0990EE7024afB3D1E
         > block number:        249
         > block timestamp:     1641810834
         > account:             0x949CE02E352E9Ed86AdcCeC797474Efaf6034e91
         > balance:             93.868237239987
         > gas used:            248854 (0x3cc16)
         > gas price:           20 gwei
         > value sent:          0 ETH
         > total cost:          0.00497708 ETH


         > Saving migration to chain.
         > Saving artifacts
         -------------------------------------
         > Total cost:          0.00497708 ETH


      2_people_migration.js
      =====================

         Replacing 'People'
         ------------------
         > transaction hash:    0x30698200d690c97cacf49b084ed978f9066ff4441507c5ec0a9f24cee2b244b2
         > Blocks: 0            Seconds: 0
         > contract address:    0x48bC239F494199ee182b8320C697a33d85C5A2d5
         > block number:        251
         > block timestamp:     1641810836
         > account:             0x949CE02E352E9Ed86AdcCeC797474Efaf6034e91
         > balance:             93.843257219987
         > gas used:            1206488 (0x1268d8)
         > gas price:           20 gwei
         > value sent:          0 ETH
         > total cost:          0.02412976 ETH


         > Saving migration to chain.
         > Saving artifacts
         -------------------------------------
         > Total cost:          0.02412976 ETH


      Summary
      =======
      > Total deployments:   2
      > Final cost:          0.02910684 ETH


      - Blocks: 0            Seconds: 0
      - Saving migration to chain.
      - Blocks: 0            Seconds: 0
      - Saving migration to chain.

Test :
```
    truffle(development)> test
    Using network 'development'.
```

    Compiling your contracts...
    ===========================
    > Compiling .\contracts\Migrations.sol
    > Compiling .\contracts\Ownable.sol
    > Compiling .\contracts\People.sol
    > Artifacts written to C:\Users\jojop\AppData\Local\Temp\test--29708-7BaLiqosFTSy
    > Compiled successfully using:
       - solc: 0.8.10+commit.fc410830.Emscripten.clang



      

    truffle(development)>
