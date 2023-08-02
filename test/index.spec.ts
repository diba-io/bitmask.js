import "mocha";
import { assert } from "chai";

import { lightning } from "../src/index";
import npmPackage from "../src/index";

describe("NPM Package", () => {
  it("should be an object", () => {
    assert.isObject(npmPackage);
  });

  it("should have a lnCreateWallet property", () => {
    assert.property(npmPackage, "lnCreateWallet");
  });
});

describe("lnCreateWallet Function", () => {
  it("should be a function", () => {
    assert.isFunction(lightning.createWallet);
  });

  it("should return the lnCreateWallet username", async () => {
    const actual = await lightning.createWallet("test", "test");
    assert.equal(actual, { username: "test" });
  });
});
