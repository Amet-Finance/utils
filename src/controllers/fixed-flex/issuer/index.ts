import {ProviderController} from "../../provider";
import {Issuer__factory} from "../../../../typings/fixed-flex";
import {TransactionReceipt} from "@ethersproject/abstract-provider";

function getIssuerInstance(chainId: number, contractAddress: string) {
    const {provider} = new ProviderController(chainId);
    return Issuer__factory.connect(contractAddress, provider);
}


function decode(chainId: number, transaction: TransactionReceipt) {
    const contract = getIssuerInstance(chainId, transaction.to);
    const response = []

    for (const log of transaction.logs) {
        try {
            const decodedData = contract.interface.parseLog({
                topics: [...log.topics],
                data: log.data
            });

            if (decodedData?.name) {
                response.push(decodedData)
            }
        } catch (error: any) {
            // console.error(`Error while extracting`, error.message)
        }
    }

    return response
}


const FixedFlexIssuerController = {
    getIssuerInstance,
    decode
}
export default FixedFlexIssuerController;
