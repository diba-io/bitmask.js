/* eslint-disable no-unused-vars */
import * as BMC from "bitmask-core";
export const hashPassword = (password) => BMC.hash_password(password);
export const getEncryptedWallet = async (password, encryptedDescriptors) => JSON.parse(await BMC.get_encrypted_wallet(password, encryptedDescriptors));
export const upgradeWallet = async (hash, encryptedDescriptors, seedPassword = "") => JSON.parse(await BMC.upgrade_wallet(hash, encryptedDescriptors, seedPassword));
export const newMnemonicSeed = async (hash, seedPassword) => JSON.parse(await BMC.new_mnemonic_seed(hash, seedPassword));
export const saveMnemonicSeed = async (mnemonic, hash, seedPassword) => JSON.parse(await BMC.save_mnemonic_seed(mnemonic, hash, seedPassword));
export const getWalletData = async (descriptor, changeDescriptor) => JSON.parse(await BMC.get_wallet_data(descriptor, changeDescriptor));
export const sendSats = async (descriptor, changeDescriptor, address, amount, feeRate) => JSON.parse(await BMC.send_sats(descriptor, changeDescriptor, address, amount, feeRate));
export const fundVault = async (descriptor, changeDescriptor, address, udaAddress, assetAmount, udaAmount, feeRate) => JSON.parse(await BMC.fund_vault(descriptor, changeDescriptor, address, udaAddress, assetAmount, udaAmount, feeRate));
export const getAssetsVault = async (rgbAssetsDescriptorXpub, rgbUdasDescriptorXpub) => JSON.parse(await BMC.get_assets_vault(rgbAssetsDescriptorXpub, rgbUdasDescriptorXpub));
export const store = async (nostrHexSk, data, name) => BMC.store(nostrHexSk, name || "", data);
export const retrieve = (nostrHexSk, lookup) => BMC.retrieve(nostrHexSk, lookup);
// Core type interfaces based on structs defined within the bitmask-core Rust crate:
// https://github.com/diba-io/bitmask-core/blob/development/src/structs.rs
export const createWallet = async (username, password) => JSON.parse(await BMC.create_wallet(username, password));
export const auth = async (username, password) => JSON.parse(await BMC.auth(username, password));
export const createInvoice = async (description, amount, token) => JSON.parse(await BMC.ln_create_invoice(description, amount, token));
export const getBalance = async (token) => JSON.parse(await BMC.get_balance(token));
export const getTxs = async (token) => JSON.parse(await BMC.get_txs(token));
export const payInvoice = async (paymentRequest, token) => JSON.parse(await BMC.pay_invoice(paymentRequest, token));
export const checkPayment = async (paymentHash) => JSON.parse(await BMC.check_payment(paymentHash));
export const issueContract = async (nostrHexSk, request) => JSON.parse(await BMC.issue_contract(nostrHexSk, request));
export const lnCreateInvoice = async (nostrHexSk, request) => JSON.parse(await BMC.rgb_create_invoice(nostrHexSk, request));
export const createPsbt = async (nostrHexSk, request) => JSON.parse(await BMC.create_psbt(nostrHexSk, request));
export const psbtSignFile = async (nostrHexSk, request) => JSON.parse(await BMC.psbt_sign_file(nostrHexSk, request));
export const transferAsset = async (nostrHexSk, request) => JSON.parse(await BMC.transfer_asset(nostrHexSk, request));
export const importContract = async (nostrHexSk, request) => JSON.parse(await BMC.import_contract(nostrHexSk, request));
export const acceptTransfer = async (nostrHexSk, request) => JSON.parse(await BMC.accept_transfer(nostrHexSk, request));
export const listContracts = async (nostrHexSk) => JSON.parse(await BMC.list_contracts(nostrHexSk));
export const listInterfaces = async (nostrHexSk) => JSON.parse(await BMC.list_interfaces(nostrHexSk));
export const listSchemas = async (nostrHexSk) => JSON.parse(await BMC.list_schemas(nostrHexSk));
export const watcher = async (nostrHexSk, request) => JSON.parse(await BMC.watcher(nostrHexSk, request));
export const watcherDetails = async (nostrHexSk, name) => JSON.parse(await BMC.watcher_details(nostrHexSk, name));
export const watcherNextAddress = async (nostrHexSk, name) => JSON.parse(await BMC.watcher_next_address(nostrHexSk, name));
export const watcherWatcherNextUtxo = async (nostrHexSk, name) => JSON.parse(await BMC.watcher_next_utxo(nostrHexSk, name));
export const getNetwork = async () => JSON.parse(await BMC.get_network());
export const switchNetwork = async (network) => BMC.switch_network(network.toString());
export const getEnv = async (key) => JSON.parse(await BMC.get_env(key));
export const setEnv = async (key, value) => BMC.set_env(key, value);
export var Network;
(function (Network) {
    Network["bitcoin"] = "bitcoin";
    Network["testnet"] = "testnet";
    Network["signet"] = "signet";
    Network["regtest"] = "regtest";
})(Network || (Network = {}));
const network = (process.env.BITCOIN_NETWORK || "");
switchNetwork(network);
/* export default {
  getEncryptedWallet,
  getMnemonicSeed,
  getWalletData,
  importAsset,
  getBlindedUtxo,
  sendSats,
  fundVault,
  getAssetsVault,
  createAsset,
  transferAssets,
  signPsbt,
  acceptTransfer,
  getNetwork,
  getEndpoint,
  switchNetwork,
  switchHost,
  lnCreateWallet,
  lnAuth,
  lnCreateInvoice,
  lnGetBalance,
  lnGetTxs,
  lnPayInvoice,
  lnCheckPayment,
}; */
