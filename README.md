# 代码说明

**逻辑合约 Tia.sol**

v1版本部署
```shell
npx hardhat run scripts/1.deploy_tia.ts --network localhost
```
与v1版本交互
```shell
npx hardhat tia --network localhost
```
升级v2
```shell
npx hardhat run scripts/2.deploy_tiaV2.ts --network localhost
```
与v2版本交互
```shell
npx hardhat tiav2 --network localhost
```
