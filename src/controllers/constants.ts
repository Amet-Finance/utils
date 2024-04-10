import {RpcByChain} from "./types";

const CHAINS = {
    MantaPacific: 169,
    Polygon: 137,
    PolygonZKEVM: 1101,
    Bsc: 56,
    Optimism: 10,
    Base: 8453,

    Zeta: 7001,
    Ethereum: 1,
    JoltEvmDev: 1730,

    Mumbai: 80001,
}

const RPCsByChain: RpcByChain = {
    [CHAINS.Base]: {
        http: [
            "https://mainnet.base.org/",
            // "https://base.llamarpc.com", // lots of errors
            "https://base.blockpi.network/v1/rpc/public"
        ],
        wss: [
            "wss://base-rpc.publicnode.com",
            "wss://base.gateway.tenderly.co",
        ],
        fallback: []
    },
    [CHAINS.JoltEvmDev]: {
        http: ["http://65.109.48.184:8555/"],
        wss: [],
        fallback: []
    },

    // TESTNET
    [CHAINS.Mumbai]: {
        http: [
            // "https://polygon-mumbai.g.alchemy.com/v2/demo", // noNetwork
            "https://rpc.ankr.com/polygon_mumbai",
            "https://polygon-testnet.public.blastapi.io",
            "https://polygon-mumbai.blockpi.network/v1/rpc/public",
            // "https://matic-testnet-archive-rpc.bwarelabs.com", // noNetwork
            // "https://matic-mumbai.chainstacklabs.com", // noNetwork
            "https://g.w.lavanet.xyz:443/gateway/polygon1t/rpc-http/f7ee0000000000000000000000000000",
            // "https://rpc-mumbai.maticvigil.com", // noNetwork
            // "https://endpoints.omniatech.io/v1/matic/mumbai/public", //noNetwork

            'https://polygon-mumbai-bor.publicnode.com',
            'https://polygon-mumbai-pokt.nodies.app',
        ],
        wss: [],
        fallback: []
    },
}

const CONTRACT_TYPES = {
    FIXED_FLEX: {
        ISSUER: "fixed-flex-issuer",
        BOND: "fixed-flex-bond"
    }
}

export {
    RPCsByChain,
    CHAINS,
    CONTRACT_TYPES
}
