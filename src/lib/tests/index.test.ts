import { lnCreateWallet } from "../index";

it("Runs without crashing", async () => {
  const wallet = await lnCreateWallet("test", "password");
  console.log(wallet, "LN wallet created");
});
