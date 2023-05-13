// Methods meant to work with Carbonado storage defined within the web::carbonado module from bitmask-core:
// https://github.com/diba-io/bitmask-core/blob/development/src/web.rs

import * as BMC from "bitmask-core";

export const decodeBase64 = (base64: string): Uint8Array => {
  const binaryString = atob(base64);
  const bytes = new Uint8Array(binaryString.length);
  for (let i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
};

export const storeBase64 = async (
  nostrHexSk: string,
  data: string,
  name?: string
): Promise<void> => BMC.store(nostrHexSk, name || "", decodeBase64(data));

export const decodeHex = (hex: string) =>
  new Uint8Array(hex.match(/../g)?.map((h) => parseInt(h, 16)) || []);

export const storeHex = async (
  nostrHexSk: string,
  data: string,
  name?: string
): Promise<void> => BMC.store(nostrHexSk, name || "", decodeHex(data));

// TODO: store_string in BMC
// export const storeString = async (
//   nostrHexSk: string,
//   data: string,
//   name?: string
// ): Promise<void> => BMC.store(nostrHexSk, name || "", data);

export const storeBytes = async (
  nostrHexSk: string,
  data: Uint8Array,
  name?: string
): Promise<void> => BMC.store(nostrHexSk, name || "", data);

export const retrieveBase64 = (
  nostrHexSk: string,
  lookup: string
): Promise<Uint8Array> => BMC.retrieve(nostrHexSk, lookup);

// TODO: https://stackoverflow.com/a/75300807/351531
const nibbleIntegerToHexCharCode = new TextEncoder().encode("0123456789abcdef");

export const encodeHex = (bytes: Uint8Array) => {
  const output = new Uint8Array(bytes.length * 2);

  for (let i = 0; i < bytes.length; i++) {
    const v = bytes[i];
    output[i * 2 + 0] = nibbleIntegerToHexCharCode[(v & 0xf0) >> 4];
    output[i * 2 + 1] = nibbleIntegerToHexCharCode[v & 0x0f];
  }

  return new TextDecoder().decode(output);
};

// TODO: retrieve_hex in BMC
// export const retrieveHex = (
//   nostrHexSk: string,
//   lookup: string
// ): Promise<string> => encodeHex(await BMC.retrieve(nostrHexSk, lookup));

export const retrieveBytes = (
  nostrHexSk: string,
  lookup: string
): Promise<string> => BMC.retrieve(nostrHexSk, lookup);
