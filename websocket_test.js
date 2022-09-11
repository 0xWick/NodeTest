var Web3 = require("web3");

// * Address of Websocket server of local node
const myNode = "ws://10.142.0.11:18748";

// * Address of remote node For Testing
// const myNode = "wss://wsapi.fantom.network/";

// ? Note: Provide WebsocketProvider here instead of HttpProvider
// ? Otherwise you will get an error
var web3 = new Web3(new Web3.providers.WebsocketProvider(myNode));

// ? Subscribe to each new BlockHeader Recieved
var subscription = async () => {
  web3.eth
    .subscribe("newBlockHeaders", function (error, result) {
      if (!error) {
        console.log(result);
        return;
      }

      console.error(error);
    })
    .on("data", function (blockHeader) {
      console.log(blockHeader);
    })
    .on("error", console.error);
};

subscription();
