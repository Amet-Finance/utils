import {ProviderController} from "../../provider";
import {Vault__factory} from "../../../../typings/fixed-flex";
import {VaultFeeDetails} from "./types";

function getVaultInstance(chainId: number, contractAddress: string, isFallback?: boolean) {
    const {provider} = new ProviderController(chainId, isFallback);
    return Vault__factory.connect(contractAddress, provider);
}

async function getVaultFeeDetails(chainId: number, contractAddress: string, isFallback?: boolean): Promise<VaultFeeDetails> {
    try {
        const [
            issuanceFee,
            initialBondFeeDetails
        ] = await Promise.all([
            getVaultInstance(chainId, contractAddress, isFallback).issuanceFee(),
            getVaultInstance(chainId, contractAddress, isFallback).initialBondFeeDetails()
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
        return getVaultFeeDetails(chainId, contractAddress, true);
    }
}

async function getReferralRewards(chainId: number, vaultAddress: string, bondAddress: string, referrer: string, isFallback?: boolean) {
    try {
        const vaultContract = getVaultInstance(chainId, vaultAddress, isFallback);
        return await vaultContract.getReferrerData(bondAddress, referrer);
    } catch (error: any) {
        console.error(`getReferralRewards`, error.message);
        if (isFallback) {
            throw Error(error)
        }
        return getReferralRewards(chainId, vaultAddress, bondAddress, referrer, true);
    }
}

async function isAddressRestricted(chainId: number, vaultAddress: string, referrer: string, isFallback?: boolean) {
    try {
        const vaultContract = getVaultInstance(chainId, vaultAddress, isFallback);
        return await vaultContract.isAddressRestricted(referrer);
    } catch (error: any) {
        console.error(`isAddressRestricted`, error.message);
        if (isFallback) {
            throw Error(error)
        }
        return isAddressRestricted(chainId, vaultAddress, referrer, true);
    }
}

async function getBondFeeDetails(chainId: number, vaultAddress: string, bondAddress: string, isFallback?: boolean) {
    try {
        const vaultContract = getVaultInstance(chainId, vaultAddress, isFallback);
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
