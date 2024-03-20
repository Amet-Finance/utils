type RpcByChain = {
    [key: number|string]: {
        def: string[],
        fallback: string[]
    }
}

type TokenBalance = {
    balance: string,
    balanceClean: number,
    decimals: number
}

type TokenInfoFromBlockchain = {
    contractAddress: string,
    name: string,
    symbol: string,
    decimals: number,
    chainId: number
}

export type  {
    RpcByChain,
    TokenBalance,
    TokenInfoFromBlockchain
}
