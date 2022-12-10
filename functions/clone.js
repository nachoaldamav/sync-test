import { constants } from "fs";
import { copyFile, lstat, mkdir, readdir } from "fs/promises";
import { copyFileSync, lstatSync, mkdirSync, readdirSync } from "fs";
import { join, dirname } from "path";

export async function cloneDirAsync(src, dest) {
  const files = await readdir(src);

  return Promise.all(
    files.map(async (file) => {
      const srcPath = join(src, file);
      const destPath = join(dest, file);
      const isDir = (await lstat(srcPath)).isDirectory();
      if (isDir) {
        return cloneDirAsync(srcPath, destPath);
      } else {
        await mkdir(dirname(destPath), { recursive: true });
        return copyFile(srcPath, destPath, constants.COPYFILE_EXCL);
      }
    })
  );
}

export function cloneDirSync(src, dest) {
  const files = readdirSync(src);
  for (const file of files) {
    const srcPath = join(src, file);
    const destPath = join(dest, file);
    if (lstatSync(srcPath).isDirectory()) {
      cloneDirSync(srcPath, destPath);
    } else {
      mkdirSync(dirname(destPath), { recursive: true });
      copyFileSync(srcPath, dest, constants.COPYFILE_EXCL);
    }
  }
}
