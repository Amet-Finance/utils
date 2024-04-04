import constants from './constants'

function getIssuerContract(chainId: number) {
    const issuerContracts = constants.FIXED_FLEX_ISSUER_CONTRACTS[chainId];
    return issuerContracts[issuerContracts.length - 1]
}

const Utils = {
    getIssuerContract
}

export default Utils;
