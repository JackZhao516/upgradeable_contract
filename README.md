# ReadMe

**contract Tia.sol**

version 1 deployment
```shell
npx hardhat run scripts/1.deploy_tia.ts --network localhost
```
interact with version 1
```shell
npx hardhat tia --network localhost
```
upgrade to version 2
```shell
npx hardhat run scripts/2.deploy_tiaV2.ts --network localhost
```
interact with version 2
```shell
npx hardhat tiav2 --network localhost
```
