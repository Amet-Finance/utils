import ProviderController from "../../provider";
import {Vault__factory} from "../../../../typings/fixed-flex";
import {VaultFeeDetails} from "./types";
import {Provider} from "@ethersproject/providers";

function getVaultInstance(chainId: number, contractAddress: string, isFallback?: boolean, provider?: Provider) {
    if (provider && !isFallback) {
        return Vault__factory.connect(contractAddress, provider);
    } else {
        const {provider} = new ProviderController(chainId, isFallback ? "fallback" : 'http');
        return Vault__factory.connect(contractAddress, provider);
    }
}

async function getVaultFeeDetails(chainId: number, contractAddress: string, isFallback?: boolean, provider?: Provider): Promise<VaultFeeDetails> {
    try {
        const instance = getVaultInstance(chainId, contractAddress, isFallback, provider)

        const [
            issuanceFee,
            initialBondFeeDetails
        ] = await Promise.all([
            instance.issuanceFee(),
            instance.initialBondFeeDetails()
        ])

        return {
            issuanceFee,
            purchaseRate: initialBondFeeDetails.purchaseRate,
            earlyRedemptionRate: initialBondFeeDetails.earlyRedemptionRate,
            referrerRewardRate: initialBondFeeDetails.referrerRewardRate,
        }
    } catch (error: any) {
        console.error(`getVaultFeeDetails`, error.message);
        if (isFallback) {
            throw Error(error)
        }
        return getVaultFeeDetails(chainId, contractAddress, true, provider);
    }
}

async function getReferralRewards(chainId: number, vaultAddress: string, bondAddress: string, referrer: string, isFallback?: boolean, provider?: Provider) {
    try {
        const vaultContract = getVaultInstance(chainId, vaultAddress, isFallback, provider);
        return await vaultContract.getReferrerData(bondAddress, referrer);
    } catch (error: any) {
        console.error(`getReferralRewards`, error.message);
        if (isFallback) {
            throw Error(error)
        }
        return getReferralRewards(chainId, vaultAddress, bondAddress, referrer, true);
    }
}

async function isAddressRestricted(chainId: number, vaultAddress: string, referrer: string, isFallback?: boolean, provider?: Provider) {
    try {
        const vaultContract = getVaultInstance(chainId, vaultAddress, isFallback, provider);
        return await vaultContract.isAddressRestricted(referrer);
    } catch (error: any) {
        console.error(`isAddressRestricted`, error.message);
        if (isFallback) {
            throw Error(error)
        }
        return isAddressRestricted(chainId, vaultAddress, referrer, true);
    }
}

async function getBondFeeDetails(chainId: number, vaultAddress: string, bondAddress: string, isFallback?: boolean, provider?: Provider) {
    try {
        const vaultContract = getVaultInstance(chainId, vaultAddress, isFallback, provider);
        return await vaultContract.getBondFeeDetails(bondAddress);
    } catch (error: any) {
        console.error(`getBondFeeDetails`, error.message);
        if (isFallback) {
            throw Error(error)
        }
        return getBondFeeDetails(chainId, vaultAddress, bondAddress, true);
    }
}


const FixedFlexVaultController = {
    getVaultInstance,
    getVaultFeeDetails,
    getReferralRewards,
    isAddressRestricted,
    getBondFeeDetails
}
export default FixedFlexVaultController;
