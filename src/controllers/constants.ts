import {RpcByChain} from "./types";

const Chains = {
    PolygonZKEVM: 1101,
    Base: 8453,
    Arbitrum: 42_161,
    JoltEvmDev: 1730,

    MantaPacific: 169,
    Polygon: 137,
    Bsc: 56,
    Optimism: 10,
    Zeta: 7001,
    Ethereum: 1,
    Mumbai: 80001,
}

const RPCsByChain: RpcByChain = {
    [Chains.Base]: {
        http: [
            "https://lb.drpc.org/ogrpc?network=base&dkey=AskFji81uE7Ru-0Jp--OrRt_zqjNAgsR75Z5ngOF84-p",
            "https://mainnet.base.org/",
            "https://base.blockpi.network/v1/rpc/public"
        ],
        wss: [
            "wss://base-rpc.publicnode.com",
            "wss://base.gateway.tenderly.co",
        ],
        fallback: ["https://lb.drpc.org/ogrpc?network=base&dkey=AskFji81uE7Ru-0Jp--OrRt_zqjNAgsR75Z5ngOF84-p"]
    },
    [Chains.JoltEvmDev]: {
        http: ["http://65.109.48.184:8555/"],
        wss: [],
        fallback: []
    },
    [Chains.Arbitrum]: {
        http: [
            "https://arbitrum.llamarpc.com",
            "https://arb1.arbitrum.io/rpc",
            "https://lb.drpc.org/ogrpc?network=arbitrum&dkey=AskFji81uE7Ru-0Jp--OrRt_zqjNAgsR75Z5ngOF84-p"],
        wss: [],
        fallback: ["https://lb.drpc.org/ogrpc?network=arbitrum&dkey=AskFji81uE7Ru-0Jp--OrRt_zqjNAgsR75Z5ngOF84-p"]
    },
    [Chains.PolygonZKEVM]: {
        http: ["https://lb.drpc.org/ogrpc?network=polygon-zkevm&dkey=AskFji81uE7Ru-0Jp--OrRt_zqjNAgsR75Z5ngOF84-p"],
        wss: [],
        fallback: ["https://lb.drpc.org/ogrpc?network=polygon-zkevm&dkey=AskFji81uE7Ru-0Jp--OrRt_zqjNAgsR75Z5ngOF84-p"]
    }
}

export {
    RPCsByChain,
    Chains,
}
