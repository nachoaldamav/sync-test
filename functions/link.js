import { constants } from "fs";
import { link, lstat, mkdir, readdir } from "fs/promises";
import { lstatSync, mkdirSync, readdirSync, linkSync } from "fs";
import { join, dirname } from "path";

export async function linkDirAsync(src, dest) {
  const files = await readdir(src);

  return Promise.all(
    files.map(async (file) => {
      const srcPath = join(src, file);
      const destPath = join(dest, file);
      const isDir = (await lstat(srcPath)).isDirectory();
      if (isDir) {
        return linkDirAsync(srcPath, destPath);
      } else {
        await mkdir(dirname(destPath), { recursive: true });
        return link(srcPath, destPath, constants.COPYFILE_EXCL);
      }
    })
  );
}

export function linkDirSync(src, dest) {
  const files = readdirSync(src);
  for (const file of files) {
    const srcPath = join(src, file);
    const destPath = join(dest, file);
    if (lstatSync(srcPath).isDirectory()) {
      linkDirSync(srcPath, destPath);
    } else {
      mkdirSync(dirname(destPath), { recursive: true });
      return linkSync(srcPath, dest, constants.COPYFILE_EXCL);
    }
  }
}
