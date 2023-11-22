// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;
contract WinnerContract {
    event Winner(address);

    function attempt() external {
        require(msg.sender != tx.origin, "msg.sender is equal to tx.origin");
        emit Winner(msg.sender);
    }
}