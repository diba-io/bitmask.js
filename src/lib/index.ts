/* eslint-disable no-unused-vars */
import {
  GetEncryptedWallet,
  GetMnemonicSeed,
  SaveMnemonicSeed,
  GetWalletData,
  ImportAsset,
  GetBlindedUtxo,
  SendSats,
  FundVault,
  TransfersSerializeResponse,
  AcceptTransaction,
  CreateAsset,
  GetAssetsVault,
  CreateWalletResponse,
  AuthResponse,
  Account,
  AddInvoiceResponse,
  LnTransaction,
  PayInvoiceResponse,
  AssetTransfer,
  CheckPaymentResponse,
  SignPsbt,
} from "./types";

import * as backend from "bitmask-core";

export const getEncryptedWallet = async (
  password: string,
  encrypted_descriptors: string
): Promise<GetEncryptedWallet> =>
  JSON.parse(
    await backend.get_encrypted_wallet(password, encrypted_descriptors)
  );

export const getMnemonicSeed = async (
  encryption_password: string,
  seed_password: string
): Promise<GetMnemonicSeed> =>
  JSON.parse(
    await backend.get_mnemonic_seed(encryption_password, seed_password)
  );

export const saveMnemonicSeed = async (
  mnemonic: string,
  encryption_password: string,
  seed_password: string
): Promise<SaveMnemonicSeed> =>
  JSON.parse(
    await backend.save_mnemonic_seed(
      mnemonic,
      encryption_password,
      seed_password
    )
  );

export const getWalletData = async (
  descriptor: string,
  change_descriptor?: string
): Promise<GetWalletData> =>
  JSON.parse(await backend.get_wallet_data(descriptor, change_descriptor));

export const importAsset = async (
  asset: string,
  utxo: string
): Promise<ImportAsset> => JSON.parse(await backend.import_asset(asset, utxo));

export const getBlindedUtxo = async (
  utxo_string: string
): Promise<GetBlindedUtxo> =>
  JSON.parse(await backend.get_blinded_utxo(utxo_string));

export const sendSats = async (
  descriptor: string,
  change_descriptor: string,
  address: string,
  amount: bigint,
  fee_rate: number
): Promise<SendSats> =>
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
  descriptor: string,
  change_descriptor: string,
  address: string,
  uda_address: string,
  asset_amount: bigint,
  uda_amount: bigint,
  fee_rate: number
): Promise<FundVault> =>
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
  rgb_assets_descriptor_xpub: string,
  rgb_udas_descriptor_xpub: string
): Promise<GetAssetsVault> =>
  JSON.parse(
    await backend.get_assets_vault(
      rgb_assets_descriptor_xpub,
      rgb_udas_descriptor_xpub
    )
  );

export const createAsset = async (
  ticker: string,
  name: string,
  precision: number,
  supply: bigint,
  utxo: string
): Promise<CreateAsset> =>
  JSON.parse(await backend.create_asset(ticker, name, precision, supply, utxo));

export const transferAssets = async (
  descriptor_xpub: string,
  transfers: AssetTransfer[]
): Promise<TransfersSerializeResponse> =>
  JSON.parse(await backend.transfer_assets({ descriptor_xpub, transfers }));

export const signPsbt = async (
  rgb_descriptor_xprv: string,
  psbt: string
): Promise<SignPsbt> =>
  JSON.parse(await backend.sign_psbt(rgb_descriptor_xprv, psbt));

export const acceptTransfer = async (
  consignment: string,
  blinding: string,
  outpoint: string,
  blinded: string
): Promise<AcceptTransaction> =>
  JSON.parse(
    await backend.accept_transfer(consignment, blinding, outpoint, blinded)
  );

export const getNetwork = async (): Promise<string> =>
  JSON.parse(await backend.get_network());

export const getEndpoint = async (path: string): Promise<string> =>
  JSON.parse(await backend.get_endpoint(path));

export const switchNetwork = async (network: Network): Promise<void> =>
  backend.switch_network(network.toString());

export const switchHost = async (host: string): Promise<void> =>
  backend.switch_host(host);

export const lnCreateWallet = async (
  username: string,
  password: string
): Promise<CreateWalletResponse> =>
  JSON.parse(await backend.ln_create_wallet(username, password));

export const lnAuth = async (
  username: string,
  password: string
): Promise<AuthResponse> =>
  JSON.parse(await backend.ln_auth(username, password));

export const lnCreateInvoice = async (
  description: string,
  amount: number,
  token: string
): Promise<AddInvoiceResponse> =>
  JSON.parse(await backend.ln_create_invoice(description, amount, token));

export const lnGetBalance = async (token: string): Promise<Account> =>
  JSON.parse(await backend.ln_get_balance(token));

export const lnGetTxs = async (token: string): Promise<LnTransaction[]> =>
  JSON.parse(await backend.ln_get_txs(token));

export const lnPayInvoice = async (
  payment_request: string,
  token: string
): Promise<PayInvoiceResponse> =>
  JSON.parse(await backend.ln_pay_invoice(payment_request, token));

export const lnCheckPayment = async (
  payment_hash: string
): Promise<CheckPaymentResponse> =>
  JSON.parse(await backend.ln_check_payment(payment_hash));

export enum Network {
  bitcoin = "bitcoin",
  testnet = "testnet",
  signet = "signet",
  regtest = "regtest",
}

switchHost(process.env.BITMASK_NODE_HOST || "");
const network = Network[process.env.BITCOIN_NETWORK || ""];
switchNetwork(network);
