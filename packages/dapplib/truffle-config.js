require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture globe frown ski strike rival noise hospital hover kitten slot genre'; 
let testAccounts = [
"0x371146c82a014b0e2f0827eedcffecffc20e2a93ccb748779231facf621568e0",
"0x7a6925e58ac8c53a245e7b7204fc9d4b023bc65b60f58231f728b89b75c275f9",
"0xe7243342e0180d028ff27cb88e01dc08cda4698b8053468dfbb32d7d319802af",
"0x7c8fa4c6dd0177705b2d36f81a6a11a9ffbc6bfdee412a033d5c7f290a0f4765",
"0x08ce1d24b4e9167aebbd93503f8959afab2f5d591878db22577880c4da1949bb",
"0x1f77268bdbe80085349745719c5876c5c8ff4826ca7bc64dd7e695c157ae7e98",
"0x64f49b068065158a163c343a5f5168f3c0759d03d84bb41e9d89f746c5824e87",
"0x94ada5597a144762919f3a4a50701fb42ba330b5e6e76aa7b3561de4fa5f8ba4",
"0xbb636daed3fca621697ec1c3bb93333387054e81a40e730e333f37db3e2c6dc1",
"0xbcbf59c2eb9db66c25d422a477591843971ff918a03053ac43b46823ec0174f9"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

