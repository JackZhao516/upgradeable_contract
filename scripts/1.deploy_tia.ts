
import { ethers,upgrades } from "hardhat"
import { readAddressList, storeAddressList } from "./helper";

async function main() {

  const Tia = await ethers.getContractFactory("Tia")
  console.log("Deploying tia...")
  
  // deploy
  const tia = await upgrades.deployProxy(Tia ,[65], { initializer: 'initialize' })

  await tia.deployed();
  const admin = await upgrades.erc1967.getAdminAddress(tia.address);
  const implementation = await upgrades.erc1967.getImplementationAddress(tia.address);

  console.log("Tia proxy address", tia.address, "\nAdminAddress", admin, "\nImplementation Address", implementation)

  const addressList = readAddressList();

  addressList['proxy'] = tia.address;
  addressList['admin'] = admin;
  addressList['implementation'] = implementation;
  storeAddressList(addressList);

}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})