import {ProviderController} from "../../provider";
import {ISSUER_ABI} from "../../../abi-json/fixed-flex";
import {ethers} from "ethers";

function getIssuerInstance(chainId: number, contractAddress: string) {
    const {provider} = new ProviderController(chainId);
    return new ethers.Contract(contractAddress, ISSUER_ABI, provider);
}


const FixedFlexIssuerController = {
    getIssuerInstance
}
export default FixedFlexIssuerController;
