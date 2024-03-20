type RpcByChain = {
    [key: number|string]: {
        def: string[],
        fallback: string[]
    }
}

export type  {
    RpcByChain,
}
