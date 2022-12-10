import { dir, target } from "./dir.js";
import os from "os";
import { cloneDirAsync } from "./functions/clone.js";
import { linkDirAsync, linkDirSync } from "./functions/link.js";

const { platform } = os;

async function main() {
  // If Mac or Windows, run the async tests
  if (platform() === "darwin") {
    console.log("Cloning directory asyncronously...");
    await cloneDirAsync(dir, target);
  } else if (platform() === "win32") {
    console.log("Linking directory asyncronously...");
    await linkDirAsync(dir, target);
  } else {
    console.log("Linking directory syncronously...");
    linkDirSync(dir, target);
  }
}

main();
