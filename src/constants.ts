import {ethers} from "ethers";
import {CHAINS} from "./controllers/constants";

const AddressZero = ethers.constants.AddressZero

/**
 * New contracts will be pushed to this array
 */
const FIXED_FLEX_ISSUER_CONTRACTS: { [chainId: number]: string[] } = {
    [CHAINS.Mumbai]: ["0x0FBE72137231B40569e3292B6f5927db41F0f3c2"],
}

const CHAIN_BLOCK_TIMES: any = {
    [CHAINS.Polygon]: 2,
    [CHAINS.Mumbai]: 4
}

export default {
    AddressZero,
    FIXED_FLEX_ISSUER_CONTRACTS,
    CHAIN_BLOCK_TIMES
}
