const { engines } = require('./package');

const version = engines.node;
const installedVersion = process.version;
if (!checkNodeIsValid(installedVersion, version)) {
    console.log(`Required node version ${version} not satisfied with current version ${process.version}.`);
    console.log(`Run "nvm use ${version}" to fix.`);
    process.exit(1);
}
console.log("Node version match! OK to proceed.");

function checkNodeIsValid(currentNode, expectedNode) {
    const currentExpectedVersion = expectedNode.split('.')[0].substr(1);
    const currentNodeVersion = currentNode.split('.')[0].substr(1);
    console.log("Checking Node Version against installed");
    console.log("Current Expected Node: " + currentExpectedVersion);
    console.log("Current Installed Node: " + currentNodeVersion);
    return Number(currentExpectedVersion) === Number(currentNodeVersion);
}