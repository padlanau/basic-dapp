var web3 = new Web3(Web3.givenProvider);
var contractInstance;

$(document).ready(function() {
    window.ethereum.enable().then(function(accounts){
      contractInstance = new web3.eth.Contract(window.abi, "0x1096536ac56ad9E9C8222222EB3C4F44Ea474100", {from: accounts[0]});
    });

    $("#get_data_button").click(fetchAndDisplay);
    $("#add_data_button").click(inputData);
});

function inputData(){
  // alert("add button was clicked");
  
  var name   = $("#name_input").val();  // get the text value
  var age    = $("#age_input").val();
  var height = $("#height_input").val();

  // send() tells web3 this transaction to sign using the metamask and send it to the contract
  // toWei() convert the ether to Wei
  // how do we know that the transaction has been successful, confirm, etc. This can be monitored by using on() event listener.
  contractInstance.methods.createPerson(name, age, height).send({value: web3.utils.toWei("1", "ether")})
    .on('transactionHash', function(hash){
      console.log("tx hash = $hash");
    })
    .on('confirmation', function(confirmationNumber, receipt){
        console.log(confirmationNumber);
    })
    .on('receipt', function(receipt){
      console.log(receipt);
    })
}

// createPerson().send() is for sending money, getPerson().call() is to get details from the blockchain
function fetchAndDisplay(){
  contractInstance.methods.getPerson().call().then(function(res){
    displayInfo(res);
  });
}

function displayInfo(res){

  $("#name_output").text(res["name"]);
  $("#age_output").text(res["age"]);
  $("#height_output").text(res["height"]);
}
