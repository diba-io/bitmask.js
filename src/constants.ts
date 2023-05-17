// Methods meant to work with bitmask-core constants defined within the web::constants module from bitmask-core:
// https://github.com/diba-io/bitmask-core/blob/development/src/web.rs

import * as BMC from "../pkg";

export const getNetwork = async (): Promise<string> =>
  JSON.parse(await BMC.get_network());

export const switchNetwork = async (network: string): Promise<void> =>
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
