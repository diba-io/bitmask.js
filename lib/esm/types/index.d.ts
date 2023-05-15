export declare const hashPassword: (password: string) => string;
export declare const getEncryptedWallet: (password: string, encryptedDescriptors: string) => Promise<Vault>;
export declare const upgradeWallet: (hash: string, encryptedDescriptors: string, seedPassword?: string) => Promise<string>;
export declare const newMnemonicSeed: (hash: string, seedPassword: string) => Promise<MnemonicSeedData>;
export declare const saveMnemonicSeed: (mnemonic: string, hash: string, seedPassword: string) => Promise<MnemonicSeedData>;
export declare const getWalletData: (descriptor: string, changeDescriptor?: string) => Promise<WalletData>;
export declare const sendSats: (descriptor: string, changeDescriptor: string, address: string, amount: bigint, feeRate: number) => Promise<TransactionData>;
export declare const fundVault: (descriptor: string, changeDescriptor: string, address: string, udaAddress: string, assetAmount: bigint, udaAmount: bigint, feeRate: number) => Promise<FundVaultDetails>;
export declare const getAssetsVault: (rgbAssetsDescriptorXpub: string, rgbUdasDescriptorXpub: string) => Promise<FundVaultDetails>;
export declare const store: (nostrHexSk: string, data: Uint8Array, name?: string) => Promise<void>;
export declare const retrieve: (nostrHexSk: string, lookup: string) => Promise<string>;
export declare const createWallet: (username: string, password: string) => Promise<CreateWalletResponse>;
export declare const auth: (username: string, password: string) => Promise<AuthResponse>;
export declare const createInvoice: (description: string, amount: number, token: string) => Promise<AddInvoiceResponse>;
export declare const getBalance: (token: string) => Promise<Account>;
export declare const getTxs: (token: string) => Promise<LnTransaction[]>;
export declare const payInvoice: (paymentRequest: string, token: string) => Promise<PayInvoiceResponse>;
export declare const checkPayment: (paymentHash: string) => Promise<CheckPaymentResponse>;
export declare const issueContract: (nostrHexSk: string, request: IssueRequest) => Promise<IssueResponse>;
export declare const lnCreateInvoice: (nostrHexSk: string, request: InvoiceRequest) => Promise<InvoiceResponse>;
export declare const createPsbt: (nostrHexSk: string, request: PsbtRequest) => Promise<PsbtResponse>;
export declare const psbtSignFile: (nostrHexSk: string, request: SignPsbtRequest) => Promise<SignPsbtResponse>;
export declare const transferAsset: (nostrHexSk: string, request: RgbTransferRequest) => Promise<RgbTransferResponse>;
export declare const importContract: (nostrHexSk: string, request: ImportRequest) => Promise<ImportResponse>;
export declare const acceptTransfer: (nostrHexSk: string, request: AcceptRequest) => Promise<AcceptResponse>;
export declare const listContracts: (nostrHexSk: string) => Promise<Contract[]>;
export declare const listInterfaces: (nostrHexSk: string) => Promise<InterfacesResponse>;
export declare const listSchemas: (nostrHexSk: string) => Promise<SchemasResponse>;
export declare const watcher: (nostrHexSk: string, request: WatcherRequest) => Promise<WatcherResponse>;
export declare const watcherDetails: (nostrHexSk: string, name: string) => Promise<WatcherDetailResponse>;
export declare const watcherNextAddress: (nostrHexSk: string, name: string) => Promise<NextAddressResponse>;
export declare const watcherWatcherNextUtxo: (nostrHexSk: string, name: string) => Promise<NextUtxoResponse>;
export interface ContractFormats {
    legacy: string;
    strict: string;
    armored: string;
}
export interface IssueRequest {
    ticker: string;
    name: string;
    description: string;
    supply: bigint;
    precision: number;
    seal: string;
    iface: string;
}
export interface IssueResponse {
    contractId: string;
    iimplId: string;
    iface: string;
    issueUtxo: string;
    ticker: string;
    name: string;
    description: string;
    supply: bigint;
    precision: number;
    contract: ContractFormats;
}
export interface ImportRequest {
    import: string;
    data: string;
}
export interface ImportResponse {
    contractId: string;
    iimplId: string;
    iface: string;
    ticker: string;
    name: string;
    description: string;
    supply: bigint;
    precision: string;
    balance: bigint;
    allocations: AllocationDetail[];
    contract: ContractFormats;
    genesis: string;
}
export interface InvoiceRequest {
    contractId: string;
    iface: string;
    amount: bigint;
    seal: string;
}
export interface InvoiceResponse {
    invoice: string;
}
export interface PsbtRequest {
    descriptorPub: string;
    assetUtxo: string;
    assetUtxoTerminal: string;
    changeIndex?: number;
    bitcoinChanges: string[];
    fee: bigint;
    inputTweak?: string;
}
export interface PsbtResponse {
    psbt: string;
}
export interface SignPsbtRequest {
    psbt: string;
    mnemonic: string;
    seedPassword: string;
}
export interface SignPsbtResponse {
    sign: boolean;
}
export interface RgbTransferRequest {
    rgbInvoice: string;
    psbt: string;
}
export interface RgbTransferResponse {
    consigId: string;
    consig: string;
    psbt: string;
    commit: string;
}
export interface AcceptRequest {
    consignment: string;
    force: boolean;
}
export interface AcceptResponse {
    transferId: string;
    contractId: string;
    valid: boolean;
}
export interface ContractsResponse {
    contracts: ImportResponse[];
}
export interface InterfacesResponse {
    interfaces: InterfaceDetail[];
}
export interface InterfaceDetail {
    name: string;
    iface: string;
    iimpl: string;
}
export interface SchemasResponse {
    schemas: SchemaDetail[];
}
export interface SchemaDetail {
    schema: string;
    ifaces: string[];
}
export interface WatcherRequest {
    name: string;
    xpub: string;
}
export interface WatcherResponse {
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
    contracts: WatcherDetail[];
}
export interface WatcherDetail {
    contractId: string;
    allocations: AllocationDetail[];
}
export interface AllocationDetail {
    utxo: string;
    value: bigint;
    derivation: string;
    isMine: boolean;
}
export interface DeclareRequest {
    disclosure: string;
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
export interface LnCredentials {
    login: string;
    password: string;
    refreshToken: string;
    accessToken: string;
}
export interface CreateWalletResponse {
    username?: string;
    error?: string;
}
export type AuthResponse = ErrorResponse | AuthResponseOk;
export interface AuthResponseOk {
    refresh: string;
    token: string;
}
export interface ErrorResponse {
    error: string;
}
export interface Account {
    account_id: string;
    balance: string;
    currency: string;
}
export interface Money {
    value: string;
    currency: string;
}
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
export declare const getNetwork: () => Promise<string>;
export declare const switchNetwork: (network: Network) => Promise<void>;
export declare const getEnv: (key: string) => Promise<string>;
export declare const setEnv: (key: string, value: string) => Promise<void>;
export declare enum Network {
    bitcoin = "bitcoin",
    testnet = "testnet",
    signet = "signet",
    regtest = "regtest"
}
//# sourceMappingURL=index.d.ts.map