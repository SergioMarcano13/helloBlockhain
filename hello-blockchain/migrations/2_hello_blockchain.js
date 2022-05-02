var helloBlockchain = artifacts.require ("./helloBlockchain.sol");

module.exports = function (deployer) {
    deployer.deploy(helloBlockchain)
}