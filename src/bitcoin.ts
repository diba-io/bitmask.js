// Methods meant to work with BDK defined within the web::bitcoin module from bitmask-core:
// https://github.com/diba-io/bitmask-core/blob/development/src/web.rs

import * as BMC from "bitmask-core";

export const hashPassword = (password: string) => BMC.hash_password(password);

export const getEncryptedWallet = async (
  hash: string,
  encryptedDescriptors: string
): Promise<Vault> =>
  JSON.parse(await BMC.get_encrypted_wallet(hash, encryptedDescriptors));

export const upgradeWallet = async (
  hash: string,
  encryptedDescriptors: string,
  seedPassword = ""
): Promise<string> =>
  JSON.parse(
    await BMC.upgrade_wallet(hash, encryptedDescriptors, seedPassword)
  );

export const newMnemonicSeed = async (
  hash: string,
  seedPassword: string
): Promise<MnemonicSeedData> =>
  JSON.parse(await BMC.new_mnemonic_seed(hash, seedPassword));

export const saveMnemonicSeed = async (
  mnemonic: string,
  hash: string,
  seedPassword: string
): Promise<MnemonicSeedData> =>
  JSON.parse(await BMC.save_mnemonic_seed(mnemonic, hash, seedPassword));

export const getWalletData = async (
  descriptor: string,
  changeDescriptor?: string
): Promise<WalletData> =>
  JSON.parse(await BMC.get_wallet_data(descriptor, changeDescriptor));

export const sendSats = async (
  descriptor: string,
  changeDescriptor: string,
  address: string,
  amount: bigint,
  feeRate: number
): Promise<TransactionData> =>
  JSON.parse(
    await BMC.send_sats(descriptor, changeDescriptor, address, amount, feeRate)
  );

export const fundVault = async (
  descriptor: string,
  changeDescriptor: string,
  address: string,
  udaAddress: string,
  assetAmount: bigint,
  udaAmount: bigint,
  feeRate: number
): Promise<FundVaultDetails> =>
  JSON.parse(
    await BMC.fund_vault(
      descriptor,
      changeDescriptor,
      address,
      udaAddress,
      assetAmount,
      udaAmount,
      feeRate
    )
  );

export const getAssetsVault = async (
  rgbAssetsDescriptorXpub: string,
  rgbUdasDescriptorXpub: string
): Promise<FundVaultDetails> =>
  JSON.parse(
    await BMC.get_assets_vault(rgbAssetsDescriptorXpub, rgbUdasDescriptorXpub)
  );

// Core type interfaces based on structs defined within the bitmask-core Rust crate:
// https://github.com/diba-io/bitmask-core/blob/development/src/structs.rs

export interface PrivateWalletData {
  xprvkh: string;
  btcDescriptorXprv: string;
  btcChangeDescriptorXprv: string;
  rgbAssetsDescriptorXprv: string;
  rgbUdasDescriptorXprv: string;
  nostrPrv: string;
  nostrNsec: string;
}

export interface PublicWalletData {
  xpub: string;
  xpubkh: string;
  watcherXpub: string;
  btcDescriptorXpub: string;
  btcChangeDescriptorXpub: string;
  rgbAssetsDescriptorXpub: string;
  rgbUdasDescriptorXpub: string;
  nostrPub: string;
  nostrNpub: string;
}

export interface Vault {
  mnemonic: string;
  private: PrivateWalletData;
  public: PublicWalletData;
}

export interface Transaction {
  amount: number;
  asset?: string;
  assetType: string;
  fee: number;
  message?: string;
  note?: string;
}

export interface MnemonicSeedData {
  mnemonic: string;
  serializedEncryptedMessage: string;
}

export interface Activity extends Transaction {
  id: string;
  date: number;
  action: string;
  status: string;
  lightning?: boolean;
  sender?: {
    name: string;
    address: string;
  };
  recipient?: {
    name: string;
    address: string;
    conceal: string;
  };
}

export interface TransactionDetails extends Transaction {
  sender: {
    name: string;
    address: string;
  };
  recipient: {
    name: string;
    address: string;
    conceal: string;
  };
}

export interface TransactionData {
  transaction?: Transaction;
  txid: string;
  received: number;
  sent: number;
  fee: number;
  confirmationTime?: ConfirmationTime;
  confirmed?: boolean;
}

export interface ConfirmationTime {
  height: number;
  timestamp: number;
}

export interface WalletTransaction {
  txid: string;
  received: number;
  sent: number;
  fee: number;
  confirmed: boolean;
  confirmationTime: ConfirmationTime;
}

export interface WalletBalance {
  immature: number;
  trusted_pending: number;
  untrusted_pending: number;
  confirmed: number;
}

export interface WalletData {
  wallet?: string;
  name: string;
  address: string;
  balance: WalletBalance;
  transactions: WalletTransaction[];
  utxos: string[];
}

export interface FundVaultDetails {
  assets_output?: string;
  assets_change_output?: string;
  udas_output?: string;
  udas_change_output?: string;
}
