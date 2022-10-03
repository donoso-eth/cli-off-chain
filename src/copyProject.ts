import chalk = require("chalk");
import { copy, ensureDir, pathExists, pathExistsSync, readdirSync, readFile, remove, writeFile } from "fs-extra";
import { join, relative } from "path";
import { Action, SampleResolverTypeCreationAction } from "./models";
import { getPackageRoot } from "./utils/packageInfo";

 export async function copySampleProject(
    projectRoot: string,
    projectType: SampleResolverTypeCreationAction
  ) {
    const packageRoot = getPackageRoot();
  
    const resolverConfiguration =
      projectType === Action.CREATE_EMPTY_RESOLVER_ACTION
        ? "empty"
        : "http";
  
    await ensureDir(projectRoot);
  
    const sampleProjectPath = join(
      packageRoot,
      "files",
      resolverConfiguration
    );
  
    const sampleProjectRootFiles = readdirSync(sampleProjectPath);
    const existingFiles = sampleProjectRootFiles
      .map((f) => join(projectRoot, f))
      .filter((f) => pathExistsSync(f))
      .map((f) => relative(process.cwd(), f));
  
    if (existingFiles.length > 0) {
      const errorMsg = `We couldn't initialize the sample project because files already exist

  Please delete or move them and try again.`;
      console.log(chalk.red(errorMsg));
      process.exit(1);
    }
  
    await copy(
      join(packageRoot, "files", resolverConfiguration),
      projectRoot
    );
  
   // await remove(join(projectRoot, "LICENSE.md"));
  }
  
