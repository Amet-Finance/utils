import {VaultFeeDetails} from "../vault/types";

type IssuerDetails = VaultFeeDetails & {
    isPaused: boolean
}

export type {
    IssuerDetails
}
