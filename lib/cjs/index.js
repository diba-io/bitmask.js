"use strict";
/* eslint-disable no-unused-vars */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Network = exports.setEnv = exports.getEnv = exports.switchNetwork = exports.getNetwork = exports.watcherWatcherNextUtxo = exports.watcherNextAddress = exports.watcherDetails = exports.watcher = exports.listSchemas = exports.listInterfaces = exports.listContracts = exports.acceptTransfer = exports.importContract = exports.transferAsset = exports.psbtSignFile = exports.createPsbt = exports.lnCreateInvoice = exports.issueContract = exports.checkPayment = exports.payInvoice = exports.getTxs = exports.getBalance = exports.createInvoice = exports.auth = exports.createWallet = exports.retrieve = exports.store = exports.getAssetsVault = exports.fundVault = exports.sendSats = exports.getWalletData = exports.saveMnemonicSeed = exports.newMnemonicSeed = exports.upgradeWallet = exports.getEncryptedWallet = exports.hashPassword = void 0;
const BMC = __importStar(require("bitmask-core"));
const hashPassword = (password) => BMC.hash_password(password);
exports.hashPassword = hashPassword;
const getEncryptedWallet = (password, encryptedDescriptors) => __awaiter(void 0, void 0, void 0, function* () { return JSON.parse(yield BMC.get_encrypted_wallet(password, encryptedDescriptors)); });
exports.getEncryptedWallet = getEncryptedWallet;
const upgradeWallet = (hash, encryptedDescriptors, seedPassword = "") => __awaiter(void 0, void 0, void 0, function* () {
    return JSON.parse(yield BMC.upgrade_wallet(hash, encryptedDescriptors, seedPassword));
});
exports.upgradeWallet = upgradeWallet;
const newMnemonicSeed = (hash, seedPassword) => __awaiter(void 0, void 0, void 0, function* () { return JSON.parse(yield BMC.new_mnemonic_seed(hash, seedPassword)); });
exports.newMnemonicSeed = newMnemonicSeed;
const saveMnemonicSeed = (mnemonic, hash, seedPassword) => __awaiter(void 0, void 0, void 0, function* () { return JSON.parse(yield BMC.save_mnemonic_seed(mnemonic, hash, seedPassword)); });
exports.saveMnemonicSeed = saveMnemonicSeed;
const getWalletData = (descriptor, changeDescriptor) => __awaiter(void 0, void 0, void 0, function* () { return JSON.parse(yield BMC.get_wallet_data(descriptor, changeDescriptor)); });
exports.getWalletData = getWalletData;
const sendSats = (descriptor, changeDescriptor, address, amount, feeRate) => __awaiter(void 0, void 0, void 0, function* () {
    return JSON.parse(yield BMC.send_sats(descriptor, changeDescriptor, address, amount, feeRate));
});
exports.sendSats = sendSats;
const fundVault = (descriptor, changeDescriptor, address, udaAddress, assetAmount, udaAmount, feeRate) => __awaiter(void 0, void 0, void 0, function* () {
    return JSON.parse(yield BMC.fund_vault(descriptor, changeDescriptor, address, udaAddress, assetAmount, udaAmount, feeRate));
});
exports.fundVault = fundVault;
const getAssetsVault = (rgbAssetsDescriptorXpub, rgbUdasDescriptorXpub) => __awaiter(void 0, void 0, void 0, function* () {
    return JSON.parse(yield BMC.get_assets_vault(rgbAssetsDescriptorXpub, rgbUdasDescriptorXpub));
});
exports.getAssetsVault = getAssetsVault;
const store = (nostrHexSk, data, name) => __awaiter(void 0, void 0, void 0, function* () { return BMC.store(nostrHexSk, name || "", data); });
exports.store = store;
const retrieve = (nostrHexSk, lookup) => BMC.retrieve(nostrHexSk, lookup);
exports.retrieve = retrieve;
// Core type interfaces based on structs defined within the bitmask-core Rust crate:
// https://github.com/diba-io/bitmask-core/blob/development/src/structs.rs
const createWallet = (username, password) => __awaiter(void 0, void 0, void 0, function* () { return JSON.parse(yield BMC.create_wallet(username, password)); });
exports.createWallet = createWallet;
const auth = (username, password) => __awaiter(void 0, void 0, void 0, function* () { return JSON.parse(yield BMC.auth(username, password)); });
exports.auth = auth;
const createInvoice = (description, amount, token) => __awaiter(void 0, void 0, void 0, function* () { return JSON.parse(yield BMC.ln_create_invoice(description, amount, token)); });
exports.createInvoice = createInvoice;
const getBalance = (token) => __awaiter(void 0, void 0, void 0, function* () { return JSON.parse(yield BMC.get_balance(token)); });
exports.getBalance = getBalance;
const getTxs = (token) => __awaiter(void 0, void 0, void 0, function* () { return JSON.parse(yield BMC.get_txs(token)); });
exports.getTxs = getTxs;
const payInvoice = (paymentRequest, token) => __awaiter(void 0, void 0, void 0, function* () { return JSON.parse(yield BMC.pay_invoice(paymentRequest, token)); });
exports.payInvoice = payInvoice;
const checkPayment = (paymentHash) => __awaiter(void 0, void 0, void 0, function* () { return JSON.parse(yield BMC.check_payment(paymentHash)); });
exports.checkPayment = checkPayment;
const issueContract = (nostrHexSk, request) => __awaiter(void 0, void 0, void 0, function* () { return JSON.parse(yield BMC.issue_contract(nostrHexSk, request)); });
exports.issueContract = issueContract;
const lnCreateInvoice = (nostrHexSk, request) => __awaiter(void 0, void 0, void 0, function* () { return JSON.parse(yield BMC.rgb_create_invoice(nostrHexSk, request)); });
exports.lnCreateInvoice = lnCreateInvoice;
const createPsbt = (nostrHexSk, request) => __awaiter(void 0, void 0, void 0, function* () { return JSON.parse(yield BMC.create_psbt(nostrHexSk, request)); });
exports.createPsbt = createPsbt;
const psbtSignFile = (nostrHexSk, request) => __awaiter(void 0, void 0, void 0, function* () { return JSON.parse(yield BMC.psbt_sign_file(nostrHexSk, request)); });
exports.psbtSignFile = psbtSignFile;
const transferAsset = (nostrHexSk, request) => __awaiter(void 0, void 0, void 0, function* () { return JSON.parse(yield BMC.transfer_asset(nostrHexSk, request)); });
exports.transferAsset = transferAsset;
const importContract = (nostrHexSk, request) => __awaiter(void 0, void 0, void 0, function* () { return JSON.parse(yield BMC.import_contract(nostrHexSk, request)); });
exports.importContract = importContract;
const acceptTransfer = (nostrHexSk, request) => __awaiter(void 0, void 0, void 0, function* () { return JSON.parse(yield BMC.accept_transfer(nostrHexSk, request)); });
exports.acceptTransfer = acceptTransfer;
const listContracts = (nostrHexSk) => __awaiter(void 0, void 0, void 0, function* () { return JSON.parse(yield BMC.list_contracts(nostrHexSk)); });
exports.listContracts = listContracts;
const listInterfaces = (nostrHexSk) => __awaiter(void 0, void 0, void 0, function* () { return JSON.parse(yield BMC.list_interfaces(nostrHexSk)); });
exports.listInterfaces = listInterfaces;
const listSchemas = (nostrHexSk) => __awaiter(void 0, void 0, void 0, function* () { return JSON.parse(yield BMC.list_schemas(nostrHexSk)); });
exports.listSchemas = listSchemas;
const watcher = (nostrHexSk, request) => __awaiter(void 0, void 0, void 0, function* () { return JSON.parse(yield BMC.watcher(nostrHexSk, request)); });
exports.watcher = watcher;
const watcherDetails = (nostrHexSk, name) => __awaiter(void 0, void 0, void 0, function* () { return JSON.parse(yield BMC.watcher_details(nostrHexSk, name)); });
exports.watcherDetails = watcherDetails;
const watcherNextAddress = (nostrHexSk, name) => __awaiter(void 0, void 0, void 0, function* () { return JSON.parse(yield BMC.watcher_next_address(nostrHexSk, name)); });
exports.watcherNextAddress = watcherNextAddress;
const watcherWatcherNextUtxo = (nostrHexSk, name) => __awaiter(void 0, void 0, void 0, function* () { return JSON.parse(yield BMC.watcher_next_utxo(nostrHexSk, name)); });
exports.watcherWatcherNextUtxo = watcherWatcherNextUtxo;
const getNetwork = () => __awaiter(void 0, void 0, void 0, function* () { return JSON.parse(yield BMC.get_network()); });
exports.getNetwork = getNetwork;
const switchNetwork = (network) => __awaiter(void 0, void 0, void 0, function* () { return BMC.switch_network(network.toString()); });
exports.switchNetwork = switchNetwork;
const getEnv = (key) => __awaiter(void 0, void 0, void 0, function* () { return JSON.parse(yield BMC.get_env(key)); });
exports.getEnv = getEnv;
const setEnv = (key, value) => __awaiter(void 0, void 0, void 0, function* () { return BMC.set_env(key, value); });
exports.setEnv = setEnv;
var Network;
(function (Network) {
    Network["bitcoin"] = "bitcoin";
    Network["testnet"] = "testnet";
    Network["signet"] = "signet";
    Network["regtest"] = "regtest";
})(Network = exports.Network || (exports.Network = {}));
const network = (process.env.BITCOIN_NETWORK || "");
(0, exports.switchNetwork)(network);
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
