import { readdirSync, lstatSync, mkdirSync, copyFileSync, constants } from "fs";
import { dirname, join } from "path";
import { dir, target } from "./dir.js";

export function linkFilesInDir() {
  linkDir(dir, target);
}

export function linkDir(src, dest) {
  const files = readdirSync(src);
  for (const file of files) {
    const srcPath = join(src, file);
    const destPath = join(dest, file);
    if (lstatSync(srcPath).isDirectory()) {
      linkDir(srcPath, destPath);
    } else {
      mkdirSync(dirname(destPath), { recursive: true });
      copyFileSync(srcPath, destPath, constants.COPYFILE_EXCL);
    }
  }
}

linkFilesInDir();
