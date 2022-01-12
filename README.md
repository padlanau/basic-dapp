# basic-dapp

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
> - Ganache must be up and running
> - Contract is deployed (migrate --reset)
> - Metamask is connected to Ganache node and account has a balance
> - run the Server (be sure you are in the main project folder)  
> - PS D:\blockchain\basic-dapp> python -m http.server  
> - from your browser, opne http://localhost:8000/



Migrate (run from the terminal and make sure your Ganache is open) :
> - D:\blockchain\basic-dapp\Peopleproject> truffle console (only if you are not in the console yet)
> - truffle(development)> migrate --reset (only use migrate if this is your first time) 
> 
        Compiling your contracts...
        ===========================
        > Compiling .\contracts\Migrations.sol
        > Compiling .\contracts\Ownable.sol
        > Compiling .\contracts\People.sol
        > Artifacts written to D:\blockchain\basic-dapp\Peopleproject\build\contracts
        > Compiled successfully using:
           - solc: 0.8.10+commit.fc410830.Emscripten.clang



        Starting migrations...
        ======================
        > Network name:    'development'
        > Network id:      5777
        > Block gas limit: 6721975 (0x6691b7)


        1_initial_migration.js
        ======================

           Deploying 'Migrations'
           ----------------------
           > transaction hash:    0xa02e463f06daa4ff5a955438993d9138cd120b34ff4309a9c5e1a34578fedfdd
           > Blocks: 0            Seconds: 0
           > contract address:    0x23959365244629816a5E3e6F2d18455B7A495059
           > block number:        280
           > block timestamp:     1641945672
           > account:             0x949CE02E352E9Ed86AdcCeC797474Efaf6034e91
           > balance:             95.655723199987
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

           Deploying 'People'
           ------------------
           > transaction hash:    0xaeaa511048de038955e7cba82797255f09415751999612f25d640f4b57f298b9
           > Blocks: 0            Seconds: 0
           > contract address:    0x1096536ac56ad9E9C8222222EB3C4F44Ea474100
           > block number:        282
           > block timestamp:     1641945674
           > account:             0x949CE02E352E9Ed86AdcCeC797474Efaf6034e91
           > balance:             95.630743179987
           > gas used:            1206488 (0x1268d8)
           > gas price:           20 gwei
           > value sent:          0 ETH
           > total cost:          0.02412976 ETH


           > Saving migration to chain.
           > Saving artifacts
           -------------------------------------
           > Total cost:          0.02412976 ETH

      

    truffle(development)>
