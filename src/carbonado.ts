// Methods meant to work with Carbonado storage defined within the web::carbonado module from bitmask-core:
// https://github.com/diba-io/bitmask-core/blob/development/src/web.rs

import * as BMC from "./pkg";

export const store = async (
  nostrHexSk: string,
  data: Uint8Array,
  name?: string
): Promise<void> => BMC.store(nostrHexSk, name || "", data);

export const retrieve = (nostrHexSk: string, lookup: string): Promise<string> =>
  BMC.retrieve(nostrHexSk, lookup);
