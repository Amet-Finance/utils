import {ethers} from "ethers";
import {CHAINS} from "./controllers/constants";

const AddressZero = ethers.constants.AddressZero

/**
 * New contracts will be pushed to this array
 */
const FIXED_FLEX_ISSUER_CONTRACTS: { [chainId: number | string]: string[] } = {
    [CHAINS.Mumbai]: ["0x0FBE72137231B40569e3292B6f5927db41F0f3c2"],
    [CHAINS.Base]: ["0xE67BE43603260b0AD38bBfe89FcC6fDe6741e82A"]
}

const CHAIN_BLOCK_TIMES: { [chainId: number | string]: number } = {
    [CHAINS.Polygon]: 2,
    [CHAINS.Mumbai]: 4,
    [CHAINS.Base]: 2
}

const Constants = {
    AddressZero,
    FIXED_FLEX_ISSUER_CONTRACTS,
    CHAIN_BLOCK_TIMES
}

export default Constants;
