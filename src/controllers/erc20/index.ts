import {ERC20__factory} from "../../../typings/fixed-flex/factories/ERC20__factory";
import ProviderController from "../provider";
import {TokenDetails} from "./types";
import {BigNumber} from "ethers";
import {Provider} from "@ethersproject/providers";

function getTokenInterface() {
    return ERC20__factory.createInterface();
}

function getTokenInstance(chainId: number, contractAddress: string, isFallback?: boolean, provider?: Provider) {
    if (provider && !isFallback) {
        return ERC20__factory.connect(contractAddress, provider);
    } else {
        const {provider} = new ProviderController(chainId, isFallback ? "fallback" : "http");
        return ERC20__factory.connect(contractAddress, provider);
    }
}

async function getTokenDetails(chainId: number, contractAddress: string, isFallback?: boolean, provider?: Provider): Promise<TokenDetails> {
    try {

        const instance = getTokenInstance(chainId, contractAddress, isFallback, provider)

        const [
            name,
            symbol,
            decimals
        ] = await Promise.all([
            instance.name(),
            instance.symbol(),
            instance.decimals()
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
        if (isFallback) throw Error(error)
        return getTokenDetails(chainId, contractAddress, true)
    }
}

async function getTokenBalance(chainId: number, contractAddress: string, address: string, isFallback?: boolean, provider?: Provider): Promise<string> {
    try {
        const contract = getTokenInstance(chainId, contractAddress, isFallback, provider)
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

async function getTokenBalanceNormalized(chainId: number, contractAddress: string, address: string, decimals?: number, isFallback?: boolean, provider?: Provider) {
    try {
        if (!provider) {
            provider = new ProviderController(chainId, isFallback ? "fallback" : "http").provider
        }

        const pureBalance = await getTokenBalance(chainId, contractAddress, address, isFallback, provider);

        if (typeof decimals === "undefined" || !Number.isFinite(decimals)) {
            const contract = getTokenInstance(chainId, contractAddress, isFallback, provider)
            const preDecimals = await contract.decimals();
            decimals = Number(preDecimals);
        }
        const normalizedBalance = (BigNumber.from(pureBalance).div(BigNumber.from(10).pow(BigNumber.from(decimals)))).toNumber();

        return {
            pureBalance,
            normalizedBalance,
            decimals
        };
    } catch (error: any) {
        console.error(`getTokenBalanceNormalized`, error.message)
        if (isFallback) {
            throw Error(error)
        }
        return getTokenBalanceNormalized(chainId, contractAddress, address, decimals, true)
    }
}

async function getAllowance(chainId: number, contractAddress: string, address: string, spender: string, isFallback?: boolean, provider?: Provider) {
    try {
        const contract = getTokenInstance(chainId, contractAddress, isFallback, provider)
        const allowance = await contract.allowance(address, spender);
        return allowance.toString();
    } catch (error: any) {
        console.error(`getAllowance`, error.message)
        if (isFallback) {
            throw Error(error)
        }
        return getAllowance(chainId, contractAddress, address, spender, true)
    }
}

const Erc20Controller = {
    getTokenInterface,
    getTokenInstance,
    getTokenDetails,
    getTokenBalance,
    getTokenBalanceNormalized,
    getAllowance
}

export default Erc20Controller;
