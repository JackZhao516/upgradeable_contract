import { task } from "hardhat/config";
// import { ethers } from "hardhat";
import { readAddressList } from "../scripts/helper";

task("tia", "interact with tia v1").setAction(async (_, hre) => {
 
  const addressList = readAddressList();
  const proxyAddress = addressList['proxy'];
  const tia = await hre.ethers.getContractAt("Tia", proxyAddress);

  const version = await tia.getVersion();
  console.log("Version: ", version);
  const value = await tia.getValue();
  console.log("Old Value: ", value);
  const tx =  await tia.setValue(90);
  console.log("Set Value: ", await tx.wait());
  const value1 = await tia.getValue();
  console.log("New Value: ", value1);
});

task("tiav2", "interact with tiav2").setAction(async (_, hre) => {

  const addressList = readAddressList();
  const proxyAddress = addressList['proxyV2'];
  const tiaV2 = await hre.ethers.getContractAt("TiaV2", proxyAddress);

  const version = await tiaV2.getVersion();
  console.log("Version: ", version);
  const value = await tiaV2.getValue();
  console.log("Old Value: ", value);
  const tx =  await tiaV2.setValue(20);
  console.log("Set Value: ", await tx.wait());
  const value1 = await tiaV2.getValue();
  console.log("New Value: ", value1);
  const tx1 = await tiaV2.setValue1(80);
  console.log("Set Value1: ", await tx1.wait());
  const value2 = await tiaV2.getValue1();
  console.log("Get Value1: ", value2);
  const sum = await tiaV2.sum();
  console.log("Sum: ", sum);
});
