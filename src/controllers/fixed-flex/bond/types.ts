type BondDynamicDetails = {
    owner: string,
    totalBonds: number,
    purchased: number,
    redeemed: number,
    isSettled: boolean,
    maturityPeriodInBlocks: number,
    lastUpdated: Date
}

type BondDetails = BondDynamicDetails & {
    _id: string,
    type: string,
    chainId: number,
    issuer: string,

    purchaseToken: string,
    purchaseAmount: string,
    payoutToken: string,
    payoutAmount: string,
}

type BondIssuanceDetails = BondDetails & {
    issuanceBlock: number,
    issuanceDate: Date,
}

export type {
    BondDetails,
    BondDynamicDetails,
    BondIssuanceDetails
}
