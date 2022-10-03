import { Dependencies } from "./models";

export const PEER_DEPENDENCIES: Dependencies = {
    hardhat: "^2.11.1",
    "@nomicfoundation/hardhat-network-helpers": "^1.0.0",
    "@nomicfoundation/hardhat-chai-matchers": "^1.0.0",
    "@nomiclabs/hardhat-ethers": "^2.0.0",
    "@nomiclabs/hardhat-etherscan": "^3.0.0",
    chai: "^4.2.0",
    ethers: "^5.4.7",
    "hardhat-gas-reporter": "^1.0.8",
    "solidity-coverage": "^0.8.0",
    "@typechain/hardhat": "^6.1.2",
    typechain: "^8.1.0",
    "@typechain/ethers-v5": "^10.1.0",
    "@ethersproject/abi": "^5.4.7",
    "@ethersproject/providers": "^5.4.7",
  };
  
  export const TYPESCRIPT_DEPENDENCIES: Dependencies = {};
  
  export const TYPESCRIPT_PEER_DEPENDENCIES: Dependencies = {
    "@types/chai": "^4.2.0",
    "@types/mocha": "^9.1.0",
    "@types/node": ">=12.0.0",
    "ts-node": ">=8.0.0",
    typescript: ">=4.5.0",
  };