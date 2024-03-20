import {RPCsByChain} from "./constants";
import {ethers} from "ethers";


class ProviderController {

    public rpc: string;

    constructor(chainId: number | string, isFallback?: boolean, rpc?: string) {
        if (rpc) {
            this.rpc = rpc
        } else {
            this.rpc = this.randomRpc(chainId, isFallback)
        }
    }

    get provider() {
        return ethers.getDefaultProvider(this.rpc)
    }

    randomRpc(chainId: number | string, isFallback?: boolean): string {
        const rpcs = RPCsByChain[chainId]
        let rpcArray: string[];

        if (isFallback && rpcs?.fallback.length) {
            rpcArray = rpcs.fallback
        } else {
            rpcArray = rpcs.def
        }

        const randomInt = Math.floor(Math.random() * rpcArray.length)
        return rpcArray[randomInt];
    }

}

export {
    ProviderController
}
