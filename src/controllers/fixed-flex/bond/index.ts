import {ProviderController} from "../../provider";
import {Bond__factory} from "../../../../typings/fixed-flex";
import {CONTRACT_TYPES} from "../../constants";
import {BondDetails, BondDynamicDetails, BondIssuanceDetails} from "./types";
import {TransactionReceipt} from "@ethersproject/abstract-provider";

function getBondInstance(chainId: number, contractAddress: string, isFallback?: boolean) {
    const {provider} = new ProviderController(chainId, isFallback);
    return Bond__factory.connect(contractAddress, provider)
}

async function getBondDetails(chainId: number, contractAddress: string, isFallback?: boolean): Promise<BondDetails> {
    try {
        const [
            lifecycle,
            owner,
            purchaseToken,
            purchaseAmount,
            payoutToken,
            payoutAmount,
        ] = await Promise.all([
            getBondInstance(chainId, contractAddress, isFallback).lifecycle(),
            getBondInstance(chainId, contractAddress, isFallback).owner(),
            getBondInstance(chainId, contractAddress, isFallback).purchaseToken(),
            getBondInstance(chainId, contractAddress, isFallback).purchaseAmount(),
            getBondInstance(chainId, contractAddress, isFallback).payoutToken(),
            getBondInstance(chainId, contractAddress, isFallback).payoutAmount()
        ]);

        return {
            _id: `${contractAddress}_${chainId}`.toLowerCase(),
            type: CONTRACT_TYPES.FIXED_FLEX.BOND,
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

async function getBondDynamicDetails(chainId: number, contractAddress: string, isFallback?: boolean): Promise<BondDynamicDetails> {
    try {
        const contract = FixedFlexBondController.getBondInstance(chainId, contractAddress);

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

async function getIssuanceBondDetails(chainId: number, contractAddress: string, transaction: TransactionReceipt, isFallback?: boolean): Promise<BondIssuanceDetails> {
    const {provider} = new ProviderController(chainId, isFallback);

    const bondDetails = await getBondDetails(chainId, contractAddress, isFallback)
    const block = await provider.getBlock(transaction.blockNumber);

    return {
        ...bondDetails,
        issuanceBlock: transaction.blockNumber,
        issuanceDate: new Date(block.timestamp * 1000),
    }
}


const FixedFlexBondController = {
    getBondInstance,
    getBondDetails,
    getBondDynamicDetails,
    getIssuanceBondDetails
}

export default FixedFlexBondController;
