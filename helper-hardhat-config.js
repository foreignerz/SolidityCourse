const networkConfig = {
    31337: {
        name: "localhost",
        chainId: 31337
    },
    // Price Feed Address, values can be obtained at https://docs.chain.link/docs/reference-contracts
    5: {
        name: "goerli",
        ethUsdPriceFeed: "0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e",
        chainId: 5
    }
}

const developmentChains = ["hardhat", "localhost"]
const DECIMALS = "8"
const INITIAL_PRICE = "150000000000" // 1500

module.exports = {
    networkConfig,
    developmentChains,
    DECIMALS,
    INITIAL_PRICE
}
