
import { ethers,upgrades } from "hardhat"
import { readAddressList, storeAddressList } from "./helper";

const addressList = readAddressList();
const proxyAddress = addressList['proxy'];

async function main() {
  console.log(proxyAddress," original tia proxy address");
  const TiaV2 = await ethers.getContractFactory("TiaV2");
  console.log("upgrade to TiaV2...");
  const tiaV2 = await upgrades.upgradeProxy(proxyAddress, TiaV2);

  const implementation = await upgrades.erc1967.getImplementationAddress(tiaV2.address);
  const admin = await upgrades.erc1967.getAdminAddress(tiaV2.address);

  console.log(" Tia V2 Proxy: ", tiaV2.address, "\nAdminAddress: ", admin,  "\nImplementationAddress: ", implementation)

  addressList['proxyV2'] = tiaV2.address;
  addressList['adminV2'] = admin;
  addressList['implementationV2'] = implementation;
  storeAddressList(addressList);
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})


