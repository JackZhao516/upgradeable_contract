// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

/**
 * @dev This is an auxiliary contract meant to be assigned as the admin of a {TransparentUpgradeableProxy}. For an
 * explanation of why you would want to use this see the documentation for {TransparentUpgradeableProxy}.
 */
contract Tia is Initializable {
    
    uint256 public constant VERSION = 1;
    uint256 private value;

    function initialize(uint256 _initValue) public initializer {
        value = _initValue;
    }

    event Value(uint256 newValue);

    // setter
    function setValue(uint256 newValue) public {
        value = newValue;
        emit Value(newValue);
    }

    // getter
    function getValue() public view returns (uint256) {
        return value;
    }

    // get Version
    function getVersion() public pure returns (uint256) {
        return VERSION;
    }
}