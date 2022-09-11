const Web3 = require("web3");

// * Address of http server of local node
const myNode = "http://10.142.0.11:18648";

// * For Testing
// const myNode = "https://rpcapi.fantom.network/";

const check = async () => {
  // ? Note: Provide HttpProvider here instead of WebsocketProvider
  // ? Otherwise you will get an error
  const web3 = await new Web3(new Web3.providers.HttpProvider(myNode));
  console.log("Provider Connected!");

  // * Prints the Current Block Number
  const block = await web3.eth.getBlockNumber();
  console.log(block);
};

check();
