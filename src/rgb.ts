// Methods meant to work with RGB contracts defined within the web::rgb module from bitmask-core:
// https://github.com/diba-io/bitmask-core/blob/development/src/web.rs

import * as BMC from "bitmask-core";

export const hashPassword = async (password: string): Promise<string> =>
  BMC.hash_password(password);

export const issueContract = async (
  nostrHexSk: string,
  request: IssueRequest
): Promise<IssueResponse> =>
  JSON.parse(await BMC.issue_contract(nostrHexSk, request));

export const createInvoice = async (
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

export interface GenesisFormats {
  /// The genesis state (encoded in bech32m)
  legacy: string;
  /// The genesis state (encoded in strict)
  strict: string;
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

  genesis: GenesisFormats;
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
  
  genesis: GenesisFormats;
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
