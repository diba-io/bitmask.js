"use strict";
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
exports.Network = exports.lnCheckPayment = exports.lnPayInvoice = exports.lnGetTxs = exports.lnGetBalance = exports.lnCreateInvoice = exports.lnAuth = exports.lnCreateWallet = exports.switchHost = exports.switchNetwork = exports.getEndpoint = exports.getNetwork = exports.acceptTransfer = exports.signPsbt = exports.transferAssets = exports.createAsset = exports.getAssetsVault = exports.fundVault = exports.sendSats = exports.getBlindedUtxo = exports.importAsset = exports.getWalletData = exports.saveMnemonicSeed = exports.getMnemonicSeed = exports.getEncryptedWallet = void 0;
const backend = __importStar(require("bitmask-core"));
const getEncryptedWallet = (password, encrypted_descriptors) => __awaiter(void 0, void 0, void 0, function* () {
    return JSON.parse(yield backend.get_encrypted_wallet(password, encrypted_descriptors));
});
exports.getEncryptedWallet = getEncryptedWallet;
const getMnemonicSeed = (encryption_password, seed_password) => __awaiter(void 0, void 0, void 0, function* () {
    return JSON.parse(yield backend.get_mnemonic_seed(encryption_password, seed_password));
});
exports.getMnemonicSeed = getMnemonicSeed;
const saveMnemonicSeed = (mnemonic, encryption_password, seed_password) => __awaiter(void 0, void 0, void 0, function* () {
    return JSON.parse(yield backend.save_mnemonic_seed(mnemonic, encryption_password, seed_password));
});
exports.saveMnemonicSeed = saveMnemonicSeed;
const getWalletData = (descriptor, change_descriptor) => __awaiter(void 0, void 0, void 0, function* () { return JSON.parse(yield backend.get_wallet_data(descriptor, change_descriptor)); });
exports.getWalletData = getWalletData;
const importAsset = (asset, utxo) => __awaiter(void 0, void 0, void 0, function* () { return JSON.parse(yield backend.import_asset(asset, utxo)); });
exports.importAsset = importAsset;
const getBlindedUtxo = (utxo_string) => __awaiter(void 0, void 0, void 0, function* () { return JSON.parse(yield backend.get_blinded_utxo(utxo_string)); });
exports.getBlindedUtxo = getBlindedUtxo;
const sendSats = (descriptor, change_descriptor, address, amount, fee_rate) => __awaiter(void 0, void 0, void 0, function* () {
    return JSON.parse(yield backend.send_sats(descriptor, change_descriptor, address, amount, fee_rate));
});
exports.sendSats = sendSats;
const fundVault = (descriptor, change_descriptor, address, uda_address, asset_amount, uda_amount, fee_rate) => __awaiter(void 0, void 0, void 0, function* () {
    return JSON.parse(yield backend.fund_vault(descriptor, change_descriptor, address, uda_address, asset_amount, uda_amount, fee_rate));
});
exports.fundVault = fundVault;
const getAssetsVault = (rgb_assets_descriptor_xpub, rgb_udas_descriptor_xpub) => __awaiter(void 0, void 0, void 0, function* () {
    return JSON.parse(yield backend.get_assets_vault(rgb_assets_descriptor_xpub, rgb_udas_descriptor_xpub));
});
exports.getAssetsVault = getAssetsVault;
const createAsset = (ticker, name, precision, supply, utxo) => __awaiter(void 0, void 0, void 0, function* () { return JSON.parse(yield backend.create_asset(ticker, name, precision, supply, utxo)); });
exports.createAsset = createAsset;
const transferAssets = (descriptor_xpub, transfers) => __awaiter(void 0, void 0, void 0, function* () { return JSON.parse(yield backend.transfer_assets({ descriptor_xpub, transfers })); });
exports.transferAssets = transferAssets;
const signPsbt = (rgb_descriptor_xprv, psbt) => __awaiter(void 0, void 0, void 0, function* () { return JSON.parse(yield backend.sign_psbt(rgb_descriptor_xprv, psbt)); });
exports.signPsbt = signPsbt;
const acceptTransfer = (consignment, blinding, outpoint, blinded) => __awaiter(void 0, void 0, void 0, function* () {
    return JSON.parse(yield backend.accept_transfer(consignment, blinding, outpoint, blinded));
});
exports.acceptTransfer = acceptTransfer;
const getNetwork = () => __awaiter(void 0, void 0, void 0, function* () { return JSON.parse(yield backend.get_network()); });
exports.getNetwork = getNetwork;
const getEndpoint = (path) => __awaiter(void 0, void 0, void 0, function* () { return JSON.parse(yield backend.get_endpoint(path)); });
exports.getEndpoint = getEndpoint;
const switchNetwork = (network) => __awaiter(void 0, void 0, void 0, function* () { return backend.switch_network(network.toString()); });
exports.switchNetwork = switchNetwork;
const switchHost = (host) => __awaiter(void 0, void 0, void 0, function* () { return backend.switch_host(host); });
exports.switchHost = switchHost;
const lnCreateWallet = (username, password) => __awaiter(void 0, void 0, void 0, function* () { return JSON.parse(yield backend.ln_create_wallet(username, password)); });
exports.lnCreateWallet = lnCreateWallet;
const lnAuth = (username, password) => __awaiter(void 0, void 0, void 0, function* () { return JSON.parse(yield backend.ln_auth(username, password)); });
exports.lnAuth = lnAuth;
const lnCreateInvoice = (description, amount, token) => __awaiter(void 0, void 0, void 0, function* () { return JSON.parse(yield backend.ln_create_invoice(description, amount, token)); });
exports.lnCreateInvoice = lnCreateInvoice;
const lnGetBalance = (token) => __awaiter(void 0, void 0, void 0, function* () { return JSON.parse(yield backend.ln_get_balance(token)); });
exports.lnGetBalance = lnGetBalance;
const lnGetTxs = (token) => __awaiter(void 0, void 0, void 0, function* () { return JSON.parse(yield backend.ln_get_txs(token)); });
exports.lnGetTxs = lnGetTxs;
const lnPayInvoice = (payment_request, token) => __awaiter(void 0, void 0, void 0, function* () { return JSON.parse(yield backend.ln_pay_invoice(payment_request, token)); });
exports.lnPayInvoice = lnPayInvoice;
const lnCheckPayment = (payment_hash) => __awaiter(void 0, void 0, void 0, function* () { return JSON.parse(yield backend.ln_check_payment(payment_hash)); });
exports.lnCheckPayment = lnCheckPayment;
var Network;
(function (Network) {
    Network["bitcoin"] = "bitcoin";
    Network["testnet"] = "testnet";
    Network["signet"] = "signet";
    Network["regtest"] = "regtest";
})(Network = exports.Network || (exports.Network = {}));
(0, exports.switchHost)(process.env.BITMASK_NODE_HOST || "");
const network = Network[process.env.BITCOIN_NETWORK || ""];
(0, exports.switchNetwork)(network);
