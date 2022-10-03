import {sync} from "find-up";
import { readJSON, readJsonSync } from "fs-extra";
import { dirname, join } from "path";


export function getPackageJsonPath(): string {
  return findClosestPackageJson(__filename)!;
}

export function getPackageRoot(): string {
  const packageJsonPath = getPackageJsonPath();

  return dirname(packageJsonPath);
}

export interface PackageJson {
  name: string;
  version: string;
  engines: {
    node: string;
  };
}

export function findClosestPackageJson(file: string): string |null{
  return sync("package.json", { cwd: dirname(file)});
}

export async function getPackageJson(): Promise<PackageJson> {
  const root = getPackageRoot();
  return readJSON(join(root, "package.json"));
}

export function getHardhatVersion(): string | null {
  const packageJsonPath = findClosestPackageJson(__filename);

  if (packageJsonPath === null) {
    return null;
  }

  try {
    const packageJson = readJsonSync(packageJsonPath as string);
    return packageJson.version;
  } catch {
    return null;
  }
}