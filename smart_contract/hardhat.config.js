require("@nomicfoundation/hardhat-waffle");

// /** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24", //Rusya check this solidity version
  networks: {
    ropsten: {
      url: //here paste url in 'url',
      accounts: ['//here account address']
    }
  }
};
