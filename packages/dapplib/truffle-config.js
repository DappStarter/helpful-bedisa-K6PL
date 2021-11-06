require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half clock bright smooth fine birth maze prosper harvest only equal giggle'; 
let testAccounts = [
"0xe51f3ede2aa4f4b3de55a82fcd735ee5dcd77b3377a250186796c6ccf6e7326d",
"0xdcf32d4f15e217e81a851077afd2fa7360fd6781a979ad03ebb2888dae74d20c",
"0x85de0126cf632c5dde01aadd424dd3834114c342ed58af3d880136edb45cb8f6",
"0x28b9ef6eb65913d8c9056098585e6bfaea1c36141493b5bca630a781d765b713",
"0x81076f6efa657f348bb7a94c04bd7f77d42a3680e90d6dbb7450bea9229d9aaf",
"0xd9282c266fdace3469a3f6de9e79f2a25057e47b5dc53934400bfc9b02aade75",
"0x670e27434effa29923da85e79481ed6ddf3ab22be3b9de13fa9f852dca553a64",
"0x3dbf3985277eae3fa67e181eb147e26870cbba47f8b55d04ea802056ea0a45da",
"0x82b90010f0ee125e586abb3e5aac81f847a8292456c3d9f532bba62f6799094f",
"0x75dc10bc8f816f194f1b334f017fb046970455cdecc3b4d0e879db816de135b4"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

