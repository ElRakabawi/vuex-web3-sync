import { APPROVED_NETWORK_ID } from './constants'

export default {
  address: state => state.web3.address,
  coinbase: state => state.web3.coinbase,
  instance: state => state.web3.instance,
  isInjected: state => state.web3.isInjected,
  networkId: state => state.web3.networkId,
  isLocal: state => state.web3.isLocal,
  isApprovedNetwork: state =>
    state.web3.networkId && state.web3.networkId !== '' && state.web3.networkId === APPROVED_NETWORK_ID,
}
