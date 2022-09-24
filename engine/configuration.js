import SimpleCrypto from "simple-crypto-js";
const cipherKey = "#ffg3$dvcv4rtkljjkh38dfkhhjgt";
const ethraw =
  "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";
export const simpleCrypto = new SimpleCrypto(cipherKey);
export const cipherEth = simpleCrypto.encrypt(ethraw);
/*
Add the wallet address used to deploy the contracts below:
*/
export var bridgeWallet = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";

/*
Global Configurations
*/

/*
Polygon Mumbai Testnet
*/
export var mumErc20 = "";
export var mumCustody = "";
export var mumBridgeNFT = "0x2953399124F0cBB46d2CbACD8A89cF0599974963";
export var mumrpc = "https://matic-mumbai.chainstacklabs.com";

/*
Aurora Testnet
*/
export var aurErc20 = "";
export var aurCustody = "";
export var aurNFT = "";
export var aurrpc =
  "https://aurora-testnet.infura.io/v3/87e4124f66034845a8fea8d874040ebb";

/*
BSC Testnet
*/
export var bsctErc20 = "";
export var bsctCustody = "";
export var bsctNFT = "";
export var bsctrpc = "https://data-seed-prebsc-1-s3.binance.org:8545";

/*
Aurora Mainnet
*/
export var ethrpc =
  "https://aurora-mainnet.infura.io/v3/87e4124f66034845a8fea8d874040ebb";

/*
BSC Mainnet
*/

export var bscrpc = "https://bsc-dataseed.binance.org";
