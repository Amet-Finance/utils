import ProviderController from "../../provider";
import {Issuer__factory} from "../../../../typings/fixed-flex";
import {TransactionReceipt} from "@ethersproject/abstract-provider";
import {IssuerDetails} from "./types";
import FixedFlexVaultController from "../vault";
import {Provider} from "@ethersproject/providers";

function getIssuerInstance(chainId: number, contractAddress: string, isFallback?: boolean, provider?: Provider) {
    if (provider && !isFallback) {
        return Issuer__factory.connect(contractAddress, provider);
    } else {
        const {provider} = new ProviderController(chainId, isFallback ? "fallback" : 'http');
        return Issuer__factory.connect(contractAddress, provider);
    }
}

async function getVaultContract(chainId: number, contractAddress: string, isFallback?: boolean, provider?: Provider) {
    try {
        const issuerContract = getIssuerInstance(chainId, contractAddress, isFallback, provider);
        const vaultAddress = await issuerContract.vault();
        return FixedFlexVaultController.getVaultInstance(chainId, vaultAddress, isFallback, issuerContract.provider)
    } catch (error: any) {
        console.error(`getVaultContract`, error.message);
        if (isFallback) {
            throw Error(error)
        }
        return getVaultContract(chainId, contractAddress, true);
    }
}

async function getIssuerDetails(chainId: number, contractAddress: string, isFallback?: boolean, provider?: Provider): Promise<IssuerDetails> {
    try {
        const issuerContract = getIssuerInstance(chainId, contractAddress, isFallback, provider);
        const vaultContract = await getVaultContract(chainId, contractAddress, isFallback, issuerContract.provider);
        const vaultFeeDetails = await FixedFlexVaultController.getVaultFeeDetails(chainId, vaultContract.address, isFallback, issuerContract.provider)
        const isPaused = await issuerContract.isPaused();

        return {
            ...vaultFeeDetails,
            isPaused
        }

    } catch (error: any) {
        console.error(`getIssuerDetails`, error.message);
        if (isFallback) {
            throw Error(error)
        }
        return getIssuerDetails(chainId, contractAddress, true);
    }
}

function decode(chainId: number, transaction: TransactionReceipt) {
    const contract = getIssuerInstance(chainId, transaction.to);
    const response = []

    for (const log of transaction.logs) {
        try {
            const decodedData = contract.interface.parseLog({
                topics: [...log.topics],
                data: log.data
            });

            if (decodedData?.name) {
                response.push(decodedData)
            }
        } catch (error: any) {
            // console.error(`Error while extracting`, error.message)
        }
    }

    return response
}


const FixedFlexIssuerController = {
    getIssuerInstance,
    getVaultContract,
    getIssuerDetails,
    decode
}
export default FixedFlexIssuerController;
