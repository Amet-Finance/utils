import {RPCsByChain} from "./constants";
import {ethers} from "ethers";
import {ProviderRpcTypes} from "./types";

class ProviderController {
    public provider!: ethers.providers.WebSocketProvider | ethers.providers.JsonRpcProvider;
    public rpc!: string;
    public chainId: number;

    constructor(chainId: number | string, type?: ProviderRpcTypes) {
        this.chainId = Number(chainId);
        this.switchRpc(type)
    }

    private initProvider(): void {
        if (this.rpc.startsWith("wss")) {
            this.provider = new ethers.providers.WebSocketProvider(this.rpc, this.chainId);
        } else {
            this.provider = new ethers.providers.JsonRpcProvider(this.rpc, this.chainId);
        }
    }

    private getRpcs(chainId: number | string, type?: ProviderRpcTypes): string[] {
        const rpcs = RPCsByChain[chainId];
        if (!rpcs) throw new Error(`No RPCs found for chainId ${chainId}`);

        switch (type) {
            case 'fallback':
                return rpcs.fallback.length ? rpcs.fallback : rpcs.http;
            case 'wss':
                return rpcs.wss.length ? rpcs.wss : rpcs.http;
            default:
                return rpcs.http;
        }
    }

    private randomRpc(type?: ProviderRpcTypes): string {
        const rpcs = this.getRpcs(this.chainId, type);
        if (rpcs.length === 0) throw new Error("No RPCs available");
        const randomIndex = Math.floor(Math.random() * rpcs.length);
        return rpcs[randomIndex];
    }

    public switchRpc(type?: ProviderRpcTypes): void {
        this.rpc = this.randomRpc(type);
        this.initProvider();
    }
}

export default ProviderController;
