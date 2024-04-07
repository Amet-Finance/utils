type ProviderRpcTypes = "http" | "wss" | "fallback"

type RpcByChain = {
    [key: number|string]: {
        http: string[],
        wss: string[],
        fallback: string[]
    }
}

export type  {
    ProviderRpcTypes,
    RpcByChain,
}
