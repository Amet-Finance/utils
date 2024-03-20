import {BigNumber} from "ethers";

type VaultFeeDetails = {
    issuanceFee: BigNumber;
    purchaseRate: number;
    earlyRedemptionRate: number;
    referrerRewardRate: number;
}

export type {
    VaultFeeDetails
}
