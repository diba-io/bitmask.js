/* eslint-disable no-unused-vars */

import * as BMC from "bitmask-core";

export const hashPassword = (password: string) => BMC.hash_password(password);

export const getEncryptedWallet = async (
  password: string,
  encryptedDescriptors: string
): Promise<Vault> =>
  JSON.parse(await BMC.get_encrypted_wallet(password, encryptedDescriptors));

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


  export const store = async (
    nostrHexSk: string,
    data: Uint8Array,
    name?: string
  ): Promise<void> => BMC.store(nostrHexSk, name || "", data);
  
  export const retrieve = (nostrHexSk: string, lookup: string): Promise<string> =>
    BMC.retrieve(nostrHexSk, lookup);

// Core type interfaces based on structs defined within the bitmask-core Rust crate:
// https://github.com/diba-io/bitmask-core/blob/development/src/structs.rs


export const createWallet = async (
  username: string,
  password: string
): Promise<CreateWalletResponse> =>
  JSON.parse(await BMC.create_wallet(username, password));

export const auth = async (
  username: string,
  password: string
): Promise<AuthResponse> => JSON.parse(await BMC.auth(username, password));

export const createInvoice = async (
  description: string,
  amount: number,
  token: string
): Promise<AddInvoiceResponse> =>
  JSON.parse(await BMC.ln_create_invoice(description, amount, token));

export const getBalance = async (token: string): Promise<Account> =>
  JSON.parse(await BMC.get_balance(token));

export const getTxs = async (token: string): Promise<LnTransaction[]> =>
  JSON.parse(await BMC.get_txs(token));

export const payInvoice = async (
  paymentRequest: string,
  token: string
): Promise<PayInvoiceResponse> =>
  JSON.parse(await BMC.pay_invoice(paymentRequest, token));

export const checkPayment = async (
  paymentHash: string
): Promise<CheckPaymentResponse> =>
  JSON.parse(await BMC.check_payment(paymentHash));

  export const issueContract = async (
    nostrHexSk: string,
    request: IssueRequest
  ): Promise<IssueResponse> =>
    JSON.parse(await BMC.issue_contract(nostrHexSk, request));
  
  export const lnCreateInvoice = async (
    nostrHexSk: string,
    request: InvoiceRequest
  ): Promise<InvoiceResponse> =>
    JSON.parse(await BMC.rgb_create_invoice(nostrHexSk, request));
  
  export const createPsbt = async (
    nostrHexSk: string,
    request: PsbtRequest
  ): Promise<PsbtResponse> =>
    JSON.parse(await BMC.create_psbt(nostrHexSk, request));
  
  export const psbtSignFile = async (
    nostrHexSk: string,
    request: SignPsbtRequest
  ): Promise<SignPsbtResponse> =>
    JSON.parse(await BMC.psbt_sign_file(nostrHexSk, request));
  
  export const transferAsset = async (
    nostrHexSk: string,
    request: RgbTransferRequest
  ): Promise<RgbTransferResponse> =>
    JSON.parse(await BMC.transfer_asset(nostrHexSk, request));
  
  export const importContract = async (
    nostrHexSk: string,
    request: ImportRequest
  ): Promise<ImportResponse> =>
    JSON.parse(await BMC.import_contract(nostrHexSk, request));
  
  export const acceptTransfer = async (
    nostrHexSk: string,
    request: AcceptRequest
  ): Promise<AcceptResponse> =>
    JSON.parse(await BMC.accept_transfer(nostrHexSk, request));
  
  export const listContracts = async (nostrHexSk: string): Promise<Contract[]> =>
    JSON.parse(await BMC.list_contracts(nostrHexSk));
  
  export const listInterfaces = async (
    nostrHexSk: string
  ): Promise<InterfacesResponse> =>
    JSON.parse(await BMC.list_interfaces(nostrHexSk));
  
  export const listSchemas = async (
    nostrHexSk: string
  ): Promise<SchemasResponse> => JSON.parse(await BMC.list_schemas(nostrHexSk));
  
  export const watcher = async (
    nostrHexSk: string,
    request: WatcherRequest
  ): Promise<WatcherResponse> =>
    JSON.parse(await BMC.watcher(nostrHexSk, request));
  
  export const watcherDetails = async (
    nostrHexSk: string,
    name: string
  ): Promise<WatcherDetailResponse> =>
    JSON.parse(await BMC.watcher_details(nostrHexSk, name));
  
  export const watcherNextAddress = async (
    nostrHexSk: string,
    name: string
  ): Promise<NextAddressResponse> =>
    JSON.parse(await BMC.watcher_next_address(nostrHexSk, name));
  
  export const watcherWatcherNextUtxo = async (
    nostrHexSk: string,
    name: string
  ): Promise<NextUtxoResponse> =>
    JSON.parse(await BMC.watcher_next_utxo(nostrHexSk, name));
  
  // Core type interfaces based on structs defined within the bitmask-core Rust crate:
  // https://github.com/diba-io/bitmask-core/blob/development/src/structs.rs
  
  export interface ContractFormats {
    /// The contract state (encoded in bech32m)
    legacy: string;
    /// The contract state (encoded in strict)
    strict: string;
    /// The contract state (compiled in armored mode)
    armored: string;
  }
  
  export interface IssueRequest {
    /// The ticker of the asset
    ticker: string;
    /// Name of the asset
    name: string;
    /// Description of the asset
    description: string;
    /// Amount of the asset
    supply: bigint;
    /// Precision of the asset
    precision: number;
    /// Seal of the initial owner
    seal: string;
    /// The name of the iface (ex: RGB20)
    iface: string;
  }
  
  export interface IssueResponse {
    /// The contract id
    contractId: string;
    /// The contract impl id
    iimplId: string;
    /// The contract interface
    iface: string;
    /// The Issue Utxo
    issueUtxo: string;
    /// The ticker of the asset
    ticker: string;
    /// Name of the asset
    name: string;
    /// Description of the asset
    description: string;
    /// Amount of the asset
    supply: bigint;
    /// Precision of the asset
    precision: number;
    /// The contract state (multiple formats)
    contract: ContractFormats;
  }
  
  export interface ImportRequest {
    /// The type data
    /// enum ImportType {
    ///     "Contract"
    /// }
    import: string;
    /// The payload data (in hexadecimal)
    data: string;
  }
  
  export interface ImportResponse {
    /// The contract id
    contractId: string;
    /// The contract impl id
    iimplId: string;
    /// The contract interface
    iface: string;
    /// The ticker of the asset
    ticker: string;
    /// Name of the asset
    name: string;
    /// Description of the asset
    description: string;
    /// Amount of the asset
    supply: bigint;
    /// Precision of the asset
    precision: string;
    /// The user contract balance
    balance: bigint;
    /// The contract allocations
    allocations: AllocationDetail[];
    /// The contract state (multiple formats)
    contract: ContractFormats;
    /// TODO: Genesis
    genesis: string;
  }
  
  export interface InvoiceRequest {
    /// The contract id
    contractId: string;
    /// The contract interface
    iface: string;
    /// Amount of the asset
    amount: bigint;
    /// UTXO or Blinded UTXO
    seal: string;
  }
  
  export interface InvoiceResponse {
    /// Invoice encoded in Baid58
    invoice: string;
  }
  
  export interface PsbtRequest {
    /// Descriptor XPub
    descriptorPub: string;
    /// Asset UTXO
    assetUtxo: string;
    /// Asset UTXO Terminator (ex. /0/0)
    assetUtxoTerminal: string;
    /// Asset Change Index UTXO (default: 1)
    changeIndex?: number;
    /// Bitcoin Change Addresses (format: {address}:{amount})
    bitcoinChanges: string[];
    /// Bitcoin Fee
    fee: bigint;
    /// TapTweak used to spend outputs based in tapret commitments
    inputTweak?: string;
  }
  
  export interface PsbtResponse {
    /// PSBT encoded in Base64
    psbt: string;
  }
  
  export interface SignPsbtRequest {
    /// PSBT encoded in Base64
    psbt: string;
    /// mnemonic
    mnemonic: string;
    /// password
    seedPassword: string;
  }
  
  export interface SignPsbtResponse {
    /// PSBT is signed?
    sign: boolean;
  }
  
  export interface RgbTransferRequest {
    /// RGB Invoice
    rgbInvoice: string;
    /// PSBT File Information
    psbt: string;
  }
  
  export interface RgbTransferResponse {
    /// Consignment ID
    consigId: string;
    /// Consignment encoded (in hexadecimal)
    consig: string;
    /// PSBT File Information with tapret (in hexadecimal)
    psbt: string;
    /// Tapret Commitment (used to spend output)
    commit: string;
  }
  
  export interface AcceptRequest {
    /// Consignment encoded in hexadecimal
    consignment: string;
    /// Force Consignment accept
    force: boolean;
  }
  
  export interface AcceptResponse {
    /// Transfer ID
    transferId: string;
    /// Contract ID
    contractId: string;
    /// Transfer accept status
    valid: boolean;
  }
  
  export interface ContractsResponse {
    /// List of avaliable contracts
    contracts: ImportResponse[];
  }
  
  export interface InterfacesResponse {
    /// List of avaliable interfaces and implementations
    interfaces: InterfaceDetail[];
  }
  
  export interface InterfaceDetail {
    /// Interface Name
    name: string;
    /// Interface ID
    iface: string;
    /// Interface ID
    iimpl: string;
  }
  
  export interface SchemasResponse {
    /// List of avaliable schemas
    schemas: SchemaDetail[];
  }
  
  export interface SchemaDetail {
    /// Schema ID
    schema: string;
    /// Avaliable Interfaces
    ifaces: string[];
  }
  
  export interface WatcherRequest {
    /// The watcher name
    name: string;
    /// The xpub will be watch
    xpub: string;
  }
  
  export interface WatcherResponse {
    /// The watcher name
    name: string;
  }
  
  export interface NextUtxoResponse {
    utxo: string;
  }
  
  export interface NextAddressResponse {
    address: string;
    network: string;
  }
  
  export interface WatcherDetailResponse {
    /// Allocations
    contracts: WatcherDetail[];
  }
  
  export interface WatcherDetail {
    /// Contract ID
    contractId: string;
    /// Allocations
    allocations: AllocationDetail[];
  }
  
  export interface AllocationDetail {
    /// Anchored UTXO
    utxo: string;
    /// Asset Value
    value: bigint;
    /// Derivation Path
    derivation: string;
    /// Derivation Path
    isMine: boolean;
  }
  
  export interface DeclareRequest {
    disclosure: string;
    // disclosure: Declare; // TODO: Revisit after 0.6 release
    changeTransfers: ChangeTansfer[];
    transfers: FinalizeTransfer[];
  }
  
  export interface FinalizeTransfer {
    previousUtxo: string;
    consignment: string;
    asset: string;
    beneficiaries: BlindedOrNotOutpoint[];
  }
  
  export interface ChangeTansfer {
    previousUtxo: string;
    asset: string;
    change: BlindedOrNotOutpoint;
  }
  
  export interface BlindedOrNotOutpoint {
    outpoint: string;
    balance: number;
  }
  
  export interface Contract {
    id: string;
    ticker: string;
    name: string;
    description: string;
    allocations: AllocationDetail[];
    balance: bigint;
    genesis: string;
  }

// Core type interfaces based on structs defined within the bitmask-core Rust crate:
// https://github.com/diba-io/bitmask-core/blob/development/src/structs.rs

export interface LnCredentials {
  login: string;
  password: string;
  refreshToken: string;
  accessToken: string;
}

// Lndhubx Create wallet endpoint response
export interface CreateWalletResponse {
  username?: string;
  error?: string;
}

// lndhubx Auth response
export type AuthResponse = ErrorResponse | AuthResponseOk;

export interface AuthResponseOk {
  refresh: string;
  token: string;
}

export interface ErrorResponse {
  error: string;
}

// User Account
export interface Account {
  account_id: string;
  balance: string;
  currency: string;
}

// Amount and currency
export interface Money {
  value: string;
  currency: string;
}

// Lndhubx Add invoice endpoint response
export interface AddInvoiceResponse {
  req_id: string;
  uid: number;
  payment_request: string;
  meta: string;
  metadata: string;
  amount: Money;
  rate: string;
  currency: string;
  target_account_currency: string;
  account_id: string;
  error: string;
  fees: string;
}

// Lndhubx lightning transaction
export interface LnTransaction {
  txid: string;
  fee_txid: string;
  outbound_txid: string;
  inbound_txid: string;
  created_at: bigint;
  date: number;
  outbound_amount: string;
  inbound_amount: string;
  outbound_account_id: string;
  inbound_account_id: string;
  outbound_uid: number;
  inbound_uid: number;
  outbound_currency: string;
  inbound_currency: string;
  exchange_rate: string;
  tx_type: string;
  fees: string;
  reference: string;
}

export interface LnWalletData {
  balance: Account;
  transactions: LnTransaction[];
}

// Lndhubx Pay invoice response
export interface PayInvoiceResponse {
  payment_hash: string;
  uid: number;
  success: boolean;
  currency: string;
  payment_request: string;
  amount: Money;
  fees: Money;
  error: string;
  payment_preimage: string;
  destination: string;
  description: string;
}

// Lndhubx Check payment response
export interface CheckPaymentResponse {
  paid: boolean;
}

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

export const getNetwork = async (): Promise<string> =>
  JSON.parse(await BMC.get_network());

export const switchNetwork = async (network: Network): Promise<void> =>
  BMC.switch_network(network.toString());

export const getEnv = async (key: string): Promise<string> =>
  JSON.parse(await BMC.get_env(key));

export const setEnv = async (key: string, value: string): Promise<void> =>
  BMC.set_env(key, value);

export enum Network {
  bitcoin = "bitcoin",
  testnet = "testnet",
  signet = "signet",
  regtest = "regtest",
}

const network = (process.env.BITCOIN_NETWORK || "") as Network;
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
