import {ERC20__factory} from "../../../typings/fixed-flex/factories/ERC20__factory";
import {ProviderController} from "../provider";
import {TokenDetails} from "./types";

function getTokenInstance(chainId: number, contractAddress: string, isFallback?: boolean) {
    const {provider} = new ProviderController(chainId, isFallback);
    return ERC20__factory.connect(contractAddress, provider);
}

async function getTokenDetails(chainId: number, contractAddress: string, isFallback?: boolean): Promise<TokenDetails> {
    try {
        const [
            name,
            symbol,
            decimals
        ] = await Promise.all([
            getTokenInstance(chainId, contractAddress, isFallback).name(),
            getTokenInstance(chainId, contractAddress, isFallback).symbol(),
            getTokenInstance(chainId, contractAddress, isFallback).decimals()
        ])

        return {
            _id: `${contractAddress}_${chainId}`.toLowerCase(),
            contractAddress: contractAddress.toLowerCase(),
            chainId: Number(chainId),
            decimals: Number(decimals),
            name,
            symbol
        };
    } catch (error: any) {
        console.error(`getTokenInfo`, error.message)
        if (isFallback) {
            throw Error(error)
        }
        return getTokenDetails(chainId, contractAddress, true)
    }
}

async function getTokenBalance(chainId: number, contractAddress: string, address: string, isFallback?: boolean): Promise<string> {
    try {
        const contract = getTokenInstance(chainId, contractAddress, isFallback)
        const balance = await contract.balanceOf(address);
        return balance.toString();
    } catch (error: any) {
        console.error(`getTokenBalance`, error.message)
        if (isFallback) {
            throw Error(error)
        }
        return getTokenBalance(chainId, contractAddress, address, true)
    }
}

const Erc20Controller = {
    getTokenInstance,
    getTokenDetails,
    getTokenBalance
}

export default Erc20Controller;
