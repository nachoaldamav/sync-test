import { constants, copyFile, lstat, mkdir, readdir } from "fs/promises";
import { dirname, join } from "path";
import { dir, target } from "./dir.js";

export async function linkFilesInDir() {
  await linkDir(dir, target);
}

export async function linkDir(src, dest) {
  const files = await readdir(src);

  return Promise.all(
    files.map(async (file) => {
      const srcPath = join(src, file);
      const destPath = join(dest, file);
      const isDir = (await lstat(srcPath)).isDirectory();
      if (isDir) {
        return linkDir(srcPath, destPath);
      } else {
        await mkdir(dirname(destPath), { recursive: true });
        return copyFile(srcPath, destPath, constants.COPYFILE_EXCL);
      }
    })
  );
}

linkFilesInDir();
