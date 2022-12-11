import { constants } from "fs";
import { link, lstat, mkdir, readdir } from "fs/promises";
import { lstatSync, mkdirSync, readdirSync, linkSync, existsSync } from "fs";
import path, { join, dirname } from "path";

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
        return link(srcPath, destPath).catch((err) => {
          if (err.code === "EEXIST") {
            return;
          }
          throw err;
        });
      }
    })
  );
}

export function linkDirSync(src, dest) {
  const files = readdirSync(src);

  files.forEach((file) => {
    const srcPath = join(src, file);
    const destPath = join(dest, file);
    const isDir = lstatSync(srcPath).isDirectory();
    if (isDir) {
      return linkDirSync(srcPath, destPath);
    } else {
      if (!existsSync(dirname(destPath))) {
        mkdirSync(dirname(destPath), { recursive: true });
      }
      try {
        return linkSync(srcPath, destPath);
      } catch (err) {
        if (err.code === "EEXIST") {
          return;
        }
        throw err;
      }
    }
  });
}
