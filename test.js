import { dir, target } from "./dir.js";
import { linkDirAsync, linkDirSync } from "./functions/link.js";
import { performance } from "perf_hooks";
import { rm } from "fs/promises";
import { existsSync, mkdirSync } from "fs";

async function main() {
  await rm(target, { recursive: true, force: true });

  const start = performance.now();
  await linkDirAsync(dir, target);
  const end = performance.now();
  console.log(`Asyncronous time: ${parseTime(end - start)}`);

  await rm(target, { recursive: true, force: true });

  if (existsSync(target)) {
    throw new Error("Target directory still exists");
  }

  mkdirSync(target, { recursive: true });

  const start2 = performance.now();
  linkDirSync(dir, target);
  const end2 = performance.now();
  console.log(`Syncronous time: ${parseTime(end2 - start2)}`);
}

main();

function parseTime(time) {
  const seconds = Math.floor(time / 1000);
  const milliseconds = time % 1000;
  return `${seconds}s ${milliseconds.toFixed(2)}ms`;
}
