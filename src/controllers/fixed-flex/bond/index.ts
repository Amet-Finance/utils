import {BOND_ABI} from "../../../abi-json/fixed-flex";
import {ethers} from "ethers";
import {ProviderController} from "../../provider";

function getBondInstance(chainId: number, contractAddress: string) {
    const {provider} = new ProviderController(chainId);
    return new ethers.Contract(contractAddress, BOND_ABI, provider);
}

const FixedFlexBondController = {
    getBondInstance
}

export default FixedFlexBondController;
