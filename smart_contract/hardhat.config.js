require("@nomiclabs/hardhat-waffle");

// /** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.0", //Rusya check this solidity version
  networks: {
    sepolia: {
      url: 'https://crimson-icy-hill.ethereum-sepolia.quiknode.pro/41d59220d69019e7114ae585c679f88bcd3a7864/',
      accounts: ['bb1e58b1b8fe169a86b1c4f7499c85c9b05032a3712e53314fd013b3241d9efb']
    }
  }
};
