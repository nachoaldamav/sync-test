import { dir, target } from "./dir.js";
import os from "os";
import { linkDirAsync, linkDirSync } from "./functions/link.js";

const { platform } = os;

async function main() {
  console.log(`Running on ${platform()}...`);
  // If Mac or Windows, run the async tests
  if (platform() === "darwin" || platform() === "win32") {
    console.log("Cloning directory asyncronously...");
    await linkDirAsync(dir, target);
  } else {
    console.log("Linking directory syncronously...");
    linkDirSync(dir, target);
  }
}

main();
