// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "./Tia.sol";
/**
 * @dev This is an auxiliary contract meant to be assigned as the admin of a {TransparentUpgradeableProxy}. For an
 * explanation of why you would want to use this see the documentation for {TransparentUpgradeableProxy}.
 */
contract TiaV2 is Initializable {
    
    uint256 public constant VERSION = 2;
    uint256 private value;
    uint256 private value1;

    function initialize(uint256 _initValue) public initializer {
        value = _initValue;
    }

    event ValueChange(uint256 newValue);
    event Value1Change(uint256 newValue);

    // setter
    function setValue(uint256 newValue) public {
        value = newValue;
        emit ValueChange(newValue);
    }

    // getter
    function getValue() public view returns (uint256) {
        return value;
    }

    // get Version
    function getVersion() public pure returns (uint256) {
        return VERSION;
    }

    // getter
    function getValue1() public view returns (uint256) {
        return value1;
    }

    // setter
    function setValue1(uint256 newValue) public {
        value1 = newValue;
        emit Value1Change(newValue);
    }

    // return value + value1
    function sum() public view returns (uint256) {
        return value + value1;
    }
}