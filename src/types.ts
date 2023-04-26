// Response types from Bitmask Core
export interface BlindingUtxo {
    conceal: string;
    blinding: string;
    utxo: string;
  }
  export interface Vault {
    btcDescriptorXprv: string;
    btcDescriptorXpub: string;
    btcChangeDescriptorXprv: string;
    btcChangeDescriptorXpub: string;
    rgbAssetsDescriptorXprv: string;
    rgbAssetsDescriptorXpub: string;
    rgbUdasDescriptorXprv: string;
    rgbUdasDescriptorXpub: string;
    xprvkh: string;
    xpubkh: string;
    mnemonic: string;
  }
  
  export interface FundVaultDetails {
    assets_output?: string;
    assets_change_output?: string;
    udas_output?: string;
    udas_change_output?: string;
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
  export interface Amount {
    value: bigint;
    blinding: string;
  }
  
  export interface Allocation {
    index: number;
    node_id: string;
    outpoint: string;
    amount: Amount;
    seal_vout: number;
    seal_txid: string;
  }
  
  export interface Asset {
    id: string;
    ticker: string;
    name: string;
    description: string;
    allocations: Allocation[];
    balance: bigint;
    genesis: string;
  }
  
  export interface Transaction {
    amount: number | string;
    asset?: string;
    assetType: string;
    fee: number;
    message?: string;
    note?: string;
  }
  
  export interface ConfirmationTime {
    height: number;
    timestamp: number;
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
  
  export interface MnemonicSeedData {
    mnemonic: string;
    serializedEncryptedMessage: string;
  }
  
  export interface BlindedOrNotOutpoint {
    outpoint: string;
    balance: number;
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
  
  export interface DeclareRequest {
    disclosure: string;
    // disclosure: Declare; // TODO: Revisit after RGB 0.10 release
    changeTransfers: ChangeTansfer[];
    transfers: FinalizeTransfer[];
  }
  export interface TransfersSerializeResponse {
    psbt: string;
    declare: DeclareRequest;
  }
  
  export interface AssetUtxo {
    outpoint: string;
    terminal_derivation: string;
    commitment: string;
  }
  
  export interface AssetTransfer {
    asset_contract: string;
    asset_utxo: AssetUtxo;
    asset_amount: bigint;
    change_utxo: string;
    beneficiaries: string[];
  }
  
  export type GetEncryptedWallet = Vault;
  export type GetMnemonicSeed = MnemonicSeedData;
  export type SaveMnemonicSeed = MnemonicSeedData;
  export type GetWalletData = WalletData;
  export type ListAssets = Asset[];
  export type ImportAsset = Asset;
  export type GetBlindedUtxo = BlindingUtxo;
  export type SendSats = TransactionData;
  export type SignPsbt = TransactionData;
  export type FundVault = FundVaultDetails;
  export type GetAssetsVault = FundVaultDetails;
  export interface CreateAsset {
    genesis: string;
    id: string;
    asset_id: string;
    schema_id: string;
  }
  export type TransferAssets = TransfersSerializeResponse;
  export interface ValidateTransfer {
    txid: string;
    height: number;
  }
  export interface AcceptTransaction {
    accept: string;
    id: string;
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
  