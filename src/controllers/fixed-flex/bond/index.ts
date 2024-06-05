import ProviderController from "../../provider";
import {Bond__factory} from "../../../../typings/fixed-flex";
import {BondDetails, BondDynamicDetails, BondIssuanceDetails} from "./types";
import {TransactionReceipt} from "@ethersproject/abstract-provider";
import {Provider} from "@ethersproject/providers";

function getBondInterface() {
    return Bond__factory.createInterface();
}

function getBondInstance(chainId: number, contractAddress: string, isFallback?: boolean, provider?: Provider) {
    if (provider && !isFallback) {
        return Bond__factory.connect(contractAddress, provider)
    } else {
        const {provider} = new ProviderController(chainId, isFallback ? "fallback" : "http");
        return Bond__factory.connect(contractAddress, provider)
    }
}

async function getBondDetails(chainId: number, contractAddress: string, isFallback?: boolean, provider?: Provider): Promise<BondDetails> {
    try {
        const instance = getBondInstance(chainId, contractAddress, isFallback, provider)

        const [
            lifecycle,
            owner,
            purchaseToken,
            purchaseAmount,
            payoutToken,
            payoutAmount,
        ] = await Promise.all([
            instance.lifecycle(),
            instance.owner(),
            instance.purchaseToken(),
            instance.purchaseAmount(),
            instance.payoutToken(),
            instance.payoutAmount()
        ]);

        return {
            _id: `${contractAddress}_${chainId}`.toLowerCase(),
            chainId: chainId,
            issuer: owner.toLowerCase(),
            owner: owner.toLowerCase(),

            totalBonds: lifecycle.totalBonds,
            purchased: lifecycle.purchased,
            redeemed: lifecycle.redeemed,

            isSettled: lifecycle.isSettled,
            maturityPeriodInBlocks: lifecycle.maturityPeriodInBlocks,

            purchaseToken: purchaseToken.toString().toLowerCase(),
            purchaseAmount: purchaseAmount.toString(),
            payoutToken: payoutToken.toLowerCase().toLowerCase(),
            payoutAmount: payoutAmount.toString(),

            lastUpdated: new Date()
        };


    } catch (error: any) {
        console.error(`getInfo`, error.message);
        if (isFallback) {
            throw Error(error)
        }
        return getBondDetails(chainId, contractAddress, true);
    }
}

async function getBondDynamicDetails(chainId: number, contractAddress: string, isFallback?: boolean, provider?: Provider): Promise<BondDynamicDetails> {
    try {
        const contract = getBondInstance(chainId, contractAddress, isFallback, provider);

        const lifecycle = await contract.lifecycle();
        const owner = await contract.owner();

        return {
            owner: owner.toLowerCase(),
            totalBonds: lifecycle.totalBonds,
            purchased: lifecycle.purchased,
            redeemed: lifecycle.redeemed,
            maturityPeriodInBlocks: lifecycle.maturityPeriodInBlocks,
            isSettled: lifecycle.isSettled,
            lastUpdated: new Date() // our side
        };

    } catch (error: any) {
        console.error(`getInfoChangeable`, error.message);
        if (isFallback) {
            throw Error(error)
        }
        return getBondDynamicDetails(chainId, contractAddress, true);
    }
}

async function getIssuanceBondDetails(chainId: number, contractAddress: string, transaction: TransactionReceipt, isFallback?: boolean, provider?: Provider): Promise<BondIssuanceDetails> {
    if (!provider) {
        provider = new ProviderController(chainId, isFallback ? "fallback" : "http").provider;
    }

    const bondDetails = await getBondDetails(chainId, contractAddress, isFallback, provider)
    const block = await provider.getBlock(transaction.blockNumber);

    return {
        ...bondDetails,
        issuanceBlock: transaction.blockNumber,
        issuanceDate: new Date(block.timestamp * 1000),
    }
}


const FixedFlexBondController = {
    getBondInterface,
    getBondInstance,
    getBondDetails,
    getBondDynamicDetails,
    getIssuanceBondDetails
}

export default FixedFlexBondController;
