import * as backend from "bitmask-core";
export const getEncryptedWallet = async (password, encrypted_descriptors) =>
  JSON.parse(
    await backend.get_encrypted_wallet(password, encrypted_descriptors)
  );
export const getMnemonicSeed = async (encryption_password, seed_password) =>
  JSON.parse(
    await backend.get_mnemonic_seed(encryption_password, seed_password)
  );
export const saveMnemonicSeed = async (
  mnemonic,
  encryption_password,
  seed_password
) =>
  JSON.parse(
    await backend.save_mnemonic_seed(
      mnemonic,
      encryption_password,
      seed_password
    )
  );
export const getWalletData = async (descriptor, change_descriptor) =>
  JSON.parse(await backend.get_wallet_data(descriptor, change_descriptor));
export const importAsset = async (asset, utxo) =>
  JSON.parse(await backend.import_asset(asset, utxo));
export const getBlindedUtxo = async (utxo_string) =>
  JSON.parse(await backend.get_blinded_utxo(utxo_string));
export const sendSats = async (
  descriptor,
  change_descriptor,
  address,
  amount,
  fee_rate
) =>
  JSON.parse(
    await backend.send_sats(
      descriptor,
      change_descriptor,
      address,
      amount,
      fee_rate
    )
  );
export const fundVault = async (
  descriptor,
  change_descriptor,
  address,
  uda_address,
  asset_amount,
  uda_amount,
  fee_rate
) =>
  JSON.parse(
    await backend.fund_vault(
      descriptor,
      change_descriptor,
      address,
      uda_address,
      asset_amount,
      uda_amount,
      fee_rate
    )
  );
export const getAssetsVault = async (
  rgb_assets_descriptor_xpub,
  rgb_udas_descriptor_xpub
) =>
  JSON.parse(
    await backend.get_assets_vault(
      rgb_assets_descriptor_xpub,
      rgb_udas_descriptor_xpub
    )
  );
export const createAsset = async (ticker, name, precision, supply, utxo) =>
  JSON.parse(await backend.create_asset(ticker, name, precision, supply, utxo));
export const transferAssets = async (descriptor_xpub, transfers) =>
  JSON.parse(await backend.transfer_assets({ descriptor_xpub, transfers }));
export const signPsbt = async (rgb_descriptor_xprv, psbt) =>
  JSON.parse(await backend.sign_psbt(rgb_descriptor_xprv, psbt));
export const acceptTransfer = async (
  consignment,
  blinding,
  outpoint,
  blinded
) =>
  JSON.parse(
    await backend.accept_transfer(consignment, blinding, outpoint, blinded)
  );
export const getNetwork = async () => JSON.parse(await backend.get_network());
export const getEndpoint = async (path) =>
  JSON.parse(await backend.get_endpoint(path));
export const switchNetwork = async (network) =>
  backend.switch_network(network.toString());
export const switchHost = async (host) => backend.switch_host(host);
export const lnCreateWallet = async (username, password) =>
  JSON.parse(await backend.ln_create_wallet(username, password));
export const lnAuth = async (username, password) =>
  JSON.parse(await backend.ln_auth(username, password));
export const lnCreateInvoice = async (description, amount, token) =>
  JSON.parse(await backend.ln_create_invoice(description, amount, token));
export const lnGetBalance = async (token) =>
  JSON.parse(await backend.ln_get_balance(token));
export const lnGetTxs = async (token) =>
  JSON.parse(await backend.ln_get_txs(token));
export const lnPayInvoice = async (payment_request, token) =>
  JSON.parse(await backend.ln_pay_invoice(payment_request, token));
export const lnCheckPayment = async (payment_hash) =>
  JSON.parse(await backend.ln_check_payment(payment_hash));
export var Network;
(function (Network) {
  Network["bitcoin"] = "bitcoin";
  Network["testnet"] = "testnet";
  Network["signet"] = "signet";
  Network["regtest"] = "regtest";
})(Network || (Network = {}));
switchHost(process.env.BITMASK_NODE_HOST || "");
const network = Network[process.env.BITCOIN_NETWORK || ""];
switchNetwork(network);
export default {
  lnCreateWallet,
};
