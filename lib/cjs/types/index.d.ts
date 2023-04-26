import { GetEncryptedWallet, GetMnemonicSeed, SaveMnemonicSeed, GetWalletData, ImportAsset, GetBlindedUtxo, SendSats, FundVault, TransfersSerializeResponse, AcceptTransaction, CreateAsset, GetAssetsVault, CreateWalletResponse, AuthResponse, Account, AddInvoiceResponse, LnTransaction, PayInvoiceResponse, AssetTransfer, CheckPaymentResponse, SignPsbt } from "./types.js";
export declare const getEncryptedWallet: (password: string, encrypted_descriptors: string) => Promise<GetEncryptedWallet>;
export declare const getMnemonicSeed: (encryption_password: string, seed_password: string) => Promise<GetMnemonicSeed>;
export declare const saveMnemonicSeed: (mnemonic: string, encryption_password: string, seed_password: string) => Promise<SaveMnemonicSeed>;
export declare const getWalletData: (descriptor: string, change_descriptor?: string) => Promise<GetWalletData>;
export declare const importAsset: (asset: string, utxo: string) => Promise<ImportAsset>;
export declare const getBlindedUtxo: (utxo_string: string) => Promise<GetBlindedUtxo>;
export declare const sendSats: (descriptor: string, change_descriptor: string, address: string, amount: bigint, fee_rate: number) => Promise<SendSats>;
export declare const fundVault: (descriptor: string, change_descriptor: string, address: string, uda_address: string, asset_amount: bigint, uda_amount: bigint, fee_rate: number) => Promise<FundVault>;
export declare const getAssetsVault: (rgb_assets_descriptor_xpub: string, rgb_udas_descriptor_xpub: string) => Promise<GetAssetsVault>;
export declare const createAsset: (ticker: string, name: string, precision: number, supply: bigint, utxo: string) => Promise<CreateAsset>;
export declare const transferAssets: (descriptor_xpub: string, transfers: AssetTransfer[]) => Promise<TransfersSerializeResponse>;
export declare const signPsbt: (rgb_descriptor_xprv: string, psbt: string) => Promise<SignPsbt>;
export declare const acceptTransfer: (consignment: string, blinding: string, outpoint: string, blinded: string) => Promise<AcceptTransaction>;
export declare const getNetwork: () => Promise<string>;
export declare const getEndpoint: (path: string) => Promise<string>;
export declare const switchNetwork: (network: Network) => Promise<void>;
export declare const switchHost: (host: string) => Promise<void>;
export declare const lnCreateWallet: (username: string, password: string) => Promise<CreateWalletResponse>;
export declare const lnAuth: (username: string, password: string) => Promise<AuthResponse>;
export declare const lnCreateInvoice: (description: string, amount: number, token: string) => Promise<AddInvoiceResponse>;
export declare const lnGetBalance: (token: string) => Promise<Account>;
export declare const lnGetTxs: (token: string) => Promise<LnTransaction[]>;
export declare const lnPayInvoice: (payment_request: string, token: string) => Promise<PayInvoiceResponse>;
export declare const lnCheckPayment: (payment_hash: string) => Promise<CheckPaymentResponse>;
export declare enum Network {
    bitcoin = "bitcoin",
    testnet = "testnet",
    signet = "signet",
    regtest = "regtest"
}
//# sourceMappingURL=index.d.ts.map