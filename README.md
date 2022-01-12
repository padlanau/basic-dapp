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

To run the Dapp: 
> - Ganache must be up and running
> - Contract is deployed (migrate --reset)
> - Metamask is connected to Ganache node and account has a balance
> - run the Server (be sure you are in the main project folder)  
> - PS D:\blockchain\basic-dapp> python -m http.server  
> - from your browser, type http://localhost:8000/ 

Screenshots :

<img width="939" alt="StudentDapp01" src="https://user-images.githubusercontent.com/297092/149056744-d15d19cf-a151-43dd-ab76-45d7e033e1a4.png">
<img width="884" alt="StudentDapp02" src="https://user-images.githubusercontent.com/297092/149056869-c66953e6-ba07-442f-8437-8b8e850e8e28.png">
<img width="921" alt="StudentDapp03" src="https://user-images.githubusercontent.com/297092/149056882-ed34fa3d-27b6-4919-8244-8054b70b0f07.png">
Before adding data, take note of the balance.
<img width="851" alt="StudentDapp04Before" src="https://user-images.githubusercontent.com/297092/149056906-077d48a6-db1b-4e11-8d8e-2ae38058a14c.png">
Before adding data, take note of the balance.
<img width="854" alt="StudentDapp05After" src="https://user-images.githubusercontent.com/297092/149056925-590fb3c5-7ae5-47c8-a159-2f0ab8c8dcac.png">
<img width="829" alt="StudentDapp06" src="https://user-images.githubusercontent.com/297092/149056942-5984cd8a-fed9-438c-b4f1-8180fb0c9451.png">
