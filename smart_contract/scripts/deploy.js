const main = async () => {
  const Transactions = await hre.ethers.getContractFactory("Transactions");
  const transactions = await Transactions.deploy();

  await transactions.deployed();

  console.log("Transactions deployed to:", transactions.address)
}

const runMain = async () => {
  try {
    await main();
    procces.exit(0);
  } catch (error) {
    console.error(error);
    procces.exit(1);
  }
}

runMain();
